import { Body, Controller, Delete, Param, Patch, Post } from '@nestjs/common';
import { TaskService } from './task.service';
import { Authorizated, Protected } from 'src/auth/decorators';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { BoardProtected } from '../board/decorators/board-protected.decorator';

@BoardProtected()
@Protected()
@Controller('/boards/:boardId')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post('/columns/:columnId/tasks')
  create(
    @Param('columnId') columnId: string,
    @Body() dto: CreateTaskDto,
    @Authorizated('id') creatorId: number,
  ) {
    return this.taskService.create(+columnId, dto, creatorId);
  }

  @Patch('/tasks/:id')
  update(@Param('id') id: string, @Body() dto: UpdateTaskDto) {
    return this.taskService.update(+id, dto);
  }

  @Patch('/tasks/:id/move')
  move(@Param('id') id: string, @Body('toPosition') toPosition: number) {
    return this.taskService.move(+id, toPosition);
  }

  @Delete('/tasks/:id')
  remove(@Param('id') id: string) {
    return this.taskService.remove(+id);
  }
}
