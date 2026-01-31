import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
export type UsersModel = runtime.Types.Result.DefaultSelection<Prisma.$UsersPayload>;
export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null;
    _avg: UsersAvgAggregateOutputType | null;
    _sum: UsersSumAggregateOutputType | null;
    _min: UsersMinAggregateOutputType | null;
    _max: UsersMaxAggregateOutputType | null;
};
export type UsersAvgAggregateOutputType = {
    id: number | null;
};
export type UsersSumAggregateOutputType = {
    id: number | null;
};
export type UsersMinAggregateOutputType = {
    id: number | null;
    email: string | null;
    password: string | null;
    firstName: string | null;
    lastName: string | null;
    patronymic: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type UsersMaxAggregateOutputType = {
    id: number | null;
    email: string | null;
    password: string | null;
    firstName: string | null;
    lastName: string | null;
    patronymic: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type UsersCountAggregateOutputType = {
    id: number;
    email: number;
    password: number;
    firstName: number;
    lastName: number;
    patronymic: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type UsersAvgAggregateInputType = {
    id?: true;
};
export type UsersSumAggregateInputType = {
    id?: true;
};
export type UsersMinAggregateInputType = {
    id?: true;
    email?: true;
    password?: true;
    firstName?: true;
    lastName?: true;
    patronymic?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type UsersMaxAggregateInputType = {
    id?: true;
    email?: true;
    password?: true;
    firstName?: true;
    lastName?: true;
    patronymic?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type UsersCountAggregateInputType = {
    id?: true;
    email?: true;
    password?: true;
    firstName?: true;
    lastName?: true;
    patronymic?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type UsersAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UsersWhereInput;
    orderBy?: Prisma.UsersOrderByWithRelationInput | Prisma.UsersOrderByWithRelationInput[];
    cursor?: Prisma.UsersWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | UsersCountAggregateInputType;
    _avg?: UsersAvgAggregateInputType;
    _sum?: UsersSumAggregateInputType;
    _min?: UsersMinAggregateInputType;
    _max?: UsersMaxAggregateInputType;
};
export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
    [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUsers[P]> : Prisma.GetScalarType<T[P], AggregateUsers[P]>;
};
export type UsersGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UsersWhereInput;
    orderBy?: Prisma.UsersOrderByWithAggregationInput | Prisma.UsersOrderByWithAggregationInput[];
    by: Prisma.UsersScalarFieldEnum[] | Prisma.UsersScalarFieldEnum;
    having?: Prisma.UsersScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UsersCountAggregateInputType | true;
    _avg?: UsersAvgAggregateInputType;
    _sum?: UsersSumAggregateInputType;
    _min?: UsersMinAggregateInputType;
    _max?: UsersMaxAggregateInputType;
};
export type UsersGroupByOutputType = {
    id: number;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    patronymic: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: UsersCountAggregateOutputType | null;
    _avg: UsersAvgAggregateOutputType | null;
    _sum: UsersSumAggregateOutputType | null;
    _min: UsersMinAggregateOutputType | null;
    _max: UsersMaxAggregateOutputType | null;
};
type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UsersGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UsersGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UsersGroupByOutputType[P]>;
}>>;
export type UsersWhereInput = {
    AND?: Prisma.UsersWhereInput | Prisma.UsersWhereInput[];
    OR?: Prisma.UsersWhereInput[];
    NOT?: Prisma.UsersWhereInput | Prisma.UsersWhereInput[];
    id?: Prisma.IntFilter<"Users"> | number;
    email?: Prisma.StringFilter<"Users"> | string;
    password?: Prisma.StringFilter<"Users"> | string;
    firstName?: Prisma.StringFilter<"Users"> | string;
    lastName?: Prisma.StringFilter<"Users"> | string;
    patronymic?: Prisma.StringNullableFilter<"Users"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Users"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Users"> | Date | string;
    boards?: Prisma.BoardsListRelationFilter;
    createdTasks?: Prisma.TasksListRelationFilter;
    assigneeTasks?: Prisma.TasksListRelationFilter;
    userBoards?: Prisma.UserBoardsListRelationFilter;
    refreshTokens?: Prisma.RefreshTokensListRelationFilter;
};
export type UsersOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    patronymic?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    boards?: Prisma.BoardsOrderByRelationAggregateInput;
    createdTasks?: Prisma.TasksOrderByRelationAggregateInput;
    assigneeTasks?: Prisma.TasksOrderByRelationAggregateInput;
    userBoards?: Prisma.userBoardsOrderByRelationAggregateInput;
    refreshTokens?: Prisma.refreshTokensOrderByRelationAggregateInput;
    _relevance?: Prisma.UsersOrderByRelevanceInput;
};
export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    email?: string;
    AND?: Prisma.UsersWhereInput | Prisma.UsersWhereInput[];
    OR?: Prisma.UsersWhereInput[];
    NOT?: Prisma.UsersWhereInput | Prisma.UsersWhereInput[];
    password?: Prisma.StringFilter<"Users"> | string;
    firstName?: Prisma.StringFilter<"Users"> | string;
    lastName?: Prisma.StringFilter<"Users"> | string;
    patronymic?: Prisma.StringNullableFilter<"Users"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Users"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Users"> | Date | string;
    boards?: Prisma.BoardsListRelationFilter;
    createdTasks?: Prisma.TasksListRelationFilter;
    assigneeTasks?: Prisma.TasksListRelationFilter;
    userBoards?: Prisma.UserBoardsListRelationFilter;
    refreshTokens?: Prisma.RefreshTokensListRelationFilter;
}, "id" | "email">;
export type UsersOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    patronymic?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.UsersCountOrderByAggregateInput;
    _avg?: Prisma.UsersAvgOrderByAggregateInput;
    _max?: Prisma.UsersMaxOrderByAggregateInput;
    _min?: Prisma.UsersMinOrderByAggregateInput;
    _sum?: Prisma.UsersSumOrderByAggregateInput;
};
export type UsersScalarWhereWithAggregatesInput = {
    AND?: Prisma.UsersScalarWhereWithAggregatesInput | Prisma.UsersScalarWhereWithAggregatesInput[];
    OR?: Prisma.UsersScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UsersScalarWhereWithAggregatesInput | Prisma.UsersScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Users"> | number;
    email?: Prisma.StringWithAggregatesFilter<"Users"> | string;
    password?: Prisma.StringWithAggregatesFilter<"Users"> | string;
    firstName?: Prisma.StringWithAggregatesFilter<"Users"> | string;
    lastName?: Prisma.StringWithAggregatesFilter<"Users"> | string;
    patronymic?: Prisma.StringNullableWithAggregatesFilter<"Users"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Users"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Users"> | Date | string;
};
export type UsersCreateInput = {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    patronymic?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    boards?: Prisma.BoardsCreateNestedManyWithoutCreatorInput;
    createdTasks?: Prisma.TasksCreateNestedManyWithoutCreatorInput;
    assigneeTasks?: Prisma.TasksCreateNestedManyWithoutAssigneeInput;
    userBoards?: Prisma.userBoardsCreateNestedManyWithoutUserInput;
    refreshTokens?: Prisma.refreshTokensCreateNestedManyWithoutUserInput;
};
export type UsersUncheckedCreateInput = {
    id?: number;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    patronymic?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    boards?: Prisma.BoardsUncheckedCreateNestedManyWithoutCreatorInput;
    createdTasks?: Prisma.TasksUncheckedCreateNestedManyWithoutCreatorInput;
    assigneeTasks?: Prisma.TasksUncheckedCreateNestedManyWithoutAssigneeInput;
    userBoards?: Prisma.userBoardsUncheckedCreateNestedManyWithoutUserInput;
    refreshTokens?: Prisma.refreshTokensUncheckedCreateNestedManyWithoutUserInput;
};
export type UsersUpdateInput = {
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    patronymic?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    boards?: Prisma.BoardsUpdateManyWithoutCreatorNestedInput;
    createdTasks?: Prisma.TasksUpdateManyWithoutCreatorNestedInput;
    assigneeTasks?: Prisma.TasksUpdateManyWithoutAssigneeNestedInput;
    userBoards?: Prisma.userBoardsUpdateManyWithoutUserNestedInput;
    refreshTokens?: Prisma.refreshTokensUpdateManyWithoutUserNestedInput;
};
export type UsersUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    patronymic?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    boards?: Prisma.BoardsUncheckedUpdateManyWithoutCreatorNestedInput;
    createdTasks?: Prisma.TasksUncheckedUpdateManyWithoutCreatorNestedInput;
    assigneeTasks?: Prisma.TasksUncheckedUpdateManyWithoutAssigneeNestedInput;
    userBoards?: Prisma.userBoardsUncheckedUpdateManyWithoutUserNestedInput;
    refreshTokens?: Prisma.refreshTokensUncheckedUpdateManyWithoutUserNestedInput;
};
export type UsersCreateManyInput = {
    id?: number;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    patronymic?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type UsersUpdateManyMutationInput = {
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    patronymic?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UsersUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    patronymic?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UsersOrderByRelevanceInput = {
    fields: Prisma.UsersOrderByRelevanceFieldEnum | Prisma.UsersOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type UsersCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    patronymic?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UsersAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type UsersMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    patronymic?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UsersMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    patronymic?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UsersSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type UsersScalarRelationFilter = {
    is?: Prisma.UsersWhereInput;
    isNot?: Prisma.UsersWhereInput;
};
export type UsersNullableScalarRelationFilter = {
    is?: Prisma.UsersWhereInput | null;
    isNot?: Prisma.UsersWhereInput | null;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type UsersCreateNestedOneWithoutBoardsInput = {
    create?: Prisma.XOR<Prisma.UsersCreateWithoutBoardsInput, Prisma.UsersUncheckedCreateWithoutBoardsInput>;
    connectOrCreate?: Prisma.UsersCreateOrConnectWithoutBoardsInput;
    connect?: Prisma.UsersWhereUniqueInput;
};
export type UsersUpdateOneRequiredWithoutBoardsNestedInput = {
    create?: Prisma.XOR<Prisma.UsersCreateWithoutBoardsInput, Prisma.UsersUncheckedCreateWithoutBoardsInput>;
    connectOrCreate?: Prisma.UsersCreateOrConnectWithoutBoardsInput;
    upsert?: Prisma.UsersUpsertWithoutBoardsInput;
    connect?: Prisma.UsersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UsersUpdateToOneWithWhereWithoutBoardsInput, Prisma.UsersUpdateWithoutBoardsInput>, Prisma.UsersUncheckedUpdateWithoutBoardsInput>;
};
export type UsersCreateNestedOneWithoutCreatedTasksInput = {
    create?: Prisma.XOR<Prisma.UsersCreateWithoutCreatedTasksInput, Prisma.UsersUncheckedCreateWithoutCreatedTasksInput>;
    connectOrCreate?: Prisma.UsersCreateOrConnectWithoutCreatedTasksInput;
    connect?: Prisma.UsersWhereUniqueInput;
};
export type UsersCreateNestedOneWithoutAssigneeTasksInput = {
    create?: Prisma.XOR<Prisma.UsersCreateWithoutAssigneeTasksInput, Prisma.UsersUncheckedCreateWithoutAssigneeTasksInput>;
    connectOrCreate?: Prisma.UsersCreateOrConnectWithoutAssigneeTasksInput;
    connect?: Prisma.UsersWhereUniqueInput;
};
export type UsersUpdateOneRequiredWithoutCreatedTasksNestedInput = {
    create?: Prisma.XOR<Prisma.UsersCreateWithoutCreatedTasksInput, Prisma.UsersUncheckedCreateWithoutCreatedTasksInput>;
    connectOrCreate?: Prisma.UsersCreateOrConnectWithoutCreatedTasksInput;
    upsert?: Prisma.UsersUpsertWithoutCreatedTasksInput;
    connect?: Prisma.UsersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UsersUpdateToOneWithWhereWithoutCreatedTasksInput, Prisma.UsersUpdateWithoutCreatedTasksInput>, Prisma.UsersUncheckedUpdateWithoutCreatedTasksInput>;
};
export type UsersUpdateOneWithoutAssigneeTasksNestedInput = {
    create?: Prisma.XOR<Prisma.UsersCreateWithoutAssigneeTasksInput, Prisma.UsersUncheckedCreateWithoutAssigneeTasksInput>;
    connectOrCreate?: Prisma.UsersCreateOrConnectWithoutAssigneeTasksInput;
    upsert?: Prisma.UsersUpsertWithoutAssigneeTasksInput;
    disconnect?: Prisma.UsersWhereInput | boolean;
    delete?: Prisma.UsersWhereInput | boolean;
    connect?: Prisma.UsersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UsersUpdateToOneWithWhereWithoutAssigneeTasksInput, Prisma.UsersUpdateWithoutAssigneeTasksInput>, Prisma.UsersUncheckedUpdateWithoutAssigneeTasksInput>;
};
export type UsersCreateNestedOneWithoutUserBoardsInput = {
    create?: Prisma.XOR<Prisma.UsersCreateWithoutUserBoardsInput, Prisma.UsersUncheckedCreateWithoutUserBoardsInput>;
    connectOrCreate?: Prisma.UsersCreateOrConnectWithoutUserBoardsInput;
    connect?: Prisma.UsersWhereUniqueInput;
};
export type UsersUpdateOneRequiredWithoutUserBoardsNestedInput = {
    create?: Prisma.XOR<Prisma.UsersCreateWithoutUserBoardsInput, Prisma.UsersUncheckedCreateWithoutUserBoardsInput>;
    connectOrCreate?: Prisma.UsersCreateOrConnectWithoutUserBoardsInput;
    upsert?: Prisma.UsersUpsertWithoutUserBoardsInput;
    connect?: Prisma.UsersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UsersUpdateToOneWithWhereWithoutUserBoardsInput, Prisma.UsersUpdateWithoutUserBoardsInput>, Prisma.UsersUncheckedUpdateWithoutUserBoardsInput>;
};
export type UsersCreateNestedOneWithoutRefreshTokensInput = {
    create?: Prisma.XOR<Prisma.UsersCreateWithoutRefreshTokensInput, Prisma.UsersUncheckedCreateWithoutRefreshTokensInput>;
    connectOrCreate?: Prisma.UsersCreateOrConnectWithoutRefreshTokensInput;
    connect?: Prisma.UsersWhereUniqueInput;
};
export type UsersUpdateOneRequiredWithoutRefreshTokensNestedInput = {
    create?: Prisma.XOR<Prisma.UsersCreateWithoutRefreshTokensInput, Prisma.UsersUncheckedCreateWithoutRefreshTokensInput>;
    connectOrCreate?: Prisma.UsersCreateOrConnectWithoutRefreshTokensInput;
    upsert?: Prisma.UsersUpsertWithoutRefreshTokensInput;
    connect?: Prisma.UsersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UsersUpdateToOneWithWhereWithoutRefreshTokensInput, Prisma.UsersUpdateWithoutRefreshTokensInput>, Prisma.UsersUncheckedUpdateWithoutRefreshTokensInput>;
};
export type UsersCreateWithoutBoardsInput = {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    patronymic?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    createdTasks?: Prisma.TasksCreateNestedManyWithoutCreatorInput;
    assigneeTasks?: Prisma.TasksCreateNestedManyWithoutAssigneeInput;
    userBoards?: Prisma.userBoardsCreateNestedManyWithoutUserInput;
    refreshTokens?: Prisma.refreshTokensCreateNestedManyWithoutUserInput;
};
export type UsersUncheckedCreateWithoutBoardsInput = {
    id?: number;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    patronymic?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    createdTasks?: Prisma.TasksUncheckedCreateNestedManyWithoutCreatorInput;
    assigneeTasks?: Prisma.TasksUncheckedCreateNestedManyWithoutAssigneeInput;
    userBoards?: Prisma.userBoardsUncheckedCreateNestedManyWithoutUserInput;
    refreshTokens?: Prisma.refreshTokensUncheckedCreateNestedManyWithoutUserInput;
};
export type UsersCreateOrConnectWithoutBoardsInput = {
    where: Prisma.UsersWhereUniqueInput;
    create: Prisma.XOR<Prisma.UsersCreateWithoutBoardsInput, Prisma.UsersUncheckedCreateWithoutBoardsInput>;
};
export type UsersUpsertWithoutBoardsInput = {
    update: Prisma.XOR<Prisma.UsersUpdateWithoutBoardsInput, Prisma.UsersUncheckedUpdateWithoutBoardsInput>;
    create: Prisma.XOR<Prisma.UsersCreateWithoutBoardsInput, Prisma.UsersUncheckedCreateWithoutBoardsInput>;
    where?: Prisma.UsersWhereInput;
};
export type UsersUpdateToOneWithWhereWithoutBoardsInput = {
    where?: Prisma.UsersWhereInput;
    data: Prisma.XOR<Prisma.UsersUpdateWithoutBoardsInput, Prisma.UsersUncheckedUpdateWithoutBoardsInput>;
};
export type UsersUpdateWithoutBoardsInput = {
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    patronymic?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdTasks?: Prisma.TasksUpdateManyWithoutCreatorNestedInput;
    assigneeTasks?: Prisma.TasksUpdateManyWithoutAssigneeNestedInput;
    userBoards?: Prisma.userBoardsUpdateManyWithoutUserNestedInput;
    refreshTokens?: Prisma.refreshTokensUpdateManyWithoutUserNestedInput;
};
export type UsersUncheckedUpdateWithoutBoardsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    patronymic?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdTasks?: Prisma.TasksUncheckedUpdateManyWithoutCreatorNestedInput;
    assigneeTasks?: Prisma.TasksUncheckedUpdateManyWithoutAssigneeNestedInput;
    userBoards?: Prisma.userBoardsUncheckedUpdateManyWithoutUserNestedInput;
    refreshTokens?: Prisma.refreshTokensUncheckedUpdateManyWithoutUserNestedInput;
};
export type UsersCreateWithoutCreatedTasksInput = {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    patronymic?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    boards?: Prisma.BoardsCreateNestedManyWithoutCreatorInput;
    assigneeTasks?: Prisma.TasksCreateNestedManyWithoutAssigneeInput;
    userBoards?: Prisma.userBoardsCreateNestedManyWithoutUserInput;
    refreshTokens?: Prisma.refreshTokensCreateNestedManyWithoutUserInput;
};
export type UsersUncheckedCreateWithoutCreatedTasksInput = {
    id?: number;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    patronymic?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    boards?: Prisma.BoardsUncheckedCreateNestedManyWithoutCreatorInput;
    assigneeTasks?: Prisma.TasksUncheckedCreateNestedManyWithoutAssigneeInput;
    userBoards?: Prisma.userBoardsUncheckedCreateNestedManyWithoutUserInput;
    refreshTokens?: Prisma.refreshTokensUncheckedCreateNestedManyWithoutUserInput;
};
export type UsersCreateOrConnectWithoutCreatedTasksInput = {
    where: Prisma.UsersWhereUniqueInput;
    create: Prisma.XOR<Prisma.UsersCreateWithoutCreatedTasksInput, Prisma.UsersUncheckedCreateWithoutCreatedTasksInput>;
};
export type UsersCreateWithoutAssigneeTasksInput = {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    patronymic?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    boards?: Prisma.BoardsCreateNestedManyWithoutCreatorInput;
    createdTasks?: Prisma.TasksCreateNestedManyWithoutCreatorInput;
    userBoards?: Prisma.userBoardsCreateNestedManyWithoutUserInput;
    refreshTokens?: Prisma.refreshTokensCreateNestedManyWithoutUserInput;
};
export type UsersUncheckedCreateWithoutAssigneeTasksInput = {
    id?: number;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    patronymic?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    boards?: Prisma.BoardsUncheckedCreateNestedManyWithoutCreatorInput;
    createdTasks?: Prisma.TasksUncheckedCreateNestedManyWithoutCreatorInput;
    userBoards?: Prisma.userBoardsUncheckedCreateNestedManyWithoutUserInput;
    refreshTokens?: Prisma.refreshTokensUncheckedCreateNestedManyWithoutUserInput;
};
export type UsersCreateOrConnectWithoutAssigneeTasksInput = {
    where: Prisma.UsersWhereUniqueInput;
    create: Prisma.XOR<Prisma.UsersCreateWithoutAssigneeTasksInput, Prisma.UsersUncheckedCreateWithoutAssigneeTasksInput>;
};
export type UsersUpsertWithoutCreatedTasksInput = {
    update: Prisma.XOR<Prisma.UsersUpdateWithoutCreatedTasksInput, Prisma.UsersUncheckedUpdateWithoutCreatedTasksInput>;
    create: Prisma.XOR<Prisma.UsersCreateWithoutCreatedTasksInput, Prisma.UsersUncheckedCreateWithoutCreatedTasksInput>;
    where?: Prisma.UsersWhereInput;
};
export type UsersUpdateToOneWithWhereWithoutCreatedTasksInput = {
    where?: Prisma.UsersWhereInput;
    data: Prisma.XOR<Prisma.UsersUpdateWithoutCreatedTasksInput, Prisma.UsersUncheckedUpdateWithoutCreatedTasksInput>;
};
export type UsersUpdateWithoutCreatedTasksInput = {
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    patronymic?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    boards?: Prisma.BoardsUpdateManyWithoutCreatorNestedInput;
    assigneeTasks?: Prisma.TasksUpdateManyWithoutAssigneeNestedInput;
    userBoards?: Prisma.userBoardsUpdateManyWithoutUserNestedInput;
    refreshTokens?: Prisma.refreshTokensUpdateManyWithoutUserNestedInput;
};
export type UsersUncheckedUpdateWithoutCreatedTasksInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    patronymic?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    boards?: Prisma.BoardsUncheckedUpdateManyWithoutCreatorNestedInput;
    assigneeTasks?: Prisma.TasksUncheckedUpdateManyWithoutAssigneeNestedInput;
    userBoards?: Prisma.userBoardsUncheckedUpdateManyWithoutUserNestedInput;
    refreshTokens?: Prisma.refreshTokensUncheckedUpdateManyWithoutUserNestedInput;
};
export type UsersUpsertWithoutAssigneeTasksInput = {
    update: Prisma.XOR<Prisma.UsersUpdateWithoutAssigneeTasksInput, Prisma.UsersUncheckedUpdateWithoutAssigneeTasksInput>;
    create: Prisma.XOR<Prisma.UsersCreateWithoutAssigneeTasksInput, Prisma.UsersUncheckedCreateWithoutAssigneeTasksInput>;
    where?: Prisma.UsersWhereInput;
};
export type UsersUpdateToOneWithWhereWithoutAssigneeTasksInput = {
    where?: Prisma.UsersWhereInput;
    data: Prisma.XOR<Prisma.UsersUpdateWithoutAssigneeTasksInput, Prisma.UsersUncheckedUpdateWithoutAssigneeTasksInput>;
};
export type UsersUpdateWithoutAssigneeTasksInput = {
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    patronymic?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    boards?: Prisma.BoardsUpdateManyWithoutCreatorNestedInput;
    createdTasks?: Prisma.TasksUpdateManyWithoutCreatorNestedInput;
    userBoards?: Prisma.userBoardsUpdateManyWithoutUserNestedInput;
    refreshTokens?: Prisma.refreshTokensUpdateManyWithoutUserNestedInput;
};
export type UsersUncheckedUpdateWithoutAssigneeTasksInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    patronymic?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    boards?: Prisma.BoardsUncheckedUpdateManyWithoutCreatorNestedInput;
    createdTasks?: Prisma.TasksUncheckedUpdateManyWithoutCreatorNestedInput;
    userBoards?: Prisma.userBoardsUncheckedUpdateManyWithoutUserNestedInput;
    refreshTokens?: Prisma.refreshTokensUncheckedUpdateManyWithoutUserNestedInput;
};
export type UsersCreateWithoutUserBoardsInput = {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    patronymic?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    boards?: Prisma.BoardsCreateNestedManyWithoutCreatorInput;
    createdTasks?: Prisma.TasksCreateNestedManyWithoutCreatorInput;
    assigneeTasks?: Prisma.TasksCreateNestedManyWithoutAssigneeInput;
    refreshTokens?: Prisma.refreshTokensCreateNestedManyWithoutUserInput;
};
export type UsersUncheckedCreateWithoutUserBoardsInput = {
    id?: number;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    patronymic?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    boards?: Prisma.BoardsUncheckedCreateNestedManyWithoutCreatorInput;
    createdTasks?: Prisma.TasksUncheckedCreateNestedManyWithoutCreatorInput;
    assigneeTasks?: Prisma.TasksUncheckedCreateNestedManyWithoutAssigneeInput;
    refreshTokens?: Prisma.refreshTokensUncheckedCreateNestedManyWithoutUserInput;
};
export type UsersCreateOrConnectWithoutUserBoardsInput = {
    where: Prisma.UsersWhereUniqueInput;
    create: Prisma.XOR<Prisma.UsersCreateWithoutUserBoardsInput, Prisma.UsersUncheckedCreateWithoutUserBoardsInput>;
};
export type UsersUpsertWithoutUserBoardsInput = {
    update: Prisma.XOR<Prisma.UsersUpdateWithoutUserBoardsInput, Prisma.UsersUncheckedUpdateWithoutUserBoardsInput>;
    create: Prisma.XOR<Prisma.UsersCreateWithoutUserBoardsInput, Prisma.UsersUncheckedCreateWithoutUserBoardsInput>;
    where?: Prisma.UsersWhereInput;
};
export type UsersUpdateToOneWithWhereWithoutUserBoardsInput = {
    where?: Prisma.UsersWhereInput;
    data: Prisma.XOR<Prisma.UsersUpdateWithoutUserBoardsInput, Prisma.UsersUncheckedUpdateWithoutUserBoardsInput>;
};
export type UsersUpdateWithoutUserBoardsInput = {
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    patronymic?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    boards?: Prisma.BoardsUpdateManyWithoutCreatorNestedInput;
    createdTasks?: Prisma.TasksUpdateManyWithoutCreatorNestedInput;
    assigneeTasks?: Prisma.TasksUpdateManyWithoutAssigneeNestedInput;
    refreshTokens?: Prisma.refreshTokensUpdateManyWithoutUserNestedInput;
};
export type UsersUncheckedUpdateWithoutUserBoardsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    patronymic?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    boards?: Prisma.BoardsUncheckedUpdateManyWithoutCreatorNestedInput;
    createdTasks?: Prisma.TasksUncheckedUpdateManyWithoutCreatorNestedInput;
    assigneeTasks?: Prisma.TasksUncheckedUpdateManyWithoutAssigneeNestedInput;
    refreshTokens?: Prisma.refreshTokensUncheckedUpdateManyWithoutUserNestedInput;
};
export type UsersCreateWithoutRefreshTokensInput = {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    patronymic?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    boards?: Prisma.BoardsCreateNestedManyWithoutCreatorInput;
    createdTasks?: Prisma.TasksCreateNestedManyWithoutCreatorInput;
    assigneeTasks?: Prisma.TasksCreateNestedManyWithoutAssigneeInput;
    userBoards?: Prisma.userBoardsCreateNestedManyWithoutUserInput;
};
export type UsersUncheckedCreateWithoutRefreshTokensInput = {
    id?: number;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    patronymic?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    boards?: Prisma.BoardsUncheckedCreateNestedManyWithoutCreatorInput;
    createdTasks?: Prisma.TasksUncheckedCreateNestedManyWithoutCreatorInput;
    assigneeTasks?: Prisma.TasksUncheckedCreateNestedManyWithoutAssigneeInput;
    userBoards?: Prisma.userBoardsUncheckedCreateNestedManyWithoutUserInput;
};
export type UsersCreateOrConnectWithoutRefreshTokensInput = {
    where: Prisma.UsersWhereUniqueInput;
    create: Prisma.XOR<Prisma.UsersCreateWithoutRefreshTokensInput, Prisma.UsersUncheckedCreateWithoutRefreshTokensInput>;
};
export type UsersUpsertWithoutRefreshTokensInput = {
    update: Prisma.XOR<Prisma.UsersUpdateWithoutRefreshTokensInput, Prisma.UsersUncheckedUpdateWithoutRefreshTokensInput>;
    create: Prisma.XOR<Prisma.UsersCreateWithoutRefreshTokensInput, Prisma.UsersUncheckedCreateWithoutRefreshTokensInput>;
    where?: Prisma.UsersWhereInput;
};
export type UsersUpdateToOneWithWhereWithoutRefreshTokensInput = {
    where?: Prisma.UsersWhereInput;
    data: Prisma.XOR<Prisma.UsersUpdateWithoutRefreshTokensInput, Prisma.UsersUncheckedUpdateWithoutRefreshTokensInput>;
};
export type UsersUpdateWithoutRefreshTokensInput = {
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    patronymic?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    boards?: Prisma.BoardsUpdateManyWithoutCreatorNestedInput;
    createdTasks?: Prisma.TasksUpdateManyWithoutCreatorNestedInput;
    assigneeTasks?: Prisma.TasksUpdateManyWithoutAssigneeNestedInput;
    userBoards?: Prisma.userBoardsUpdateManyWithoutUserNestedInput;
};
export type UsersUncheckedUpdateWithoutRefreshTokensInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    patronymic?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    boards?: Prisma.BoardsUncheckedUpdateManyWithoutCreatorNestedInput;
    createdTasks?: Prisma.TasksUncheckedUpdateManyWithoutCreatorNestedInput;
    assigneeTasks?: Prisma.TasksUncheckedUpdateManyWithoutAssigneeNestedInput;
    userBoards?: Prisma.userBoardsUncheckedUpdateManyWithoutUserNestedInput;
};
export type UsersCountOutputType = {
    boards: number;
    createdTasks: number;
    assigneeTasks: number;
    userBoards: number;
    refreshTokens: number;
};
export type UsersCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    boards?: boolean | UsersCountOutputTypeCountBoardsArgs;
    createdTasks?: boolean | UsersCountOutputTypeCountCreatedTasksArgs;
    assigneeTasks?: boolean | UsersCountOutputTypeCountAssigneeTasksArgs;
    userBoards?: boolean | UsersCountOutputTypeCountUserBoardsArgs;
    refreshTokens?: boolean | UsersCountOutputTypeCountRefreshTokensArgs;
};
export type UsersCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsersCountOutputTypeSelect<ExtArgs> | null;
};
export type UsersCountOutputTypeCountBoardsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BoardsWhereInput;
};
export type UsersCountOutputTypeCountCreatedTasksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TasksWhereInput;
};
export type UsersCountOutputTypeCountAssigneeTasksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TasksWhereInput;
};
export type UsersCountOutputTypeCountUserBoardsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.userBoardsWhereInput;
};
export type UsersCountOutputTypeCountRefreshTokensArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.refreshTokensWhereInput;
};
export type UsersSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    password?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    patronymic?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    boards?: boolean | Prisma.Users$boardsArgs<ExtArgs>;
    createdTasks?: boolean | Prisma.Users$createdTasksArgs<ExtArgs>;
    assigneeTasks?: boolean | Prisma.Users$assigneeTasksArgs<ExtArgs>;
    userBoards?: boolean | Prisma.Users$userBoardsArgs<ExtArgs>;
    refreshTokens?: boolean | Prisma.Users$refreshTokensArgs<ExtArgs>;
    _count?: boolean | Prisma.UsersCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["users"]>;
