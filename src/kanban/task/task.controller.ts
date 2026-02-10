import { Body, Controller, Delete, Param, Patch, Post } from '@nestjs/common';
import { TaskService } from './task.service';
import { Authorizated, Protected } from 'src/auth/decorators';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { BoardProtected } from '../board/decorators/board-protected.decorator';
import { KanbanGateway } from '../kanban.gateway';

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
    const task = await this.taskService.create(+columnId, dto, creatorId);
    this.gateway.handleCreateTask(+boardId, task);
    return task;
  }

  @Patch('/tasks/:id')
  async update(
    @Param('boardId') boardId: string,
    @Param('id') id: string,
    @Body() dto: UpdateTaskDto,
  ) {
    const task = await this.taskService.update(+id, dto);
    this.gateway.handleUpdateTask(+boardId, task);
    return task;
  }

  @Patch('/tasks/:id/move')
  async move(
    @Param('boardId') boardId: string,
    @Param('id') id: string,
    @Body('toPosition') toPosition: number,
  ) {
    const task = await this.taskService.move(+id, toPosition);
    this.gateway.handleMoveTask(+boardId, task);
    return task;
  }

  @Delete('/tasks/:id')
  async remove(@Param('boardId') boardId: string, @Param('id') id: string) {
    const task = await this.taskService.remove(+id);
    this.gateway.handleDeleteTask(+boardId, task);
    return task;
  }
}
