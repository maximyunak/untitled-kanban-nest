import { Body, Controller, Param, Post, UseGuards } from '@nestjs/common';
import { ColumnService } from './column.service';
import { Authorizated, Protected } from 'src/auth/decorators';
import { CreateColumnDto } from './dto/create-column.dto';
import { BoardAccessGuard } from '../board/guards/board-access.guard';

@Protected()
@Controller()
export class ColumnController {
  constructor(private readonly columnService: ColumnService) {}

  @UseGuards(BoardAccessGuard)
  @Post('/boards/:boardId/columns')
  create(@Param('boardId') boardId: string, @Body() dto: CreateColumnDto) {
    const column = this.columnService.create(+boardId, dto);

    return column;
  }
}
