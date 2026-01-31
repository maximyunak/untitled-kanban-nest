import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
export type BoardsModel = runtime.Types.Result.DefaultSelection<Prisma.$BoardsPayload>;
export type AggregateBoards = {
    _count: BoardsCountAggregateOutputType | null;
    _avg: BoardsAvgAggregateOutputType | null;
    _sum: BoardsSumAggregateOutputType | null;
    _min: BoardsMinAggregateOutputType | null;
    _max: BoardsMaxAggregateOutputType | null;
};
export type BoardsAvgAggregateOutputType = {
    id: number | null;
    creatorId: number | null;
};
export type BoardsSumAggregateOutputType = {
    id: number | null;
    creatorId: number | null;
};
export type BoardsMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    description: string | null;
    creatorId: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type BoardsMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    description: string | null;
    creatorId: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type BoardsCountAggregateOutputType = {
    id: number;
    name: number;
    description: number;
    creatorId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type BoardsAvgAggregateInputType = {
    id?: true;
    creatorId?: true;
};
export type BoardsSumAggregateInputType = {
    id?: true;
    creatorId?: true;
};
export type BoardsMinAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    creatorId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type BoardsMaxAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    creatorId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type BoardsCountAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    creatorId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type BoardsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BoardsWhereInput;
    orderBy?: Prisma.BoardsOrderByWithRelationInput | Prisma.BoardsOrderByWithRelationInput[];
    cursor?: Prisma.BoardsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | BoardsCountAggregateInputType;
    _avg?: BoardsAvgAggregateInputType;
    _sum?: BoardsSumAggregateInputType;
    _min?: BoardsMinAggregateInputType;
    _max?: BoardsMaxAggregateInputType;
};
export type GetBoardsAggregateType<T extends BoardsAggregateArgs> = {
    [P in keyof T & keyof AggregateBoards]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBoards[P]> : Prisma.GetScalarType<T[P], AggregateBoards[P]>;
};
export type BoardsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BoardsWhereInput;
    orderBy?: Prisma.BoardsOrderByWithAggregationInput | Prisma.BoardsOrderByWithAggregationInput[];
    by: Prisma.BoardsScalarFieldEnum[] | Prisma.BoardsScalarFieldEnum;
    having?: Prisma.BoardsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BoardsCountAggregateInputType | true;
    _avg?: BoardsAvgAggregateInputType;
    _sum?: BoardsSumAggregateInputType;
    _min?: BoardsMinAggregateInputType;
    _max?: BoardsMaxAggregateInputType;
};
export type BoardsGroupByOutputType = {
    id: number;
    name: string;
    description: string | null;
    creatorId: number;
    createdAt: Date;
    updatedAt: Date;
    _count: BoardsCountAggregateOutputType | null;
    _avg: BoardsAvgAggregateOutputType | null;
    _sum: BoardsSumAggregateOutputType | null;
    _min: BoardsMinAggregateOutputType | null;
    _max: BoardsMaxAggregateOutputType | null;
};
type GetBoardsGroupByPayload<T extends BoardsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BoardsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BoardsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BoardsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BoardsGroupByOutputType[P]>;
}>>;
export type BoardsWhereInput = {
    AND?: Prisma.BoardsWhereInput | Prisma.BoardsWhereInput[];
    OR?: Prisma.BoardsWhereInput[];
    NOT?: Prisma.BoardsWhereInput | Prisma.BoardsWhereInput[];
    id?: Prisma.IntFilter<"Boards"> | number;
    name?: Prisma.StringFilter<"Boards"> | string;
    description?: Prisma.StringNullableFilter<"Boards"> | string | null;
    creatorId?: Prisma.IntFilter<"Boards"> | number;
    createdAt?: Prisma.DateTimeFilter<"Boards"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Boards"> | Date | string;
    creator?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.UsersWhereInput>;
    columns?: Prisma.ColumnsListRelationFilter;
    userBoards?: Prisma.UserBoardsListRelationFilter;
};
export type BoardsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    creatorId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    creator?: Prisma.UsersOrderByWithRelationInput;
    columns?: Prisma.ColumnsOrderByRelationAggregateInput;
    userBoards?: Prisma.userBoardsOrderByRelationAggregateInput;
    _relevance?: Prisma.BoardsOrderByRelevanceInput;
};
export type BoardsWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.BoardsWhereInput | Prisma.BoardsWhereInput[];
    OR?: Prisma.BoardsWhereInput[];
    NOT?: Prisma.BoardsWhereInput | Prisma.BoardsWhereInput[];
    name?: Prisma.StringFilter<"Boards"> | string;
    description?: Prisma.StringNullableFilter<"Boards"> | string | null;
    creatorId?: Prisma.IntFilter<"Boards"> | number;
    createdAt?: Prisma.DateTimeFilter<"Boards"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Boards"> | Date | string;
    creator?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.UsersWhereInput>;
    columns?: Prisma.ColumnsListRelationFilter;
    userBoards?: Prisma.UserBoardsListRelationFilter;
}, "id">;
export type BoardsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    creatorId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.BoardsCountOrderByAggregateInput;
    _avg?: Prisma.BoardsAvgOrderByAggregateInput;
    _max?: Prisma.BoardsMaxOrderByAggregateInput;
    _min?: Prisma.BoardsMinOrderByAggregateInput;
    _sum?: Prisma.BoardsSumOrderByAggregateInput;
};
export type BoardsScalarWhereWithAggregatesInput = {
    AND?: Prisma.BoardsScalarWhereWithAggregatesInput | Prisma.BoardsScalarWhereWithAggregatesInput[];
    OR?: Prisma.BoardsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BoardsScalarWhereWithAggregatesInput | Prisma.BoardsScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Boards"> | number;
    name?: Prisma.StringWithAggregatesFilter<"Boards"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"Boards"> | string | null;
    creatorId?: Prisma.IntWithAggregatesFilter<"Boards"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Boards"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Boards"> | Date | string;
};
export type BoardsCreateInput = {
    name: string;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    creator: Prisma.UsersCreateNestedOneWithoutBoardsInput;
    columns?: Prisma.ColumnsCreateNestedManyWithoutBoardInput;
    userBoards?: Prisma.userBoardsCreateNestedManyWithoutBoardInput;
};
export type BoardsUncheckedCreateInput = {
    id?: number;
    name: string;
    description?: string | null;
    creatorId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    columns?: Prisma.ColumnsUncheckedCreateNestedManyWithoutBoardInput;
    userBoards?: Prisma.userBoardsUncheckedCreateNestedManyWithoutBoardInput;
};
export type BoardsUpdateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    creator?: Prisma.UsersUpdateOneRequiredWithoutBoardsNestedInput;
    columns?: Prisma.ColumnsUpdateManyWithoutBoardNestedInput;
    userBoards?: Prisma.userBoardsUpdateManyWithoutBoardNestedInput;
};
export type BoardsUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creatorId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    columns?: Prisma.ColumnsUncheckedUpdateManyWithoutBoardNestedInput;
    userBoards?: Prisma.userBoardsUncheckedUpdateManyWithoutBoardNestedInput;
};
export type BoardsCreateManyInput = {
    id?: number;
    name: string;
    description?: string | null;
    creatorId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BoardsUpdateManyMutationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BoardsUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creatorId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BoardsListRelationFilter = {
    every?: Prisma.BoardsWhereInput;
    some?: Prisma.BoardsWhereInput;
    none?: Prisma.BoardsWhereInput;
};
export type BoardsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type BoardsOrderByRelevanceInput = {
    fields: Prisma.BoardsOrderByRelevanceFieldEnum | Prisma.BoardsOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type BoardsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    creatorId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type BoardsAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    creatorId?: Prisma.SortOrder;
};
export type BoardsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    creatorId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type BoardsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    creatorId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type BoardsSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    creatorId?: Prisma.SortOrder;
};
export type BoardsScalarRelationFilter = {
    is?: Prisma.BoardsWhereInput;
    isNot?: Prisma.BoardsWhereInput;
};
export type BoardsCreateNestedManyWithoutCreatorInput = {
    create?: Prisma.XOR<Prisma.BoardsCreateWithoutCreatorInput, Prisma.BoardsUncheckedCreateWithoutCreatorInput> | Prisma.BoardsCreateWithoutCreatorInput[] | Prisma.BoardsUncheckedCreateWithoutCreatorInput[];
    connectOrCreate?: Prisma.BoardsCreateOrConnectWithoutCreatorInput | Prisma.BoardsCreateOrConnectWithoutCreatorInput[];
    createMany?: Prisma.BoardsCreateManyCreatorInputEnvelope;
    connect?: Prisma.BoardsWhereUniqueInput | Prisma.BoardsWhereUniqueInput[];
};
export type BoardsUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: Prisma.XOR<Prisma.BoardsCreateWithoutCreatorInput, Prisma.BoardsUncheckedCreateWithoutCreatorInput> | Prisma.BoardsCreateWithoutCreatorInput[] | Prisma.BoardsUncheckedCreateWithoutCreatorInput[];
    connectOrCreate?: Prisma.BoardsCreateOrConnectWithoutCreatorInput | Prisma.BoardsCreateOrConnectWithoutCreatorInput[];
    createMany?: Prisma.BoardsCreateManyCreatorInputEnvelope;
    connect?: Prisma.BoardsWhereUniqueInput | Prisma.BoardsWhereUniqueInput[];
};
export type BoardsUpdateManyWithoutCreatorNestedInput = {
    create?: Prisma.XOR<Prisma.BoardsCreateWithoutCreatorInput, Prisma.BoardsUncheckedCreateWithoutCreatorInput> | Prisma.BoardsCreateWithoutCreatorInput[] | Prisma.BoardsUncheckedCreateWithoutCreatorInput[];
    connectOrCreate?: Prisma.BoardsCreateOrConnectWithoutCreatorInput | Prisma.BoardsCreateOrConnectWithoutCreatorInput[];
    upsert?: Prisma.BoardsUpsertWithWhereUniqueWithoutCreatorInput | Prisma.BoardsUpsertWithWhereUniqueWithoutCreatorInput[];
    createMany?: Prisma.BoardsCreateManyCreatorInputEnvelope;
    set?: Prisma.BoardsWhereUniqueInput | Prisma.BoardsWhereUniqueInput[];
    disconnect?: Prisma.BoardsWhereUniqueInput | Prisma.BoardsWhereUniqueInput[];
    delete?: Prisma.BoardsWhereUniqueInput | Prisma.BoardsWhereUniqueInput[];
    connect?: Prisma.BoardsWhereUniqueInput | Prisma.BoardsWhereUniqueInput[];
    update?: Prisma.BoardsUpdateWithWhereUniqueWithoutCreatorInput | Prisma.BoardsUpdateWithWhereUniqueWithoutCreatorInput[];
    updateMany?: Prisma.BoardsUpdateManyWithWhereWithoutCreatorInput | Prisma.BoardsUpdateManyWithWhereWithoutCreatorInput[];
    deleteMany?: Prisma.BoardsScalarWhereInput | Prisma.BoardsScalarWhereInput[];
};
export type BoardsUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: Prisma.XOR<Prisma.BoardsCreateWithoutCreatorInput, Prisma.BoardsUncheckedCreateWithoutCreatorInput> | Prisma.BoardsCreateWithoutCreatorInput[] | Prisma.BoardsUncheckedCreateWithoutCreatorInput[];
    connectOrCreate?: Prisma.BoardsCreateOrConnectWithoutCreatorInput | Prisma.BoardsCreateOrConnectWithoutCreatorInput[];
    upsert?: Prisma.BoardsUpsertWithWhereUniqueWithoutCreatorInput | Prisma.BoardsUpsertWithWhereUniqueWithoutCreatorInput[];
    createMany?: Prisma.BoardsCreateManyCreatorInputEnvelope;
    set?: Prisma.BoardsWhereUniqueInput | Prisma.BoardsWhereUniqueInput[];
    disconnect?: Prisma.BoardsWhereUniqueInput | Prisma.BoardsWhereUniqueInput[];
    delete?: Prisma.BoardsWhereUniqueInput | Prisma.BoardsWhereUniqueInput[];
    connect?: Prisma.BoardsWhereUniqueInput | Prisma.BoardsWhereUniqueInput[];
    update?: Prisma.BoardsUpdateWithWhereUniqueWithoutCreatorInput | Prisma.BoardsUpdateWithWhereUniqueWithoutCreatorInput[];
    updateMany?: Prisma.BoardsUpdateManyWithWhereWithoutCreatorInput | Prisma.BoardsUpdateManyWithWhereWithoutCreatorInput[];
    deleteMany?: Prisma.BoardsScalarWhereInput | Prisma.BoardsScalarWhereInput[];
};
export type BoardsCreateNestedOneWithoutColumnsInput = {
    create?: Prisma.XOR<Prisma.BoardsCreateWithoutColumnsInput, Prisma.BoardsUncheckedCreateWithoutColumnsInput>;
    connectOrCreate?: Prisma.BoardsCreateOrConnectWithoutColumnsInput;
    connect?: Prisma.BoardsWhereUniqueInput;
};
export type BoardsUpdateOneRequiredWithoutColumnsNestedInput = {
    create?: Prisma.XOR<Prisma.BoardsCreateWithoutColumnsInput, Prisma.BoardsUncheckedCreateWithoutColumnsInput>;
    connectOrCreate?: Prisma.BoardsCreateOrConnectWithoutColumnsInput;
    upsert?: Prisma.BoardsUpsertWithoutColumnsInput;
    connect?: Prisma.BoardsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.BoardsUpdateToOneWithWhereWithoutColumnsInput, Prisma.BoardsUpdateWithoutColumnsInput>, Prisma.BoardsUncheckedUpdateWithoutColumnsInput>;
};
export type BoardsCreateNestedOneWithoutUserBoardsInput = {
    create?: Prisma.XOR<Prisma.BoardsCreateWithoutUserBoardsInput, Prisma.BoardsUncheckedCreateWithoutUserBoardsInput>;
    connectOrCreate?: Prisma.BoardsCreateOrConnectWithoutUserBoardsInput;
    connect?: Prisma.BoardsWhereUniqueInput;
};
export type BoardsUpdateOneRequiredWithoutUserBoardsNestedInput = {
    create?: Prisma.XOR<Prisma.BoardsCreateWithoutUserBoardsInput, Prisma.BoardsUncheckedCreateWithoutUserBoardsInput>;
    connectOrCreate?: Prisma.BoardsCreateOrConnectWithoutUserBoardsInput;
    upsert?: Prisma.BoardsUpsertWithoutUserBoardsInput;
    connect?: Prisma.BoardsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.BoardsUpdateToOneWithWhereWithoutUserBoardsInput, Prisma.BoardsUpdateWithoutUserBoardsInput>, Prisma.BoardsUncheckedUpdateWithoutUserBoardsInput>;
};
export type BoardsCreateWithoutCreatorInput = {
    name: string;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    columns?: Prisma.ColumnsCreateNestedManyWithoutBoardInput;
    userBoards?: Prisma.userBoardsCreateNestedManyWithoutBoardInput;
};
export type BoardsUncheckedCreateWithoutCreatorInput = {
    id?: number;
    name: string;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    columns?: Prisma.ColumnsUncheckedCreateNestedManyWithoutBoardInput;
    userBoards?: Prisma.userBoardsUncheckedCreateNestedManyWithoutBoardInput;
};
export type BoardsCreateOrConnectWithoutCreatorInput = {
    where: Prisma.BoardsWhereUniqueInput;
    create: Prisma.XOR<Prisma.BoardsCreateWithoutCreatorInput, Prisma.BoardsUncheckedCreateWithoutCreatorInput>;
};
export type BoardsCreateManyCreatorInputEnvelope = {
    data: Prisma.BoardsCreateManyCreatorInput | Prisma.BoardsCreateManyCreatorInput[];
    skipDuplicates?: boolean;
};
export type BoardsUpsertWithWhereUniqueWithoutCreatorInput = {
    where: Prisma.BoardsWhereUniqueInput;
    update: Prisma.XOR<Prisma.BoardsUpdateWithoutCreatorInput, Prisma.BoardsUncheckedUpdateWithoutCreatorInput>;
    create: Prisma.XOR<Prisma.BoardsCreateWithoutCreatorInput, Prisma.BoardsUncheckedCreateWithoutCreatorInput>;
};
export type BoardsUpdateWithWhereUniqueWithoutCreatorInput = {
    where: Prisma.BoardsWhereUniqueInput;
    data: Prisma.XOR<Prisma.BoardsUpdateWithoutCreatorInput, Prisma.BoardsUncheckedUpdateWithoutCreatorInput>;
};
export type BoardsUpdateManyWithWhereWithoutCreatorInput = {
    where: Prisma.BoardsScalarWhereInput;
    data: Prisma.XOR<Prisma.BoardsUpdateManyMutationInput, Prisma.BoardsUncheckedUpdateManyWithoutCreatorInput>;
};
export type BoardsScalarWhereInput = {
    AND?: Prisma.BoardsScalarWhereInput | Prisma.BoardsScalarWhereInput[];
    OR?: Prisma.BoardsScalarWhereInput[];
    NOT?: Prisma.BoardsScalarWhereInput | Prisma.BoardsScalarWhereInput[];
    id?: Prisma.IntFilter<"Boards"> | number;
    name?: Prisma.StringFilter<"Boards"> | string;
    description?: Prisma.StringNullableFilter<"Boards"> | string | null;
    creatorId?: Prisma.IntFilter<"Boards"> | number;
    createdAt?: Prisma.DateTimeFilter<"Boards"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Boards"> | Date | string;
};
export type BoardsCreateWithoutColumnsInput = {
    name: string;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    creator: Prisma.UsersCreateNestedOneWithoutBoardsInput;
    userBoards?: Prisma.userBoardsCreateNestedManyWithoutBoardInput;
};
export type BoardsUncheckedCreateWithoutColumnsInput = {
    id?: number;
    name: string;
    description?: string | null;
    creatorId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    userBoards?: Prisma.userBoardsUncheckedCreateNestedManyWithoutBoardInput;
};
export type BoardsCreateOrConnectWithoutColumnsInput = {
    where: Prisma.BoardsWhereUniqueInput;
    create: Prisma.XOR<Prisma.BoardsCreateWithoutColumnsInput, Prisma.BoardsUncheckedCreateWithoutColumnsInput>;
};
export type BoardsUpsertWithoutColumnsInput = {
    update: Prisma.XOR<Prisma.BoardsUpdateWithoutColumnsInput, Prisma.BoardsUncheckedUpdateWithoutColumnsInput>;
    create: Prisma.XOR<Prisma.BoardsCreateWithoutColumnsInput, Prisma.BoardsUncheckedCreateWithoutColumnsInput>;
    where?: Prisma.BoardsWhereInput;
};
export type BoardsUpdateToOneWithWhereWithoutColumnsInput = {
    where?: Prisma.BoardsWhereInput;
    data: Prisma.XOR<Prisma.BoardsUpdateWithoutColumnsInput, Prisma.BoardsUncheckedUpdateWithoutColumnsInput>;
};
export type BoardsUpdateWithoutColumnsInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    creator?: Prisma.UsersUpdateOneRequiredWithoutBoardsNestedInput;
    userBoards?: Prisma.userBoardsUpdateManyWithoutBoardNestedInput;
};
export type BoardsUncheckedUpdateWithoutColumnsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creatorId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    userBoards?: Prisma.userBoardsUncheckedUpdateManyWithoutBoardNestedInput;
};
export type BoardsCreateWithoutUserBoardsInput = {
    name: string;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    creator: Prisma.UsersCreateNestedOneWithoutBoardsInput;
    columns?: Prisma.ColumnsCreateNestedManyWithoutBoardInput;
};
export type BoardsUncheckedCreateWithoutUserBoardsInput = {
    id?: number;
    name: string;
    description?: string | null;
    creatorId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    columns?: Prisma.ColumnsUncheckedCreateNestedManyWithoutBoardInput;
};
export type BoardsCreateOrConnectWithoutUserBoardsInput = {
    where: Prisma.BoardsWhereUniqueInput;
    create: Prisma.XOR<Prisma.BoardsCreateWithoutUserBoardsInput, Prisma.BoardsUncheckedCreateWithoutUserBoardsInput>;
};
export type BoardsUpsertWithoutUserBoardsInput = {
    update: Prisma.XOR<Prisma.BoardsUpdateWithoutUserBoardsInput, Prisma.BoardsUncheckedUpdateWithoutUserBoardsInput>;
    create: Prisma.XOR<Prisma.BoardsCreateWithoutUserBoardsInput, Prisma.BoardsUncheckedCreateWithoutUserBoardsInput>;
    where?: Prisma.BoardsWhereInput;
};
export type BoardsUpdateToOneWithWhereWithoutUserBoardsInput = {
    where?: Prisma.BoardsWhereInput;
    data: Prisma.XOR<Prisma.BoardsUpdateWithoutUserBoardsInput, Prisma.BoardsUncheckedUpdateWithoutUserBoardsInput>;
};
export type BoardsUpdateWithoutUserBoardsInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    creator?: Prisma.UsersUpdateOneRequiredWithoutBoardsNestedInput;
    columns?: Prisma.ColumnsUpdateManyWithoutBoardNestedInput;
};
export type BoardsUncheckedUpdateWithoutUserBoardsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creatorId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    columns?: Prisma.ColumnsUncheckedUpdateManyWithoutBoardNestedInput;
};
export type BoardsCreateManyCreatorInput = {
    id?: number;
    name: string;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BoardsUpdateWithoutCreatorInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    columns?: Prisma.ColumnsUpdateManyWithoutBoardNestedInput;
    userBoards?: Prisma.userBoardsUpdateManyWithoutBoardNestedInput;
};
export type BoardsUncheckedUpdateWithoutCreatorInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    columns?: Prisma.ColumnsUncheckedUpdateManyWithoutBoardNestedInput;
    userBoards?: Prisma.userBoardsUncheckedUpdateManyWithoutBoardNestedInput;
};
export type BoardsUncheckedUpdateManyWithoutCreatorInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BoardsCountOutputType = {
    columns: number;
    userBoards: number;
};
export type BoardsCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    columns?: boolean | BoardsCountOutputTypeCountColumnsArgs;
    userBoards?: boolean | BoardsCountOutputTypeCountUserBoardsArgs;
};
export type BoardsCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BoardsCountOutputTypeSelect<ExtArgs> | null;
};
export type BoardsCountOutputTypeCountColumnsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ColumnsWhereInput;
};
export type BoardsCountOutputTypeCountUserBoardsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.userBoardsWhereInput;
};
export type BoardsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    description?: boolean;
    creatorId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    creator?: boolean | Prisma.UsersDefaultArgs<ExtArgs>;
    columns?: boolean | Prisma.Boards$columnsArgs<ExtArgs>;
    userBoards?: boolean | Prisma.Boards$userBoardsArgs<ExtArgs>;
    _count?: boolean | Prisma.BoardsCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["boards"]>;
