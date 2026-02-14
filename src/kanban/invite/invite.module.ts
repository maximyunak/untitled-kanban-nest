import { Module } from '@nestjs/common';
import { InviteService } from './invite.service';
import { InviteController } from './invite.controller';
import { BoardModule } from '../board/board.module';

@Module({
  controllers: [InviteController],
  providers: [InviteService],
  imports: [BoardModule],
})
export class InviteModule {}
