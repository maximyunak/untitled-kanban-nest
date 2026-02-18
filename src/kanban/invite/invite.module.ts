import { Module } from '@nestjs/common';
import { InviteService } from './invite.service';
import { InviteController } from './invite.controller';
import { BoardModule } from '../board/board.module';
import { UserModule } from 'src/user/user.module';

@Module({
  controllers: [InviteController],
  providers: [InviteService],
  imports: [BoardModule, UserModule],
})
export class InviteModule { }
