import {
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { statusInvite } from 'generated/prisma/enums';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class InviteService {
  constructor(private prisma: PrismaService) {}

  async create(userId: number, boardId: number) {
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

  async acceptInvite(userId: number, inviteId: number) {
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
            boardId: accept.boardId,
          },
        },
      });

      if (isExists) throw new ConflictException();

      const accepted = await tx.userBoards.create({
        data: {
          userId,
          boardId: invite.boardId,
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

  async findMy(userId: number) {
    const invites = await this.prisma.inviteBoards.findMany({
      where: {
        userId,
      },
      include: {
        board: true,
      },
    });

    return { invites };
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
}