export type BoardsSelectScalar = {
    id?: boolean;
    name?: boolean;
    description?: boolean;
    creatorId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type BoardsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "description" | "creatorId" | "createdAt" | "updatedAt", ExtArgs["result"]["boards"]>;
export type BoardsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    creator?: boolean | Prisma.UsersDefaultArgs<ExtArgs>;
    columns?: boolean | Prisma.Boards$columnsArgs<ExtArgs>;
    userBoards?: boolean | Prisma.Boards$userBoardsArgs<ExtArgs>;
    _count?: boolean | Prisma.BoardsCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $BoardsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Boards";
    objects: {
        creator: Prisma.$UsersPayload<ExtArgs>;
        columns: Prisma.$ColumnsPayload<ExtArgs>[];
        userBoards: Prisma.$userBoardsPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        name: string;
        description: string | null;
        creatorId: number;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["boards"]>;
    composites: {};
};
export type BoardsGetPayload<S extends boolean | null | undefined | BoardsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BoardsPayload, S>;
export type BoardsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BoardsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BoardsCountAggregateInputType | true;
};
export interface BoardsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Boards'];
        meta: {
            name: 'Boards';
        };
    };
    findUnique<T extends BoardsFindUniqueArgs>(args: Prisma.SelectSubset<T, BoardsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BoardsClient<runtime.Types.Result.GetResult<Prisma.$BoardsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends BoardsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BoardsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BoardsClient<runtime.Types.Result.GetResult<Prisma.$BoardsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends BoardsFindFirstArgs>(args?: Prisma.SelectSubset<T, BoardsFindFirstArgs<ExtArgs>>): Prisma.Prisma__BoardsClient<runtime.Types.Result.GetResult<Prisma.$BoardsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends BoardsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BoardsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BoardsClient<runtime.Types.Result.GetResult<Prisma.$BoardsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends BoardsFindManyArgs>(args?: Prisma.SelectSubset<T, BoardsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BoardsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends BoardsCreateArgs>(args: Prisma.SelectSubset<T, BoardsCreateArgs<ExtArgs>>): Prisma.Prisma__BoardsClient<runtime.Types.Result.GetResult<Prisma.$BoardsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends BoardsCreateManyArgs>(args?: Prisma.SelectSubset<T, BoardsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends BoardsDeleteArgs>(args: Prisma.SelectSubset<T, BoardsDeleteArgs<ExtArgs>>): Prisma.Prisma__BoardsClient<runtime.Types.Result.GetResult<Prisma.$BoardsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends BoardsUpdateArgs>(args: Prisma.SelectSubset<T, BoardsUpdateArgs<ExtArgs>>): Prisma.Prisma__BoardsClient<runtime.Types.Result.GetResult<Prisma.$BoardsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends BoardsDeleteManyArgs>(args?: Prisma.SelectSubset<T, BoardsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends BoardsUpdateManyArgs>(args: Prisma.SelectSubset<T, BoardsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends BoardsUpsertArgs>(args: Prisma.SelectSubset<T, BoardsUpsertArgs<ExtArgs>>): Prisma.Prisma__BoardsClient<runtime.Types.Result.GetResult<Prisma.$BoardsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends BoardsCountArgs>(args?: Prisma.Subset<T, BoardsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BoardsCountAggregateOutputType> : number>;
    aggregate<T extends BoardsAggregateArgs>(args: Prisma.Subset<T, BoardsAggregateArgs>): Prisma.PrismaPromise<GetBoardsAggregateType<T>>;
    groupBy<T extends BoardsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BoardsGroupByArgs['orderBy'];
    } : {
        orderBy?: BoardsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BoardsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBoardsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: BoardsFieldRefs;
}
export interface Prisma__BoardsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    creator<T extends Prisma.UsersDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UsersDefaultArgs<ExtArgs>>): Prisma.Prisma__UsersClient<runtime.Types.Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    columns<T extends Prisma.Boards$columnsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Boards$columnsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ColumnsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    userBoards<T extends Prisma.Boards$userBoardsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Boards$userBoardsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$userBoardsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface BoardsFieldRefs {
    readonly id: Prisma.FieldRef<"Boards", 'Int'>;
    readonly name: Prisma.FieldRef<"Boards", 'String'>;
    readonly description: Prisma.FieldRef<"Boards", 'String'>;
    readonly creatorId: Prisma.FieldRef<"Boards", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"Boards", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Boards", 'DateTime'>;
}
export type BoardsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BoardsSelect<ExtArgs> | null;
    omit?: Prisma.BoardsOmit<ExtArgs> | null;
    include?: Prisma.BoardsInclude<ExtArgs> | null;
    where: Prisma.BoardsWhereUniqueInput;
};
export type BoardsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BoardsSelect<ExtArgs> | null;
    omit?: Prisma.BoardsOmit<ExtArgs> | null;
    include?: Prisma.BoardsInclude<ExtArgs> | null;
    where: Prisma.BoardsWhereUniqueInput;
};
export type BoardsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BoardsSelect<ExtArgs> | null;
    omit?: Prisma.BoardsOmit<ExtArgs> | null;
    include?: Prisma.BoardsInclude<ExtArgs> | null;
    where?: Prisma.BoardsWhereInput;
    orderBy?: Prisma.BoardsOrderByWithRelationInput | Prisma.BoardsOrderByWithRelationInput[];
    cursor?: Prisma.BoardsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BoardsScalarFieldEnum | Prisma.BoardsScalarFieldEnum[];
};
export type BoardsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BoardsSelect<ExtArgs> | null;
    omit?: Prisma.BoardsOmit<ExtArgs> | null;
    include?: Prisma.BoardsInclude<ExtArgs> | null;
    where?: Prisma.BoardsWhereInput;
    orderBy?: Prisma.BoardsOrderByWithRelationInput | Prisma.BoardsOrderByWithRelationInput[];
    cursor?: Prisma.BoardsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BoardsScalarFieldEnum | Prisma.BoardsScalarFieldEnum[];
};
export type BoardsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BoardsSelect<ExtArgs> | null;
    omit?: Prisma.BoardsOmit<ExtArgs> | null;
    include?: Prisma.BoardsInclude<ExtArgs> | null;
    where?: Prisma.BoardsWhereInput;
    orderBy?: Prisma.BoardsOrderByWithRelationInput | Prisma.BoardsOrderByWithRelationInput[];
    cursor?: Prisma.BoardsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BoardsScalarFieldEnum | Prisma.BoardsScalarFieldEnum[];
};
export type BoardsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BoardsSelect<ExtArgs> | null;
    omit?: Prisma.BoardsOmit<ExtArgs> | null;
    include?: Prisma.BoardsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BoardsCreateInput, Prisma.BoardsUncheckedCreateInput>;
};
export type BoardsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.BoardsCreateManyInput | Prisma.BoardsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type BoardsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BoardsSelect<ExtArgs> | null;
    omit?: Prisma.BoardsOmit<ExtArgs> | null;
    include?: Prisma.BoardsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BoardsUpdateInput, Prisma.BoardsUncheckedUpdateInput>;
    where: Prisma.BoardsWhereUniqueInput;
};
export type BoardsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.BoardsUpdateManyMutationInput, Prisma.BoardsUncheckedUpdateManyInput>;
    where?: Prisma.BoardsWhereInput;
    limit?: number;
};
export type BoardsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BoardsSelect<ExtArgs> | null;
    omit?: Prisma.BoardsOmit<ExtArgs> | null;
    include?: Prisma.BoardsInclude<ExtArgs> | null;
    where: Prisma.BoardsWhereUniqueInput;
    create: Prisma.XOR<Prisma.BoardsCreateInput, Prisma.BoardsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.BoardsUpdateInput, Prisma.BoardsUncheckedUpdateInput>;
};
export type BoardsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BoardsSelect<ExtArgs> | null;
    omit?: Prisma.BoardsOmit<ExtArgs> | null;
    include?: Prisma.BoardsInclude<ExtArgs> | null;
    where: Prisma.BoardsWhereUniqueInput;
};
export type BoardsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BoardsWhereInput;
    limit?: number;
};
export type Boards$columnsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ColumnsSelect<ExtArgs> | null;
    omit?: Prisma.ColumnsOmit<ExtArgs> | null;
    include?: Prisma.ColumnsInclude<ExtArgs> | null;
    where?: Prisma.ColumnsWhereInput;
    orderBy?: Prisma.ColumnsOrderByWithRelationInput | Prisma.ColumnsOrderByWithRelationInput[];
    cursor?: Prisma.ColumnsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ColumnsScalarFieldEnum | Prisma.ColumnsScalarFieldEnum[];
};
export type Boards$userBoardsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type BoardsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BoardsSelect<ExtArgs> | null;
    omit?: Prisma.BoardsOmit<ExtArgs> | null;
    include?: Prisma.BoardsInclude<ExtArgs> | null;
};
export {};
