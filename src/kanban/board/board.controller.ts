import { Controller, Post, Body, Get } from '@nestjs/common';
import { BoardService } from './board.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { Authorizated, Protected } from 'src/auth/decorators';
import { ApiBearerAuth, ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { BoardResponse } from './dto/boards.dto';

@Protected()
@Controller('boards')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @Post()
  create(
    @Authorizated('id') userId: number,
    @Body() createBoardDto: CreateBoardDto,
  ) {
    return this.boardService.create(userId, createBoardDto);
  }

  @ApiOperation({
    summary: 'Доступные таблицы',
    description: 'Получение таблиц к которым у пользователя есть доступ',
  })
  @ApiOkResponse({
    type: BoardResponse,
  })
  @Get('/my')
  my(@Authorizated('id') userId: number) {
    return this.boardService.findAll(userId);
  }
}
