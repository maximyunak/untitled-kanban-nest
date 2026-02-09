import {
  Body,
  Controller,
  Delete,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ColumnService } from './column.service';
import { Protected } from 'src/auth/decorators';
import { CreateColumnDto } from './dto/create-column.dto';
import { BoardProtected } from '../board/decorators/board-protected.decorator';
import { UpdateColumnDto } from './dto/update-column.dto';
import { KanbanGateway } from '../kanban.gateway';

@BoardProtected()
@Protected()
@Controller('/boards/:boardId')
export class ColumnController {
  constructor(
    private readonly columnService: ColumnService,
    private gateway: KanbanGateway,
  ) {}

  @Post('/columns')
  async create(
    @Param('boardId') boardId: string,
    @Body() dto: CreateColumnDto,
  ) {
    const column = await this.columnService.create(+boardId, dto);
    this.gateway.handleCreateColumn(column);
    return column;
  }

  @HttpCode(HttpStatus.OK)
  @Patch('columns/:id/move')
  move(@Param('id') id: string, @Body('toPosition') toPosition: number) {
    return this.columnService.move(+id, toPosition);
  }

  @Delete('/columns/:id')
  remove(@Param('id') id: string) {
    return this.columnService.remove(+id);
  }

  @Patch('/columns/:id')
  update(@Param('id') id: string, @Body() dto: UpdateColumnDto) {
    return this.columnService.update(+id, dto);
  }
}
