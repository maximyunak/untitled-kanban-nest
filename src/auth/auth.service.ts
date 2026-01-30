import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { ms } from 'src/utils/ms.util';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
    private config: ConfigService,
  ) {}

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

  async login(loginDto: LoginDto) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: loginDto.email,
      },
    });

    if (!user) {
      throw new UnauthorizedException();
    }
    if (!(await bcrypt.compare(loginDto.password, user.password))) {
      throw new UnauthorizedException();
    }

    const payload = {
      id: user.id,
      email: user.email,
    };

    const refreshToken = await this.jwtService.sign(payload, {
      secret: this.config.get('REFRESH_SECRET'),
      expiresIn: this.config.get('JWT_REFRESH_TTL'),
    });

    const accessToken = await this.jwtService.sign(payload, {
      secret: this.config.get('ACCESS_SECRET'),
      expiresIn: this.config.get('JWT_ACCESS_TTL'),
    });

    const hashToken = await bcrypt.hashSync(refreshToken, 10);

    console.log(refreshToken, accessToken);
    return;
  }

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
