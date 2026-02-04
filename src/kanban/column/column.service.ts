import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateColumnDto } from './dto/create-column.dto';

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
}
