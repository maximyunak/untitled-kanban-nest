import { PrismaService } from 'src/prisma/prisma.service';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    findOne(id: number): import("../../generated/prisma/models").Prisma__UsersClient<{
        id: number;
        email: string;
        password: string;
        firstName: string;
        lastName: string;
        patronymic: string | null;
        createdAt: Date;
        updatedAt: Date;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    findByEmail(email: string): Promise<{
        id: number;
        email: string;
        password: string;
        firstName: string;
        lastName: string;
        patronymic: string | null;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
}
