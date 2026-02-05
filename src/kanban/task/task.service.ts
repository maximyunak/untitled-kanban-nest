import { Body, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) {}

  async create(columnId: number, dto: CreateTaskDto, creatorId: number) {
    const lastTask = await this.prisma.task.findFirst({
      where: {
        columnId,
      },
      orderBy: {
        position: 'desc',
      },
    });

    const position = lastTask ? lastTask.position + 1 : 0;

    const task = await this.prisma.task.create({
      data: {
        ...dto,
        columnId,
        creatorId,
        position,
      },
    });

    return task;
  }

  async update(id: number, dto: UpdateTaskDto) {
    const updated = await this.prisma.task.update({
      where: {
        id,
      },
      data: dto,
    });

    return updated;
  }

  async move(id: number, toPosition: number) {
    const task = await this.prisma.task.findUnique({
      where: { id },
    });

    if (!task) throw new NotFoundException('Таска не найдена');

    const tasks = await this.prisma.task.findMany({
      where: {
        columnId: task.columnId,
      },
      orderBy: {
        position: 'asc',
      },
    });

    const oldIndex = tasks.findIndex((el) => el.id === task.id);

    const [moved] = tasks.splice(oldIndex, 1);

    tasks.splice(toPosition, 0, moved);

    const updated = await this.prisma.$transaction(
      tasks.map((el, idx) =>
        this.prisma.task.update({
          where: {
            id: el.id,
          },
          data: {
            position: idx,
          },
        }),
      ),
    );

    return {
      tasks: updated.sort((a, b) => a.position - b.position),
    };
  }
}
