import { ApiProperty } from "@nestjs/swagger";
import type { inviteBoards } from "generated/prisma/client";

export class InviteResponse {
  @ApiProperty({
    description: "invites",
    example: {
      id: 1,
      status: "ACCEPTED",
      userId: 2,
      boardId: 1,
      createdAt: '2026-02-16T11:49:48.974Z',
      updatedAt: '2026-02-16T11:49:48.974Z',
    }
  })
  invite: inviteBoards
}

export class InvitesResponse {
  @ApiProperty({
    description: "invites",
    example: [
      {
        id: 1,
        status: "ACCEPTED",
        userId: 2,
        boardId: 2,
        createdAt: '2026-02-16T11:49:48.974Z',
        updatedAt: '2026-02-16T11:49:48.974Z',
      },
      {
        id: 2,
        status: "DECLINED",
        userId: 2,
        boardId: 1,
        createdAt: '2026-02-16T11:49:48.974Z',
        updatedAt: '2026-02-16T11:49:48.974Z',
      },
      {
        id: 3,
        status: "PENDING",
        userId: 2,
        boardId: 3,
        createdAt: '2026-02-16T11:49:48.974Z',
        updatedAt: '2026-02-16T11:49:48.974Z',
      }
    ]
  })
  invites: inviteBoards[]
}