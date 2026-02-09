import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { BoardService } from '../board.service';
import { AuthenticatedSocket } from 'src/kanban/types/AuthenticatedSocket.type';

@Injectable()
export class WsBoardAccessGuard implements CanActivate {
  constructor(private boardService: BoardService) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const client = context.switchToWs().getClient() as AuthenticatedSocket;
    const data = context.switchToWs().getData();

    if (!client.user) return false;

    return this.boardService.hasAccess(client.user.id, data.boardId);
  }
}
