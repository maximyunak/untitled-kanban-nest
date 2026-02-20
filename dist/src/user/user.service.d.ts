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
    me(id: number): Promise<{
        user: {
            assigneeTasks: {
                id: number;
                name: string;
                description: string | null;
                isCompleted: boolean;
                position: number;
                deadline: Date | null;
                creatorId: number;
                assigneeId: number | null;
                columnId: number;
                createdAt: Date;
                updatedAt: Date;
                boardId: number;
            }[] | undefined;
            boards?: {
                description: string | null;
                id: number;
                createdAt: Date;
                updatedAt: Date;
                name: string;
                creatorId: number;
            }[] | undefined;
            email?: string | undefined;
            firstName?: string | undefined;
            lastName?: string | undefined;
            patronymic?: string | null | undefined;
            id?: number | undefined;
            createdAt?: Date | undefined;
            updatedAt?: Date | undefined;
        };
    }>;
}
