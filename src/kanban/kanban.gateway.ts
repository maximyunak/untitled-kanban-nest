import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Column, Task } from 'generated/prisma/client';
import { Server, Socket } from 'socket.io';
import { WsProtected } from 'src/auth/decorators/ws-protected.decorator';
import type { AuthenticatedSocket } from './types/AuthenticatedSocket.type';
import { WsBoardProtected } from './board/decorators/ws-board-protected.decorator';

@WebSocketGateway()
export class KanbanGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;

  handleConnection(client: Socket) {
    console.log('connect', client.id);
  }

  handleDisconnect(client: any) {
    console.log('disconnect', client.id);
  }

  // подключение к доске

  @WsBoardProtected()
  @WsProtected()
  @SubscribeMessage('join')
  async handleJoin(
    client: AuthenticatedSocket,
    payload: {
      boardId: number;
    },
  ) {
    const room = `board-${payload.boardId}`;

    client.join(room);

    const sockets = await this.server.in(room).fetchSockets();

    return {
      room,
      users: sockets.length,
    };
  }

  //* колонки *//

  /**
   * Отправляет событие "column:create" всем участникам доски.
   * @param payload - объект с колонкой
   * @param payload.column - колонка, которая была создана
   */
  handleCreateColumn(payload: { column: Column }) {
    this.server
      .to(`board-${payload.column.boardId}`)
      .emit('column:create', payload.column);
  }

  /**
   * Отправляет событие "column:delete" всем участникам доски.
   * @param payload - объект с колонкой
   * @param payload.column - колонка, которая была удалена
   */
  handleDeleteColumn(payload: { column: Column }) {
    this.server
      .to(`board-${payload.column.boardId}`)
      .emit('column:delete', payload.column);
  }

  /**
   * Отправляет событие "column:update" всем участникам доски.
   * @param payload - объект с колонкой
   * @param payload.column - колонка, которая была обновлена
   */
  handleUpdateColumn(payload: { column: Column }) {
    this.server
      .to(`board-${payload.column.boardId}`)
      .emit('column:update', payload.column);
  }

  /**
   * Отправляет событие "column:move" всем участникам доски.
   * @param boardId - ID доски, для которой перемещают колонки
   * @param payload - объект с массивом колонок в новом порядке
   * @param payload.columns - массив колонок после перемещения
   */
  handleMoveColumn(boardId: number, payload: { columns: Column[] }) {
    this.server.to(`board-${boardId}`).emit('column:move', payload.columns);
  }

  //* таски **/

  /**
   * Отправляет событие "task:create" всем участникам доски.
   * @param payload - объект с таской
   * @param payload.task - таска, которая была создана
   */
  handleCreateTask(boardId: number, payload: { task: Task }) {
    this.server.to(`board-${boardId}`).emit('task:create', payload.task);
  }

  /**
   * Отправляет событие "task:update" всем участникам доски.
   * @param payload - объект с таской
   * @param payload.task - таска, которая была обновлена
   */
  handleUpdateTask(boardId: number, payload: { task: Task }) {
    this.server.to(`board-${boardId}`).emit('task:update', payload.task);
  }

  /**
   * Отправляет событие "task:delete" всем участникам доски.
   * @param payload - объект с таской
   * @param payload.task - таска, которая была удалена
   */
  handleDeleteTask(boardId: number, payload: { task: Task }) {
    this.server.to(`board-${boardId}`).emit('task:delete', payload.task);
  }

  /**
   * Отправляет событие "task:move" всем участникам доски.
   * @param boardId - ID доски, для которой перемещают таски
   * @param columnId - ID колонки
   * @param payload - объект с массивом тасок в новом порядке
   * @param payload.tasks - массив тасок после перемещения
   */
  handleMoveTask(
    boardId: number,
    columnId: number,
    payload: { tasks: Task[] },
  ) {
    this.server
      .to(`board-${boardId}`)
      .emit('task:move', { columnId, tasks: payload.tasks });
  }

  /**
   * Отправляет событие "task:move" всем участникам доски.
   * @param boardId - ID доски, для которой перемещают таски
   * @param columnId - колонка в которую переместили
   * @param payload - объект с массивом тасок в новом порядке
   * @param payload.tasks - массив тасок после перемещения
   */
  handleMoveTaskToColumn(
    boardId: number,
    payload: {
      sourceTasks: Task[];
      targetTasks: Task[];
      sourceColumnId: number;
      targetColumnId: number;
    },
  ) {
    this.server.to(`board-${boardId}`).emit('task:move-to-column', payload);
  }
}
