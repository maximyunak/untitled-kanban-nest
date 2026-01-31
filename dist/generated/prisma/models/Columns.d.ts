import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ColumnsModel = runtime.Types.Result.DefaultSelection<Prisma.$ColumnsPayload>;
export type AggregateColumns = {
    _count: ColumnsCountAggregateOutputType | null;
    _avg: ColumnsAvgAggregateOutputType | null;
    _sum: ColumnsSumAggregateOutputType | null;
    _min: ColumnsMinAggregateOutputType | null;
    _max: ColumnsMaxAggregateOutputType | null;
};
export type ColumnsAvgAggregateOutputType = {
    id: number | null;
    position: number | null;
    boardId: number | null;
};
export type ColumnsSumAggregateOutputType = {
    id: number | null;
    position: number | null;
    boardId: number | null;
};
export type ColumnsMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    position: number | null;
    boardId: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ColumnsMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    position: number | null;
    boardId: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ColumnsCountAggregateOutputType = {
    id: number;
    name: number;
    position: number;
    boardId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ColumnsAvgAggregateInputType = {
    id?: true;
    position?: true;
    boardId?: true;
};
export type ColumnsSumAggregateInputType = {
    id?: true;
    position?: true;
    boardId?: true;
};
export type ColumnsMinAggregateInputType = {
    id?: true;
    name?: true;
    position?: true;
    boardId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ColumnsMaxAggregateInputType = {
    id?: true;
    name?: true;
    position?: true;
    boardId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ColumnsCountAggregateInputType = {
    id?: true;
    name?: true;
    position?: true;
    boardId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ColumnsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ColumnsWhereInput;
    orderBy?: Prisma.ColumnsOrderByWithRelationInput | Prisma.ColumnsOrderByWithRelationInput[];
    cursor?: Prisma.ColumnsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ColumnsCountAggregateInputType;
    _avg?: ColumnsAvgAggregateInputType;
    _sum?: ColumnsSumAggregateInputType;
    _min?: ColumnsMinAggregateInputType;
    _max?: ColumnsMaxAggregateInputType;
};
export type GetColumnsAggregateType<T extends ColumnsAggregateArgs> = {
    [P in keyof T & keyof AggregateColumns]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateColumns[P]> : Prisma.GetScalarType<T[P], AggregateColumns[P]>;
};
export type ColumnsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ColumnsWhereInput;
    orderBy?: Prisma.ColumnsOrderByWithAggregationInput | Prisma.ColumnsOrderByWithAggregationInput[];
    by: Prisma.ColumnsScalarFieldEnum[] | Prisma.ColumnsScalarFieldEnum;
    having?: Prisma.ColumnsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ColumnsCountAggregateInputType | true;
    _avg?: ColumnsAvgAggregateInputType;
    _sum?: ColumnsSumAggregateInputType;
    _min?: ColumnsMinAggregateInputType;
    _max?: ColumnsMaxAggregateInputType;
};
export type ColumnsGroupByOutputType = {
    id: number;
    name: string;
    position: number;
    boardId: number;
    createdAt: Date;
    updatedAt: Date;
    _count: ColumnsCountAggregateOutputType | null;
    _avg: ColumnsAvgAggregateOutputType | null;
    _sum: ColumnsSumAggregateOutputType | null;
    _min: ColumnsMinAggregateOutputType | null;
    _max: ColumnsMaxAggregateOutputType | null;
};
type GetColumnsGroupByPayload<T extends ColumnsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ColumnsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ColumnsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ColumnsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ColumnsGroupByOutputType[P]>;
}>>;
export type ColumnsWhereInput = {
    AND?: Prisma.ColumnsWhereInput | Prisma.ColumnsWhereInput[];
    OR?: Prisma.ColumnsWhereInput[];
    NOT?: Prisma.ColumnsWhereInput | Prisma.ColumnsWhereInput[];
    id?: Prisma.IntFilter<"Columns"> | number;
    name?: Prisma.StringFilter<"Columns"> | string;
    position?: Prisma.IntFilter<"Columns"> | number;
    boardId?: Prisma.IntFilter<"Columns"> | number;
    createdAt?: Prisma.DateTimeFilter<"Columns"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Columns"> | Date | string;
    board?: Prisma.XOR<Prisma.BoardsScalarRelationFilter, Prisma.BoardsWhereInput>;
    tasks?: Prisma.TasksListRelationFilter;
};
export type ColumnsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
    boardId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    board?: Prisma.BoardsOrderByWithRelationInput;
    tasks?: Prisma.TasksOrderByRelationAggregateInput;
    _relevance?: Prisma.ColumnsOrderByRelevanceInput;
};
export type ColumnsWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.ColumnsWhereInput | Prisma.ColumnsWhereInput[];
    OR?: Prisma.ColumnsWhereInput[];
    NOT?: Prisma.ColumnsWhereInput | Prisma.ColumnsWhereInput[];
    name?: Prisma.StringFilter<"Columns"> | string;
    position?: Prisma.IntFilter<"Columns"> | number;
    boardId?: Prisma.IntFilter<"Columns"> | number;
    createdAt?: Prisma.DateTimeFilter<"Columns"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Columns"> | Date | string;
    board?: Prisma.XOR<Prisma.BoardsScalarRelationFilter, Prisma.BoardsWhereInput>;
    tasks?: Prisma.TasksListRelationFilter;
}, "id">;
export type ColumnsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
    boardId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ColumnsCountOrderByAggregateInput;
    _avg?: Prisma.ColumnsAvgOrderByAggregateInput;
    _max?: Prisma.ColumnsMaxOrderByAggregateInput;
    _min?: Prisma.ColumnsMinOrderByAggregateInput;
    _sum?: Prisma.ColumnsSumOrderByAggregateInput;
};
export type ColumnsScalarWhereWithAggregatesInput = {
    AND?: Prisma.ColumnsScalarWhereWithAggregatesInput | Prisma.ColumnsScalarWhereWithAggregatesInput[];
    OR?: Prisma.ColumnsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ColumnsScalarWhereWithAggregatesInput | Prisma.ColumnsScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Columns"> | number;
    name?: Prisma.StringWithAggregatesFilter<"Columns"> | string;
    position?: Prisma.IntWithAggregatesFilter<"Columns"> | number;
    boardId?: Prisma.IntWithAggregatesFilter<"Columns"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Columns"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Columns"> | Date | string;
};
export type ColumnsCreateInput = {
    name: string;
    position?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    board: Prisma.BoardsCreateNestedOneWithoutColumnsInput;
    tasks?: Prisma.TasksCreateNestedManyWithoutColumnInput;
};
export type ColumnsUncheckedCreateInput = {
    id?: number;
    name: string;
    position?: number;
    boardId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    tasks?: Prisma.TasksUncheckedCreateNestedManyWithoutColumnInput;
};
export type ColumnsUpdateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    board?: Prisma.BoardsUpdateOneRequiredWithoutColumnsNestedInput;
    tasks?: Prisma.TasksUpdateManyWithoutColumnNestedInput;
};
export type ColumnsUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    boardId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tasks?: Prisma.TasksUncheckedUpdateManyWithoutColumnNestedInput;
};
export type ColumnsCreateManyInput = {
    id?: number;
    name: string;
    position?: number;
    boardId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ColumnsUpdateManyMutationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ColumnsUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    boardId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ColumnsListRelationFilter = {
    every?: Prisma.ColumnsWhereInput;
    some?: Prisma.ColumnsWhereInput;
    none?: Prisma.ColumnsWhereInput;
};
export type ColumnsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ColumnsOrderByRelevanceInput = {
    fields: Prisma.ColumnsOrderByRelevanceFieldEnum | Prisma.ColumnsOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type ColumnsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
    boardId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ColumnsAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
    boardId?: Prisma.SortOrder;
};
export type ColumnsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
    boardId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ColumnsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
    boardId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ColumnsSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
    boardId?: Prisma.SortOrder;
};
export type ColumnsScalarRelationFilter = {
    is?: Prisma.ColumnsWhereInput;
    isNot?: Prisma.ColumnsWhereInput;
};
export type ColumnsCreateNestedManyWithoutBoardInput = {
    create?: Prisma.XOR<Prisma.ColumnsCreateWithoutBoardInput, Prisma.ColumnsUncheckedCreateWithoutBoardInput> | Prisma.ColumnsCreateWithoutBoardInput[] | Prisma.ColumnsUncheckedCreateWithoutBoardInput[];
    connectOrCreate?: Prisma.ColumnsCreateOrConnectWithoutBoardInput | Prisma.ColumnsCreateOrConnectWithoutBoardInput[];
    createMany?: Prisma.ColumnsCreateManyBoardInputEnvelope;
    connect?: Prisma.ColumnsWhereUniqueInput | Prisma.ColumnsWhereUniqueInput[];
};
export type ColumnsUncheckedCreateNestedManyWithoutBoardInput = {
    create?: Prisma.XOR<Prisma.ColumnsCreateWithoutBoardInput, Prisma.ColumnsUncheckedCreateWithoutBoardInput> | Prisma.ColumnsCreateWithoutBoardInput[] | Prisma.ColumnsUncheckedCreateWithoutBoardInput[];
    connectOrCreate?: Prisma.ColumnsCreateOrConnectWithoutBoardInput | Prisma.ColumnsCreateOrConnectWithoutBoardInput[];
    createMany?: Prisma.ColumnsCreateManyBoardInputEnvelope;
    connect?: Prisma.ColumnsWhereUniqueInput | Prisma.ColumnsWhereUniqueInput[];
};
export type ColumnsUpdateManyWithoutBoardNestedInput = {
    create?: Prisma.XOR<Prisma.ColumnsCreateWithoutBoardInput, Prisma.ColumnsUncheckedCreateWithoutBoardInput> | Prisma.ColumnsCreateWithoutBoardInput[] | Prisma.ColumnsUncheckedCreateWithoutBoardInput[];
    connectOrCreate?: Prisma.ColumnsCreateOrConnectWithoutBoardInput | Prisma.ColumnsCreateOrConnectWithoutBoardInput[];
    upsert?: Prisma.ColumnsUpsertWithWhereUniqueWithoutBoardInput | Prisma.ColumnsUpsertWithWhereUniqueWithoutBoardInput[];
    createMany?: Prisma.ColumnsCreateManyBoardInputEnvelope;
    set?: Prisma.ColumnsWhereUniqueInput | Prisma.ColumnsWhereUniqueInput[];
    disconnect?: Prisma.ColumnsWhereUniqueInput | Prisma.ColumnsWhereUniqueInput[];
    delete?: Prisma.ColumnsWhereUniqueInput | Prisma.ColumnsWhereUniqueInput[];
    connect?: Prisma.ColumnsWhereUniqueInput | Prisma.ColumnsWhereUniqueInput[];
    update?: Prisma.ColumnsUpdateWithWhereUniqueWithoutBoardInput | Prisma.ColumnsUpdateWithWhereUniqueWithoutBoardInput[];
    updateMany?: Prisma.ColumnsUpdateManyWithWhereWithoutBoardInput | Prisma.ColumnsUpdateManyWithWhereWithoutBoardInput[];
    deleteMany?: Prisma.ColumnsScalarWhereInput | Prisma.ColumnsScalarWhereInput[];
};
export type ColumnsUncheckedUpdateManyWithoutBoardNestedInput = {
    create?: Prisma.XOR<Prisma.ColumnsCreateWithoutBoardInput, Prisma.ColumnsUncheckedCreateWithoutBoardInput> | Prisma.ColumnsCreateWithoutBoardInput[] | Prisma.ColumnsUncheckedCreateWithoutBoardInput[];
    connectOrCreate?: Prisma.ColumnsCreateOrConnectWithoutBoardInput | Prisma.ColumnsCreateOrConnectWithoutBoardInput[];
    upsert?: Prisma.ColumnsUpsertWithWhereUniqueWithoutBoardInput | Prisma.ColumnsUpsertWithWhereUniqueWithoutBoardInput[];
    createMany?: Prisma.ColumnsCreateManyBoardInputEnvelope;
    set?: Prisma.ColumnsWhereUniqueInput | Prisma.ColumnsWhereUniqueInput[];
    disconnect?: Prisma.ColumnsWhereUniqueInput | Prisma.ColumnsWhereUniqueInput[];
    delete?: Prisma.ColumnsWhereUniqueInput | Prisma.ColumnsWhereUniqueInput[];
    connect?: Prisma.ColumnsWhereUniqueInput | Prisma.ColumnsWhereUniqueInput[];
    update?: Prisma.ColumnsUpdateWithWhereUniqueWithoutBoardInput | Prisma.ColumnsUpdateWithWhereUniqueWithoutBoardInput[];
    updateMany?: Prisma.ColumnsUpdateManyWithWhereWithoutBoardInput | Prisma.ColumnsUpdateManyWithWhereWithoutBoardInput[];
    deleteMany?: Prisma.ColumnsScalarWhereInput | Prisma.ColumnsScalarWhereInput[];
};
export type ColumnsCreateNestedOneWithoutTasksInput = {
    create?: Prisma.XOR<Prisma.ColumnsCreateWithoutTasksInput, Prisma.ColumnsUncheckedCreateWithoutTasksInput>;
    connectOrCreate?: Prisma.ColumnsCreateOrConnectWithoutTasksInput;
    connect?: Prisma.ColumnsWhereUniqueInput;
};
export type ColumnsUpdateOneRequiredWithoutTasksNestedInput = {
    create?: Prisma.XOR<Prisma.ColumnsCreateWithoutTasksInput, Prisma.ColumnsUncheckedCreateWithoutTasksInput>;
    connectOrCreate?: Prisma.ColumnsCreateOrConnectWithoutTasksInput;
    upsert?: Prisma.ColumnsUpsertWithoutTasksInput;
    connect?: Prisma.ColumnsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ColumnsUpdateToOneWithWhereWithoutTasksInput, Prisma.ColumnsUpdateWithoutTasksInput>, Prisma.ColumnsUncheckedUpdateWithoutTasksInput>;
};
export type ColumnsCreateWithoutBoardInput = {
    name: string;
    position?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    tasks?: Prisma.TasksCreateNestedManyWithoutColumnInput;
};
export type ColumnsUncheckedCreateWithoutBoardInput = {
    id?: number;
    name: string;
    position?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    tasks?: Prisma.TasksUncheckedCreateNestedManyWithoutColumnInput;
};
export type ColumnsCreateOrConnectWithoutBoardInput = {
    where: Prisma.ColumnsWhereUniqueInput;
    create: Prisma.XOR<Prisma.ColumnsCreateWithoutBoardInput, Prisma.ColumnsUncheckedCreateWithoutBoardInput>;
};
export type ColumnsCreateManyBoardInputEnvelope = {
    data: Prisma.ColumnsCreateManyBoardInput | Prisma.ColumnsCreateManyBoardInput[];
    skipDuplicates?: boolean;
};
export type ColumnsUpsertWithWhereUniqueWithoutBoardInput = {
    where: Prisma.ColumnsWhereUniqueInput;
    update: Prisma.XOR<Prisma.ColumnsUpdateWithoutBoardInput, Prisma.ColumnsUncheckedUpdateWithoutBoardInput>;
    create: Prisma.XOR<Prisma.ColumnsCreateWithoutBoardInput, Prisma.ColumnsUncheckedCreateWithoutBoardInput>;
};
export type ColumnsUpdateWithWhereUniqueWithoutBoardInput = {
    where: Prisma.ColumnsWhereUniqueInput;
    data: Prisma.XOR<Prisma.ColumnsUpdateWithoutBoardInput, Prisma.ColumnsUncheckedUpdateWithoutBoardInput>;
};
export type ColumnsUpdateManyWithWhereWithoutBoardInput = {
    where: Prisma.ColumnsScalarWhereInput;
    data: Prisma.XOR<Prisma.ColumnsUpdateManyMutationInput, Prisma.ColumnsUncheckedUpdateManyWithoutBoardInput>;
};
export type ColumnsScalarWhereInput = {
    AND?: Prisma.ColumnsScalarWhereInput | Prisma.ColumnsScalarWhereInput[];
    OR?: Prisma.ColumnsScalarWhereInput[];
    NOT?: Prisma.ColumnsScalarWhereInput | Prisma.ColumnsScalarWhereInput[];
    id?: Prisma.IntFilter<"Columns"> | number;
    name?: Prisma.StringFilter<"Columns"> | string;
    position?: Prisma.IntFilter<"Columns"> | number;
    boardId?: Prisma.IntFilter<"Columns"> | number;
    createdAt?: Prisma.DateTimeFilter<"Columns"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Columns"> | Date | string;
};
export type ColumnsCreateWithoutTasksInput = {
    name: string;
    position?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    board: Prisma.BoardsCreateNestedOneWithoutColumnsInput;
};
export type ColumnsUncheckedCreateWithoutTasksInput = {
    id?: number;
    name: string;
    position?: number;
    boardId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ColumnsCreateOrConnectWithoutTasksInput = {
    where: Prisma.ColumnsWhereUniqueInput;
    create: Prisma.XOR<Prisma.ColumnsCreateWithoutTasksInput, Prisma.ColumnsUncheckedCreateWithoutTasksInput>;
};
export type ColumnsUpsertWithoutTasksInput = {
    update: Prisma.XOR<Prisma.ColumnsUpdateWithoutTasksInput, Prisma.ColumnsUncheckedUpdateWithoutTasksInput>;
    create: Prisma.XOR<Prisma.ColumnsCreateWithoutTasksInput, Prisma.ColumnsUncheckedCreateWithoutTasksInput>;
    where?: Prisma.ColumnsWhereInput;
};
export type ColumnsUpdateToOneWithWhereWithoutTasksInput = {
    where?: Prisma.ColumnsWhereInput;
    data: Prisma.XOR<Prisma.ColumnsUpdateWithoutTasksInput, Prisma.ColumnsUncheckedUpdateWithoutTasksInput>;
};
export type ColumnsUpdateWithoutTasksInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    board?: Prisma.BoardsUpdateOneRequiredWithoutColumnsNestedInput;
};
export type ColumnsUncheckedUpdateWithoutTasksInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    boardId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ColumnsCreateManyBoardInput = {
    id?: number;
    name: string;
    position?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ColumnsUpdateWithoutBoardInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tasks?: Prisma.TasksUpdateManyWithoutColumnNestedInput;
};
export type ColumnsUncheckedUpdateWithoutBoardInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tasks?: Prisma.TasksUncheckedUpdateManyWithoutColumnNestedInput;
};
export type ColumnsUncheckedUpdateManyWithoutBoardInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ColumnsCountOutputType = {
    tasks: number;
};
export type ColumnsCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tasks?: boolean | ColumnsCountOutputTypeCountTasksArgs;
};
export type ColumnsCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ColumnsCountOutputTypeSelect<ExtArgs> | null;
};
export type ColumnsCountOutputTypeCountTasksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TasksWhereInput;
};
export type ColumnsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    position?: boolean;
    boardId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    board?: boolean | Prisma.BoardsDefaultArgs<ExtArgs>;
    tasks?: boolean | Prisma.Columns$tasksArgs<ExtArgs>;
    _count?: boolean | Prisma.ColumnsCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["columns"]>;
