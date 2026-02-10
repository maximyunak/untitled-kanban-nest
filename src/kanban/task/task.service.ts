import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from 'generated/prisma/client';

@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) {}

  async create(
    boardId: number,
    columnId: number,
    dto: CreateTaskDto,
    creatorId: number,
  ) {
    const isColumnExists = await this.prisma.column.findFirst({
      where: {
        id: columnId,
        boardId,
      },
    });

    if (!isColumnExists)
      throw new NotFoundException(
        `Колонка ${columnId} отсутствует в ${boardId} доске`,
      );

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

    return { task };
  }

  async update(boardId: number, id: number, dto: UpdateTaskDto) {
    await this.isTaskInBoard(boardId, id);

    const updated = await this.prisma.task.update({
      where: {
        id,
      },
      data: dto,
    });

    return { task: updated };
  }

  async move(boardId: number, id: number, toPosition: number) {
    const task = await this.isTaskInBoard(boardId, id);

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

  async remove(boardId: number, id: number) {
    await this.isTaskInBoard(boardId, id);

    const task = await this.prisma.task.delete({
      where: {
        id,
      },
    });
    return {
      task,
    };
  }

  /**
   * Проверяет относится ли таска к доске
   * @param boardId ID доски в которой должна находиться таска
   * @param taskId ID таски
   * @returns task
   */
  async isTaskInBoard(boardId: number, taskId: number): Promise<Task> {
    const task = await this.prisma.task.findFirst({
      where: {
        id: taskId,
        column: {
          boardId,
        },
      },
    });

    if (!task)
      throw new NotFoundException(
        `Таска с ${taskId} отсутствует в ${boardId} доске`,
      );

    return task;
  }
}
