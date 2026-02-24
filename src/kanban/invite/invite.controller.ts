import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { InviteService } from './invite.service';
import { Authorizated, Protected } from 'src/auth/decorators';
import { BoardProtected } from '../board/decorators/board-protected.decorator';
import { CreateInviteDto } from './dto/create-invite.dto';
import { ApiConflictResponse, ApiForbiddenResponse, ApiNotFoundResponse, ApiOkResponse, ApiOperation, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { InviteResponse, InvitesResponse } from './dto/response/invite.dto';

@Protected()
@ApiUnauthorizedResponse({
  description: 'Unauthorized'
})
@Controller()
export class InviteController {
  constructor(private readonly inviteService: InviteService) { }

  @BoardProtected()
  @ApiOperation({
    summary: "Приглашение пользователя"
  })
  @ApiForbiddenResponse({
    description: "Forbidden resource"
  })
  @ApiNotFoundResponse({
    description: 'User with test@gmail.com doesnt exists'
  })
  @ApiOkResponse({
    type: InviteResponse
  })
  @Post('/boards/:boardId/invites')
  inviteBoard(@Body() dto: CreateInviteDto) {
    return this.inviteService.create(dto);
  }

  @ApiOperation({
    summary: "Принятие инвайта"
  })
  @ApiForbiddenResponse({
    description: "Не твой инвайт"
  })
  @ApiConflictResponse({
    description: 'Уже принят или отклонен'
  })
  @ApiOkResponse({
    type: InviteResponse
  })
  @Patch('/invites/:inviteId/accept')
  acceptInviteBoard(
    @Param('inviteId') inviteId: string,
    @Authorizated('id') userId: string,
  ) {
    return this.inviteService.acceptInvite(+userId, +inviteId);
  }

  @ApiOperation({
    summary: "Отклонение инвайта"
  })
  @ApiForbiddenResponse({
    description: "Не твой инвайт"
  })
  @ApiConflictResponse({
    description: 'Уже принят или отклонен'
  })
  @ApiOkResponse({
    type: InviteResponse
  })
  @Patch('/invites/:inviteId/decline')
  declineInviteBoard(
    @Param('inviteId') inviteId: string,
    @Authorizated('id') userId: string,
  ) {
    return this.inviteService.declineInvite(+inviteId, +userId);
  }

  @ApiOperation({
    summary: "Получение своих инвайтов"
  })
  @ApiOkResponse({
    type: InvitesResponse
  })
  @Get('/invites')
  getMyInvites(@Authorizated('id') userId: number) {
    return this.inviteService.findMy(userId);
  }
}
