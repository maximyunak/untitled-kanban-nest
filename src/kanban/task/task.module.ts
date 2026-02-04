import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { ColumnModule } from '../column/column.module';
import { BoardModule } from '../board/board.module';

@Module({
  controllers: [TaskController],
  providers: [TaskService],
  imports: [ColumnModule, BoardModule],
})
export class TaskModule {}
