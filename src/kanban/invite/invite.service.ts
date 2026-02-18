import {
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { statusInvite } from 'generated/prisma/enums';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateInviteDto } from './dto/create-invite.dto';
import { UserService } from 'src/user/user.service';

@Injectable()
export class InviteService {
  constructor(
    private prisma: PrismaService,
    private userService: UserService,
  ) {}

  async create(dto: CreateInviteDto) {
    const user = await this.userService.findByEmail(dto.email);

    if (!user)
      throw new NotFoundException(`User with ${dto.email} doesnt exists`);
    const isExists = await this.prisma.inviteBoards.findUnique({
      where: {
        userId_boardId: {
          userId: user.id,
          boardId: dto.boardId,
        },
      },
    });
    if (isExists) throw new ConflictException('Вы уже пригласили этого юзера');

    const invite = await this.prisma.inviteBoards.create({
      data: {
        userId: user.id,
        boardId: dto.boardId,
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
    if (
      invite.status === statusInvite.ACCEPTED ||
      invite.status === statusInvite.DECLINED
    ) {
      throw new ConflictException('Уже принят или отклонен');
    }

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

      return { accept };
    });
  }

  async declineInvite(inviteId: number, userId: number) {
    const invite = await this.findInvite(inviteId);
    if (userId !== invite.userId)
      throw new ForbiddenException('Не твой инвайт');
    if (
      invite.status === statusInvite.ACCEPTED ||
      invite.status === statusInvite.DECLINED
    ) {
      throw new ConflictException('Уже принят или отклонен');
    }
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
