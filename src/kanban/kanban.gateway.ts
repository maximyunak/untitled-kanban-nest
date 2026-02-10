import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Column } from 'generated/prisma/client';
import { Server, Socket } from 'socket.io';
import { WsProtected } from 'src/auth/decorators/ws-protected.decorator';
import type { AuthenticatedSocket } from './types/AuthenticatedSocket.type';
import { UseGuards } from '@nestjs/common';
import { WsBoardAccessGuard } from './board/guards/ws-board-access.guard';
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

  @SubscribeMessage('message')
  handleMessage(client: any, payload: any): string {
    return 'Hello world!';
  }

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

  handleCreateColumn(payload: { column: Column }) {
    this.server
      .to(`board-${payload.column.boardId}`)
      .emit('column:create', payload.column);
  }

  handleDeleteColumn(payload: { column: Column }) {
    this.server
      .to(`board-${payload.column.boardId}`)
      .emit('column:delete', payload.column);
  }

  handleUpdateColumn(payload: { column: Column }) {
    this.server
      .to(`board-${payload.column.boardId}`)
      .emit('column:update', payload.column);
  }

  handleMoveColumn(boardId: number, payload: { columns: Column[] }) {
    this.server.to(`board-${boardId}`).emit('column:move', payload.columns);
  }
}
