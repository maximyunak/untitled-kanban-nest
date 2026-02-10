import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { ColumnModule } from '../column/column.module';
import { BoardModule } from '../board/board.module';
import { KanbanGateway } from '../kanban.gateway';
import { AuthModule } from 'src/auth/auth.module';
import { UserModule } from 'src/user/user.module';

@Module({
  controllers: [TaskController],
  providers: [TaskService, KanbanGateway],
  imports: [ColumnModule, BoardModule, UserModule, AuthModule],
})
export class TaskModule {}
