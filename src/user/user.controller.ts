import { Controller, Get, Param } from '@nestjs/common';
import { Authorizated, Protected } from 'src/auth/decorators';
import { UserService } from './user.service';

@Protected()
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get('/me')
  me(@Authorizated('id') id: number) {
    return this.userService.me(id);
  }

  @Get('/:id')
  profile(@Param('id') userId: string) {
    return this.userService.findOne(+userId);
  }
}
