import { RegisterDto } from './dto/register.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginDto } from './dto/login.dto';
import { ConfigService } from '@nestjs/config';
import { UserService } from 'src/user/user.service';
import { TokenService } from 'src/auth/token.service';
import { Request, Response } from 'express';
import { Profile } from 'passport-yandex';
export declare class AuthService {
    private prisma;
    private config;
    private userService;
    private tokenService;
    constructor(prisma: PrismaService, config: ConfigService, userService: UserService, tokenService: TokenService);
    register(res: Response, registerDto: RegisterDto): Promise<{
        accessToken: string;
    }>;
    yandexRegister(profile: Profile): import("../../generated/prisma/models").Prisma__UserClient<{
        email: string | null;
        password: string | null;
        firstName: string;
        lastName: string;
        patronymic: string | null;
        id: number;
        yandexId: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    yandexLogin(res: Response, id: number): Promise<{
        accessToken: string;
    }>;
    login(res: Response, loginDto: LoginDto): Promise<{
        accessToken: string;
    }>;
    refresh(res: Response, req: Request): Promise<{
        accessToken: string;
    }>;
    logout(res: Response): void;
    private auth;
    private setCookies;
}
