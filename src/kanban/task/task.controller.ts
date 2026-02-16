import { Body, Controller, Delete, Param, Patch, Post } from '@nestjs/common';
import { TaskService } from './task.service';
import { Authorizated, Protected } from 'src/auth/decorators';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { BoardProtected } from '../board/decorators/board-protected.decorator';
import { KanbanGateway } from '../kanban.gateway';
import { MoveTaskToColumnDto } from './dto/move-task-to-column.dto';
import { MoveTaskDto } from './dto/move-task.dto';

@BoardProtected()
@Protected()
@Controller('/boards/:boardId')
export class TaskController {
  constructor(
    private readonly taskService: TaskService,
    private gateway: KanbanGateway,
  ) {}

  @Post('/columns/:columnId/tasks')
  async create(
    @Param('boardId') boardId: string,
    @Param('columnId') columnId: string,
    @Body() dto: CreateTaskDto,
    @Authorizated('id') creatorId: number,
  ) {
    const task = await this.taskService.create(
      +boardId,
      +columnId,
      dto,
      creatorId,
    );
    this.gateway.handleCreateTask(+boardId, task);
    return task;
  }

  @Patch('/tasks/:id')
  async update(
    @Param('boardId') boardId: string,
    @Param('id') id: string,
    @Body() dto: UpdateTaskDto,
  ) {
    const task = await this.taskService.update(+boardId, +id, dto);
    this.gateway.handleUpdateTask(+boardId, task);
    return task;
  }

  @Patch('/tasks/:id/move')
  async move(
    @Param('boardId') boardId: string,
    @Param('id') id: string,
    @Body() dto: MoveTaskDto,
  ) {
    const task = await this.taskService.move(+boardId, +id, dto);
    this.gateway.handleMoveTask(+boardId, dto.columnId, task);
    return task;
  }

  @Patch('/tasks/:id/move-to-column')
  async moveToColumn(
    @Param('boardId') boardId: string,
    @Param('id') id: string,
    @Body() dto: MoveTaskToColumnDto,
  ) {
    const data = await this.taskService.moveTaskToColumn(+boardId, +id, dto);
    this.gateway.handleMoveTaskToColumn(+boardId, data);
    return data;
  }

  @Delete('/tasks/:id')
  async remove(@Param('boardId') boardId: string, @Param('id') id: string) {
    const task = await this.taskService.remove(+boardId, +id);
    this.gateway.handleDeleteTask(+boardId, task);
    return task;
  }
}
