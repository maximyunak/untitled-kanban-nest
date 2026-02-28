import { Controller, Get } from '@nestjs/common';
import { TaskService } from './task.service';
import { Authorizated, Protected } from 'src/auth/decorators';
import { ApiOperation, ApiUnauthorizedResponse } from '@nestjs/swagger';

@Protected()
@ApiUnauthorizedResponse({
  description: 'Unauthorized',
})
@Controller('/tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @ApiOperation({
    summary: 'Получение моих задач',
    description: 'Получение всех задач которые назначены на меня',
  })
  @Get('/my')
  async getMyTasks(@Authorizated('id') userId: number) {
    return this.taskService.getMyTasks(userId);
  }
}
