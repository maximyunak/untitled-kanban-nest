import { Injectable } from '@nestjs/common';
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
}
