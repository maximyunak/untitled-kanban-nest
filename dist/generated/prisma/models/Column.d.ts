import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ColumnModel = runtime.Types.Result.DefaultSelection<Prisma.$ColumnPayload>;
export type AggregateColumn = {
    _count: ColumnCountAggregateOutputType | null;
    _avg: ColumnAvgAggregateOutputType | null;
    _sum: ColumnSumAggregateOutputType | null;
    _min: ColumnMinAggregateOutputType | null;
    _max: ColumnMaxAggregateOutputType | null;
};
export type ColumnAvgAggregateOutputType = {
    id: number | null;
    position: number | null;
    boardId: number | null;
};
export type ColumnSumAggregateOutputType = {
    id: number | null;
    position: number | null;
    boardId: number | null;
};
export type ColumnMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    position: number | null;
    boardId: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ColumnMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    position: number | null;
    boardId: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ColumnCountAggregateOutputType = {
    id: number;
    name: number;
    position: number;
    boardId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ColumnAvgAggregateInputType = {
    id?: true;
    position?: true;
    boardId?: true;
};
export type ColumnSumAggregateInputType = {
    id?: true;
    position?: true;
    boardId?: true;
};
export type ColumnMinAggregateInputType = {
    id?: true;
    name?: true;
    position?: true;
    boardId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ColumnMaxAggregateInputType = {
    id?: true;
    name?: true;
    position?: true;
    boardId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ColumnCountAggregateInputType = {
    id?: true;
    name?: true;
    position?: true;
    boardId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ColumnAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ColumnWhereInput;
    orderBy?: Prisma.ColumnOrderByWithRelationInput | Prisma.ColumnOrderByWithRelationInput[];
    cursor?: Prisma.ColumnWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ColumnCountAggregateInputType;
    _avg?: ColumnAvgAggregateInputType;
    _sum?: ColumnSumAggregateInputType;
    _min?: ColumnMinAggregateInputType;
    _max?: ColumnMaxAggregateInputType;
};
export type GetColumnAggregateType<T extends ColumnAggregateArgs> = {
    [P in keyof T & keyof AggregateColumn]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateColumn[P]> : Prisma.GetScalarType<T[P], AggregateColumn[P]>;
};
export type ColumnGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ColumnWhereInput;
    orderBy?: Prisma.ColumnOrderByWithAggregationInput | Prisma.ColumnOrderByWithAggregationInput[];
    by: Prisma.ColumnScalarFieldEnum[] | Prisma.ColumnScalarFieldEnum;
    having?: Prisma.ColumnScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ColumnCountAggregateInputType | true;
    _avg?: ColumnAvgAggregateInputType;
    _sum?: ColumnSumAggregateInputType;
    _min?: ColumnMinAggregateInputType;
    _max?: ColumnMaxAggregateInputType;
};
export type ColumnGroupByOutputType = {
    id: number;
    name: string;
    position: number;
    boardId: number;
    createdAt: Date;
    updatedAt: Date;
    _count: ColumnCountAggregateOutputType | null;
    _avg: ColumnAvgAggregateOutputType | null;
    _sum: ColumnSumAggregateOutputType | null;
    _min: ColumnMinAggregateOutputType | null;
    _max: ColumnMaxAggregateOutputType | null;
};
type GetColumnGroupByPayload<T extends ColumnGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ColumnGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ColumnGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ColumnGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ColumnGroupByOutputType[P]>;
}>>;
export type ColumnWhereInput = {
    AND?: Prisma.ColumnWhereInput | Prisma.ColumnWhereInput[];
    OR?: Prisma.ColumnWhereInput[];
    NOT?: Prisma.ColumnWhereInput | Prisma.ColumnWhereInput[];
    id?: Prisma.IntFilter<"Column"> | number;
    name?: Prisma.StringFilter<"Column"> | string;
    position?: Prisma.IntFilter<"Column"> | number;
    boardId?: Prisma.IntFilter<"Column"> | number;
    createdAt?: Prisma.DateTimeFilter<"Column"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Column"> | Date | string;
    board?: Prisma.XOR<Prisma.BoardScalarRelationFilter, Prisma.BoardWhereInput>;
    tasks?: Prisma.TaskListRelationFilter;
};
export type ColumnOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
    boardId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    board?: Prisma.BoardOrderByWithRelationInput;
    tasks?: Prisma.TaskOrderByRelationAggregateInput;
    _relevance?: Prisma.ColumnOrderByRelevanceInput;
};
export type ColumnWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.ColumnWhereInput | Prisma.ColumnWhereInput[];
    OR?: Prisma.ColumnWhereInput[];
    NOT?: Prisma.ColumnWhereInput | Prisma.ColumnWhereInput[];
    name?: Prisma.StringFilter<"Column"> | string;
    position?: Prisma.IntFilter<"Column"> | number;
    boardId?: Prisma.IntFilter<"Column"> | number;
    createdAt?: Prisma.DateTimeFilter<"Column"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Column"> | Date | string;
    board?: Prisma.XOR<Prisma.BoardScalarRelationFilter, Prisma.BoardWhereInput>;
    tasks?: Prisma.TaskListRelationFilter;
}, "id">;
export type ColumnOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
    boardId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ColumnCountOrderByAggregateInput;
    _avg?: Prisma.ColumnAvgOrderByAggregateInput;
    _max?: Prisma.ColumnMaxOrderByAggregateInput;
    _min?: Prisma.ColumnMinOrderByAggregateInput;
    _sum?: Prisma.ColumnSumOrderByAggregateInput;
};
export type ColumnScalarWhereWithAggregatesInput = {
    AND?: Prisma.ColumnScalarWhereWithAggregatesInput | Prisma.ColumnScalarWhereWithAggregatesInput[];
    OR?: Prisma.ColumnScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ColumnScalarWhereWithAggregatesInput | Prisma.ColumnScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Column"> | number;
    name?: Prisma.StringWithAggregatesFilter<"Column"> | string;
    position?: Prisma.IntWithAggregatesFilter<"Column"> | number;
    boardId?: Prisma.IntWithAggregatesFilter<"Column"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Column"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Column"> | Date | string;
};
export type ColumnCreateInput = {
    name: string;
    position?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    board: Prisma.BoardCreateNestedOneWithoutColumnsInput;
    tasks?: Prisma.TaskCreateNestedManyWithoutColumnInput;
};
export type ColumnUncheckedCreateInput = {
    id?: number;
    name: string;
    position?: number;
    boardId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    tasks?: Prisma.TaskUncheckedCreateNestedManyWithoutColumnInput;
};
export type ColumnUpdateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    board?: Prisma.BoardUpdateOneRequiredWithoutColumnsNestedInput;
    tasks?: Prisma.TaskUpdateManyWithoutColumnNestedInput;
};
export type ColumnUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    boardId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tasks?: Prisma.TaskUncheckedUpdateManyWithoutColumnNestedInput;
};
export type ColumnCreateManyInput = {
    id?: number;
    name: string;
    position?: number;
    boardId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ColumnUpdateManyMutationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ColumnUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    boardId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ColumnListRelationFilter = {
    every?: Prisma.ColumnWhereInput;
    some?: Prisma.ColumnWhereInput;
    none?: Prisma.ColumnWhereInput;
};
export type ColumnOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ColumnOrderByRelevanceInput = {
    fields: Prisma.ColumnOrderByRelevanceFieldEnum | Prisma.ColumnOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type ColumnCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
    boardId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ColumnAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
    boardId?: Prisma.SortOrder;
};
export type ColumnMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
    boardId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ColumnMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
    boardId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ColumnSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
    boardId?: Prisma.SortOrder;
};
export type ColumnScalarRelationFilter = {
    is?: Prisma.ColumnWhereInput;
    isNot?: Prisma.ColumnWhereInput;
};
export type ColumnCreateNestedManyWithoutBoardInput = {
    create?: Prisma.XOR<Prisma.ColumnCreateWithoutBoardInput, Prisma.ColumnUncheckedCreateWithoutBoardInput> | Prisma.ColumnCreateWithoutBoardInput[] | Prisma.ColumnUncheckedCreateWithoutBoardInput[];
    connectOrCreate?: Prisma.ColumnCreateOrConnectWithoutBoardInput | Prisma.ColumnCreateOrConnectWithoutBoardInput[];
    createMany?: Prisma.ColumnCreateManyBoardInputEnvelope;
    connect?: Prisma.ColumnWhereUniqueInput | Prisma.ColumnWhereUniqueInput[];
};
export type ColumnUncheckedCreateNestedManyWithoutBoardInput = {
    create?: Prisma.XOR<Prisma.ColumnCreateWithoutBoardInput, Prisma.ColumnUncheckedCreateWithoutBoardInput> | Prisma.ColumnCreateWithoutBoardInput[] | Prisma.ColumnUncheckedCreateWithoutBoardInput[];
    connectOrCreate?: Prisma.ColumnCreateOrConnectWithoutBoardInput | Prisma.ColumnCreateOrConnectWithoutBoardInput[];
    createMany?: Prisma.ColumnCreateManyBoardInputEnvelope;
    connect?: Prisma.ColumnWhereUniqueInput | Prisma.ColumnWhereUniqueInput[];
};
export type ColumnUpdateManyWithoutBoardNestedInput = {
    create?: Prisma.XOR<Prisma.ColumnCreateWithoutBoardInput, Prisma.ColumnUncheckedCreateWithoutBoardInput> | Prisma.ColumnCreateWithoutBoardInput[] | Prisma.ColumnUncheckedCreateWithoutBoardInput[];
    connectOrCreate?: Prisma.ColumnCreateOrConnectWithoutBoardInput | Prisma.ColumnCreateOrConnectWithoutBoardInput[];
    upsert?: Prisma.ColumnUpsertWithWhereUniqueWithoutBoardInput | Prisma.ColumnUpsertWithWhereUniqueWithoutBoardInput[];
    createMany?: Prisma.ColumnCreateManyBoardInputEnvelope;
    set?: Prisma.ColumnWhereUniqueInput | Prisma.ColumnWhereUniqueInput[];
    disconnect?: Prisma.ColumnWhereUniqueInput | Prisma.ColumnWhereUniqueInput[];
    delete?: Prisma.ColumnWhereUniqueInput | Prisma.ColumnWhereUniqueInput[];
    connect?: Prisma.ColumnWhereUniqueInput | Prisma.ColumnWhereUniqueInput[];
    update?: Prisma.ColumnUpdateWithWhereUniqueWithoutBoardInput | Prisma.ColumnUpdateWithWhereUniqueWithoutBoardInput[];
    updateMany?: Prisma.ColumnUpdateManyWithWhereWithoutBoardInput | Prisma.ColumnUpdateManyWithWhereWithoutBoardInput[];
    deleteMany?: Prisma.ColumnScalarWhereInput | Prisma.ColumnScalarWhereInput[];
};
export type ColumnUncheckedUpdateManyWithoutBoardNestedInput = {
    create?: Prisma.XOR<Prisma.ColumnCreateWithoutBoardInput, Prisma.ColumnUncheckedCreateWithoutBoardInput> | Prisma.ColumnCreateWithoutBoardInput[] | Prisma.ColumnUncheckedCreateWithoutBoardInput[];
    connectOrCreate?: Prisma.ColumnCreateOrConnectWithoutBoardInput | Prisma.ColumnCreateOrConnectWithoutBoardInput[];
    upsert?: Prisma.ColumnUpsertWithWhereUniqueWithoutBoardInput | Prisma.ColumnUpsertWithWhereUniqueWithoutBoardInput[];
    createMany?: Prisma.ColumnCreateManyBoardInputEnvelope;
    set?: Prisma.ColumnWhereUniqueInput | Prisma.ColumnWhereUniqueInput[];
    disconnect?: Prisma.ColumnWhereUniqueInput | Prisma.ColumnWhereUniqueInput[];
    delete?: Prisma.ColumnWhereUniqueInput | Prisma.ColumnWhereUniqueInput[];
    connect?: Prisma.ColumnWhereUniqueInput | Prisma.ColumnWhereUniqueInput[];
    update?: Prisma.ColumnUpdateWithWhereUniqueWithoutBoardInput | Prisma.ColumnUpdateWithWhereUniqueWithoutBoardInput[];
    updateMany?: Prisma.ColumnUpdateManyWithWhereWithoutBoardInput | Prisma.ColumnUpdateManyWithWhereWithoutBoardInput[];
    deleteMany?: Prisma.ColumnScalarWhereInput | Prisma.ColumnScalarWhereInput[];
};
export type ColumnCreateNestedOneWithoutTasksInput = {
    create?: Prisma.XOR<Prisma.ColumnCreateWithoutTasksInput, Prisma.ColumnUncheckedCreateWithoutTasksInput>;
    connectOrCreate?: Prisma.ColumnCreateOrConnectWithoutTasksInput;
    connect?: Prisma.ColumnWhereUniqueInput;
};
export type ColumnUpdateOneRequiredWithoutTasksNestedInput = {
    create?: Prisma.XOR<Prisma.ColumnCreateWithoutTasksInput, Prisma.ColumnUncheckedCreateWithoutTasksInput>;
    connectOrCreate?: Prisma.ColumnCreateOrConnectWithoutTasksInput;
    upsert?: Prisma.ColumnUpsertWithoutTasksInput;
    connect?: Prisma.ColumnWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ColumnUpdateToOneWithWhereWithoutTasksInput, Prisma.ColumnUpdateWithoutTasksInput>, Prisma.ColumnUncheckedUpdateWithoutTasksInput>;
};
export type ColumnCreateWithoutBoardInput = {
    name: string;
    position?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    tasks?: Prisma.TaskCreateNestedManyWithoutColumnInput;
};
export type ColumnUncheckedCreateWithoutBoardInput = {
    id?: number;
    name: string;
    position?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    tasks?: Prisma.TaskUncheckedCreateNestedManyWithoutColumnInput;
};
export type ColumnCreateOrConnectWithoutBoardInput = {
    where: Prisma.ColumnWhereUniqueInput;
    create: Prisma.XOR<Prisma.ColumnCreateWithoutBoardInput, Prisma.ColumnUncheckedCreateWithoutBoardInput>;
};
export type ColumnCreateManyBoardInputEnvelope = {
    data: Prisma.ColumnCreateManyBoardInput | Prisma.ColumnCreateManyBoardInput[];
    skipDuplicates?: boolean;
};
export type ColumnUpsertWithWhereUniqueWithoutBoardInput = {
    where: Prisma.ColumnWhereUniqueInput;
    update: Prisma.XOR<Prisma.ColumnUpdateWithoutBoardInput, Prisma.ColumnUncheckedUpdateWithoutBoardInput>;
    create: Prisma.XOR<Prisma.ColumnCreateWithoutBoardInput, Prisma.ColumnUncheckedCreateWithoutBoardInput>;
};
export type ColumnUpdateWithWhereUniqueWithoutBoardInput = {
    where: Prisma.ColumnWhereUniqueInput;
    data: Prisma.XOR<Prisma.ColumnUpdateWithoutBoardInput, Prisma.ColumnUncheckedUpdateWithoutBoardInput>;
};
export type ColumnUpdateManyWithWhereWithoutBoardInput = {
    where: Prisma.ColumnScalarWhereInput;
    data: Prisma.XOR<Prisma.ColumnUpdateManyMutationInput, Prisma.ColumnUncheckedUpdateManyWithoutBoardInput>;
};
export type ColumnScalarWhereInput = {
    AND?: Prisma.ColumnScalarWhereInput | Prisma.ColumnScalarWhereInput[];
    OR?: Prisma.ColumnScalarWhereInput[];
    NOT?: Prisma.ColumnScalarWhereInput | Prisma.ColumnScalarWhereInput[];
    id?: Prisma.IntFilter<"Column"> | number;
    name?: Prisma.StringFilter<"Column"> | string;
    position?: Prisma.IntFilter<"Column"> | number;
    boardId?: Prisma.IntFilter<"Column"> | number;
    createdAt?: Prisma.DateTimeFilter<"Column"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Column"> | Date | string;
};
export type ColumnCreateWithoutTasksInput = {
    name: string;
    position?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    board: Prisma.BoardCreateNestedOneWithoutColumnsInput;
};
export type ColumnUncheckedCreateWithoutTasksInput = {
    id?: number;
    name: string;
    position?: number;
    boardId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ColumnCreateOrConnectWithoutTasksInput = {
    where: Prisma.ColumnWhereUniqueInput;
    create: Prisma.XOR<Prisma.ColumnCreateWithoutTasksInput, Prisma.ColumnUncheckedCreateWithoutTasksInput>;
};
export type ColumnUpsertWithoutTasksInput = {
    update: Prisma.XOR<Prisma.ColumnUpdateWithoutTasksInput, Prisma.ColumnUncheckedUpdateWithoutTasksInput>;
    create: Prisma.XOR<Prisma.ColumnCreateWithoutTasksInput, Prisma.ColumnUncheckedCreateWithoutTasksInput>;
    where?: Prisma.ColumnWhereInput;
};
export type ColumnUpdateToOneWithWhereWithoutTasksInput = {
    where?: Prisma.ColumnWhereInput;
    data: Prisma.XOR<Prisma.ColumnUpdateWithoutTasksInput, Prisma.ColumnUncheckedUpdateWithoutTasksInput>;
};
export type ColumnUpdateWithoutTasksInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    board?: Prisma.BoardUpdateOneRequiredWithoutColumnsNestedInput;
};
export type ColumnUncheckedUpdateWithoutTasksInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    boardId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ColumnCreateManyBoardInput = {
    id?: number;
    name: string;
    position?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ColumnUpdateWithoutBoardInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tasks?: Prisma.TaskUpdateManyWithoutColumnNestedInput;
};
export type ColumnUncheckedUpdateWithoutBoardInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tasks?: Prisma.TaskUncheckedUpdateManyWithoutColumnNestedInput;
};
export type ColumnUncheckedUpdateManyWithoutBoardInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ColumnCountOutputType = {
    tasks: number;
};
export type ColumnCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tasks?: boolean | ColumnCountOutputTypeCountTasksArgs;
};
export type ColumnCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ColumnCountOutputTypeSelect<ExtArgs> | null;
};
export type ColumnCountOutputTypeCountTasksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TaskWhereInput;
};
export type ColumnSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    position?: boolean;
    boardId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    board?: boolean | Prisma.BoardDefaultArgs<ExtArgs>;
    tasks?: boolean | Prisma.Column$tasksArgs<ExtArgs>;
    _count?: boolean | Prisma.ColumnCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["column"]>;
