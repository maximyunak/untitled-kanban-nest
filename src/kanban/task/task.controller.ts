import { Body, Controller, Param, Patch, Post } from '@nestjs/common';
import { TaskService } from './task.service';
import { Authorizated, Protected } from 'src/auth/decorators';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { BoardProtected } from '../board/decorators/board-protected.decorator';

@BoardProtected()
@Protected()
@Controller()
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post('/boards/:boardId/columns/:columnId/tasks')
  create(
    @Param('columnId') columnId: string,
    @Body() dto: CreateTaskDto,
    @Authorizated('id') creatorId: number,
  ) {
    return this.taskService.create(+columnId, dto, creatorId);
  }

  @Patch('/boards/:boardId/tasks/:id')
  update(@Param('id') id: string, @Body() dto: UpdateTaskDto) {
    return this.taskService.update(+id, dto);
  }
}
