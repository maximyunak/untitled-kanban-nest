import { Module } from '@nestjs/common';
import { BoardModule } from './board/board.module';
import { ColumnModule } from './column/column.module';

@Module({
  imports: [BoardModule, ColumnModule],
})
export class KanbanModule {}
