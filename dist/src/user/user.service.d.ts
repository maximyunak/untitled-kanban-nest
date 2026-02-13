import { PrismaService } from 'src/prisma/prisma.service';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    findOne(id: number): Promise<{
        email: string;
        firstName: string;
        lastName: string;
        patronymic: string | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findByEmail(email: string): Promise<{
        email: string;
        password: string;
        firstName: string;
        lastName: string;
        patronymic: string | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
}
