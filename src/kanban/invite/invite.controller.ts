import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { InviteService } from './invite.service';
import { Authorizated, Protected } from 'src/auth/decorators';
import { BoardProtected } from '../board/decorators/board-protected.decorator';
import { CreateInviteDto } from './dto/create-invite.dto';

@Protected()
@Controller()
export class InviteController {
  constructor(private readonly inviteService: InviteService) {}

  @BoardProtected()
  @Post('boards/:boardId/invites')
  inviteBoard(@Param('boardId') boardId: string, @Body() dto: CreateInviteDto) {
    return this.inviteService.create(+dto.userId, +boardId);
  }

  @Patch('/invites/:inviteId/accept')
  acceptInviteBoard(
    @Param('inviteId') inviteId: string,
    @Authorizated('id') userId: string,
  ) {
    return this.inviteService.acceptInvite(+userId, +inviteId);
  }

  @Patch('/invites/:inviteId/decline')
  declineInviteBoard(
    @Param('inviteId') inviteId: string,
    @Authorizated('id') userId: string,
  ) {
    return this.inviteService.declineInvite(+inviteId, +userId);
  }

  @Get('/invites')
  getMyInvites(@Authorizated('id') userId: number) {
    return this.inviteService.findMy(userId);
  }
}
