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
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        patronymic: true,
        createdAt: true,
        updatedAt: true,
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
        assigneeTasks: {
          orderBy: {
            deadline: 'asc',
          },
          include: {
            column: {
              select: {
                board: {
                  select: {
                    id: true,
                    name: true,
                  },
                },
              },
            },
          },
        },
      },
    });
    const assigneeTasks = user?.assigneeTasks.map((task) => {
      return {
        id: task.id,
        name: task.name,
        description: task.description,
        isCompleted: task.isCompleted,
        position: task.position,
        deadline: task.deadline,
        creatorId: task.creatorId,
        assigneeId: task.assigneeId,
        columnId: task.columnId,
        createdAt: task.createdAt,
        updatedAt: task.updatedAt,
        boardId: task.column.board.id,
      };
    });

    return {
      user: {
        ...user,
        assigneeTasks,
      },
    };
  }
}
