import { PrismaService } from 'src/prisma/prisma.service';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    findOne(id: number): import("../../generated/prisma/models").Prisma__UserClient<{
        email: string;
        password: string;
        firstName: string;
        lastName: string;
        patronymic: string | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
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
