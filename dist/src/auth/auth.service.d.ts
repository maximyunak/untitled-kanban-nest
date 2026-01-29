import { RegisterDto } from "./dto/register.dto";
import { PrismaService } from "src/prisma/prisma.service";
export declare class AuthService {
    private prisma;
    constructor(prisma: PrismaService);
    register(registerDto: RegisterDto): Promise<{
        email: string;
        password: string;
        firstName: string;
        lastName: string;
        patronymic: string | null;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number): string;
    remove(id: number): string;
}
