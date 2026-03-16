import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  async findOne(id: number) {
    const user = await this.prisma.user.findUnique({
      where: {
        id,
      },
      omit: {
        password: true,
      },
    });

    if (!user) throw new NotFoundException('Пользователь не найден');
    return user;
  }

  findByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: {
        email,
      },
    });
  }

  findByYandexId(yandexId: string) {
    return this.prisma.user.findUnique({
      where: {
        yandexId,
      },
    });
  }

  async me(id: number) {
    const user = await this.prisma.user.findUnique({
      where: {
        id,
      },
      omit: {
        password: true,
      },
      include: {
        boards: true,
      },
    });

    return {
      user,
    };
  }
}
