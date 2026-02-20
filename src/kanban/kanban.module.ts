import { Module, forwardRef } from '@nestjs/common';
import { BoardModule } from './board/board.module';
import { ColumnModule } from './column/column.module';
import { TaskModule } from './task/task.module';
import { KanbanGateway } from './kanban.gateway';
import { AuthModule } from 'src/auth/auth.module';
import { UserModule } from 'src/user/user.module';
import { InviteModule } from './invite/invite.module';

@Module({
  imports: [BoardModule, ColumnModule, TaskModule, AuthModule, UserModule, InviteModule],
  providers: [KanbanGateway],
  exports: [KanbanGateway]
})
export class KanbanModule { }
