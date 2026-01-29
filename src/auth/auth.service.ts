import {
  BadRequestException,
  ConflictException,
  Injectable,
} from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async register(registerDto: RegisterDto) {
    const { password, email, lastName, firstName, patronymic } = registerDto;

    const isExistsUser = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (isExistsUser) {
      throw new ConflictException('User with this email already exists');
    }

    const hashPassword = await bcrypt.hash(password, 10);
    const { password: _, ...user } = await this.prisma.user.create({
      data: {
        email,
        password: hashPassword,
        lastName,
        firstName,
        patronymic,
      },
    });

    return user;
  }

  async login(loginDto: LoginDto) {}

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
