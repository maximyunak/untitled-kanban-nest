import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import type { Request, Response } from 'express';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(res: Response, registerDto: RegisterDto): Promise<{
        accessToken: string;
    }>;
    login(res: Response, loginDto: LoginDto): Promise<{
        accessToken: string;
    }>;
    logout(res: Response): void;
    refresh(req: Request): Promise<{
        accessToken: string;
    }>;
}
