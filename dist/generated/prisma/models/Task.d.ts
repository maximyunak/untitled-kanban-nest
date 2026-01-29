import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
export type TaskModel = runtime.Types.Result.DefaultSelection<Prisma.$TaskPayload>;
export type AggregateTask = {
    _count: TaskCountAggregateOutputType | null;
    _avg: TaskAvgAggregateOutputType | null;
    _sum: TaskSumAggregateOutputType | null;
    _min: TaskMinAggregateOutputType | null;
    _max: TaskMaxAggregateOutputType | null;
};
export type TaskAvgAggregateOutputType = {
    id: number | null;
    position: number | null;
    creatorId: number | null;
    assigneeId: number | null;
    columnId: number | null;
};
export type TaskSumAggregateOutputType = {
    id: number | null;
    position: number | null;
    creatorId: number | null;
    assigneeId: number | null;
    columnId: number | null;
};
export type TaskMinAggregateOutputType = {
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
export type TaskMaxAggregateOutputType = {
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
export type TaskCountAggregateOutputType = {
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
export type TaskAvgAggregateInputType = {
    id?: true;
    position?: true;
    creatorId?: true;
    assigneeId?: true;
    columnId?: true;
};
export type TaskSumAggregateInputType = {
    id?: true;
    position?: true;
    creatorId?: true;
    assigneeId?: true;
    columnId?: true;
};
export type TaskMinAggregateInputType = {
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
export type TaskMaxAggregateInputType = {
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
export type TaskCountAggregateInputType = {
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
export type TaskAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TaskWhereInput;
    orderBy?: Prisma.TaskOrderByWithRelationInput | Prisma.TaskOrderByWithRelationInput[];
    cursor?: Prisma.TaskWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | TaskCountAggregateInputType;
    _avg?: TaskAvgAggregateInputType;
    _sum?: TaskSumAggregateInputType;
    _min?: TaskMinAggregateInputType;
    _max?: TaskMaxAggregateInputType;
};
export type GetTaskAggregateType<T extends TaskAggregateArgs> = {
    [P in keyof T & keyof AggregateTask]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTask[P]> : Prisma.GetScalarType<T[P], AggregateTask[P]>;
};
export type TaskGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TaskWhereInput;
    orderBy?: Prisma.TaskOrderByWithAggregationInput | Prisma.TaskOrderByWithAggregationInput[];
    by: Prisma.TaskScalarFieldEnum[] | Prisma.TaskScalarFieldEnum;
    having?: Prisma.TaskScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TaskCountAggregateInputType | true;
    _avg?: TaskAvgAggregateInputType;
    _sum?: TaskSumAggregateInputType;
    _min?: TaskMinAggregateInputType;
    _max?: TaskMaxAggregateInputType;
};
export type TaskGroupByOutputType = {
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
    _count: TaskCountAggregateOutputType | null;
    _avg: TaskAvgAggregateOutputType | null;
    _sum: TaskSumAggregateOutputType | null;
    _min: TaskMinAggregateOutputType | null;
    _max: TaskMaxAggregateOutputType | null;
};
type GetTaskGroupByPayload<T extends TaskGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TaskGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TaskGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TaskGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TaskGroupByOutputType[P]>;
}>>;
export type TaskWhereInput = {
    AND?: Prisma.TaskWhereInput | Prisma.TaskWhereInput[];
    OR?: Prisma.TaskWhereInput[];
    NOT?: Prisma.TaskWhereInput | Prisma.TaskWhereInput[];
    id?: Prisma.IntFilter<"Task"> | number;
    name?: Prisma.StringFilter<"Task"> | string;
    description?: Prisma.StringNullableFilter<"Task"> | string | null;
    isCompleted?: Prisma.BoolFilter<"Task"> | boolean;
    position?: Prisma.IntFilter<"Task"> | number;
    deadline?: Prisma.DateTimeFilter<"Task"> | Date | string;
    creatorId?: Prisma.IntFilter<"Task"> | number;
    assigneeId?: Prisma.IntNullableFilter<"Task"> | number | null;
    columnId?: Prisma.IntFilter<"Task"> | number;
    createdAt?: Prisma.DateTimeFilter<"Task"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Task"> | Date | string;
    creator?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    assignee?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    column?: Prisma.XOR<Prisma.ColumnScalarRelationFilter, Prisma.ColumnWhereInput>;
};
export type TaskOrderByWithRelationInput = {
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
    creator?: Prisma.UserOrderByWithRelationInput;
    assignee?: Prisma.UserOrderByWithRelationInput;
    column?: Prisma.ColumnOrderByWithRelationInput;
    _relevance?: Prisma.TaskOrderByRelevanceInput;
};
export type TaskWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.TaskWhereInput | Prisma.TaskWhereInput[];
    OR?: Prisma.TaskWhereInput[];
    NOT?: Prisma.TaskWhereInput | Prisma.TaskWhereInput[];
    name?: Prisma.StringFilter<"Task"> | string;
    description?: Prisma.StringNullableFilter<"Task"> | string | null;
    isCompleted?: Prisma.BoolFilter<"Task"> | boolean;
    position?: Prisma.IntFilter<"Task"> | number;
    deadline?: Prisma.DateTimeFilter<"Task"> | Date | string;
    creatorId?: Prisma.IntFilter<"Task"> | number;
    assigneeId?: Prisma.IntNullableFilter<"Task"> | number | null;
    columnId?: Prisma.IntFilter<"Task"> | number;
    createdAt?: Prisma.DateTimeFilter<"Task"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Task"> | Date | string;
    creator?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    assignee?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    column?: Prisma.XOR<Prisma.ColumnScalarRelationFilter, Prisma.ColumnWhereInput>;
}, "id">;
export type TaskOrderByWithAggregationInput = {
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
    _count?: Prisma.TaskCountOrderByAggregateInput;
    _avg?: Prisma.TaskAvgOrderByAggregateInput;
    _max?: Prisma.TaskMaxOrderByAggregateInput;
    _min?: Prisma.TaskMinOrderByAggregateInput;
    _sum?: Prisma.TaskSumOrderByAggregateInput;
};
export type TaskScalarWhereWithAggregatesInput = {
    AND?: Prisma.TaskScalarWhereWithAggregatesInput | Prisma.TaskScalarWhereWithAggregatesInput[];
    OR?: Prisma.TaskScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TaskScalarWhereWithAggregatesInput | Prisma.TaskScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Task"> | number;
    name?: Prisma.StringWithAggregatesFilter<"Task"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"Task"> | string | null;
    isCompleted?: Prisma.BoolWithAggregatesFilter<"Task"> | boolean;
    position?: Prisma.IntWithAggregatesFilter<"Task"> | number;
    deadline?: Prisma.DateTimeWithAggregatesFilter<"Task"> | Date | string;
    creatorId?: Prisma.IntWithAggregatesFilter<"Task"> | number;
    assigneeId?: Prisma.IntNullableWithAggregatesFilter<"Task"> | number | null;
    columnId?: Prisma.IntWithAggregatesFilter<"Task"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Task"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Task"> | Date | string;
};
export type TaskCreateInput = {
    name: string;
    description?: string | null;
    isCompleted?: boolean;
    position?: number;
    deadline: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    creator: Prisma.UserCreateNestedOneWithoutCreatedTasksInput;
    assignee?: Prisma.UserCreateNestedOneWithoutAssigneeTasksInput;
    column: Prisma.ColumnCreateNestedOneWithoutTasksInput;
};
export type TaskUncheckedCreateInput = {
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
export type TaskUpdateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isCompleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    deadline?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    creator?: Prisma.UserUpdateOneRequiredWithoutCreatedTasksNestedInput;
    assignee?: Prisma.UserUpdateOneWithoutAssigneeTasksNestedInput;
    column?: Prisma.ColumnUpdateOneRequiredWithoutTasksNestedInput;
};
export type TaskUncheckedUpdateInput = {
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
export type TaskCreateManyInput = {
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
export type TaskUpdateManyMutationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isCompleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    deadline?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TaskUncheckedUpdateManyInput = {
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
export type TaskListRelationFilter = {
    every?: Prisma.TaskWhereInput;
    some?: Prisma.TaskWhereInput;
    none?: Prisma.TaskWhereInput;
};
export type TaskOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type TaskOrderByRelevanceInput = {
    fields: Prisma.TaskOrderByRelevanceFieldEnum | Prisma.TaskOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type TaskCountOrderByAggregateInput = {
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
export type TaskAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
    creatorId?: Prisma.SortOrder;
    assigneeId?: Prisma.SortOrder;
    columnId?: Prisma.SortOrder;
};
export type TaskMaxOrderByAggregateInput = {
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
export type TaskMinOrderByAggregateInput = {
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
export type TaskSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
    creatorId?: Prisma.SortOrder;
    assigneeId?: Prisma.SortOrder;
    columnId?: Prisma.SortOrder;
};
export type TaskCreateNestedManyWithoutCreatorInput = {
    create?: Prisma.XOR<Prisma.TaskCreateWithoutCreatorInput, Prisma.TaskUncheckedCreateWithoutCreatorInput> | Prisma.TaskCreateWithoutCreatorInput[] | Prisma.TaskUncheckedCreateWithoutCreatorInput[];
    connectOrCreate?: Prisma.TaskCreateOrConnectWithoutCreatorInput | Prisma.TaskCreateOrConnectWithoutCreatorInput[];
    createMany?: Prisma.TaskCreateManyCreatorInputEnvelope;
    connect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
};
export type TaskCreateNestedManyWithoutAssigneeInput = {
    create?: Prisma.XOR<Prisma.TaskCreateWithoutAssigneeInput, Prisma.TaskUncheckedCreateWithoutAssigneeInput> | Prisma.TaskCreateWithoutAssigneeInput[] | Prisma.TaskUncheckedCreateWithoutAssigneeInput[];
    connectOrCreate?: Prisma.TaskCreateOrConnectWithoutAssigneeInput | Prisma.TaskCreateOrConnectWithoutAssigneeInput[];
    createMany?: Prisma.TaskCreateManyAssigneeInputEnvelope;
    connect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
};
export type TaskUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: Prisma.XOR<Prisma.TaskCreateWithoutCreatorInput, Prisma.TaskUncheckedCreateWithoutCreatorInput> | Prisma.TaskCreateWithoutCreatorInput[] | Prisma.TaskUncheckedCreateWithoutCreatorInput[];
    connectOrCreate?: Prisma.TaskCreateOrConnectWithoutCreatorInput | Prisma.TaskCreateOrConnectWithoutCreatorInput[];
    createMany?: Prisma.TaskCreateManyCreatorInputEnvelope;
    connect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
};
export type TaskUncheckedCreateNestedManyWithoutAssigneeInput = {
    create?: Prisma.XOR<Prisma.TaskCreateWithoutAssigneeInput, Prisma.TaskUncheckedCreateWithoutAssigneeInput> | Prisma.TaskCreateWithoutAssigneeInput[] | Prisma.TaskUncheckedCreateWithoutAssigneeInput[];
    connectOrCreate?: Prisma.TaskCreateOrConnectWithoutAssigneeInput | Prisma.TaskCreateOrConnectWithoutAssigneeInput[];
    createMany?: Prisma.TaskCreateManyAssigneeInputEnvelope;
    connect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
};
export type TaskUpdateManyWithoutCreatorNestedInput = {
    create?: Prisma.XOR<Prisma.TaskCreateWithoutCreatorInput, Prisma.TaskUncheckedCreateWithoutCreatorInput> | Prisma.TaskCreateWithoutCreatorInput[] | Prisma.TaskUncheckedCreateWithoutCreatorInput[];
    connectOrCreate?: Prisma.TaskCreateOrConnectWithoutCreatorInput | Prisma.TaskCreateOrConnectWithoutCreatorInput[];
    upsert?: Prisma.TaskUpsertWithWhereUniqueWithoutCreatorInput | Prisma.TaskUpsertWithWhereUniqueWithoutCreatorInput[];
    createMany?: Prisma.TaskCreateManyCreatorInputEnvelope;
    set?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    disconnect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    delete?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    connect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    update?: Prisma.TaskUpdateWithWhereUniqueWithoutCreatorInput | Prisma.TaskUpdateWithWhereUniqueWithoutCreatorInput[];
    updateMany?: Prisma.TaskUpdateManyWithWhereWithoutCreatorInput | Prisma.TaskUpdateManyWithWhereWithoutCreatorInput[];
    deleteMany?: Prisma.TaskScalarWhereInput | Prisma.TaskScalarWhereInput[];
};
export type TaskUpdateManyWithoutAssigneeNestedInput = {
    create?: Prisma.XOR<Prisma.TaskCreateWithoutAssigneeInput, Prisma.TaskUncheckedCreateWithoutAssigneeInput> | Prisma.TaskCreateWithoutAssigneeInput[] | Prisma.TaskUncheckedCreateWithoutAssigneeInput[];
    connectOrCreate?: Prisma.TaskCreateOrConnectWithoutAssigneeInput | Prisma.TaskCreateOrConnectWithoutAssigneeInput[];
    upsert?: Prisma.TaskUpsertWithWhereUniqueWithoutAssigneeInput | Prisma.TaskUpsertWithWhereUniqueWithoutAssigneeInput[];
    createMany?: Prisma.TaskCreateManyAssigneeInputEnvelope;
    set?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    disconnect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    delete?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    connect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    update?: Prisma.TaskUpdateWithWhereUniqueWithoutAssigneeInput | Prisma.TaskUpdateWithWhereUniqueWithoutAssigneeInput[];
    updateMany?: Prisma.TaskUpdateManyWithWhereWithoutAssigneeInput | Prisma.TaskUpdateManyWithWhereWithoutAssigneeInput[];
    deleteMany?: Prisma.TaskScalarWhereInput | Prisma.TaskScalarWhereInput[];
};
export type TaskUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: Prisma.XOR<Prisma.TaskCreateWithoutCreatorInput, Prisma.TaskUncheckedCreateWithoutCreatorInput> | Prisma.TaskCreateWithoutCreatorInput[] | Prisma.TaskUncheckedCreateWithoutCreatorInput[];
    connectOrCreate?: Prisma.TaskCreateOrConnectWithoutCreatorInput | Prisma.TaskCreateOrConnectWithoutCreatorInput[];
    upsert?: Prisma.TaskUpsertWithWhereUniqueWithoutCreatorInput | Prisma.TaskUpsertWithWhereUniqueWithoutCreatorInput[];
    createMany?: Prisma.TaskCreateManyCreatorInputEnvelope;
    set?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    disconnect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    delete?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    connect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    update?: Prisma.TaskUpdateWithWhereUniqueWithoutCreatorInput | Prisma.TaskUpdateWithWhereUniqueWithoutCreatorInput[];
    updateMany?: Prisma.TaskUpdateManyWithWhereWithoutCreatorInput | Prisma.TaskUpdateManyWithWhereWithoutCreatorInput[];
    deleteMany?: Prisma.TaskScalarWhereInput | Prisma.TaskScalarWhereInput[];
};
export type TaskUncheckedUpdateManyWithoutAssigneeNestedInput = {
    create?: Prisma.XOR<Prisma.TaskCreateWithoutAssigneeInput, Prisma.TaskUncheckedCreateWithoutAssigneeInput> | Prisma.TaskCreateWithoutAssigneeInput[] | Prisma.TaskUncheckedCreateWithoutAssigneeInput[];
    connectOrCreate?: Prisma.TaskCreateOrConnectWithoutAssigneeInput | Prisma.TaskCreateOrConnectWithoutAssigneeInput[];
    upsert?: Prisma.TaskUpsertWithWhereUniqueWithoutAssigneeInput | Prisma.TaskUpsertWithWhereUniqueWithoutAssigneeInput[];
    createMany?: Prisma.TaskCreateManyAssigneeInputEnvelope;
    set?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    disconnect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    delete?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    connect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    update?: Prisma.TaskUpdateWithWhereUniqueWithoutAssigneeInput | Prisma.TaskUpdateWithWhereUniqueWithoutAssigneeInput[];
    updateMany?: Prisma.TaskUpdateManyWithWhereWithoutAssigneeInput | Prisma.TaskUpdateManyWithWhereWithoutAssigneeInput[];
    deleteMany?: Prisma.TaskScalarWhereInput | Prisma.TaskScalarWhereInput[];
};
export type TaskCreateNestedManyWithoutColumnInput = {
    create?: Prisma.XOR<Prisma.TaskCreateWithoutColumnInput, Prisma.TaskUncheckedCreateWithoutColumnInput> | Prisma.TaskCreateWithoutColumnInput[] | Prisma.TaskUncheckedCreateWithoutColumnInput[];
    connectOrCreate?: Prisma.TaskCreateOrConnectWithoutColumnInput | Prisma.TaskCreateOrConnectWithoutColumnInput[];
    createMany?: Prisma.TaskCreateManyColumnInputEnvelope;
    connect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
};
export type TaskUncheckedCreateNestedManyWithoutColumnInput = {
    create?: Prisma.XOR<Prisma.TaskCreateWithoutColumnInput, Prisma.TaskUncheckedCreateWithoutColumnInput> | Prisma.TaskCreateWithoutColumnInput[] | Prisma.TaskUncheckedCreateWithoutColumnInput[];
    connectOrCreate?: Prisma.TaskCreateOrConnectWithoutColumnInput | Prisma.TaskCreateOrConnectWithoutColumnInput[];
    createMany?: Prisma.TaskCreateManyColumnInputEnvelope;
    connect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
};
export type TaskUpdateManyWithoutColumnNestedInput = {
    create?: Prisma.XOR<Prisma.TaskCreateWithoutColumnInput, Prisma.TaskUncheckedCreateWithoutColumnInput> | Prisma.TaskCreateWithoutColumnInput[] | Prisma.TaskUncheckedCreateWithoutColumnInput[];
    connectOrCreate?: Prisma.TaskCreateOrConnectWithoutColumnInput | Prisma.TaskCreateOrConnectWithoutColumnInput[];
    upsert?: Prisma.TaskUpsertWithWhereUniqueWithoutColumnInput | Prisma.TaskUpsertWithWhereUniqueWithoutColumnInput[];
    createMany?: Prisma.TaskCreateManyColumnInputEnvelope;
    set?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    disconnect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    delete?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    connect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    update?: Prisma.TaskUpdateWithWhereUniqueWithoutColumnInput | Prisma.TaskUpdateWithWhereUniqueWithoutColumnInput[];
    updateMany?: Prisma.TaskUpdateManyWithWhereWithoutColumnInput | Prisma.TaskUpdateManyWithWhereWithoutColumnInput[];
    deleteMany?: Prisma.TaskScalarWhereInput | Prisma.TaskScalarWhereInput[];
};
export type TaskUncheckedUpdateManyWithoutColumnNestedInput = {
    create?: Prisma.XOR<Prisma.TaskCreateWithoutColumnInput, Prisma.TaskUncheckedCreateWithoutColumnInput> | Prisma.TaskCreateWithoutColumnInput[] | Prisma.TaskUncheckedCreateWithoutColumnInput[];
    connectOrCreate?: Prisma.TaskCreateOrConnectWithoutColumnInput | Prisma.TaskCreateOrConnectWithoutColumnInput[];
    upsert?: Prisma.TaskUpsertWithWhereUniqueWithoutColumnInput | Prisma.TaskUpsertWithWhereUniqueWithoutColumnInput[];
    createMany?: Prisma.TaskCreateManyColumnInputEnvelope;
    set?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    disconnect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    delete?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    connect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    update?: Prisma.TaskUpdateWithWhereUniqueWithoutColumnInput | Prisma.TaskUpdateWithWhereUniqueWithoutColumnInput[];
    updateMany?: Prisma.TaskUpdateManyWithWhereWithoutColumnInput | Prisma.TaskUpdateManyWithWhereWithoutColumnInput[];
    deleteMany?: Prisma.TaskScalarWhereInput | Prisma.TaskScalarWhereInput[];
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
export type TaskCreateWithoutCreatorInput = {
    name: string;
    description?: string | null;
    isCompleted?: boolean;
    position?: number;
    deadline: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    assignee?: Prisma.UserCreateNestedOneWithoutAssigneeTasksInput;
    column: Prisma.ColumnCreateNestedOneWithoutTasksInput;
};
export type TaskUncheckedCreateWithoutCreatorInput = {
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
export type TaskCreateOrConnectWithoutCreatorInput = {
    where: Prisma.TaskWhereUniqueInput;
    create: Prisma.XOR<Prisma.TaskCreateWithoutCreatorInput, Prisma.TaskUncheckedCreateWithoutCreatorInput>;
};
export type TaskCreateManyCreatorInputEnvelope = {
    data: Prisma.TaskCreateManyCreatorInput | Prisma.TaskCreateManyCreatorInput[];
    skipDuplicates?: boolean;
};
export type TaskCreateWithoutAssigneeInput = {
    name: string;
    description?: string | null;
    isCompleted?: boolean;
    position?: number;
    deadline: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    creator: Prisma.UserCreateNestedOneWithoutCreatedTasksInput;
    column: Prisma.ColumnCreateNestedOneWithoutTasksInput;
};
export type TaskUncheckedCreateWithoutAssigneeInput = {
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
export type TaskCreateOrConnectWithoutAssigneeInput = {
    where: Prisma.TaskWhereUniqueInput;
    create: Prisma.XOR<Prisma.TaskCreateWithoutAssigneeInput, Prisma.TaskUncheckedCreateWithoutAssigneeInput>;
};
export type TaskCreateManyAssigneeInputEnvelope = {
    data: Prisma.TaskCreateManyAssigneeInput | Prisma.TaskCreateManyAssigneeInput[];
    skipDuplicates?: boolean;
};
export type TaskUpsertWithWhereUniqueWithoutCreatorInput = {
    where: Prisma.TaskWhereUniqueInput;
    update: Prisma.XOR<Prisma.TaskUpdateWithoutCreatorInput, Prisma.TaskUncheckedUpdateWithoutCreatorInput>;
    create: Prisma.XOR<Prisma.TaskCreateWithoutCreatorInput, Prisma.TaskUncheckedCreateWithoutCreatorInput>;
};
export type TaskUpdateWithWhereUniqueWithoutCreatorInput = {
    where: Prisma.TaskWhereUniqueInput;
    data: Prisma.XOR<Prisma.TaskUpdateWithoutCreatorInput, Prisma.TaskUncheckedUpdateWithoutCreatorInput>;
};
export type TaskUpdateManyWithWhereWithoutCreatorInput = {
    where: Prisma.TaskScalarWhereInput;
    data: Prisma.XOR<Prisma.TaskUpdateManyMutationInput, Prisma.TaskUncheckedUpdateManyWithoutCreatorInput>;
};
export type TaskScalarWhereInput = {
    AND?: Prisma.TaskScalarWhereInput | Prisma.TaskScalarWhereInput[];
    OR?: Prisma.TaskScalarWhereInput[];
    NOT?: Prisma.TaskScalarWhereInput | Prisma.TaskScalarWhereInput[];
    id?: Prisma.IntFilter<"Task"> | number;
    name?: Prisma.StringFilter<"Task"> | string;
    description?: Prisma.StringNullableFilter<"Task"> | string | null;
    isCompleted?: Prisma.BoolFilter<"Task"> | boolean;
    position?: Prisma.IntFilter<"Task"> | number;
    deadline?: Prisma.DateTimeFilter<"Task"> | Date | string;
    creatorId?: Prisma.IntFilter<"Task"> | number;
    assigneeId?: Prisma.IntNullableFilter<"Task"> | number | null;
    columnId?: Prisma.IntFilter<"Task"> | number;
    createdAt?: Prisma.DateTimeFilter<"Task"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Task"> | Date | string;
};
export type TaskUpsertWithWhereUniqueWithoutAssigneeInput = {
    where: Prisma.TaskWhereUniqueInput;
    update: Prisma.XOR<Prisma.TaskUpdateWithoutAssigneeInput, Prisma.TaskUncheckedUpdateWithoutAssigneeInput>;
    create: Prisma.XOR<Prisma.TaskCreateWithoutAssigneeInput, Prisma.TaskUncheckedCreateWithoutAssigneeInput>;
};
export type TaskUpdateWithWhereUniqueWithoutAssigneeInput = {
    where: Prisma.TaskWhereUniqueInput;
    data: Prisma.XOR<Prisma.TaskUpdateWithoutAssigneeInput, Prisma.TaskUncheckedUpdateWithoutAssigneeInput>;
};
export type TaskUpdateManyWithWhereWithoutAssigneeInput = {
    where: Prisma.TaskScalarWhereInput;
    data: Prisma.XOR<Prisma.TaskUpdateManyMutationInput, Prisma.TaskUncheckedUpdateManyWithoutAssigneeInput>;
};
export type TaskCreateWithoutColumnInput = {
    name: string;
    description?: string | null;
    isCompleted?: boolean;
    position?: number;
    deadline: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    creator: Prisma.UserCreateNestedOneWithoutCreatedTasksInput;
    assignee?: Prisma.UserCreateNestedOneWithoutAssigneeTasksInput;
};
export type TaskUncheckedCreateWithoutColumnInput = {
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
export type TaskCreateOrConnectWithoutColumnInput = {
    where: Prisma.TaskWhereUniqueInput;
    create: Prisma.XOR<Prisma.TaskCreateWithoutColumnInput, Prisma.TaskUncheckedCreateWithoutColumnInput>;
};
export type TaskCreateManyColumnInputEnvelope = {
    data: Prisma.TaskCreateManyColumnInput | Prisma.TaskCreateManyColumnInput[];
    skipDuplicates?: boolean;
};
export type TaskUpsertWithWhereUniqueWithoutColumnInput = {
    where: Prisma.TaskWhereUniqueInput;
    update: Prisma.XOR<Prisma.TaskUpdateWithoutColumnInput, Prisma.TaskUncheckedUpdateWithoutColumnInput>;
    create: Prisma.XOR<Prisma.TaskCreateWithoutColumnInput, Prisma.TaskUncheckedCreateWithoutColumnInput>;
};
export type TaskUpdateWithWhereUniqueWithoutColumnInput = {
    where: Prisma.TaskWhereUniqueInput;
    data: Prisma.XOR<Prisma.TaskUpdateWithoutColumnInput, Prisma.TaskUncheckedUpdateWithoutColumnInput>;
};
export type TaskUpdateManyWithWhereWithoutColumnInput = {
    where: Prisma.TaskScalarWhereInput;
    data: Prisma.XOR<Prisma.TaskUpdateManyMutationInput, Prisma.TaskUncheckedUpdateManyWithoutColumnInput>;
};
export type TaskCreateManyCreatorInput = {
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
export type TaskCreateManyAssigneeInput = {
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
export type TaskUpdateWithoutCreatorInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isCompleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    deadline?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    assignee?: Prisma.UserUpdateOneWithoutAssigneeTasksNestedInput;
    column?: Prisma.ColumnUpdateOneRequiredWithoutTasksNestedInput;
};
export type TaskUncheckedUpdateWithoutCreatorInput = {
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
export type TaskUncheckedUpdateManyWithoutCreatorInput = {
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
export type TaskUpdateWithoutAssigneeInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isCompleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    deadline?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    creator?: Prisma.UserUpdateOneRequiredWithoutCreatedTasksNestedInput;
    column?: Prisma.ColumnUpdateOneRequiredWithoutTasksNestedInput;
};
export type TaskUncheckedUpdateWithoutAssigneeInput = {
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
export type TaskUncheckedUpdateManyWithoutAssigneeInput = {
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
export type TaskCreateManyColumnInput = {
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
export type TaskUpdateWithoutColumnInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isCompleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    deadline?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    creator?: Prisma.UserUpdateOneRequiredWithoutCreatedTasksNestedInput;
    assignee?: Prisma.UserUpdateOneWithoutAssigneeTasksNestedInput;
};
export type TaskUncheckedUpdateWithoutColumnInput = {
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
export type TaskUncheckedUpdateManyWithoutColumnInput = {
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
export type TaskSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
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
    creator?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    assignee?: boolean | Prisma.Task$assigneeArgs<ExtArgs>;
    column?: boolean | Prisma.ColumnDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["task"]>;
export type TaskSelectScalar = {
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
export type TaskOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "description" | "isCompleted" | "position" | "deadline" | "creatorId" | "assigneeId" | "columnId" | "createdAt" | "updatedAt", ExtArgs["result"]["task"]>;
export type TaskInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    creator?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    assignee?: boolean | Prisma.Task$assigneeArgs<ExtArgs>;
    column?: boolean | Prisma.ColumnDefaultArgs<ExtArgs>;
};
export type $TaskPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Task";
    objects: {
        creator: Prisma.$UserPayload<ExtArgs>;
        assignee: Prisma.$UserPayload<ExtArgs> | null;
        column: Prisma.$ColumnPayload<ExtArgs>;
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
    }, ExtArgs["result"]["task"]>;
    composites: {};
};
export type TaskGetPayload<S extends boolean | null | undefined | TaskDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TaskPayload, S>;
export type TaskCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TaskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TaskCountAggregateInputType | true;
};
export interface TaskDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Task'];
        meta: {
            name: 'Task';
        };
    };
    findUnique<T extends TaskFindUniqueArgs>(args: Prisma.SelectSubset<T, TaskFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TaskClient<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends TaskFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TaskClient<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends TaskFindFirstArgs>(args?: Prisma.SelectSubset<T, TaskFindFirstArgs<ExtArgs>>): Prisma.Prisma__TaskClient<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends TaskFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TaskFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TaskClient<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends TaskFindManyArgs>(args?: Prisma.SelectSubset<T, TaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends TaskCreateArgs>(args: Prisma.SelectSubset<T, TaskCreateArgs<ExtArgs>>): Prisma.Prisma__TaskClient<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends TaskCreateManyArgs>(args?: Prisma.SelectSubset<T, TaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends TaskDeleteArgs>(args: Prisma.SelectSubset<T, TaskDeleteArgs<ExtArgs>>): Prisma.Prisma__TaskClient<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends TaskUpdateArgs>(args: Prisma.SelectSubset<T, TaskUpdateArgs<ExtArgs>>): Prisma.Prisma__TaskClient<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends TaskDeleteManyArgs>(args?: Prisma.SelectSubset<T, TaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends TaskUpdateManyArgs>(args: Prisma.SelectSubset<T, TaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends TaskUpsertArgs>(args: Prisma.SelectSubset<T, TaskUpsertArgs<ExtArgs>>): Prisma.Prisma__TaskClient<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends TaskCountArgs>(args?: Prisma.Subset<T, TaskCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TaskCountAggregateOutputType> : number>;
    aggregate<T extends TaskAggregateArgs>(args: Prisma.Subset<T, TaskAggregateArgs>): Prisma.PrismaPromise<GetTaskAggregateType<T>>;
    groupBy<T extends TaskGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TaskGroupByArgs['orderBy'];
    } : {
        orderBy?: TaskGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: TaskFieldRefs;
}
export interface Prisma__TaskClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    creator<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    assignee<T extends Prisma.Task$assigneeArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Task$assigneeArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    column<T extends Prisma.ColumnDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ColumnDefaultArgs<ExtArgs>>): Prisma.Prisma__ColumnClient<runtime.Types.Result.GetResult<Prisma.$ColumnPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface TaskFieldRefs {
    readonly id: Prisma.FieldRef<"Task", 'Int'>;
    readonly name: Prisma.FieldRef<"Task", 'String'>;
    readonly description: Prisma.FieldRef<"Task", 'String'>;
    readonly isCompleted: Prisma.FieldRef<"Task", 'Boolean'>;
    readonly position: Prisma.FieldRef<"Task", 'Int'>;
    readonly deadline: Prisma.FieldRef<"Task", 'DateTime'>;
    readonly creatorId: Prisma.FieldRef<"Task", 'Int'>;
    readonly assigneeId: Prisma.FieldRef<"Task", 'Int'>;
    readonly columnId: Prisma.FieldRef<"Task", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"Task", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Task", 'DateTime'>;
}
export type TaskFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskSelect<ExtArgs> | null;
    omit?: Prisma.TaskOmit<ExtArgs> | null;
    include?: Prisma.TaskInclude<ExtArgs> | null;
    where: Prisma.TaskWhereUniqueInput;
};
export type TaskFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskSelect<ExtArgs> | null;
    omit?: Prisma.TaskOmit<ExtArgs> | null;
    include?: Prisma.TaskInclude<ExtArgs> | null;
    where: Prisma.TaskWhereUniqueInput;
};
export type TaskFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskSelect<ExtArgs> | null;
    omit?: Prisma.TaskOmit<ExtArgs> | null;
    include?: Prisma.TaskInclude<ExtArgs> | null;
    where?: Prisma.TaskWhereInput;
    orderBy?: Prisma.TaskOrderByWithRelationInput | Prisma.TaskOrderByWithRelationInput[];
    cursor?: Prisma.TaskWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TaskScalarFieldEnum | Prisma.TaskScalarFieldEnum[];
};
export type TaskFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskSelect<ExtArgs> | null;
    omit?: Prisma.TaskOmit<ExtArgs> | null;
    include?: Prisma.TaskInclude<ExtArgs> | null;
    where?: Prisma.TaskWhereInput;
    orderBy?: Prisma.TaskOrderByWithRelationInput | Prisma.TaskOrderByWithRelationInput[];
    cursor?: Prisma.TaskWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TaskScalarFieldEnum | Prisma.TaskScalarFieldEnum[];
};
export type TaskFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskSelect<ExtArgs> | null;
    omit?: Prisma.TaskOmit<ExtArgs> | null;
    include?: Prisma.TaskInclude<ExtArgs> | null;
    where?: Prisma.TaskWhereInput;
    orderBy?: Prisma.TaskOrderByWithRelationInput | Prisma.TaskOrderByWithRelationInput[];
    cursor?: Prisma.TaskWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TaskScalarFieldEnum | Prisma.TaskScalarFieldEnum[];
};
export type TaskCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskSelect<ExtArgs> | null;
    omit?: Prisma.TaskOmit<ExtArgs> | null;
    include?: Prisma.TaskInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TaskCreateInput, Prisma.TaskUncheckedCreateInput>;
};
export type TaskCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.TaskCreateManyInput | Prisma.TaskCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TaskUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskSelect<ExtArgs> | null;
    omit?: Prisma.TaskOmit<ExtArgs> | null;
    include?: Prisma.TaskInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TaskUpdateInput, Prisma.TaskUncheckedUpdateInput>;
    where: Prisma.TaskWhereUniqueInput;
};
export type TaskUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.TaskUpdateManyMutationInput, Prisma.TaskUncheckedUpdateManyInput>;
    where?: Prisma.TaskWhereInput;
    limit?: number;
};
export type TaskUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskSelect<ExtArgs> | null;
    omit?: Prisma.TaskOmit<ExtArgs> | null;
    include?: Prisma.TaskInclude<ExtArgs> | null;
    where: Prisma.TaskWhereUniqueInput;
    create: Prisma.XOR<Prisma.TaskCreateInput, Prisma.TaskUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.TaskUpdateInput, Prisma.TaskUncheckedUpdateInput>;
};
export type TaskDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskSelect<ExtArgs> | null;
    omit?: Prisma.TaskOmit<ExtArgs> | null;
    include?: Prisma.TaskInclude<ExtArgs> | null;
    where: Prisma.TaskWhereUniqueInput;
};
export type TaskDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TaskWhereInput;
    limit?: number;
};
export type Task$assigneeArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
};
export type TaskDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskSelect<ExtArgs> | null;
    omit?: Prisma.TaskOmit<ExtArgs> | null;
    include?: Prisma.TaskInclude<ExtArgs> | null;
};
export {};
