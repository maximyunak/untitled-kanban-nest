import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateColumnDto } from './dto/create-column.dto';
import { UpdateColumnDto } from './dto/update-column.dto';

@Injectable()
export class ColumnService {
  constructor(private prisma: PrismaService) {}

  async create(boardId: number, dto: CreateColumnDto) {
    const lastColumn = await this.prisma.column.findFirst({
      where: {
        boardId,
      },
      orderBy: {
        position: 'desc',
      },
    });

    const position = lastColumn ? lastColumn.position + 1 : 0;

    const column = await this.prisma.column.create({
      data: {
        ...dto,
        boardId,
        position,
      },
    });

    return { column };
  }

  async move(id: number, toPosition: number) {
    const column = await this.findOne(id);

    const columns = await this.prisma.column.findMany({
      where: {
        boardId: column?.boardId,
      },
      orderBy: {
        position: 'asc',
      },
    });

    const oldIndex = columns.findIndex((el) => el.id === column.id);

    const [moved] = columns.splice(oldIndex, 1);

    columns.splice(toPosition, 0, moved);

    const updated = await this.prisma.$transaction(
      columns.map((col, idx) =>
        this.prisma.column.update({
          where: {
            id: col.id,
          },
          data: {
            position: idx,
          },
        }),
      ),
    );
    return {
      columns: updated.sort((a, b) => a.position - b.position),
    };
  }

  async remove(id: number) {
    await this.findOne(id);

    const column = await this.prisma.column.delete({
      where: {
        id,
      },
    });
    return {
      column,
    };
  }

  async update(id: number, dto: UpdateColumnDto) {
    await this.findOne(id);
    const updated = await this.prisma.column.update({
      where: {
        id,
      },
      data: dto,
    });
    return { column: updated };
  }

  async findOne(columnId: number) {
    const column = await this.prisma.column.findUnique({
      where: {
        id: columnId,
      },
    });

    if (!column)
      throw new NotFoundException(`Колонка с id ${columnId} не найдена`);

    return column;
  }
}
