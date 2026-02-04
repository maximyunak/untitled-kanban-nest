import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateColumnDto } from './dto/create-column.dto';

@Injectable()
export class ColumnService {
  constructor(private prisma: PrismaService) {}

  async create(boardId: number, dto: CreateColumnDto) {
    console.log(dto);

    const column = await this.prisma.column.create({
      data: {
        ...dto,
        boardId,
      },
    });

    return { column };
  }
}
