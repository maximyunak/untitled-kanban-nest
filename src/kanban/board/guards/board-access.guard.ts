import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { BoardService } from '../board.service';

@Injectable()
export class BoardAccessGuard implements CanActivate {
  constructor(private boardService: BoardService) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest();

    return await this.boardService.hasAccess(req.user.id, +req.params.boardId);
  }
}
