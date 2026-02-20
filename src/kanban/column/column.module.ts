import { forwardRef, Module } from '@nestjs/common';
import { ColumnService } from './column.service';
import { ColumnController } from './column.controller';
import { BoardModule } from '../board/board.module';
import { KanbanGateway } from '../kanban.gateway';
import { UserModule } from 'src/user/user.module';
import { AuthModule } from 'src/auth/auth.module';
import { KanbanModule } from '../kanban.module';

@Module({
  controllers: [ColumnController],
  providers: [ColumnService],
  imports: [BoardModule, UserModule, AuthModule, forwardRef(() => KanbanModule)],
  exports: [ColumnService],
})
export class ColumnModule { }
