import { forwardRef, Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { ColumnModule } from '../column/column.module';
import { BoardModule } from '../board/board.module';
import { KanbanGateway } from '../kanban.gateway';
import { AuthModule } from 'src/auth/auth.module';
import { UserModule } from 'src/user/user.module';
import { KanbanModule } from '../kanban.module';

@Module({
  controllers: [TaskController],
  providers: [TaskService],
  imports: [ColumnModule, BoardModule, UserModule, AuthModule, forwardRef(() => KanbanModule)],
})
export class TaskModule { }
