import { Injectable } from '@nestjs/common';
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

  findOne(id: number) {
    return `This action returns a #${id} board`;
  }

  update(id: number, updateBoardDto: UpdateBoardDto) {
    return `This action updates a #${id} board`;
  }

  remove(id: number) {
    return `This action removes a #${id} board`;
  }
}
