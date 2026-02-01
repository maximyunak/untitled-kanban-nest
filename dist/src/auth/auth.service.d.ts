import { RegisterDto } from './dto/register.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginDto } from './dto/login.dto';
import { ConfigService } from '@nestjs/config';
import { UserService } from 'src/user/user.service';
import { TokenService } from 'src/token/token.service';
import { Request, Response } from 'express';
export declare class AuthService {
    private prisma;
    private config;
    private userService;
    private tokenService;
    constructor(prisma: PrismaService, config: ConfigService, userService: UserService, tokenService: TokenService);
    register(res: Response, registerDto: RegisterDto): Promise<{
        accessToken: string;
    }>;
    login(res: Response, loginDto: LoginDto): Promise<{
        accessToken: string;
    }>;
    refresh(req: Request, res: Response): Promise<{
        accessToken: string;
    }>;
    logout(res: Response): void;
    private auth;
    private setCookie;
}
