import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { BoardService } from 'src/kanban/board/board.service';
import { ColumnService } from '../column.service';

@Injectable()
export class ColumnAccessGuard implements CanActivate {
  constructor(
    private boardService: BoardService,
    private columnService: ColumnService,
  ) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest();

    const columnId = req.params.columnId;
    const column = await this.columnService.findOne(+columnId);
    if (!column) return false;

    return await this.boardService.hasAccess(req.user.id, column.boardId);
  }
}
