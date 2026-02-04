import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { BoardService } from '../board.service';
@Injectable()
export class BoardOwnerGuard implements CanActivate {
  constructor(private boardService: BoardService) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest();

    const board = await this.boardService.findOne(+req.params.id);

    return board.creatorId === req.user.id;
  }
}
