import {
  Controller,
  Post,
  Body,
  Get,
  Patch,
  Param,
  UseGuards,
  Delete,
} from '@nestjs/common';
import { BoardService } from './board.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { Authorizated, Protected } from 'src/auth/decorators';
import {
  ApiForbiddenResponse,
  ApiOkResponse,
  ApiOperation,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { BoardsResponse } from './dto/boards.dto';
import { CreateBoardResponse } from './dto/create-board-response.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { BoardOwnerGuard } from './guards/board-owner.guard';
import { BoardProtected } from './decorators/board-protected.decorator';
import { BoardResponse } from './dto/board.dto';

@Protected()
@ApiUnauthorizedResponse({
  description: 'Unauthorized',
})
@ApiForbiddenResponse({
  description: 'Forbidden resource',
})
@Controller('boards')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @ApiOperation({
    summary: 'Создание таблицы',
    description: 'Создает таблицу и выдает юзеру доступ к ней',
  })
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
    summary: 'Доступные доски',
    description: 'Получение досок к которым у пользователя есть доступ',
  })
  @ApiOkResponse({
    type: BoardsResponse,
  })
  @Get('/my')
  my(@Authorizated('id') userId: number) {
    return this.boardService.findAll(userId);
  }

  @ApiOperation({
    summary: 'Обновление досок',
    description: 'Только создателю',
  })
  @ApiOkResponse({
    type: BoardResponse,
  })
  @UseGuards(BoardOwnerGuard)
  @Patch('/:id')
  update(@Param('id') boardId: string, @Body() updateBoardDto: UpdateBoardDto) {
    return this.boardService.update(+boardId, updateBoardDto);
  }

  @ApiOperation({
    summary: 'Удаление доски',
    description: 'Только создателю',
  })
  @ApiOkResponse({
    type: BoardResponse,
  })
  @UseGuards(BoardOwnerGuard)
  @Delete('/:id')
  deleteBoard(@Param('id') boardId: string) {
    return this.boardService.remove(+boardId);
  }

  @ApiOperation({
    summary: 'Полная информация о доске',
    description:
      'Выдает всю информацию о доске включая задачи, колонки и пользователей у которых есть к ней доступ',
  })
  @BoardProtected()
  @Get('/:boardId')
  getBoard(@Param('boardId') boardId: string) {
    return this.boardService.findOne(+boardId);
  }
}