export type UsersSelectScalar = {
    id?: boolean;
    email?: boolean;
    password?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    patronymic?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type UsersOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "email" | "password" | "firstName" | "lastName" | "patronymic" | "createdAt" | "updatedAt", ExtArgs["result"]["users"]>;
export type UsersInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    boards?: boolean | Prisma.Users$boardsArgs<ExtArgs>;
    createdTasks?: boolean | Prisma.Users$createdTasksArgs<ExtArgs>;
    assigneeTasks?: boolean | Prisma.Users$assigneeTasksArgs<ExtArgs>;
    userBoards?: boolean | Prisma.Users$userBoardsArgs<ExtArgs>;
    refreshTokens?: boolean | Prisma.Users$refreshTokensArgs<ExtArgs>;
    _count?: boolean | Prisma.UsersCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $UsersPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Users";
    objects: {
        boards: Prisma.$BoardsPayload<ExtArgs>[];
        createdTasks: Prisma.$TasksPayload<ExtArgs>[];
        assigneeTasks: Prisma.$TasksPayload<ExtArgs>[];
        userBoards: Prisma.$userBoardsPayload<ExtArgs>[];
        refreshTokens: Prisma.$refreshTokensPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        email: string;
        password: string;
        firstName: string;
        lastName: string;
        patronymic: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["users"]>;
    composites: {};
};
export type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UsersPayload, S>;
export type UsersCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UsersCountAggregateInputType | true;
};
export interface UsersDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Users'];
        meta: {
            name: 'Users';
        };
    };
    findUnique<T extends UsersFindUniqueArgs>(args: Prisma.SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UsersClient<runtime.Types.Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UsersClient<runtime.Types.Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends UsersFindFirstArgs>(args?: Prisma.SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma.Prisma__UsersClient<runtime.Types.Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UsersClient<runtime.Types.Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends UsersFindManyArgs>(args?: Prisma.SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends UsersCreateArgs>(args: Prisma.SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma.Prisma__UsersClient<runtime.Types.Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends UsersCreateManyArgs>(args?: Prisma.SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends UsersDeleteArgs>(args: Prisma.SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma.Prisma__UsersClient<runtime.Types.Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends UsersUpdateArgs>(args: Prisma.SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma.Prisma__UsersClient<runtime.Types.Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends UsersDeleteManyArgs>(args?: Prisma.SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends UsersUpdateManyArgs>(args: Prisma.SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends UsersUpsertArgs>(args: Prisma.SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma.Prisma__UsersClient<runtime.Types.Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends UsersCountArgs>(args?: Prisma.Subset<T, UsersCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UsersCountAggregateOutputType> : number>;
    aggregate<T extends UsersAggregateArgs>(args: Prisma.Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>;
    groupBy<T extends UsersGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UsersGroupByArgs['orderBy'];
    } : {
        orderBy?: UsersGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: UsersFieldRefs;
}
export interface Prisma__UsersClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    boards<T extends Prisma.Users$boardsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Users$boardsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BoardsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    createdTasks<T extends Prisma.Users$createdTasksArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Users$createdTasksArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TasksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    assigneeTasks<T extends Prisma.Users$assigneeTasksArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Users$assigneeTasksArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TasksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    userBoards<T extends Prisma.Users$userBoardsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Users$userBoardsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$userBoardsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    refreshTokens<T extends Prisma.Users$refreshTokensArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Users$refreshTokensArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$refreshTokensPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface UsersFieldRefs {
    readonly id: Prisma.FieldRef<"Users", 'Int'>;
    readonly email: Prisma.FieldRef<"Users", 'String'>;
    readonly password: Prisma.FieldRef<"Users", 'String'>;
    readonly firstName: Prisma.FieldRef<"Users", 'String'>;
    readonly lastName: Prisma.FieldRef<"Users", 'String'>;
    readonly patronymic: Prisma.FieldRef<"Users", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Users", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Users", 'DateTime'>;
}
export type UsersFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsersSelect<ExtArgs> | null;
    omit?: Prisma.UsersOmit<ExtArgs> | null;
    include?: Prisma.UsersInclude<ExtArgs> | null;
    where: Prisma.UsersWhereUniqueInput;
};
export type UsersFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsersSelect<ExtArgs> | null;
    omit?: Prisma.UsersOmit<ExtArgs> | null;
    include?: Prisma.UsersInclude<ExtArgs> | null;
    where: Prisma.UsersWhereUniqueInput;
};
export type UsersFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsersSelect<ExtArgs> | null;
    omit?: Prisma.UsersOmit<ExtArgs> | null;
    include?: Prisma.UsersInclude<ExtArgs> | null;
    where?: Prisma.UsersWhereInput;
    orderBy?: Prisma.UsersOrderByWithRelationInput | Prisma.UsersOrderByWithRelationInput[];
    cursor?: Prisma.UsersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UsersScalarFieldEnum | Prisma.UsersScalarFieldEnum[];
};
export type UsersFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsersSelect<ExtArgs> | null;
    omit?: Prisma.UsersOmit<ExtArgs> | null;
    include?: Prisma.UsersInclude<ExtArgs> | null;
    where?: Prisma.UsersWhereInput;
    orderBy?: Prisma.UsersOrderByWithRelationInput | Prisma.UsersOrderByWithRelationInput[];
    cursor?: Prisma.UsersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UsersScalarFieldEnum | Prisma.UsersScalarFieldEnum[];
};
export type UsersFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsersSelect<ExtArgs> | null;
    omit?: Prisma.UsersOmit<ExtArgs> | null;
    include?: Prisma.UsersInclude<ExtArgs> | null;
    where?: Prisma.UsersWhereInput;
    orderBy?: Prisma.UsersOrderByWithRelationInput | Prisma.UsersOrderByWithRelationInput[];
    cursor?: Prisma.UsersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UsersScalarFieldEnum | Prisma.UsersScalarFieldEnum[];
};
export type UsersCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsersSelect<ExtArgs> | null;
    omit?: Prisma.UsersOmit<ExtArgs> | null;
    include?: Prisma.UsersInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UsersCreateInput, Prisma.UsersUncheckedCreateInput>;
};
export type UsersCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.UsersCreateManyInput | Prisma.UsersCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UsersUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsersSelect<ExtArgs> | null;
    omit?: Prisma.UsersOmit<ExtArgs> | null;
    include?: Prisma.UsersInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UsersUpdateInput, Prisma.UsersUncheckedUpdateInput>;
    where: Prisma.UsersWhereUniqueInput;
};
export type UsersUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.UsersUpdateManyMutationInput, Prisma.UsersUncheckedUpdateManyInput>;
    where?: Prisma.UsersWhereInput;
    limit?: number;
};
export type UsersUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsersSelect<ExtArgs> | null;
    omit?: Prisma.UsersOmit<ExtArgs> | null;
    include?: Prisma.UsersInclude<ExtArgs> | null;
    where: Prisma.UsersWhereUniqueInput;
    create: Prisma.XOR<Prisma.UsersCreateInput, Prisma.UsersUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.UsersUpdateInput, Prisma.UsersUncheckedUpdateInput>;
};
export type UsersDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsersSelect<ExtArgs> | null;
    omit?: Prisma.UsersOmit<ExtArgs> | null;
    include?: Prisma.UsersInclude<ExtArgs> | null;
    where: Prisma.UsersWhereUniqueInput;
};
export type UsersDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UsersWhereInput;
    limit?: number;
};
export type Users$boardsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Users$createdTasksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TasksSelect<ExtArgs> | null;
    omit?: Prisma.TasksOmit<ExtArgs> | null;
    include?: Prisma.TasksInclude<ExtArgs> | null;
    where?: Prisma.TasksWhereInput;
    orderBy?: Prisma.TasksOrderByWithRelationInput | Prisma.TasksOrderByWithRelationInput[];
    cursor?: Prisma.TasksWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TasksScalarFieldEnum | Prisma.TasksScalarFieldEnum[];
};
export type Users$assigneeTasksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TasksSelect<ExtArgs> | null;
    omit?: Prisma.TasksOmit<ExtArgs> | null;
    include?: Prisma.TasksInclude<ExtArgs> | null;
    where?: Prisma.TasksWhereInput;
    orderBy?: Prisma.TasksOrderByWithRelationInput | Prisma.TasksOrderByWithRelationInput[];
    cursor?: Prisma.TasksWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TasksScalarFieldEnum | Prisma.TasksScalarFieldEnum[];
};
export type Users$userBoardsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Users$refreshTokensArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.refreshTokensSelect<ExtArgs> | null;
    omit?: Prisma.refreshTokensOmit<ExtArgs> | null;
    include?: Prisma.refreshTokensInclude<ExtArgs> | null;
    where?: Prisma.refreshTokensWhereInput;
    orderBy?: Prisma.refreshTokensOrderByWithRelationInput | Prisma.refreshTokensOrderByWithRelationInput[];
    cursor?: Prisma.refreshTokensWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RefreshTokensScalarFieldEnum | Prisma.RefreshTokensScalarFieldEnum[];
};
export type UsersDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsersSelect<ExtArgs> | null;
    omit?: Prisma.UsersOmit<ExtArgs> | null;
    include?: Prisma.UsersInclude<ExtArgs> | null;
};
export {};
