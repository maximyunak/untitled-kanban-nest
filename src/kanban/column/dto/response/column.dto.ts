import { ApiProperty } from "@nestjs/swagger";
import type { Column } from "generated/prisma/client";

const columnExample = {
  description: "Column",
  example: {
    id: 25,
    name: 'Column',
    boardId: 1,
    position: 3,
    tasks: [],
    createdAt: '2026-02-16T11:49:48.974Z',
    updatedAt: '2026-02-16T11:49:48.974Z',
  }
}

export class ColumnResponse {
  @ApiProperty({
    description: "Column",
    example: columnExample
  })
  column: Column
}

export class ColumnsResponse {
  @ApiProperty({
    description: 'columns',
    example: [
      columnExample, columnExample
    ]
  })
  columns: Column[]
}
