import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from 'generated/prisma/client';
import { MoveTaskToColumnDto } from './dto/move-task-to-column.dto';
import { MoveTaskDto } from './dto/move-task.dto';

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

  async move(boardId: number, id: number, dto: MoveTaskDto) {
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

    tasks.splice(dto.toPosition, 0, moved);

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

  async moveTaskToColumn(
    boardId: number,
    taskId: number,
    dto: MoveTaskToColumnDto,
  ) {
    const task = await this.isTaskInBoard(boardId, taskId);

    return this.prisma.$transaction(async (prisma) => {
      // обновление позиций в старой колонке
      await prisma.task.updateMany({
        where: {
          columnId: task.columnId,
          position: {
            gt: task.position,
          },
        },
        data: {
          position: {
            decrement: 1,
          },
        },
      });

      // добавление в новую колонку и обновление позиций
      await prisma.task.updateMany({
        where: {
          columnId: dto.columnId,
          position: {
            gte: dto.toPosition,
          },
        },
        data: {
          position: {
            increment: 1,
          },
        },
      });

      await prisma.task.update({
        where: {
          id: task.id,
        },
        data: {
          columnId: dto.columnId,
          position: dto.toPosition,
        },
      });

      const targetTasks = await prisma.task.findMany({
        where: {
          columnId: dto.columnId,
        },
        orderBy: {
          position: 'asc',
        },
      });

      const sourceTasks = await prisma.task.findMany({
        where: {
          columnId: task.columnId,
        },
      });

      return {
        sourceTasks,
        targetTasks,
        sourceColumnId: task.columnId,
        targetColumnId: dto.columnId,
      };
    });
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

  async getMyTasks(userId: number) {
    const assigneeTasks = await this.prisma.task.findMany({
      where: {
        assigneeId: userId,
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
    });

    const tasks = assigneeTasks.map((task) => {
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
        boardName: task.column.board.name,
      };
    });

    return { tasks };
  }
}