export type ColumnSelectScalar = {
    id?: boolean;
    name?: boolean;
    position?: boolean;
    boardId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ColumnOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "position" | "boardId" | "createdAt" | "updatedAt", ExtArgs["result"]["column"]>;
export type ColumnInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    board?: boolean | Prisma.BoardDefaultArgs<ExtArgs>;
    tasks?: boolean | Prisma.Column$tasksArgs<ExtArgs>;
    _count?: boolean | Prisma.ColumnCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $ColumnPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Column";
    objects: {
        board: Prisma.$BoardPayload<ExtArgs>;
        tasks: Prisma.$TaskPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        name: string;
        position: number;
        boardId: number;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["column"]>;
    composites: {};
};
export type ColumnGetPayload<S extends boolean | null | undefined | ColumnDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ColumnPayload, S>;
export type ColumnCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ColumnFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ColumnCountAggregateInputType | true;
};
export interface ColumnDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Column'];
        meta: {
            name: 'Column';
        };
    };
    findUnique<T extends ColumnFindUniqueArgs>(args: Prisma.SelectSubset<T, ColumnFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ColumnClient<runtime.Types.Result.GetResult<Prisma.$ColumnPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ColumnFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ColumnFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ColumnClient<runtime.Types.Result.GetResult<Prisma.$ColumnPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ColumnFindFirstArgs>(args?: Prisma.SelectSubset<T, ColumnFindFirstArgs<ExtArgs>>): Prisma.Prisma__ColumnClient<runtime.Types.Result.GetResult<Prisma.$ColumnPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ColumnFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ColumnFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ColumnClient<runtime.Types.Result.GetResult<Prisma.$ColumnPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ColumnFindManyArgs>(args?: Prisma.SelectSubset<T, ColumnFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ColumnPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ColumnCreateArgs>(args: Prisma.SelectSubset<T, ColumnCreateArgs<ExtArgs>>): Prisma.Prisma__ColumnClient<runtime.Types.Result.GetResult<Prisma.$ColumnPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ColumnCreateManyArgs>(args?: Prisma.SelectSubset<T, ColumnCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends ColumnDeleteArgs>(args: Prisma.SelectSubset<T, ColumnDeleteArgs<ExtArgs>>): Prisma.Prisma__ColumnClient<runtime.Types.Result.GetResult<Prisma.$ColumnPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ColumnUpdateArgs>(args: Prisma.SelectSubset<T, ColumnUpdateArgs<ExtArgs>>): Prisma.Prisma__ColumnClient<runtime.Types.Result.GetResult<Prisma.$ColumnPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ColumnDeleteManyArgs>(args?: Prisma.SelectSubset<T, ColumnDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ColumnUpdateManyArgs>(args: Prisma.SelectSubset<T, ColumnUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends ColumnUpsertArgs>(args: Prisma.SelectSubset<T, ColumnUpsertArgs<ExtArgs>>): Prisma.Prisma__ColumnClient<runtime.Types.Result.GetResult<Prisma.$ColumnPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ColumnCountArgs>(args?: Prisma.Subset<T, ColumnCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ColumnCountAggregateOutputType> : number>;
    aggregate<T extends ColumnAggregateArgs>(args: Prisma.Subset<T, ColumnAggregateArgs>): Prisma.PrismaPromise<GetColumnAggregateType<T>>;
    groupBy<T extends ColumnGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ColumnGroupByArgs['orderBy'];
    } : {
        orderBy?: ColumnGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ColumnGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetColumnGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ColumnFieldRefs;
}
export interface Prisma__ColumnClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    board<T extends Prisma.BoardDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BoardDefaultArgs<ExtArgs>>): Prisma.Prisma__BoardClient<runtime.Types.Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    tasks<T extends Prisma.Column$tasksArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Column$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ColumnFieldRefs {
    readonly id: Prisma.FieldRef<"Column", 'Int'>;
    readonly name: Prisma.FieldRef<"Column", 'String'>;
    readonly position: Prisma.FieldRef<"Column", 'Int'>;
    readonly boardId: Prisma.FieldRef<"Column", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"Column", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Column", 'DateTime'>;
}
export type ColumnFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ColumnSelect<ExtArgs> | null;
    omit?: Prisma.ColumnOmit<ExtArgs> | null;
    include?: Prisma.ColumnInclude<ExtArgs> | null;
    where: Prisma.ColumnWhereUniqueInput;
};
export type ColumnFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ColumnSelect<ExtArgs> | null;
    omit?: Prisma.ColumnOmit<ExtArgs> | null;
    include?: Prisma.ColumnInclude<ExtArgs> | null;
    where: Prisma.ColumnWhereUniqueInput;
};
export type ColumnFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ColumnSelect<ExtArgs> | null;
    omit?: Prisma.ColumnOmit<ExtArgs> | null;
    include?: Prisma.ColumnInclude<ExtArgs> | null;
    where?: Prisma.ColumnWhereInput;
    orderBy?: Prisma.ColumnOrderByWithRelationInput | Prisma.ColumnOrderByWithRelationInput[];
    cursor?: Prisma.ColumnWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ColumnScalarFieldEnum | Prisma.ColumnScalarFieldEnum[];
};
export type ColumnFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ColumnSelect<ExtArgs> | null;
    omit?: Prisma.ColumnOmit<ExtArgs> | null;
    include?: Prisma.ColumnInclude<ExtArgs> | null;
    where?: Prisma.ColumnWhereInput;
    orderBy?: Prisma.ColumnOrderByWithRelationInput | Prisma.ColumnOrderByWithRelationInput[];
    cursor?: Prisma.ColumnWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ColumnScalarFieldEnum | Prisma.ColumnScalarFieldEnum[];
};
export type ColumnFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ColumnSelect<ExtArgs> | null;
    omit?: Prisma.ColumnOmit<ExtArgs> | null;
    include?: Prisma.ColumnInclude<ExtArgs> | null;
    where?: Prisma.ColumnWhereInput;
    orderBy?: Prisma.ColumnOrderByWithRelationInput | Prisma.ColumnOrderByWithRelationInput[];
    cursor?: Prisma.ColumnWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ColumnScalarFieldEnum | Prisma.ColumnScalarFieldEnum[];
};
export type ColumnCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ColumnSelect<ExtArgs> | null;
    omit?: Prisma.ColumnOmit<ExtArgs> | null;
    include?: Prisma.ColumnInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ColumnCreateInput, Prisma.ColumnUncheckedCreateInput>;
};
export type ColumnCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ColumnCreateManyInput | Prisma.ColumnCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ColumnUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ColumnSelect<ExtArgs> | null;
    omit?: Prisma.ColumnOmit<ExtArgs> | null;
    include?: Prisma.ColumnInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ColumnUpdateInput, Prisma.ColumnUncheckedUpdateInput>;
    where: Prisma.ColumnWhereUniqueInput;
};
export type ColumnUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ColumnUpdateManyMutationInput, Prisma.ColumnUncheckedUpdateManyInput>;
    where?: Prisma.ColumnWhereInput;
    limit?: number;
};
export type ColumnUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ColumnSelect<ExtArgs> | null;
    omit?: Prisma.ColumnOmit<ExtArgs> | null;
    include?: Prisma.ColumnInclude<ExtArgs> | null;
    where: Prisma.ColumnWhereUniqueInput;
    create: Prisma.XOR<Prisma.ColumnCreateInput, Prisma.ColumnUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ColumnUpdateInput, Prisma.ColumnUncheckedUpdateInput>;
};
export type ColumnDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ColumnSelect<ExtArgs> | null;
    omit?: Prisma.ColumnOmit<ExtArgs> | null;
    include?: Prisma.ColumnInclude<ExtArgs> | null;
    where: Prisma.ColumnWhereUniqueInput;
};
export type ColumnDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ColumnWhereInput;
    limit?: number;
};
export type Column$tasksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ColumnDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ColumnSelect<ExtArgs> | null;
    omit?: Prisma.ColumnOmit<ExtArgs> | null;
    include?: Prisma.ColumnInclude<ExtArgs> | null;
};
export {};
