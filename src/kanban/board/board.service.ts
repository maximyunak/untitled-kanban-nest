import {
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { statusInvite } from 'generated/prisma/enums';

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
      include: {
        columns: {
          include: {
            tasks: {
              orderBy: {
                position: 'asc',
              },
            },
          },
          orderBy: {
            position: 'asc',
          },
        },
      },
    });
    if (!board) throw new NotFoundException(`Board with id ${id} not found`);

    return {
      board,
    };
  }

  async inviteBoard(userId: number, boardId: number) {
    const isExists = await this.prisma.inviteBoards.findUnique({
      where: {
        userId_boardId: {
          userId,
          boardId,
        },
      },
    });
    if (isExists) throw new ConflictException();

    const invite = await this.prisma.inviteBoards.create({
      data: {
        userId,
        boardId,
      },
    });

    return {
      invite,
    };
  }

  async acceptInvite(userId: number, boardId: number, inviteId: number) {
    const invite = await this.findInvite(inviteId);
    if (userId !== invite.userId)
      throw new ForbiddenException('Не твой инвайт');

    return this.prisma.$transaction(async (tx) => {
      const accept = await tx.inviteBoards.update({
        where: {
          id: inviteId,
        },
        data: {
          status: statusInvite.ACCEPTED,
        },
      });

      const isExists = await tx.userBoards.findUnique({
        where: {
          userId_boardId: {
            userId,
            boardId,
          },
        },
      });

      if (isExists) throw new ConflictException();

      const accepted = await tx.userBoards.create({
        data: {
          userId,
          boardId,
        },
      });

      return { accepted };
    });
  }

  async declineInvite(inviteId: number, userId: number) {
    const invite = await this.findInvite(inviteId);
    if (userId !== invite.userId)
      throw new ForbiddenException('Не твой инвайт');
    const declined = await this.prisma.inviteBoards.update({
      where: {
        id: inviteId,
      },
      data: {
        status: statusInvite.DECLINED,
      },
    });

    return { declined };
  }

  async findInvite(inviteId: number) {
    const invite = await this.prisma.inviteBoards.findUnique({
      where: {
        id: inviteId,
      },
    });
    if (!invite) throw new NotFoundException();
    return invite;
  }

  /**
   * Проверяет есть ли у пользователя доступ к доске
   *
   * @param userId - id пользователя
   * @param boardId - id доски
   * @returns boolean
   */
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
