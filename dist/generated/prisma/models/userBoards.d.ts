import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
export type userBoardsModel = runtime.Types.Result.DefaultSelection<Prisma.$userBoardsPayload>;
export type AggregateUserBoards = {
    _count: UserBoardsCountAggregateOutputType | null;
    _avg: UserBoardsAvgAggregateOutputType | null;
    _sum: UserBoardsSumAggregateOutputType | null;
    _min: UserBoardsMinAggregateOutputType | null;
    _max: UserBoardsMaxAggregateOutputType | null;
};
export type UserBoardsAvgAggregateOutputType = {
    userId: number | null;
    boardId: number | null;
};
export type UserBoardsSumAggregateOutputType = {
    userId: number | null;
    boardId: number | null;
};
export type UserBoardsMinAggregateOutputType = {
    userId: number | null;
    boardId: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type UserBoardsMaxAggregateOutputType = {
    userId: number | null;
    boardId: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type UserBoardsCountAggregateOutputType = {
    userId: number;
    boardId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type UserBoardsAvgAggregateInputType = {
    userId?: true;
    boardId?: true;
};
export type UserBoardsSumAggregateInputType = {
    userId?: true;
    boardId?: true;
};
export type UserBoardsMinAggregateInputType = {
    userId?: true;
    boardId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type UserBoardsMaxAggregateInputType = {
    userId?: true;
    boardId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type UserBoardsCountAggregateInputType = {
    userId?: true;
    boardId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type UserBoardsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.userBoardsWhereInput;
    orderBy?: Prisma.userBoardsOrderByWithRelationInput | Prisma.userBoardsOrderByWithRelationInput[];
    cursor?: Prisma.userBoardsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | UserBoardsCountAggregateInputType;
    _avg?: UserBoardsAvgAggregateInputType;
    _sum?: UserBoardsSumAggregateInputType;
    _min?: UserBoardsMinAggregateInputType;
    _max?: UserBoardsMaxAggregateInputType;
};
export type GetUserBoardsAggregateType<T extends UserBoardsAggregateArgs> = {
    [P in keyof T & keyof AggregateUserBoards]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUserBoards[P]> : Prisma.GetScalarType<T[P], AggregateUserBoards[P]>;
};
export type userBoardsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.userBoardsWhereInput;
    orderBy?: Prisma.userBoardsOrderByWithAggregationInput | Prisma.userBoardsOrderByWithAggregationInput[];
    by: Prisma.UserBoardsScalarFieldEnum[] | Prisma.UserBoardsScalarFieldEnum;
    having?: Prisma.userBoardsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserBoardsCountAggregateInputType | true;
    _avg?: UserBoardsAvgAggregateInputType;
    _sum?: UserBoardsSumAggregateInputType;
    _min?: UserBoardsMinAggregateInputType;
    _max?: UserBoardsMaxAggregateInputType;
};
export type UserBoardsGroupByOutputType = {
    userId: number;
    boardId: number;
    createdAt: Date;
    updatedAt: Date;
    _count: UserBoardsCountAggregateOutputType | null;
    _avg: UserBoardsAvgAggregateOutputType | null;
    _sum: UserBoardsSumAggregateOutputType | null;
    _min: UserBoardsMinAggregateOutputType | null;
    _max: UserBoardsMaxAggregateOutputType | null;
};
type GetUserBoardsGroupByPayload<T extends userBoardsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UserBoardsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UserBoardsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UserBoardsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UserBoardsGroupByOutputType[P]>;
}>>;
export type userBoardsWhereInput = {
    AND?: Prisma.userBoardsWhereInput | Prisma.userBoardsWhereInput[];
    OR?: Prisma.userBoardsWhereInput[];
    NOT?: Prisma.userBoardsWhereInput | Prisma.userBoardsWhereInput[];
    userId?: Prisma.IntFilter<"userBoards"> | number;
    boardId?: Prisma.IntFilter<"userBoards"> | number;
    createdAt?: Prisma.DateTimeFilter<"userBoards"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"userBoards"> | Date | string;
    user?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.UsersWhereInput>;
    board?: Prisma.XOR<Prisma.BoardsScalarRelationFilter, Prisma.BoardsWhereInput>;
};
export type userBoardsOrderByWithRelationInput = {
    userId?: Prisma.SortOrder;
    boardId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    user?: Prisma.UsersOrderByWithRelationInput;
    board?: Prisma.BoardsOrderByWithRelationInput;
};
export type userBoardsWhereUniqueInput = Prisma.AtLeast<{
    userId_boardId?: Prisma.userBoardsUserIdBoardIdCompoundUniqueInput;
    AND?: Prisma.userBoardsWhereInput | Prisma.userBoardsWhereInput[];
    OR?: Prisma.userBoardsWhereInput[];
    NOT?: Prisma.userBoardsWhereInput | Prisma.userBoardsWhereInput[];
    userId?: Prisma.IntFilter<"userBoards"> | number;
    boardId?: Prisma.IntFilter<"userBoards"> | number;
    createdAt?: Prisma.DateTimeFilter<"userBoards"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"userBoards"> | Date | string;
    user?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.UsersWhereInput>;
    board?: Prisma.XOR<Prisma.BoardsScalarRelationFilter, Prisma.BoardsWhereInput>;
}, "userId_boardId">;
export type userBoardsOrderByWithAggregationInput = {
    userId?: Prisma.SortOrder;
    boardId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.userBoardsCountOrderByAggregateInput;
    _avg?: Prisma.userBoardsAvgOrderByAggregateInput;
    _max?: Prisma.userBoardsMaxOrderByAggregateInput;
    _min?: Prisma.userBoardsMinOrderByAggregateInput;
    _sum?: Prisma.userBoardsSumOrderByAggregateInput;
};
export type userBoardsScalarWhereWithAggregatesInput = {
    AND?: Prisma.userBoardsScalarWhereWithAggregatesInput | Prisma.userBoardsScalarWhereWithAggregatesInput[];
    OR?: Prisma.userBoardsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.userBoardsScalarWhereWithAggregatesInput | Prisma.userBoardsScalarWhereWithAggregatesInput[];
    userId?: Prisma.IntWithAggregatesFilter<"userBoards"> | number;
    boardId?: Prisma.IntWithAggregatesFilter<"userBoards"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"userBoards"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"userBoards"> | Date | string;
};
export type userBoardsCreateInput = {
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UsersCreateNestedOneWithoutUserBoardsInput;
    board: Prisma.BoardsCreateNestedOneWithoutUserBoardsInput;
};
export type userBoardsUncheckedCreateInput = {
    userId: number;
    boardId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type userBoardsUpdateInput = {
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UsersUpdateOneRequiredWithoutUserBoardsNestedInput;
    board?: Prisma.BoardsUpdateOneRequiredWithoutUserBoardsNestedInput;
};
export type userBoardsUncheckedUpdateInput = {
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    boardId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type userBoardsCreateManyInput = {
    userId: number;
    boardId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type userBoardsUpdateManyMutationInput = {
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type userBoardsUncheckedUpdateManyInput = {
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    boardId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserBoardsListRelationFilter = {
    every?: Prisma.userBoardsWhereInput;
    some?: Prisma.userBoardsWhereInput;
    none?: Prisma.userBoardsWhereInput;
};
export type userBoardsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type userBoardsUserIdBoardIdCompoundUniqueInput = {
    userId: number;
    boardId: number;
};
export type userBoardsCountOrderByAggregateInput = {
    userId?: Prisma.SortOrder;
    boardId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type userBoardsAvgOrderByAggregateInput = {
    userId?: Prisma.SortOrder;
    boardId?: Prisma.SortOrder;
};
export type userBoardsMaxOrderByAggregateInput = {
    userId?: Prisma.SortOrder;
    boardId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type userBoardsMinOrderByAggregateInput = {
    userId?: Prisma.SortOrder;
    boardId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type userBoardsSumOrderByAggregateInput = {
    userId?: Prisma.SortOrder;
    boardId?: Prisma.SortOrder;
};
export type userBoardsCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.userBoardsCreateWithoutUserInput, Prisma.userBoardsUncheckedCreateWithoutUserInput> | Prisma.userBoardsCreateWithoutUserInput[] | Prisma.userBoardsUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.userBoardsCreateOrConnectWithoutUserInput | Prisma.userBoardsCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.userBoardsCreateManyUserInputEnvelope;
    connect?: Prisma.userBoardsWhereUniqueInput | Prisma.userBoardsWhereUniqueInput[];
};
export type userBoardsUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.userBoardsCreateWithoutUserInput, Prisma.userBoardsUncheckedCreateWithoutUserInput> | Prisma.userBoardsCreateWithoutUserInput[] | Prisma.userBoardsUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.userBoardsCreateOrConnectWithoutUserInput | Prisma.userBoardsCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.userBoardsCreateManyUserInputEnvelope;
    connect?: Prisma.userBoardsWhereUniqueInput | Prisma.userBoardsWhereUniqueInput[];
};
export type userBoardsUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.userBoardsCreateWithoutUserInput, Prisma.userBoardsUncheckedCreateWithoutUserInput> | Prisma.userBoardsCreateWithoutUserInput[] | Prisma.userBoardsUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.userBoardsCreateOrConnectWithoutUserInput | Prisma.userBoardsCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.userBoardsUpsertWithWhereUniqueWithoutUserInput | Prisma.userBoardsUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.userBoardsCreateManyUserInputEnvelope;
    set?: Prisma.userBoardsWhereUniqueInput | Prisma.userBoardsWhereUniqueInput[];
    disconnect?: Prisma.userBoardsWhereUniqueInput | Prisma.userBoardsWhereUniqueInput[];
    delete?: Prisma.userBoardsWhereUniqueInput | Prisma.userBoardsWhereUniqueInput[];
    connect?: Prisma.userBoardsWhereUniqueInput | Prisma.userBoardsWhereUniqueInput[];
    update?: Prisma.userBoardsUpdateWithWhereUniqueWithoutUserInput | Prisma.userBoardsUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.userBoardsUpdateManyWithWhereWithoutUserInput | Prisma.userBoardsUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.userBoardsScalarWhereInput | Prisma.userBoardsScalarWhereInput[];
};
export type userBoardsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.userBoardsCreateWithoutUserInput, Prisma.userBoardsUncheckedCreateWithoutUserInput> | Prisma.userBoardsCreateWithoutUserInput[] | Prisma.userBoardsUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.userBoardsCreateOrConnectWithoutUserInput | Prisma.userBoardsCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.userBoardsUpsertWithWhereUniqueWithoutUserInput | Prisma.userBoardsUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.userBoardsCreateManyUserInputEnvelope;
    set?: Prisma.userBoardsWhereUniqueInput | Prisma.userBoardsWhereUniqueInput[];
    disconnect?: Prisma.userBoardsWhereUniqueInput | Prisma.userBoardsWhereUniqueInput[];
    delete?: Prisma.userBoardsWhereUniqueInput | Prisma.userBoardsWhereUniqueInput[];
    connect?: Prisma.userBoardsWhereUniqueInput | Prisma.userBoardsWhereUniqueInput[];
    update?: Prisma.userBoardsUpdateWithWhereUniqueWithoutUserInput | Prisma.userBoardsUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.userBoardsUpdateManyWithWhereWithoutUserInput | Prisma.userBoardsUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.userBoardsScalarWhereInput | Prisma.userBoardsScalarWhereInput[];
};
export type userBoardsCreateNestedManyWithoutBoardInput = {
    create?: Prisma.XOR<Prisma.userBoardsCreateWithoutBoardInput, Prisma.userBoardsUncheckedCreateWithoutBoardInput> | Prisma.userBoardsCreateWithoutBoardInput[] | Prisma.userBoardsUncheckedCreateWithoutBoardInput[];
    connectOrCreate?: Prisma.userBoardsCreateOrConnectWithoutBoardInput | Prisma.userBoardsCreateOrConnectWithoutBoardInput[];
    createMany?: Prisma.userBoardsCreateManyBoardInputEnvelope;
    connect?: Prisma.userBoardsWhereUniqueInput | Prisma.userBoardsWhereUniqueInput[];
};
export type userBoardsUncheckedCreateNestedManyWithoutBoardInput = {
    create?: Prisma.XOR<Prisma.userBoardsCreateWithoutBoardInput, Prisma.userBoardsUncheckedCreateWithoutBoardInput> | Prisma.userBoardsCreateWithoutBoardInput[] | Prisma.userBoardsUncheckedCreateWithoutBoardInput[];
    connectOrCreate?: Prisma.userBoardsCreateOrConnectWithoutBoardInput | Prisma.userBoardsCreateOrConnectWithoutBoardInput[];
    createMany?: Prisma.userBoardsCreateManyBoardInputEnvelope;
    connect?: Prisma.userBoardsWhereUniqueInput | Prisma.userBoardsWhereUniqueInput[];
};
export type userBoardsUpdateManyWithoutBoardNestedInput = {
    create?: Prisma.XOR<Prisma.userBoardsCreateWithoutBoardInput, Prisma.userBoardsUncheckedCreateWithoutBoardInput> | Prisma.userBoardsCreateWithoutBoardInput[] | Prisma.userBoardsUncheckedCreateWithoutBoardInput[];
    connectOrCreate?: Prisma.userBoardsCreateOrConnectWithoutBoardInput | Prisma.userBoardsCreateOrConnectWithoutBoardInput[];
    upsert?: Prisma.userBoardsUpsertWithWhereUniqueWithoutBoardInput | Prisma.userBoardsUpsertWithWhereUniqueWithoutBoardInput[];
    createMany?: Prisma.userBoardsCreateManyBoardInputEnvelope;
    set?: Prisma.userBoardsWhereUniqueInput | Prisma.userBoardsWhereUniqueInput[];
    disconnect?: Prisma.userBoardsWhereUniqueInput | Prisma.userBoardsWhereUniqueInput[];
    delete?: Prisma.userBoardsWhereUniqueInput | Prisma.userBoardsWhereUniqueInput[];
    connect?: Prisma.userBoardsWhereUniqueInput | Prisma.userBoardsWhereUniqueInput[];
    update?: Prisma.userBoardsUpdateWithWhereUniqueWithoutBoardInput | Prisma.userBoardsUpdateWithWhereUniqueWithoutBoardInput[];
    updateMany?: Prisma.userBoardsUpdateManyWithWhereWithoutBoardInput | Prisma.userBoardsUpdateManyWithWhereWithoutBoardInput[];
    deleteMany?: Prisma.userBoardsScalarWhereInput | Prisma.userBoardsScalarWhereInput[];
};
export type userBoardsUncheckedUpdateManyWithoutBoardNestedInput = {
    create?: Prisma.XOR<Prisma.userBoardsCreateWithoutBoardInput, Prisma.userBoardsUncheckedCreateWithoutBoardInput> | Prisma.userBoardsCreateWithoutBoardInput[] | Prisma.userBoardsUncheckedCreateWithoutBoardInput[];
    connectOrCreate?: Prisma.userBoardsCreateOrConnectWithoutBoardInput | Prisma.userBoardsCreateOrConnectWithoutBoardInput[];
    upsert?: Prisma.userBoardsUpsertWithWhereUniqueWithoutBoardInput | Prisma.userBoardsUpsertWithWhereUniqueWithoutBoardInput[];
    createMany?: Prisma.userBoardsCreateManyBoardInputEnvelope;
    set?: Prisma.userBoardsWhereUniqueInput | Prisma.userBoardsWhereUniqueInput[];
    disconnect?: Prisma.userBoardsWhereUniqueInput | Prisma.userBoardsWhereUniqueInput[];
    delete?: Prisma.userBoardsWhereUniqueInput | Prisma.userBoardsWhereUniqueInput[];
    connect?: Prisma.userBoardsWhereUniqueInput | Prisma.userBoardsWhereUniqueInput[];
    update?: Prisma.userBoardsUpdateWithWhereUniqueWithoutBoardInput | Prisma.userBoardsUpdateWithWhereUniqueWithoutBoardInput[];
    updateMany?: Prisma.userBoardsUpdateManyWithWhereWithoutBoardInput | Prisma.userBoardsUpdateManyWithWhereWithoutBoardInput[];
    deleteMany?: Prisma.userBoardsScalarWhereInput | Prisma.userBoardsScalarWhereInput[];
};
export type userBoardsCreateWithoutUserInput = {
    createdAt?: Date | string;
    updatedAt?: Date | string;
    board: Prisma.BoardsCreateNestedOneWithoutUserBoardsInput;
};
export type userBoardsUncheckedCreateWithoutUserInput = {
    boardId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type userBoardsCreateOrConnectWithoutUserInput = {
    where: Prisma.userBoardsWhereUniqueInput;
    create: Prisma.XOR<Prisma.userBoardsCreateWithoutUserInput, Prisma.userBoardsUncheckedCreateWithoutUserInput>;
};
export type userBoardsCreateManyUserInputEnvelope = {
    data: Prisma.userBoardsCreateManyUserInput | Prisma.userBoardsCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type userBoardsUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.userBoardsWhereUniqueInput;
    update: Prisma.XOR<Prisma.userBoardsUpdateWithoutUserInput, Prisma.userBoardsUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.userBoardsCreateWithoutUserInput, Prisma.userBoardsUncheckedCreateWithoutUserInput>;
};
export type userBoardsUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.userBoardsWhereUniqueInput;
    data: Prisma.XOR<Prisma.userBoardsUpdateWithoutUserInput, Prisma.userBoardsUncheckedUpdateWithoutUserInput>;
};
export type userBoardsUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.userBoardsScalarWhereInput;
    data: Prisma.XOR<Prisma.userBoardsUpdateManyMutationInput, Prisma.userBoardsUncheckedUpdateManyWithoutUserInput>;
};
export type userBoardsScalarWhereInput = {
    AND?: Prisma.userBoardsScalarWhereInput | Prisma.userBoardsScalarWhereInput[];
    OR?: Prisma.userBoardsScalarWhereInput[];
    NOT?: Prisma.userBoardsScalarWhereInput | Prisma.userBoardsScalarWhereInput[];
    userId?: Prisma.IntFilter<"userBoards"> | number;
    boardId?: Prisma.IntFilter<"userBoards"> | number;
    createdAt?: Prisma.DateTimeFilter<"userBoards"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"userBoards"> | Date | string;
};
export type userBoardsCreateWithoutBoardInput = {
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UsersCreateNestedOneWithoutUserBoardsInput;
};
export type userBoardsUncheckedCreateWithoutBoardInput = {
    userId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type userBoardsCreateOrConnectWithoutBoardInput = {
    where: Prisma.userBoardsWhereUniqueInput;
    create: Prisma.XOR<Prisma.userBoardsCreateWithoutBoardInput, Prisma.userBoardsUncheckedCreateWithoutBoardInput>;
};
export type userBoardsCreateManyBoardInputEnvelope = {
    data: Prisma.userBoardsCreateManyBoardInput | Prisma.userBoardsCreateManyBoardInput[];
    skipDuplicates?: boolean;
};
export type userBoardsUpsertWithWhereUniqueWithoutBoardInput = {
    where: Prisma.userBoardsWhereUniqueInput;
    update: Prisma.XOR<Prisma.userBoardsUpdateWithoutBoardInput, Prisma.userBoardsUncheckedUpdateWithoutBoardInput>;
    create: Prisma.XOR<Prisma.userBoardsCreateWithoutBoardInput, Prisma.userBoardsUncheckedCreateWithoutBoardInput>;
};
export type userBoardsUpdateWithWhereUniqueWithoutBoardInput = {
    where: Prisma.userBoardsWhereUniqueInput;
    data: Prisma.XOR<Prisma.userBoardsUpdateWithoutBoardInput, Prisma.userBoardsUncheckedUpdateWithoutBoardInput>;
};
export type userBoardsUpdateManyWithWhereWithoutBoardInput = {
    where: Prisma.userBoardsScalarWhereInput;
    data: Prisma.XOR<Prisma.userBoardsUpdateManyMutationInput, Prisma.userBoardsUncheckedUpdateManyWithoutBoardInput>;
};
export type userBoardsCreateManyUserInput = {
    boardId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type userBoardsUpdateWithoutUserInput = {
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    board?: Prisma.BoardsUpdateOneRequiredWithoutUserBoardsNestedInput;
};
export type userBoardsUncheckedUpdateWithoutUserInput = {
    boardId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type userBoardsUncheckedUpdateManyWithoutUserInput = {
    boardId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type userBoardsCreateManyBoardInput = {
    userId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type userBoardsUpdateWithoutBoardInput = {
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UsersUpdateOneRequiredWithoutUserBoardsNestedInput;
};
export type userBoardsUncheckedUpdateWithoutBoardInput = {
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type userBoardsUncheckedUpdateManyWithoutBoardInput = {
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type userBoardsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    userId?: boolean;
    boardId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UsersDefaultArgs<ExtArgs>;
    board?: boolean | Prisma.BoardsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["userBoards"]>;
export type userBoardsSelectScalar = {
    userId?: boolean;
    boardId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type userBoardsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"userId" | "boardId" | "createdAt" | "updatedAt", ExtArgs["result"]["userBoards"]>;
export type userBoardsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UsersDefaultArgs<ExtArgs>;
    board?: boolean | Prisma.BoardsDefaultArgs<ExtArgs>;
};
export type $userBoardsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "userBoards";
    objects: {
        user: Prisma.$UsersPayload<ExtArgs>;
        board: Prisma.$BoardsPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        userId: number;
        boardId: number;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["userBoards"]>;
    composites: {};
};
export type userBoardsGetPayload<S extends boolean | null | undefined | userBoardsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$userBoardsPayload, S>;
export type userBoardsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<userBoardsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserBoardsCountAggregateInputType | true;
};
export interface userBoardsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['userBoards'];
        meta: {
            name: 'userBoards';
        };
    };
    findUnique<T extends userBoardsFindUniqueArgs>(args: Prisma.SelectSubset<T, userBoardsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__userBoardsClient<runtime.Types.Result.GetResult<Prisma.$userBoardsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends userBoardsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, userBoardsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__userBoardsClient<runtime.Types.Result.GetResult<Prisma.$userBoardsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends userBoardsFindFirstArgs>(args?: Prisma.SelectSubset<T, userBoardsFindFirstArgs<ExtArgs>>): Prisma.Prisma__userBoardsClient<runtime.Types.Result.GetResult<Prisma.$userBoardsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends userBoardsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, userBoardsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__userBoardsClient<runtime.Types.Result.GetResult<Prisma.$userBoardsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends userBoardsFindManyArgs>(args?: Prisma.SelectSubset<T, userBoardsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$userBoardsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends userBoardsCreateArgs>(args: Prisma.SelectSubset<T, userBoardsCreateArgs<ExtArgs>>): Prisma.Prisma__userBoardsClient<runtime.Types.Result.GetResult<Prisma.$userBoardsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends userBoardsCreateManyArgs>(args?: Prisma.SelectSubset<T, userBoardsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends userBoardsDeleteArgs>(args: Prisma.SelectSubset<T, userBoardsDeleteArgs<ExtArgs>>): Prisma.Prisma__userBoardsClient<runtime.Types.Result.GetResult<Prisma.$userBoardsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends userBoardsUpdateArgs>(args: Prisma.SelectSubset<T, userBoardsUpdateArgs<ExtArgs>>): Prisma.Prisma__userBoardsClient<runtime.Types.Result.GetResult<Prisma.$userBoardsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends userBoardsDeleteManyArgs>(args?: Prisma.SelectSubset<T, userBoardsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends userBoardsUpdateManyArgs>(args: Prisma.SelectSubset<T, userBoardsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends userBoardsUpsertArgs>(args: Prisma.SelectSubset<T, userBoardsUpsertArgs<ExtArgs>>): Prisma.Prisma__userBoardsClient<runtime.Types.Result.GetResult<Prisma.$userBoardsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends userBoardsCountArgs>(args?: Prisma.Subset<T, userBoardsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UserBoardsCountAggregateOutputType> : number>;
    aggregate<T extends UserBoardsAggregateArgs>(args: Prisma.Subset<T, UserBoardsAggregateArgs>): Prisma.PrismaPromise<GetUserBoardsAggregateType<T>>;
    groupBy<T extends userBoardsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: userBoardsGroupByArgs['orderBy'];
    } : {
        orderBy?: userBoardsGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, userBoardsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserBoardsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: userBoardsFieldRefs;
}
export interface Prisma__userBoardsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UsersDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UsersDefaultArgs<ExtArgs>>): Prisma.Prisma__UsersClient<runtime.Types.Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    board<T extends Prisma.BoardsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BoardsDefaultArgs<ExtArgs>>): Prisma.Prisma__BoardsClient<runtime.Types.Result.GetResult<Prisma.$BoardsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface userBoardsFieldRefs {
    readonly userId: Prisma.FieldRef<"userBoards", 'Int'>;
    readonly boardId: Prisma.FieldRef<"userBoards", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"userBoards", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"userBoards", 'DateTime'>;
}
export type userBoardsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.userBoardsSelect<ExtArgs> | null;
    omit?: Prisma.userBoardsOmit<ExtArgs> | null;
    include?: Prisma.userBoardsInclude<ExtArgs> | null;
    where: Prisma.userBoardsWhereUniqueInput;
};
export type userBoardsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.userBoardsSelect<ExtArgs> | null;
    omit?: Prisma.userBoardsOmit<ExtArgs> | null;
    include?: Prisma.userBoardsInclude<ExtArgs> | null;
    where: Prisma.userBoardsWhereUniqueInput;
};
export type userBoardsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.userBoardsSelect<ExtArgs> | null;
    omit?: Prisma.userBoardsOmit<ExtArgs> | null;
    include?: Prisma.userBoardsInclude<ExtArgs> | null;
    where?: Prisma.userBoardsWhereInput;
    orderBy?: Prisma.userBoardsOrderByWithRelationInput | Prisma.userBoardsOrderByWithRelationInput[];
    cursor?: Prisma.userBoardsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserBoardsScalarFieldEnum | Prisma.UserBoardsScalarFieldEnum[];
};
export type userBoardsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.userBoardsSelect<ExtArgs> | null;
    omit?: Prisma.userBoardsOmit<ExtArgs> | null;
    include?: Prisma.userBoardsInclude<ExtArgs> | null;
    where?: Prisma.userBoardsWhereInput;
    orderBy?: Prisma.userBoardsOrderByWithRelationInput | Prisma.userBoardsOrderByWithRelationInput[];
    cursor?: Prisma.userBoardsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserBoardsScalarFieldEnum | Prisma.UserBoardsScalarFieldEnum[];
};
export type userBoardsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.userBoardsSelect<ExtArgs> | null;
    omit?: Prisma.userBoardsOmit<ExtArgs> | null;
    include?: Prisma.userBoardsInclude<ExtArgs> | null;
    where?: Prisma.userBoardsWhereInput;
    orderBy?: Prisma.userBoardsOrderByWithRelationInput | Prisma.userBoardsOrderByWithRelationInput[];
    cursor?: Prisma.userBoardsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserBoardsScalarFieldEnum | Prisma.UserBoardsScalarFieldEnum[];
};
export type userBoardsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.userBoardsSelect<ExtArgs> | null;
    omit?: Prisma.userBoardsOmit<ExtArgs> | null;
    include?: Prisma.userBoardsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.userBoardsCreateInput, Prisma.userBoardsUncheckedCreateInput>;
};
export type userBoardsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.userBoardsCreateManyInput | Prisma.userBoardsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type userBoardsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.userBoardsSelect<ExtArgs> | null;
    omit?: Prisma.userBoardsOmit<ExtArgs> | null;
    include?: Prisma.userBoardsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.userBoardsUpdateInput, Prisma.userBoardsUncheckedUpdateInput>;
    where: Prisma.userBoardsWhereUniqueInput;
};
export type userBoardsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.userBoardsUpdateManyMutationInput, Prisma.userBoardsUncheckedUpdateManyInput>;
    where?: Prisma.userBoardsWhereInput;
    limit?: number;
};
export type userBoardsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.userBoardsSelect<ExtArgs> | null;
    omit?: Prisma.userBoardsOmit<ExtArgs> | null;
    include?: Prisma.userBoardsInclude<ExtArgs> | null;
    where: Prisma.userBoardsWhereUniqueInput;
    create: Prisma.XOR<Prisma.userBoardsCreateInput, Prisma.userBoardsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.userBoardsUpdateInput, Prisma.userBoardsUncheckedUpdateInput>;
};
export type userBoardsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.userBoardsSelect<ExtArgs> | null;
    omit?: Prisma.userBoardsOmit<ExtArgs> | null;
    include?: Prisma.userBoardsInclude<ExtArgs> | null;
    where: Prisma.userBoardsWhereUniqueInput;
};
export type userBoardsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.userBoardsWhereInput;
    limit?: number;
};
export type userBoardsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.userBoardsSelect<ExtArgs> | null;
    omit?: Prisma.userBoardsOmit<ExtArgs> | null;
    include?: Prisma.userBoardsInclude<ExtArgs> | null;
};
export {};
