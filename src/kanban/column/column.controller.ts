import {
  Body,
  Controller,
  Delete,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { ColumnService } from './column.service';
import { Protected } from 'src/auth/decorators';
import { CreateColumnDto } from './dto/create-column.dto';
import { BoardProtected } from '../board/decorators/board-protected.decorator';

@BoardProtected()
@Protected()
@Controller()
export class ColumnController {
  constructor(private readonly columnService: ColumnService) {}

  @Post('/boards/:boardId/columns')
  create(@Param('boardId') boardId: string, @Body() dto: CreateColumnDto) {
    const column = this.columnService.create(+boardId, dto);

    return column;
  }

  @HttpCode(HttpStatus.OK)
  @Post('columns/:id/move')
  move(@Param('id') id: string, @Body('toPosition') toPosition: number) {
    return this.columnService.move(+id, toPosition);
  }

  @Delete('/columns/:id')
  remove(@Param('id') id: string) {
    return this.columnService.remove(+id);
  }
}
