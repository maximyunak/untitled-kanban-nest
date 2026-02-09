import { Module } from '@nestjs/common';
import { ColumnService } from './column.service';
import { ColumnController } from './column.controller';
import { BoardModule } from '../board/board.module';
import { KanbanGateway } from '../kanban.gateway';
import { UserModule } from 'src/user/user.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [ColumnController],
  providers: [ColumnService, KanbanGateway],
  imports: [BoardModule, UserModule, AuthModule],
  exports: [ColumnService],
})
export class ColumnModule {}
