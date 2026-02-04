import { Body, Controller, Param, Post, UseGuards } from '@nestjs/common';
import { TaskService } from './task.service';
import { Authorizated, Protected } from 'src/auth/decorators';
import { CreateTaskDto } from './dto/create-task.dto';
import { BoardAccessGuard } from '../board/guards/board-access.guard';
import { ColumnAccessGuard } from '../column/guards/column-access.guard';

@Protected()
@Controller()
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @UseGuards(ColumnAccessGuard)
  @Post('/columns/:columnId/tasks')
  create(
    @Param('columnId') columnId: string,
    @Body() dto: CreateTaskDto,
    @Authorizated('id') creatorId: number,
  ) {
    return this.taskService.create(+columnId, dto, creatorId);
  }
}