export type ColumnsSelectScalar = {
    id?: boolean;
    name?: boolean;
    position?: boolean;
    boardId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ColumnsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "position" | "boardId" | "createdAt" | "updatedAt", ExtArgs["result"]["columns"]>;
export type ColumnsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    board?: boolean | Prisma.BoardsDefaultArgs<ExtArgs>;
    tasks?: boolean | Prisma.Columns$tasksArgs<ExtArgs>;
    _count?: boolean | Prisma.ColumnsCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $ColumnsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Columns";
    objects: {
        board: Prisma.$BoardsPayload<ExtArgs>;
        tasks: Prisma.$TasksPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        name: string;
        position: number;
        boardId: number;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["columns"]>;
    composites: {};
};
export type ColumnsGetPayload<S extends boolean | null | undefined | ColumnsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ColumnsPayload, S>;
export type ColumnsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ColumnsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ColumnsCountAggregateInputType | true;
};
export interface ColumnsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Columns'];
        meta: {
            name: 'Columns';
        };
    };
    findUnique<T extends ColumnsFindUniqueArgs>(args: Prisma.SelectSubset<T, ColumnsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ColumnsClient<runtime.Types.Result.GetResult<Prisma.$ColumnsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ColumnsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ColumnsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ColumnsClient<runtime.Types.Result.GetResult<Prisma.$ColumnsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ColumnsFindFirstArgs>(args?: Prisma.SelectSubset<T, ColumnsFindFirstArgs<ExtArgs>>): Prisma.Prisma__ColumnsClient<runtime.Types.Result.GetResult<Prisma.$ColumnsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ColumnsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ColumnsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ColumnsClient<runtime.Types.Result.GetResult<Prisma.$ColumnsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ColumnsFindManyArgs>(args?: Prisma.SelectSubset<T, ColumnsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ColumnsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ColumnsCreateArgs>(args: Prisma.SelectSubset<T, ColumnsCreateArgs<ExtArgs>>): Prisma.Prisma__ColumnsClient<runtime.Types.Result.GetResult<Prisma.$ColumnsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ColumnsCreateManyArgs>(args?: Prisma.SelectSubset<T, ColumnsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends ColumnsDeleteArgs>(args: Prisma.SelectSubset<T, ColumnsDeleteArgs<ExtArgs>>): Prisma.Prisma__ColumnsClient<runtime.Types.Result.GetResult<Prisma.$ColumnsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ColumnsUpdateArgs>(args: Prisma.SelectSubset<T, ColumnsUpdateArgs<ExtArgs>>): Prisma.Prisma__ColumnsClient<runtime.Types.Result.GetResult<Prisma.$ColumnsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ColumnsDeleteManyArgs>(args?: Prisma.SelectSubset<T, ColumnsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ColumnsUpdateManyArgs>(args: Prisma.SelectSubset<T, ColumnsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends ColumnsUpsertArgs>(args: Prisma.SelectSubset<T, ColumnsUpsertArgs<ExtArgs>>): Prisma.Prisma__ColumnsClient<runtime.Types.Result.GetResult<Prisma.$ColumnsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ColumnsCountArgs>(args?: Prisma.Subset<T, ColumnsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ColumnsCountAggregateOutputType> : number>;
    aggregate<T extends ColumnsAggregateArgs>(args: Prisma.Subset<T, ColumnsAggregateArgs>): Prisma.PrismaPromise<GetColumnsAggregateType<T>>;
    groupBy<T extends ColumnsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ColumnsGroupByArgs['orderBy'];
    } : {
        orderBy?: ColumnsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ColumnsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetColumnsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ColumnsFieldRefs;
}
export interface Prisma__ColumnsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    board<T extends Prisma.BoardsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BoardsDefaultArgs<ExtArgs>>): Prisma.Prisma__BoardsClient<runtime.Types.Result.GetResult<Prisma.$BoardsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    tasks<T extends Prisma.Columns$tasksArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Columns$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TasksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ColumnsFieldRefs {
    readonly id: Prisma.FieldRef<"Columns", 'Int'>;
    readonly name: Prisma.FieldRef<"Columns", 'String'>;
    readonly position: Prisma.FieldRef<"Columns", 'Int'>;
    readonly boardId: Prisma.FieldRef<"Columns", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"Columns", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Columns", 'DateTime'>;
}
export type ColumnsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ColumnsSelect<ExtArgs> | null;
    omit?: Prisma.ColumnsOmit<ExtArgs> | null;
    include?: Prisma.ColumnsInclude<ExtArgs> | null;
    where: Prisma.ColumnsWhereUniqueInput;
};
export type ColumnsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ColumnsSelect<ExtArgs> | null;
    omit?: Prisma.ColumnsOmit<ExtArgs> | null;
    include?: Prisma.ColumnsInclude<ExtArgs> | null;
    where: Prisma.ColumnsWhereUniqueInput;
};
export type ColumnsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ColumnsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ColumnsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ColumnsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ColumnsSelect<ExtArgs> | null;
    omit?: Prisma.ColumnsOmit<ExtArgs> | null;
    include?: Prisma.ColumnsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ColumnsCreateInput, Prisma.ColumnsUncheckedCreateInput>;
};
export type ColumnsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ColumnsCreateManyInput | Prisma.ColumnsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ColumnsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ColumnsSelect<ExtArgs> | null;
    omit?: Prisma.ColumnsOmit<ExtArgs> | null;
    include?: Prisma.ColumnsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ColumnsUpdateInput, Prisma.ColumnsUncheckedUpdateInput>;
    where: Prisma.ColumnsWhereUniqueInput;
};
export type ColumnsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ColumnsUpdateManyMutationInput, Prisma.ColumnsUncheckedUpdateManyInput>;
    where?: Prisma.ColumnsWhereInput;
    limit?: number;
};
export type ColumnsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ColumnsSelect<ExtArgs> | null;
    omit?: Prisma.ColumnsOmit<ExtArgs> | null;
    include?: Prisma.ColumnsInclude<ExtArgs> | null;
    where: Prisma.ColumnsWhereUniqueInput;
    create: Prisma.XOR<Prisma.ColumnsCreateInput, Prisma.ColumnsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ColumnsUpdateInput, Prisma.ColumnsUncheckedUpdateInput>;
};
export type ColumnsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ColumnsSelect<ExtArgs> | null;
    omit?: Prisma.ColumnsOmit<ExtArgs> | null;
    include?: Prisma.ColumnsInclude<ExtArgs> | null;
    where: Prisma.ColumnsWhereUniqueInput;
};
export type ColumnsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ColumnsWhereInput;
    limit?: number;
};
export type Columns$tasksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ColumnsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ColumnsSelect<ExtArgs> | null;
    omit?: Prisma.ColumnsOmit<ExtArgs> | null;
    include?: Prisma.ColumnsInclude<ExtArgs> | null;
};
export {};
