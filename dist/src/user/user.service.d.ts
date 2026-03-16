import { PrismaService } from 'src/prisma/prisma.service';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    findOne(id: number): Promise<{
        id: number;
        yandexId: string | null;
        email: string | null;
        firstName: string;
        lastName: string;
        patronymic: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findByEmail(email: string): import("../../generated/prisma/models").Prisma__UserClient<{
        id: number;
        yandexId: string | null;
        email: string | null;
        password: string | null;
        firstName: string;
        lastName: string;
        patronymic: string | null;
        createdAt: Date;
        updatedAt: Date;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    findByYandexId(yandexId: string): import("../../generated/prisma/models").Prisma__UserClient<{
        id: number;
        yandexId: string | null;
        email: string | null;
        password: string | null;
        firstName: string;
        lastName: string;
        patronymic: string | null;
        createdAt: Date;
        updatedAt: Date;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    me(id: number): Promise<{
        user: ({
            boards: {
                id: number;
                createdAt: Date;
                updatedAt: Date;
                name: string;
                description: string | null;
                creatorId: number;
            }[];
        } & {
            id: number;
            yandexId: string | null;
            email: string | null;
            firstName: string;
            lastName: string;
            patronymic: string | null;
            createdAt: Date;
            updatedAt: Date;
        }) | null;
    }>;
}
