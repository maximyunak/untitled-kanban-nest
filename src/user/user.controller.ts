import { Controller, Get, Param } from '@nestjs/common';
import { Authorizated, Protected } from 'src/auth/decorators';
import { UserService } from './user.service';
import { ApiNotFoundResponse, ApiOkResponse, ApiOperation, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { MeResponseDto, MyProfileResponseDto } from './dto/me-response.dto';
import { UserResponseDto } from './dto/user-response.dto';

@Protected()
@ApiUnauthorizedResponse()
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @ApiOperation({
    summary: 'Просмотр своего профиля',
  })
  @ApiOkResponse({
    type: MeResponseDto
  })
  @Get('/me')
  me(@Authorizated('id') id: number) {
    return this.userService.me(id);
  }

  @ApiOperation({
    summary: 'Просмотр данных пользователя по id',
  })
  @ApiNotFoundResponse({
    description: "Пользователь не найден"
  })
  @ApiOkResponse({
    type: UserResponseDto
  })
  @Get('/:id')
  profile(@Param('id') userId: string) {
    return this.userService.findOne(+userId);
  }
}
