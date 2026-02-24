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
import { ApiForbiddenResponse, ApiOkResponse, ApiOperation, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { ColumnResponse, ColumnsResponse } from './dto/response/column.dto';

@BoardProtected()
@Protected()
@ApiUnauthorizedResponse({
  description: 'Unauthorized'
})
@ApiForbiddenResponse({
  description: "Forbidden resource"
})
@Controller('/boards/:boardId')
export class ColumnController {
  constructor(
    private readonly columnService: ColumnService,
    private gateway: KanbanGateway,
  ) { }

  @ApiOperation({
    summary: "Создание колонки"
  })
  @ApiOkResponse({
    type: ColumnResponse
  })
  @Post('/columns')
  async create(
    @Param('boardId') boardId: string,
    @Body() dto: CreateColumnDto,
  ) {
    const column = await this.columnService.create(+boardId, dto);
    this.gateway.handleCreateColumn(column);
    return column;
  }

  @ApiOperation({
    summary: "Перемещение колонок"
  })
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({
    type: ColumnsResponse
  })
  @Patch('columns/:id/move')
  async move(
    @Param('boardId') boardId: string,
    @Param('id') id: string,
    @Body('toPosition') toPosition: number,
  ) {
    const columns = await this.columnService.move(+id, toPosition);
    this.gateway.handleMoveColumn(+boardId, columns);
    return columns;
  }

  @ApiOperation({
    summary: "Удаление колонки"
  })
  @ApiOkResponse({
    type: ColumnResponse
  })
  @Delete('/columns/:id')
  async remove(@Param('id') id: string) {
    const column = await this.columnService.remove(+id);
    this.gateway.handleDeleteColumn(column);
    return column;
  }

  @ApiOperation({
    summary: "Обновление колонки"
  })
  @ApiOkResponse({
    type: ColumnResponse
  })
  @Patch('/columns/:id')
  async update(@Param('id') id: string, @Body() dto: UpdateColumnDto) {
    const column = await this.columnService.update(+id, dto);
    this.gateway.handleUpdateColumn(column);
    return column;
  }
}
