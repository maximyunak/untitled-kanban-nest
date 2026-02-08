import {
  Controller,
  Post,
  Body,
  Get,
  Patch,
  Proppatch,
  Param,
  UseGuards,
  Delete,
} from '@nestjs/common';
import { BoardService } from './board.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { Authorizated, Protected } from 'src/auth/decorators';
import {
  ApiOkResponse,
  ApiOperation,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { BoardResponse } from './dto/boards.dto';
import { CreateBoardResponse } from './dto/create-board-response.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { BoardOwnerGuard } from './guards/board-owner.guard';
import { BoardProtected } from './decorators/board-protected.decorator';

@Protected()
@Controller('boards')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @Post()
  @ApiUnauthorizedResponse({
    description: 'Unauthorized',
  })
  @ApiOkResponse({
    type: CreateBoardResponse,
  })
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

  @UseGuards(BoardOwnerGuard)
  @Patch('/:id')
  update(@Param('id') boardId: string, @Body() updateBoardDto: UpdateBoardDto) {
    return this.boardService.update(+boardId, updateBoardDto);
  }

  @UseGuards(BoardOwnerGuard)
  @Delete('/:id')
  deleteBoard(@Param('id') boardId: string) {
    return this.boardService.remove(+boardId);
  }

  @BoardProtected()
  @Get('/:boardId')
  getBoard(@Param('boardId') boardId: string) {
    return this.boardService.findOne(+boardId);
  }
}
