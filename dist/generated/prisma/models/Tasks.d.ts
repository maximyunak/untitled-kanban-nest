import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
export type TasksModel = runtime.Types.Result.DefaultSelection<Prisma.$TasksPayload>;
export type AggregateTasks = {
    _count: TasksCountAggregateOutputType | null;
    _avg: TasksAvgAggregateOutputType | null;
    _sum: TasksSumAggregateOutputType | null;
    _min: TasksMinAggregateOutputType | null;
    _max: TasksMaxAggregateOutputType | null;
};
export type TasksAvgAggregateOutputType = {
    id: number | null;
    position: number | null;
    creatorId: number | null;
    assigneeId: number | null;
    columnId: number | null;
};
export type TasksSumAggregateOutputType = {
    id: number | null;
    position: number | null;
    creatorId: number | null;
    assigneeId: number | null;
    columnId: number | null;
};
export type TasksMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    description: string | null;
    isCompleted: boolean | null;
    position: number | null;
    deadline: Date | null;
    creatorId: number | null;
    assigneeId: number | null;
    columnId: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type TasksMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    description: string | null;
    isCompleted: boolean | null;
    position: number | null;
    deadline: Date | null;
    creatorId: number | null;
    assigneeId: number | null;
    columnId: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type TasksCountAggregateOutputType = {
    id: number;
    name: number;
    description: number;
    isCompleted: number;
    position: number;
    deadline: number;
    creatorId: number;
    assigneeId: number;
    columnId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type TasksAvgAggregateInputType = {
    id?: true;
    position?: true;
    creatorId?: true;
    assigneeId?: true;
    columnId?: true;
};
export type TasksSumAggregateInputType = {
    id?: true;
    position?: true;
    creatorId?: true;
    assigneeId?: true;
    columnId?: true;
};
export type TasksMinAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    isCompleted?: true;
    position?: true;
    deadline?: true;
    creatorId?: true;
    assigneeId?: true;
    columnId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type TasksMaxAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    isCompleted?: true;
    position?: true;
    deadline?: true;
    creatorId?: true;
    assigneeId?: true;
    columnId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type TasksCountAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    isCompleted?: true;
    position?: true;
    deadline?: true;
    creatorId?: true;
    assigneeId?: true;
    columnId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type TasksAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TasksWhereInput;
    orderBy?: Prisma.TasksOrderByWithRelationInput | Prisma.TasksOrderByWithRelationInput[];
    cursor?: Prisma.TasksWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | TasksCountAggregateInputType;
    _avg?: TasksAvgAggregateInputType;
    _sum?: TasksSumAggregateInputType;
    _min?: TasksMinAggregateInputType;
    _max?: TasksMaxAggregateInputType;
};
export type GetTasksAggregateType<T extends TasksAggregateArgs> = {
    [P in keyof T & keyof AggregateTasks]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTasks[P]> : Prisma.GetScalarType<T[P], AggregateTasks[P]>;
};
export type TasksGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TasksWhereInput;
    orderBy?: Prisma.TasksOrderByWithAggregationInput | Prisma.TasksOrderByWithAggregationInput[];
    by: Prisma.TasksScalarFieldEnum[] | Prisma.TasksScalarFieldEnum;
    having?: Prisma.TasksScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TasksCountAggregateInputType | true;
    _avg?: TasksAvgAggregateInputType;
    _sum?: TasksSumAggregateInputType;
    _min?: TasksMinAggregateInputType;
    _max?: TasksMaxAggregateInputType;
};
export type TasksGroupByOutputType = {
    id: number;
    name: string;
    description: string | null;
    isCompleted: boolean;
    position: number;
    deadline: Date;
    creatorId: number;
    assigneeId: number | null;
    columnId: number;
    createdAt: Date;
    updatedAt: Date;
    _count: TasksCountAggregateOutputType | null;
    _avg: TasksAvgAggregateOutputType | null;
    _sum: TasksSumAggregateOutputType | null;
    _min: TasksMinAggregateOutputType | null;
    _max: TasksMaxAggregateOutputType | null;
};
type GetTasksGroupByPayload<T extends TasksGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TasksGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TasksGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TasksGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TasksGroupByOutputType[P]>;
}>>;
export type TasksWhereInput = {
    AND?: Prisma.TasksWhereInput | Prisma.TasksWhereInput[];
    OR?: Prisma.TasksWhereInput[];
    NOT?: Prisma.TasksWhereInput | Prisma.TasksWhereInput[];
    id?: Prisma.IntFilter<"Tasks"> | number;
    name?: Prisma.StringFilter<"Tasks"> | string;
    description?: Prisma.StringNullableFilter<"Tasks"> | string | null;
    isCompleted?: Prisma.BoolFilter<"Tasks"> | boolean;
    position?: Prisma.IntFilter<"Tasks"> | number;
    deadline?: Prisma.DateTimeFilter<"Tasks"> | Date | string;
    creatorId?: Prisma.IntFilter<"Tasks"> | number;
    assigneeId?: Prisma.IntNullableFilter<"Tasks"> | number | null;
    columnId?: Prisma.IntFilter<"Tasks"> | number;
    createdAt?: Prisma.DateTimeFilter<"Tasks"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Tasks"> | Date | string;
    creator?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.UsersWhereInput>;
    assignee?: Prisma.XOR<Prisma.UsersNullableScalarRelationFilter, Prisma.UsersWhereInput> | null;
    column?: Prisma.XOR<Prisma.ColumnsScalarRelationFilter, Prisma.ColumnsWhereInput>;
};
export type TasksOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    isCompleted?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
    deadline?: Prisma.SortOrder;
    creatorId?: Prisma.SortOrder;
    assigneeId?: Prisma.SortOrderInput | Prisma.SortOrder;
    columnId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    creator?: Prisma.UsersOrderByWithRelationInput;
    assignee?: Prisma.UsersOrderByWithRelationInput;
    column?: Prisma.ColumnsOrderByWithRelationInput;
    _relevance?: Prisma.TasksOrderByRelevanceInput;
};
export type TasksWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.TasksWhereInput | Prisma.TasksWhereInput[];
    OR?: Prisma.TasksWhereInput[];
    NOT?: Prisma.TasksWhereInput | Prisma.TasksWhereInput[];
    name?: Prisma.StringFilter<"Tasks"> | string;
    description?: Prisma.StringNullableFilter<"Tasks"> | string | null;
    isCompleted?: Prisma.BoolFilter<"Tasks"> | boolean;
    position?: Prisma.IntFilter<"Tasks"> | number;
    deadline?: Prisma.DateTimeFilter<"Tasks"> | Date | string;
    creatorId?: Prisma.IntFilter<"Tasks"> | number;
    assigneeId?: Prisma.IntNullableFilter<"Tasks"> | number | null;
    columnId?: Prisma.IntFilter<"Tasks"> | number;
    createdAt?: Prisma.DateTimeFilter<"Tasks"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Tasks"> | Date | string;
    creator?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.UsersWhereInput>;
    assignee?: Prisma.XOR<Prisma.UsersNullableScalarRelationFilter, Prisma.UsersWhereInput> | null;
    column?: Prisma.XOR<Prisma.ColumnsScalarRelationFilter, Prisma.ColumnsWhereInput>;
}, "id">;
export type TasksOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    isCompleted?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
    deadline?: Prisma.SortOrder;
    creatorId?: Prisma.SortOrder;
    assigneeId?: Prisma.SortOrderInput | Prisma.SortOrder;
    columnId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.TasksCountOrderByAggregateInput;
    _avg?: Prisma.TasksAvgOrderByAggregateInput;
    _max?: Prisma.TasksMaxOrderByAggregateInput;
    _min?: Prisma.TasksMinOrderByAggregateInput;
    _sum?: Prisma.TasksSumOrderByAggregateInput;
};
export type TasksScalarWhereWithAggregatesInput = {
    AND?: Prisma.TasksScalarWhereWithAggregatesInput | Prisma.TasksScalarWhereWithAggregatesInput[];
    OR?: Prisma.TasksScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TasksScalarWhereWithAggregatesInput | Prisma.TasksScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Tasks"> | number;
    name?: Prisma.StringWithAggregatesFilter<"Tasks"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"Tasks"> | string | null;
    isCompleted?: Prisma.BoolWithAggregatesFilter<"Tasks"> | boolean;
    position?: Prisma.IntWithAggregatesFilter<"Tasks"> | number;
    deadline?: Prisma.DateTimeWithAggregatesFilter<"Tasks"> | Date | string;
    creatorId?: Prisma.IntWithAggregatesFilter<"Tasks"> | number;
    assigneeId?: Prisma.IntNullableWithAggregatesFilter<"Tasks"> | number | null;
    columnId?: Prisma.IntWithAggregatesFilter<"Tasks"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Tasks"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Tasks"> | Date | string;
};
export type TasksCreateInput = {
    name: string;
    description?: string | null;
    isCompleted?: boolean;
    position?: number;
    deadline: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    creator: Prisma.UsersCreateNestedOneWithoutCreatedTasksInput;
    assignee?: Prisma.UsersCreateNestedOneWithoutAssigneeTasksInput;
    column: Prisma.ColumnsCreateNestedOneWithoutTasksInput;
};
export type TasksUncheckedCreateInput = {
    id?: number;
    name: string;
    description?: string | null;
    isCompleted?: boolean;
    position?: number;
    deadline: Date | string;
    creatorId: number;
    assigneeId?: number | null;
    columnId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TasksUpdateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isCompleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    deadline?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    creator?: Prisma.UsersUpdateOneRequiredWithoutCreatedTasksNestedInput;
    assignee?: Prisma.UsersUpdateOneWithoutAssigneeTasksNestedInput;
    column?: Prisma.ColumnsUpdateOneRequiredWithoutTasksNestedInput;
};
export type TasksUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isCompleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    deadline?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    creatorId?: Prisma.IntFieldUpdateOperationsInput | number;
    assigneeId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    columnId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TasksCreateManyInput = {
    id?: number;
    name: string;
    description?: string | null;
    isCompleted?: boolean;
    position?: number;
    deadline: Date | string;
    creatorId: number;
    assigneeId?: number | null;
    columnId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TasksUpdateManyMutationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isCompleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    deadline?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TasksUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isCompleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    deadline?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    creatorId?: Prisma.IntFieldUpdateOperationsInput | number;
    assigneeId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    columnId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TasksListRelationFilter = {
    every?: Prisma.TasksWhereInput;
    some?: Prisma.TasksWhereInput;
    none?: Prisma.TasksWhereInput;
};
export type TasksOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type TasksOrderByRelevanceInput = {
    fields: Prisma.TasksOrderByRelevanceFieldEnum | Prisma.TasksOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type TasksCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    isCompleted?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
    deadline?: Prisma.SortOrder;
    creatorId?: Prisma.SortOrder;
    assigneeId?: Prisma.SortOrder;
    columnId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TasksAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
    creatorId?: Prisma.SortOrder;
    assigneeId?: Prisma.SortOrder;
    columnId?: Prisma.SortOrder;
};
export type TasksMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    isCompleted?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
    deadline?: Prisma.SortOrder;
    creatorId?: Prisma.SortOrder;
    assigneeId?: Prisma.SortOrder;
    columnId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TasksMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    isCompleted?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
    deadline?: Prisma.SortOrder;
    creatorId?: Prisma.SortOrder;
    assigneeId?: Prisma.SortOrder;
    columnId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TasksSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
    creatorId?: Prisma.SortOrder;
    assigneeId?: Prisma.SortOrder;
    columnId?: Prisma.SortOrder;
};
export type TasksCreateNestedManyWithoutCreatorInput = {
    create?: Prisma.XOR<Prisma.TasksCreateWithoutCreatorInput, Prisma.TasksUncheckedCreateWithoutCreatorInput> | Prisma.TasksCreateWithoutCreatorInput[] | Prisma.TasksUncheckedCreateWithoutCreatorInput[];
    connectOrCreate?: Prisma.TasksCreateOrConnectWithoutCreatorInput | Prisma.TasksCreateOrConnectWithoutCreatorInput[];
    createMany?: Prisma.TasksCreateManyCreatorInputEnvelope;
    connect?: Prisma.TasksWhereUniqueInput | Prisma.TasksWhereUniqueInput[];
};
export type TasksCreateNestedManyWithoutAssigneeInput = {
    create?: Prisma.XOR<Prisma.TasksCreateWithoutAssigneeInput, Prisma.TasksUncheckedCreateWithoutAssigneeInput> | Prisma.TasksCreateWithoutAssigneeInput[] | Prisma.TasksUncheckedCreateWithoutAssigneeInput[];
    connectOrCreate?: Prisma.TasksCreateOrConnectWithoutAssigneeInput | Prisma.TasksCreateOrConnectWithoutAssigneeInput[];
    createMany?: Prisma.TasksCreateManyAssigneeInputEnvelope;
    connect?: Prisma.TasksWhereUniqueInput | Prisma.TasksWhereUniqueInput[];
};
export type TasksUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: Prisma.XOR<Prisma.TasksCreateWithoutCreatorInput, Prisma.TasksUncheckedCreateWithoutCreatorInput> | Prisma.TasksCreateWithoutCreatorInput[] | Prisma.TasksUncheckedCreateWithoutCreatorInput[];
    connectOrCreate?: Prisma.TasksCreateOrConnectWithoutCreatorInput | Prisma.TasksCreateOrConnectWithoutCreatorInput[];
    createMany?: Prisma.TasksCreateManyCreatorInputEnvelope;
    connect?: Prisma.TasksWhereUniqueInput | Prisma.TasksWhereUniqueInput[];
};
export type TasksUncheckedCreateNestedManyWithoutAssigneeInput = {
    create?: Prisma.XOR<Prisma.TasksCreateWithoutAssigneeInput, Prisma.TasksUncheckedCreateWithoutAssigneeInput> | Prisma.TasksCreateWithoutAssigneeInput[] | Prisma.TasksUncheckedCreateWithoutAssigneeInput[];
    connectOrCreate?: Prisma.TasksCreateOrConnectWithoutAssigneeInput | Prisma.TasksCreateOrConnectWithoutAssigneeInput[];
    createMany?: Prisma.TasksCreateManyAssigneeInputEnvelope;
    connect?: Prisma.TasksWhereUniqueInput | Prisma.TasksWhereUniqueInput[];
};
export type TasksUpdateManyWithoutCreatorNestedInput = {
    create?: Prisma.XOR<Prisma.TasksCreateWithoutCreatorInput, Prisma.TasksUncheckedCreateWithoutCreatorInput> | Prisma.TasksCreateWithoutCreatorInput[] | Prisma.TasksUncheckedCreateWithoutCreatorInput[];
    connectOrCreate?: Prisma.TasksCreateOrConnectWithoutCreatorInput | Prisma.TasksCreateOrConnectWithoutCreatorInput[];
    upsert?: Prisma.TasksUpsertWithWhereUniqueWithoutCreatorInput | Prisma.TasksUpsertWithWhereUniqueWithoutCreatorInput[];
    createMany?: Prisma.TasksCreateManyCreatorInputEnvelope;
    set?: Prisma.TasksWhereUniqueInput | Prisma.TasksWhereUniqueInput[];
    disconnect?: Prisma.TasksWhereUniqueInput | Prisma.TasksWhereUniqueInput[];
    delete?: Prisma.TasksWhereUniqueInput | Prisma.TasksWhereUniqueInput[];
    connect?: Prisma.TasksWhereUniqueInput | Prisma.TasksWhereUniqueInput[];
    update?: Prisma.TasksUpdateWithWhereUniqueWithoutCreatorInput | Prisma.TasksUpdateWithWhereUniqueWithoutCreatorInput[];
    updateMany?: Prisma.TasksUpdateManyWithWhereWithoutCreatorInput | Prisma.TasksUpdateManyWithWhereWithoutCreatorInput[];
    deleteMany?: Prisma.TasksScalarWhereInput | Prisma.TasksScalarWhereInput[];
};
export type TasksUpdateManyWithoutAssigneeNestedInput = {
    create?: Prisma.XOR<Prisma.TasksCreateWithoutAssigneeInput, Prisma.TasksUncheckedCreateWithoutAssigneeInput> | Prisma.TasksCreateWithoutAssigneeInput[] | Prisma.TasksUncheckedCreateWithoutAssigneeInput[];
    connectOrCreate?: Prisma.TasksCreateOrConnectWithoutAssigneeInput | Prisma.TasksCreateOrConnectWithoutAssigneeInput[];
    upsert?: Prisma.TasksUpsertWithWhereUniqueWithoutAssigneeInput | Prisma.TasksUpsertWithWhereUniqueWithoutAssigneeInput[];
    createMany?: Prisma.TasksCreateManyAssigneeInputEnvelope;
    set?: Prisma.TasksWhereUniqueInput | Prisma.TasksWhereUniqueInput[];
    disconnect?: Prisma.TasksWhereUniqueInput | Prisma.TasksWhereUniqueInput[];
    delete?: Prisma.TasksWhereUniqueInput | Prisma.TasksWhereUniqueInput[];
    connect?: Prisma.TasksWhereUniqueInput | Prisma.TasksWhereUniqueInput[];
    update?: Prisma.TasksUpdateWithWhereUniqueWithoutAssigneeInput | Prisma.TasksUpdateWithWhereUniqueWithoutAssigneeInput[];
    updateMany?: Prisma.TasksUpdateManyWithWhereWithoutAssigneeInput | Prisma.TasksUpdateManyWithWhereWithoutAssigneeInput[];
    deleteMany?: Prisma.TasksScalarWhereInput | Prisma.TasksScalarWhereInput[];
};
export type TasksUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: Prisma.XOR<Prisma.TasksCreateWithoutCreatorInput, Prisma.TasksUncheckedCreateWithoutCreatorInput> | Prisma.TasksCreateWithoutCreatorInput[] | Prisma.TasksUncheckedCreateWithoutCreatorInput[];
    connectOrCreate?: Prisma.TasksCreateOrConnectWithoutCreatorInput | Prisma.TasksCreateOrConnectWithoutCreatorInput[];
    upsert?: Prisma.TasksUpsertWithWhereUniqueWithoutCreatorInput | Prisma.TasksUpsertWithWhereUniqueWithoutCreatorInput[];
    createMany?: Prisma.TasksCreateManyCreatorInputEnvelope;
    set?: Prisma.TasksWhereUniqueInput | Prisma.TasksWhereUniqueInput[];
    disconnect?: Prisma.TasksWhereUniqueInput | Prisma.TasksWhereUniqueInput[];
    delete?: Prisma.TasksWhereUniqueInput | Prisma.TasksWhereUniqueInput[];
    connect?: Prisma.TasksWhereUniqueInput | Prisma.TasksWhereUniqueInput[];
    update?: Prisma.TasksUpdateWithWhereUniqueWithoutCreatorInput | Prisma.TasksUpdateWithWhereUniqueWithoutCreatorInput[];
    updateMany?: Prisma.TasksUpdateManyWithWhereWithoutCreatorInput | Prisma.TasksUpdateManyWithWhereWithoutCreatorInput[];
    deleteMany?: Prisma.TasksScalarWhereInput | Prisma.TasksScalarWhereInput[];
};
export type TasksUncheckedUpdateManyWithoutAssigneeNestedInput = {
    create?: Prisma.XOR<Prisma.TasksCreateWithoutAssigneeInput, Prisma.TasksUncheckedCreateWithoutAssigneeInput> | Prisma.TasksCreateWithoutAssigneeInput[] | Prisma.TasksUncheckedCreateWithoutAssigneeInput[];
    connectOrCreate?: Prisma.TasksCreateOrConnectWithoutAssigneeInput | Prisma.TasksCreateOrConnectWithoutAssigneeInput[];
    upsert?: Prisma.TasksUpsertWithWhereUniqueWithoutAssigneeInput | Prisma.TasksUpsertWithWhereUniqueWithoutAssigneeInput[];
    createMany?: Prisma.TasksCreateManyAssigneeInputEnvelope;
    set?: Prisma.TasksWhereUniqueInput | Prisma.TasksWhereUniqueInput[];
    disconnect?: Prisma.TasksWhereUniqueInput | Prisma.TasksWhereUniqueInput[];
    delete?: Prisma.TasksWhereUniqueInput | Prisma.TasksWhereUniqueInput[];
    connect?: Prisma.TasksWhereUniqueInput | Prisma.TasksWhereUniqueInput[];
    update?: Prisma.TasksUpdateWithWhereUniqueWithoutAssigneeInput | Prisma.TasksUpdateWithWhereUniqueWithoutAssigneeInput[];
    updateMany?: Prisma.TasksUpdateManyWithWhereWithoutAssigneeInput | Prisma.TasksUpdateManyWithWhereWithoutAssigneeInput[];
    deleteMany?: Prisma.TasksScalarWhereInput | Prisma.TasksScalarWhereInput[];
};
export type TasksCreateNestedManyWithoutColumnInput = {
    create?: Prisma.XOR<Prisma.TasksCreateWithoutColumnInput, Prisma.TasksUncheckedCreateWithoutColumnInput> | Prisma.TasksCreateWithoutColumnInput[] | Prisma.TasksUncheckedCreateWithoutColumnInput[];
    connectOrCreate?: Prisma.TasksCreateOrConnectWithoutColumnInput | Prisma.TasksCreateOrConnectWithoutColumnInput[];
    createMany?: Prisma.TasksCreateManyColumnInputEnvelope;
    connect?: Prisma.TasksWhereUniqueInput | Prisma.TasksWhereUniqueInput[];
};
export type TasksUncheckedCreateNestedManyWithoutColumnInput = {
    create?: Prisma.XOR<Prisma.TasksCreateWithoutColumnInput, Prisma.TasksUncheckedCreateWithoutColumnInput> | Prisma.TasksCreateWithoutColumnInput[] | Prisma.TasksUncheckedCreateWithoutColumnInput[];
    connectOrCreate?: Prisma.TasksCreateOrConnectWithoutColumnInput | Prisma.TasksCreateOrConnectWithoutColumnInput[];
    createMany?: Prisma.TasksCreateManyColumnInputEnvelope;
    connect?: Prisma.TasksWhereUniqueInput | Prisma.TasksWhereUniqueInput[];
};
export type TasksUpdateManyWithoutColumnNestedInput = {
    create?: Prisma.XOR<Prisma.TasksCreateWithoutColumnInput, Prisma.TasksUncheckedCreateWithoutColumnInput> | Prisma.TasksCreateWithoutColumnInput[] | Prisma.TasksUncheckedCreateWithoutColumnInput[];
    connectOrCreate?: Prisma.TasksCreateOrConnectWithoutColumnInput | Prisma.TasksCreateOrConnectWithoutColumnInput[];
    upsert?: Prisma.TasksUpsertWithWhereUniqueWithoutColumnInput | Prisma.TasksUpsertWithWhereUniqueWithoutColumnInput[];
    createMany?: Prisma.TasksCreateManyColumnInputEnvelope;
    set?: Prisma.TasksWhereUniqueInput | Prisma.TasksWhereUniqueInput[];
    disconnect?: Prisma.TasksWhereUniqueInput | Prisma.TasksWhereUniqueInput[];
    delete?: Prisma.TasksWhereUniqueInput | Prisma.TasksWhereUniqueInput[];
    connect?: Prisma.TasksWhereUniqueInput | Prisma.TasksWhereUniqueInput[];
    update?: Prisma.TasksUpdateWithWhereUniqueWithoutColumnInput | Prisma.TasksUpdateWithWhereUniqueWithoutColumnInput[];
    updateMany?: Prisma.TasksUpdateManyWithWhereWithoutColumnInput | Prisma.TasksUpdateManyWithWhereWithoutColumnInput[];
    deleteMany?: Prisma.TasksScalarWhereInput | Prisma.TasksScalarWhereInput[];
};
export type TasksUncheckedUpdateManyWithoutColumnNestedInput = {
    create?: Prisma.XOR<Prisma.TasksCreateWithoutColumnInput, Prisma.TasksUncheckedCreateWithoutColumnInput> | Prisma.TasksCreateWithoutColumnInput[] | Prisma.TasksUncheckedCreateWithoutColumnInput[];
    connectOrCreate?: Prisma.TasksCreateOrConnectWithoutColumnInput | Prisma.TasksCreateOrConnectWithoutColumnInput[];
    upsert?: Prisma.TasksUpsertWithWhereUniqueWithoutColumnInput | Prisma.TasksUpsertWithWhereUniqueWithoutColumnInput[];
    createMany?: Prisma.TasksCreateManyColumnInputEnvelope;
    set?: Prisma.TasksWhereUniqueInput | Prisma.TasksWhereUniqueInput[];
    disconnect?: Prisma.TasksWhereUniqueInput | Prisma.TasksWhereUniqueInput[];
    delete?: Prisma.TasksWhereUniqueInput | Prisma.TasksWhereUniqueInput[];
    connect?: Prisma.TasksWhereUniqueInput | Prisma.TasksWhereUniqueInput[];
    update?: Prisma.TasksUpdateWithWhereUniqueWithoutColumnInput | Prisma.TasksUpdateWithWhereUniqueWithoutColumnInput[];
    updateMany?: Prisma.TasksUpdateManyWithWhereWithoutColumnInput | Prisma.TasksUpdateManyWithWhereWithoutColumnInput[];
    deleteMany?: Prisma.TasksScalarWhereInput | Prisma.TasksScalarWhereInput[];
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type TasksCreateWithoutCreatorInput = {
    name: string;
    description?: string | null;
    isCompleted?: boolean;
    position?: number;
    deadline: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    assignee?: Prisma.UsersCreateNestedOneWithoutAssigneeTasksInput;
    column: Prisma.ColumnsCreateNestedOneWithoutTasksInput;
};
export type TasksUncheckedCreateWithoutCreatorInput = {
    id?: number;
    name: string;
    description?: string | null;
    isCompleted?: boolean;
    position?: number;
    deadline: Date | string;
    assigneeId?: number | null;
    columnId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TasksCreateOrConnectWithoutCreatorInput = {
    where: Prisma.TasksWhereUniqueInput;
    create: Prisma.XOR<Prisma.TasksCreateWithoutCreatorInput, Prisma.TasksUncheckedCreateWithoutCreatorInput>;
};
export type TasksCreateManyCreatorInputEnvelope = {
    data: Prisma.TasksCreateManyCreatorInput | Prisma.TasksCreateManyCreatorInput[];
    skipDuplicates?: boolean;
};
export type TasksCreateWithoutAssigneeInput = {
    name: string;
    description?: string | null;
    isCompleted?: boolean;
    position?: number;
    deadline: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    creator: Prisma.UsersCreateNestedOneWithoutCreatedTasksInput;
    column: Prisma.ColumnsCreateNestedOneWithoutTasksInput;
};
export type TasksUncheckedCreateWithoutAssigneeInput = {
    id?: number;
    name: string;
    description?: string | null;
    isCompleted?: boolean;
    position?: number;
    deadline: Date | string;
    creatorId: number;
    columnId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TasksCreateOrConnectWithoutAssigneeInput = {
    where: Prisma.TasksWhereUniqueInput;
    create: Prisma.XOR<Prisma.TasksCreateWithoutAssigneeInput, Prisma.TasksUncheckedCreateWithoutAssigneeInput>;
};
export type TasksCreateManyAssigneeInputEnvelope = {
    data: Prisma.TasksCreateManyAssigneeInput | Prisma.TasksCreateManyAssigneeInput[];
    skipDuplicates?: boolean;
};
export type TasksUpsertWithWhereUniqueWithoutCreatorInput = {
    where: Prisma.TasksWhereUniqueInput;
    update: Prisma.XOR<Prisma.TasksUpdateWithoutCreatorInput, Prisma.TasksUncheckedUpdateWithoutCreatorInput>;
    create: Prisma.XOR<Prisma.TasksCreateWithoutCreatorInput, Prisma.TasksUncheckedCreateWithoutCreatorInput>;
};
export type TasksUpdateWithWhereUniqueWithoutCreatorInput = {
    where: Prisma.TasksWhereUniqueInput;
    data: Prisma.XOR<Prisma.TasksUpdateWithoutCreatorInput, Prisma.TasksUncheckedUpdateWithoutCreatorInput>;
};
export type TasksUpdateManyWithWhereWithoutCreatorInput = {
    where: Prisma.TasksScalarWhereInput;
    data: Prisma.XOR<Prisma.TasksUpdateManyMutationInput, Prisma.TasksUncheckedUpdateManyWithoutCreatorInput>;
};
export type TasksScalarWhereInput = {
    AND?: Prisma.TasksScalarWhereInput | Prisma.TasksScalarWhereInput[];
    OR?: Prisma.TasksScalarWhereInput[];
    NOT?: Prisma.TasksScalarWhereInput | Prisma.TasksScalarWhereInput[];
    id?: Prisma.IntFilter<"Tasks"> | number;
    name?: Prisma.StringFilter<"Tasks"> | string;
    description?: Prisma.StringNullableFilter<"Tasks"> | string | null;
    isCompleted?: Prisma.BoolFilter<"Tasks"> | boolean;
    position?: Prisma.IntFilter<"Tasks"> | number;
    deadline?: Prisma.DateTimeFilter<"Tasks"> | Date | string;
    creatorId?: Prisma.IntFilter<"Tasks"> | number;
    assigneeId?: Prisma.IntNullableFilter<"Tasks"> | number | null;
    columnId?: Prisma.IntFilter<"Tasks"> | number;
    createdAt?: Prisma.DateTimeFilter<"Tasks"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Tasks"> | Date | string;
};
export type TasksUpsertWithWhereUniqueWithoutAssigneeInput = {
    where: Prisma.TasksWhereUniqueInput;
    update: Prisma.XOR<Prisma.TasksUpdateWithoutAssigneeInput, Prisma.TasksUncheckedUpdateWithoutAssigneeInput>;
    create: Prisma.XOR<Prisma.TasksCreateWithoutAssigneeInput, Prisma.TasksUncheckedCreateWithoutAssigneeInput>;
};
export type TasksUpdateWithWhereUniqueWithoutAssigneeInput = {
    where: Prisma.TasksWhereUniqueInput;
    data: Prisma.XOR<Prisma.TasksUpdateWithoutAssigneeInput, Prisma.TasksUncheckedUpdateWithoutAssigneeInput>;
};
export type TasksUpdateManyWithWhereWithoutAssigneeInput = {
    where: Prisma.TasksScalarWhereInput;
    data: Prisma.XOR<Prisma.TasksUpdateManyMutationInput, Prisma.TasksUncheckedUpdateManyWithoutAssigneeInput>;
};
export type TasksCreateWithoutColumnInput = {
    name: string;
    description?: string | null;
    isCompleted?: boolean;
    position?: number;
    deadline: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    creator: Prisma.UsersCreateNestedOneWithoutCreatedTasksInput;
    assignee?: Prisma.UsersCreateNestedOneWithoutAssigneeTasksInput;
};
export type TasksUncheckedCreateWithoutColumnInput = {
    id?: number;
    name: string;
    description?: string | null;
    isCompleted?: boolean;
    position?: number;
    deadline: Date | string;
    creatorId: number;
    assigneeId?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TasksCreateOrConnectWithoutColumnInput = {
    where: Prisma.TasksWhereUniqueInput;
    create: Prisma.XOR<Prisma.TasksCreateWithoutColumnInput, Prisma.TasksUncheckedCreateWithoutColumnInput>;
};
export type TasksCreateManyColumnInputEnvelope = {
    data: Prisma.TasksCreateManyColumnInput | Prisma.TasksCreateManyColumnInput[];
    skipDuplicates?: boolean;
};
export type TasksUpsertWithWhereUniqueWithoutColumnInput = {
    where: Prisma.TasksWhereUniqueInput;
    update: Prisma.XOR<Prisma.TasksUpdateWithoutColumnInput, Prisma.TasksUncheckedUpdateWithoutColumnInput>;
    create: Prisma.XOR<Prisma.TasksCreateWithoutColumnInput, Prisma.TasksUncheckedCreateWithoutColumnInput>;
};
export type TasksUpdateWithWhereUniqueWithoutColumnInput = {
    where: Prisma.TasksWhereUniqueInput;
    data: Prisma.XOR<Prisma.TasksUpdateWithoutColumnInput, Prisma.TasksUncheckedUpdateWithoutColumnInput>;
};
export type TasksUpdateManyWithWhereWithoutColumnInput = {
    where: Prisma.TasksScalarWhereInput;
    data: Prisma.XOR<Prisma.TasksUpdateManyMutationInput, Prisma.TasksUncheckedUpdateManyWithoutColumnInput>;
};
export type TasksCreateManyCreatorInput = {
    id?: number;
    name: string;
    description?: string | null;
    isCompleted?: boolean;
    position?: number;
    deadline: Date | string;
    assigneeId?: number | null;
    columnId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TasksCreateManyAssigneeInput = {
    id?: number;
    name: string;
    description?: string | null;
    isCompleted?: boolean;
    position?: number;
    deadline: Date | string;
    creatorId: number;
    columnId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TasksUpdateWithoutCreatorInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isCompleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    deadline?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    assignee?: Prisma.UsersUpdateOneWithoutAssigneeTasksNestedInput;
    column?: Prisma.ColumnsUpdateOneRequiredWithoutTasksNestedInput;
};
export type TasksUncheckedUpdateWithoutCreatorInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isCompleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    deadline?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    assigneeId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    columnId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TasksUncheckedUpdateManyWithoutCreatorInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isCompleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    deadline?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    assigneeId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    columnId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TasksUpdateWithoutAssigneeInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isCompleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    deadline?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    creator?: Prisma.UsersUpdateOneRequiredWithoutCreatedTasksNestedInput;
    column?: Prisma.ColumnsUpdateOneRequiredWithoutTasksNestedInput;
};
export type TasksUncheckedUpdateWithoutAssigneeInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isCompleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    deadline?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    creatorId?: Prisma.IntFieldUpdateOperationsInput | number;
    columnId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TasksUncheckedUpdateManyWithoutAssigneeInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isCompleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    deadline?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    creatorId?: Prisma.IntFieldUpdateOperationsInput | number;
    columnId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TasksCreateManyColumnInput = {
    id?: number;
    name: string;
    description?: string | null;
    isCompleted?: boolean;
    position?: number;
    deadline: Date | string;
    creatorId: number;
    assigneeId?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TasksUpdateWithoutColumnInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isCompleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    deadline?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    creator?: Prisma.UsersUpdateOneRequiredWithoutCreatedTasksNestedInput;
    assignee?: Prisma.UsersUpdateOneWithoutAssigneeTasksNestedInput;
};
export type TasksUncheckedUpdateWithoutColumnInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isCompleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    deadline?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    creatorId?: Prisma.IntFieldUpdateOperationsInput | number;
    assigneeId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TasksUncheckedUpdateManyWithoutColumnInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isCompleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    deadline?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    creatorId?: Prisma.IntFieldUpdateOperationsInput | number;
    assigneeId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TasksSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    description?: boolean;
    isCompleted?: boolean;
    position?: boolean;
    deadline?: boolean;
    creatorId?: boolean;
    assigneeId?: boolean;
    columnId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    creator?: boolean | Prisma.UsersDefaultArgs<ExtArgs>;
    assignee?: boolean | Prisma.Tasks$assigneeArgs<ExtArgs>;
    column?: boolean | Prisma.ColumnsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["tasks"]>;
export type TasksSelectScalar = {
    id?: boolean;
    name?: boolean;
    description?: boolean;
    isCompleted?: boolean;
    position?: boolean;
    deadline?: boolean;
    creatorId?: boolean;
    assigneeId?: boolean;
    columnId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type TasksOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "description" | "isCompleted" | "position" | "deadline" | "creatorId" | "assigneeId" | "columnId" | "createdAt" | "updatedAt", ExtArgs["result"]["tasks"]>;
export type TasksInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    creator?: boolean | Prisma.UsersDefaultArgs<ExtArgs>;
    assignee?: boolean | Prisma.Tasks$assigneeArgs<ExtArgs>;
    column?: boolean | Prisma.ColumnsDefaultArgs<ExtArgs>;
};
export type $TasksPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Tasks";
    objects: {
        creator: Prisma.$UsersPayload<ExtArgs>;
        assignee: Prisma.$UsersPayload<ExtArgs> | null;
        column: Prisma.$ColumnsPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        name: string;
        description: string | null;
        isCompleted: boolean;
        position: number;
        deadline: Date;
        creatorId: number;
        assigneeId: number | null;
        columnId: number;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["tasks"]>;
    composites: {};
};
export type TasksGetPayload<S extends boolean | null | undefined | TasksDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TasksPayload, S>;
export type TasksCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TasksFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TasksCountAggregateInputType | true;
};
export interface TasksDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Tasks'];
        meta: {
            name: 'Tasks';
        };
    };
    findUnique<T extends TasksFindUniqueArgs>(args: Prisma.SelectSubset<T, TasksFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TasksClient<runtime.Types.Result.GetResult<Prisma.$TasksPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends TasksFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TasksFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TasksClient<runtime.Types.Result.GetResult<Prisma.$TasksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends TasksFindFirstArgs>(args?: Prisma.SelectSubset<T, TasksFindFirstArgs<ExtArgs>>): Prisma.Prisma__TasksClient<runtime.Types.Result.GetResult<Prisma.$TasksPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends TasksFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TasksFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TasksClient<runtime.Types.Result.GetResult<Prisma.$TasksPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends TasksFindManyArgs>(args?: Prisma.SelectSubset<T, TasksFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TasksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends TasksCreateArgs>(args: Prisma.SelectSubset<T, TasksCreateArgs<ExtArgs>>): Prisma.Prisma__TasksClient<runtime.Types.Result.GetResult<Prisma.$TasksPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends TasksCreateManyArgs>(args?: Prisma.SelectSubset<T, TasksCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends TasksDeleteArgs>(args: Prisma.SelectSubset<T, TasksDeleteArgs<ExtArgs>>): Prisma.Prisma__TasksClient<runtime.Types.Result.GetResult<Prisma.$TasksPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends TasksUpdateArgs>(args: Prisma.SelectSubset<T, TasksUpdateArgs<ExtArgs>>): Prisma.Prisma__TasksClient<runtime.Types.Result.GetResult<Prisma.$TasksPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends TasksDeleteManyArgs>(args?: Prisma.SelectSubset<T, TasksDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends TasksUpdateManyArgs>(args: Prisma.SelectSubset<T, TasksUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends TasksUpsertArgs>(args: Prisma.SelectSubset<T, TasksUpsertArgs<ExtArgs>>): Prisma.Prisma__TasksClient<runtime.Types.Result.GetResult<Prisma.$TasksPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends TasksCountArgs>(args?: Prisma.Subset<T, TasksCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TasksCountAggregateOutputType> : number>;
    aggregate<T extends TasksAggregateArgs>(args: Prisma.Subset<T, TasksAggregateArgs>): Prisma.PrismaPromise<GetTasksAggregateType<T>>;
    groupBy<T extends TasksGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TasksGroupByArgs['orderBy'];
    } : {
        orderBy?: TasksGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TasksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTasksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: TasksFieldRefs;
}
export interface Prisma__TasksClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    creator<T extends Prisma.UsersDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UsersDefaultArgs<ExtArgs>>): Prisma.Prisma__UsersClient<runtime.Types.Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    assignee<T extends Prisma.Tasks$assigneeArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Tasks$assigneeArgs<ExtArgs>>): Prisma.Prisma__UsersClient<runtime.Types.Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    column<T extends Prisma.ColumnsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ColumnsDefaultArgs<ExtArgs>>): Prisma.Prisma__ColumnsClient<runtime.Types.Result.GetResult<Prisma.$ColumnsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface TasksFieldRefs {
    readonly id: Prisma.FieldRef<"Tasks", 'Int'>;
    readonly name: Prisma.FieldRef<"Tasks", 'String'>;
    readonly description: Prisma.FieldRef<"Tasks", 'String'>;
    readonly isCompleted: Prisma.FieldRef<"Tasks", 'Boolean'>;
    readonly position: Prisma.FieldRef<"Tasks", 'Int'>;
    readonly deadline: Prisma.FieldRef<"Tasks", 'DateTime'>;
    readonly creatorId: Prisma.FieldRef<"Tasks", 'Int'>;
    readonly assigneeId: Prisma.FieldRef<"Tasks", 'Int'>;
    readonly columnId: Prisma.FieldRef<"Tasks", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"Tasks", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Tasks", 'DateTime'>;
}
export type TasksFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TasksSelect<ExtArgs> | null;
    omit?: Prisma.TasksOmit<ExtArgs> | null;
    include?: Prisma.TasksInclude<ExtArgs> | null;
    where: Prisma.TasksWhereUniqueInput;
};
export type TasksFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TasksSelect<ExtArgs> | null;
    omit?: Prisma.TasksOmit<ExtArgs> | null;
    include?: Prisma.TasksInclude<ExtArgs> | null;
    where: Prisma.TasksWhereUniqueInput;
};
export type TasksFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type TasksFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type TasksFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type TasksCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TasksSelect<ExtArgs> | null;
    omit?: Prisma.TasksOmit<ExtArgs> | null;
    include?: Prisma.TasksInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TasksCreateInput, Prisma.TasksUncheckedCreateInput>;
};
export type TasksCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.TasksCreateManyInput | Prisma.TasksCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TasksUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TasksSelect<ExtArgs> | null;
    omit?: Prisma.TasksOmit<ExtArgs> | null;
    include?: Prisma.TasksInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TasksUpdateInput, Prisma.TasksUncheckedUpdateInput>;
    where: Prisma.TasksWhereUniqueInput;
};
export type TasksUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.TasksUpdateManyMutationInput, Prisma.TasksUncheckedUpdateManyInput>;
    where?: Prisma.TasksWhereInput;
    limit?: number;
};
export type TasksUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TasksSelect<ExtArgs> | null;
    omit?: Prisma.TasksOmit<ExtArgs> | null;
    include?: Prisma.TasksInclude<ExtArgs> | null;
    where: Prisma.TasksWhereUniqueInput;
    create: Prisma.XOR<Prisma.TasksCreateInput, Prisma.TasksUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.TasksUpdateInput, Prisma.TasksUncheckedUpdateInput>;
};
export type TasksDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TasksSelect<ExtArgs> | null;
    omit?: Prisma.TasksOmit<ExtArgs> | null;
    include?: Prisma.TasksInclude<ExtArgs> | null;
    where: Prisma.TasksWhereUniqueInput;
};
export type TasksDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TasksWhereInput;
    limit?: number;
};
export type Tasks$assigneeArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsersSelect<ExtArgs> | null;
    omit?: Prisma.UsersOmit<ExtArgs> | null;
    include?: Prisma.UsersInclude<ExtArgs> | null;
    where?: Prisma.UsersWhereInput;
};
export type TasksDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TasksSelect<ExtArgs> | null;
    omit?: Prisma.TasksOmit<ExtArgs> | null;
    include?: Prisma.TasksInclude<ExtArgs> | null;
};
export {};
