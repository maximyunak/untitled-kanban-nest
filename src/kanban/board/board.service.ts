import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BoardService {
  constructor(private prisma: PrismaService) {}
  async create(userId: number, createBoardDto: CreateBoardDto) {
    const board = await this.prisma.board.create({
      data: {
        creatorId: userId,
        ...createBoardDto,
      },
    });

    await this.prisma.userBoards.create({
      data: {
        userId,
        boardId: board.id,
      },
    });

    return { board };
  }

  async findAll(userId) {
    const boards = await this.prisma.board.findMany({
      where: {
        userBoards: {
          some: {
            userId,
          },
        },
      },
    });

    return { boards };
  }

  async update(id: number, updateBoardDto: UpdateBoardDto) {
    const board = await this.prisma.board.update({
      data: updateBoardDto,
      where: {
        id,
      },
    });
    return board;
  }

  async remove(id: number) {
    return await this.prisma.board.delete({
      where: {
        id,
      },
    });
  }

  async findOne(id: number) {
    const board = await this.prisma.board.findUnique({
      where: {
        id,
      },
    });
    if (!board) throw new NotFoundException(`Board with id ${id} not found`);

    return board;
  }

  async hasAccess(userId: number, boardId: number) {
    const relation = await this.prisma.userBoards.findUnique({
      where: {
        userId_boardId: {
          userId,
          boardId,
        },
      },
    });

    return !!relation;
  }
}
