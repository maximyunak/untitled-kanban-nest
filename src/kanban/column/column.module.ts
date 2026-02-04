import { Module } from '@nestjs/common';
import { ColumnService } from './column.service';
import { ColumnController } from './column.controller';
import { BoardModule } from '../board/board.module';

@Module({
  controllers: [ColumnController],
  providers: [ColumnService],
  imports: [BoardModule],
})
export class ColumnModule {}
