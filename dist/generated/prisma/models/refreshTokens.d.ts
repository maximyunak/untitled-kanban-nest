import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
export type refreshTokensModel = runtime.Types.Result.DefaultSelection<Prisma.$refreshTokensPayload>;
export type AggregateRefreshTokens = {
    _count: RefreshTokensCountAggregateOutputType | null;
    _avg: RefreshTokensAvgAggregateOutputType | null;
    _sum: RefreshTokensSumAggregateOutputType | null;
    _min: RefreshTokensMinAggregateOutputType | null;
    _max: RefreshTokensMaxAggregateOutputType | null;
};
export type RefreshTokensAvgAggregateOutputType = {
    id: number | null;
    userId: number | null;
};
export type RefreshTokensSumAggregateOutputType = {
    id: number | null;
    userId: number | null;
};
export type RefreshTokensMinAggregateOutputType = {
    id: number | null;
    token: string | null;
    userId: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type RefreshTokensMaxAggregateOutputType = {
    id: number | null;
    token: string | null;
    userId: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type RefreshTokensCountAggregateOutputType = {
    id: number;
    token: number;
    userId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type RefreshTokensAvgAggregateInputType = {
    id?: true;
    userId?: true;
};
export type RefreshTokensSumAggregateInputType = {
    id?: true;
    userId?: true;
};
export type RefreshTokensMinAggregateInputType = {
    id?: true;
    token?: true;
    userId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type RefreshTokensMaxAggregateInputType = {
    id?: true;
    token?: true;
    userId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type RefreshTokensCountAggregateInputType = {
    id?: true;
    token?: true;
    userId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type RefreshTokensAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.refreshTokensWhereInput;
    orderBy?: Prisma.refreshTokensOrderByWithRelationInput | Prisma.refreshTokensOrderByWithRelationInput[];
    cursor?: Prisma.refreshTokensWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | RefreshTokensCountAggregateInputType;
    _avg?: RefreshTokensAvgAggregateInputType;
    _sum?: RefreshTokensSumAggregateInputType;
    _min?: RefreshTokensMinAggregateInputType;
    _max?: RefreshTokensMaxAggregateInputType;
};
export type GetRefreshTokensAggregateType<T extends RefreshTokensAggregateArgs> = {
    [P in keyof T & keyof AggregateRefreshTokens]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRefreshTokens[P]> : Prisma.GetScalarType<T[P], AggregateRefreshTokens[P]>;
};
export type refreshTokensGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.refreshTokensWhereInput;
    orderBy?: Prisma.refreshTokensOrderByWithAggregationInput | Prisma.refreshTokensOrderByWithAggregationInput[];
    by: Prisma.RefreshTokensScalarFieldEnum[] | Prisma.RefreshTokensScalarFieldEnum;
    having?: Prisma.refreshTokensScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RefreshTokensCountAggregateInputType | true;
    _avg?: RefreshTokensAvgAggregateInputType;
    _sum?: RefreshTokensSumAggregateInputType;
    _min?: RefreshTokensMinAggregateInputType;
    _max?: RefreshTokensMaxAggregateInputType;
};
export type RefreshTokensGroupByOutputType = {
    id: number;
    token: string;
    userId: number;
    createdAt: Date;
    updatedAt: Date;
    _count: RefreshTokensCountAggregateOutputType | null;
    _avg: RefreshTokensAvgAggregateOutputType | null;
    _sum: RefreshTokensSumAggregateOutputType | null;
    _min: RefreshTokensMinAggregateOutputType | null;
    _max: RefreshTokensMaxAggregateOutputType | null;
};
type GetRefreshTokensGroupByPayload<T extends refreshTokensGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RefreshTokensGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RefreshTokensGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RefreshTokensGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RefreshTokensGroupByOutputType[P]>;
}>>;
export type refreshTokensWhereInput = {
    AND?: Prisma.refreshTokensWhereInput | Prisma.refreshTokensWhereInput[];
    OR?: Prisma.refreshTokensWhereInput[];
    NOT?: Prisma.refreshTokensWhereInput | Prisma.refreshTokensWhereInput[];
    id?: Prisma.IntFilter<"refreshTokens"> | number;
    token?: Prisma.StringFilter<"refreshTokens"> | string;
    userId?: Prisma.IntFilter<"refreshTokens"> | number;
    createdAt?: Prisma.DateTimeFilter<"refreshTokens"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"refreshTokens"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type refreshTokensOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    token?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    _relevance?: Prisma.refreshTokensOrderByRelevanceInput;
};
export type refreshTokensWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.refreshTokensWhereInput | Prisma.refreshTokensWhereInput[];
    OR?: Prisma.refreshTokensWhereInput[];
    NOT?: Prisma.refreshTokensWhereInput | Prisma.refreshTokensWhereInput[];
    token?: Prisma.StringFilter<"refreshTokens"> | string;
    userId?: Prisma.IntFilter<"refreshTokens"> | number;
    createdAt?: Prisma.DateTimeFilter<"refreshTokens"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"refreshTokens"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id">;
export type refreshTokensOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    token?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.refreshTokensCountOrderByAggregateInput;
    _avg?: Prisma.refreshTokensAvgOrderByAggregateInput;
    _max?: Prisma.refreshTokensMaxOrderByAggregateInput;
    _min?: Prisma.refreshTokensMinOrderByAggregateInput;
    _sum?: Prisma.refreshTokensSumOrderByAggregateInput;
};
export type refreshTokensScalarWhereWithAggregatesInput = {
    AND?: Prisma.refreshTokensScalarWhereWithAggregatesInput | Prisma.refreshTokensScalarWhereWithAggregatesInput[];
    OR?: Prisma.refreshTokensScalarWhereWithAggregatesInput[];
    NOT?: Prisma.refreshTokensScalarWhereWithAggregatesInput | Prisma.refreshTokensScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"refreshTokens"> | number;
    token?: Prisma.StringWithAggregatesFilter<"refreshTokens"> | string;
    userId?: Prisma.IntWithAggregatesFilter<"refreshTokens"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"refreshTokens"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"refreshTokens"> | Date | string;
};
export type refreshTokensCreateInput = {
    token: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutRefreshTokensInput;
};
export type refreshTokensUncheckedCreateInput = {
    id?: number;
    token: string;
    userId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type refreshTokensUpdateInput = {
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutRefreshTokensNestedInput;
};
export type refreshTokensUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type refreshTokensCreateManyInput = {
    id?: number;
    token: string;
    userId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type refreshTokensUpdateManyMutationInput = {
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type refreshTokensUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RefreshTokensListRelationFilter = {
    every?: Prisma.refreshTokensWhereInput;
    some?: Prisma.refreshTokensWhereInput;
    none?: Prisma.refreshTokensWhereInput;
};
export type refreshTokensOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type refreshTokensOrderByRelevanceInput = {
    fields: Prisma.refreshTokensOrderByRelevanceFieldEnum | Prisma.refreshTokensOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type refreshTokensCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    token?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type refreshTokensAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type refreshTokensMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    token?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type refreshTokensMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    token?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type refreshTokensSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type refreshTokensCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.refreshTokensCreateWithoutUserInput, Prisma.refreshTokensUncheckedCreateWithoutUserInput> | Prisma.refreshTokensCreateWithoutUserInput[] | Prisma.refreshTokensUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.refreshTokensCreateOrConnectWithoutUserInput | Prisma.refreshTokensCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.refreshTokensCreateManyUserInputEnvelope;
    connect?: Prisma.refreshTokensWhereUniqueInput | Prisma.refreshTokensWhereUniqueInput[];
};
export type refreshTokensUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.refreshTokensCreateWithoutUserInput, Prisma.refreshTokensUncheckedCreateWithoutUserInput> | Prisma.refreshTokensCreateWithoutUserInput[] | Prisma.refreshTokensUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.refreshTokensCreateOrConnectWithoutUserInput | Prisma.refreshTokensCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.refreshTokensCreateManyUserInputEnvelope;
    connect?: Prisma.refreshTokensWhereUniqueInput | Prisma.refreshTokensWhereUniqueInput[];
};
export type refreshTokensUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.refreshTokensCreateWithoutUserInput, Prisma.refreshTokensUncheckedCreateWithoutUserInput> | Prisma.refreshTokensCreateWithoutUserInput[] | Prisma.refreshTokensUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.refreshTokensCreateOrConnectWithoutUserInput | Prisma.refreshTokensCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.refreshTokensUpsertWithWhereUniqueWithoutUserInput | Prisma.refreshTokensUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.refreshTokensCreateManyUserInputEnvelope;
    set?: Prisma.refreshTokensWhereUniqueInput | Prisma.refreshTokensWhereUniqueInput[];
    disconnect?: Prisma.refreshTokensWhereUniqueInput | Prisma.refreshTokensWhereUniqueInput[];
    delete?: Prisma.refreshTokensWhereUniqueInput | Prisma.refreshTokensWhereUniqueInput[];
    connect?: Prisma.refreshTokensWhereUniqueInput | Prisma.refreshTokensWhereUniqueInput[];
    update?: Prisma.refreshTokensUpdateWithWhereUniqueWithoutUserInput | Prisma.refreshTokensUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.refreshTokensUpdateManyWithWhereWithoutUserInput | Prisma.refreshTokensUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.refreshTokensScalarWhereInput | Prisma.refreshTokensScalarWhereInput[];
};
export type refreshTokensUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.refreshTokensCreateWithoutUserInput, Prisma.refreshTokensUncheckedCreateWithoutUserInput> | Prisma.refreshTokensCreateWithoutUserInput[] | Prisma.refreshTokensUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.refreshTokensCreateOrConnectWithoutUserInput | Prisma.refreshTokensCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.refreshTokensUpsertWithWhereUniqueWithoutUserInput | Prisma.refreshTokensUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.refreshTokensCreateManyUserInputEnvelope;
    set?: Prisma.refreshTokensWhereUniqueInput | Prisma.refreshTokensWhereUniqueInput[];
    disconnect?: Prisma.refreshTokensWhereUniqueInput | Prisma.refreshTokensWhereUniqueInput[];
    delete?: Prisma.refreshTokensWhereUniqueInput | Prisma.refreshTokensWhereUniqueInput[];
    connect?: Prisma.refreshTokensWhereUniqueInput | Prisma.refreshTokensWhereUniqueInput[];
    update?: Prisma.refreshTokensUpdateWithWhereUniqueWithoutUserInput | Prisma.refreshTokensUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.refreshTokensUpdateManyWithWhereWithoutUserInput | Prisma.refreshTokensUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.refreshTokensScalarWhereInput | Prisma.refreshTokensScalarWhereInput[];
};
export type refreshTokensCreateWithoutUserInput = {
    token: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type refreshTokensUncheckedCreateWithoutUserInput = {
    id?: number;
    token: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type refreshTokensCreateOrConnectWithoutUserInput = {
    where: Prisma.refreshTokensWhereUniqueInput;
    create: Prisma.XOR<Prisma.refreshTokensCreateWithoutUserInput, Prisma.refreshTokensUncheckedCreateWithoutUserInput>;
};
export type refreshTokensCreateManyUserInputEnvelope = {
    data: Prisma.refreshTokensCreateManyUserInput | Prisma.refreshTokensCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type refreshTokensUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.refreshTokensWhereUniqueInput;
    update: Prisma.XOR<Prisma.refreshTokensUpdateWithoutUserInput, Prisma.refreshTokensUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.refreshTokensCreateWithoutUserInput, Prisma.refreshTokensUncheckedCreateWithoutUserInput>;
};
export type refreshTokensUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.refreshTokensWhereUniqueInput;
    data: Prisma.XOR<Prisma.refreshTokensUpdateWithoutUserInput, Prisma.refreshTokensUncheckedUpdateWithoutUserInput>;
};
export type refreshTokensUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.refreshTokensScalarWhereInput;
    data: Prisma.XOR<Prisma.refreshTokensUpdateManyMutationInput, Prisma.refreshTokensUncheckedUpdateManyWithoutUserInput>;
};
export type refreshTokensScalarWhereInput = {
    AND?: Prisma.refreshTokensScalarWhereInput | Prisma.refreshTokensScalarWhereInput[];
    OR?: Prisma.refreshTokensScalarWhereInput[];
    NOT?: Prisma.refreshTokensScalarWhereInput | Prisma.refreshTokensScalarWhereInput[];
    id?: Prisma.IntFilter<"refreshTokens"> | number;
    token?: Prisma.StringFilter<"refreshTokens"> | string;
    userId?: Prisma.IntFilter<"refreshTokens"> | number;
    createdAt?: Prisma.DateTimeFilter<"refreshTokens"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"refreshTokens"> | Date | string;
};
export type refreshTokensCreateManyUserInput = {
    id?: number;
    token: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type refreshTokensUpdateWithoutUserInput = {
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type refreshTokensUncheckedUpdateWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type refreshTokensUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type refreshTokensSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    token?: boolean;
    userId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["refreshTokens"]>;
export type refreshTokensSelectScalar = {
    id?: boolean;
    token?: boolean;
    userId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type refreshTokensOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "token" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["refreshTokens"]>;
export type refreshTokensInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $refreshTokensPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "refreshTokens";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        token: string;
        userId: number;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["refreshTokens"]>;
    composites: {};
};
export type refreshTokensGetPayload<S extends boolean | null | undefined | refreshTokensDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$refreshTokensPayload, S>;
export type refreshTokensCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<refreshTokensFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RefreshTokensCountAggregateInputType | true;
};
export interface refreshTokensDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['refreshTokens'];
        meta: {
            name: 'refreshTokens';
        };
    };
    findUnique<T extends refreshTokensFindUniqueArgs>(args: Prisma.SelectSubset<T, refreshTokensFindUniqueArgs<ExtArgs>>): Prisma.Prisma__refreshTokensClient<runtime.Types.Result.GetResult<Prisma.$refreshTokensPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends refreshTokensFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, refreshTokensFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__refreshTokensClient<runtime.Types.Result.GetResult<Prisma.$refreshTokensPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends refreshTokensFindFirstArgs>(args?: Prisma.SelectSubset<T, refreshTokensFindFirstArgs<ExtArgs>>): Prisma.Prisma__refreshTokensClient<runtime.Types.Result.GetResult<Prisma.$refreshTokensPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends refreshTokensFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, refreshTokensFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__refreshTokensClient<runtime.Types.Result.GetResult<Prisma.$refreshTokensPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends refreshTokensFindManyArgs>(args?: Prisma.SelectSubset<T, refreshTokensFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$refreshTokensPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends refreshTokensCreateArgs>(args: Prisma.SelectSubset<T, refreshTokensCreateArgs<ExtArgs>>): Prisma.Prisma__refreshTokensClient<runtime.Types.Result.GetResult<Prisma.$refreshTokensPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends refreshTokensCreateManyArgs>(args?: Prisma.SelectSubset<T, refreshTokensCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends refreshTokensDeleteArgs>(args: Prisma.SelectSubset<T, refreshTokensDeleteArgs<ExtArgs>>): Prisma.Prisma__refreshTokensClient<runtime.Types.Result.GetResult<Prisma.$refreshTokensPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends refreshTokensUpdateArgs>(args: Prisma.SelectSubset<T, refreshTokensUpdateArgs<ExtArgs>>): Prisma.Prisma__refreshTokensClient<runtime.Types.Result.GetResult<Prisma.$refreshTokensPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends refreshTokensDeleteManyArgs>(args?: Prisma.SelectSubset<T, refreshTokensDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends refreshTokensUpdateManyArgs>(args: Prisma.SelectSubset<T, refreshTokensUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends refreshTokensUpsertArgs>(args: Prisma.SelectSubset<T, refreshTokensUpsertArgs<ExtArgs>>): Prisma.Prisma__refreshTokensClient<runtime.Types.Result.GetResult<Prisma.$refreshTokensPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends refreshTokensCountArgs>(args?: Prisma.Subset<T, refreshTokensCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RefreshTokensCountAggregateOutputType> : number>;
    aggregate<T extends RefreshTokensAggregateArgs>(args: Prisma.Subset<T, RefreshTokensAggregateArgs>): Prisma.PrismaPromise<GetRefreshTokensAggregateType<T>>;
    groupBy<T extends refreshTokensGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: refreshTokensGroupByArgs['orderBy'];
    } : {
        orderBy?: refreshTokensGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, refreshTokensGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRefreshTokensGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: refreshTokensFieldRefs;
}
export interface Prisma__refreshTokensClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface refreshTokensFieldRefs {
    readonly id: Prisma.FieldRef<"refreshTokens", 'Int'>;
    readonly token: Prisma.FieldRef<"refreshTokens", 'String'>;
    readonly userId: Prisma.FieldRef<"refreshTokens", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"refreshTokens", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"refreshTokens", 'DateTime'>;
}
export type refreshTokensFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.refreshTokensSelect<ExtArgs> | null;
    omit?: Prisma.refreshTokensOmit<ExtArgs> | null;
    include?: Prisma.refreshTokensInclude<ExtArgs> | null;
    where: Prisma.refreshTokensWhereUniqueInput;
};
export type refreshTokensFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.refreshTokensSelect<ExtArgs> | null;
    omit?: Prisma.refreshTokensOmit<ExtArgs> | null;
    include?: Prisma.refreshTokensInclude<ExtArgs> | null;
    where: Prisma.refreshTokensWhereUniqueInput;
};
export type refreshTokensFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type refreshTokensFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type refreshTokensFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type refreshTokensCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.refreshTokensSelect<ExtArgs> | null;
    omit?: Prisma.refreshTokensOmit<ExtArgs> | null;
    include?: Prisma.refreshTokensInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.refreshTokensCreateInput, Prisma.refreshTokensUncheckedCreateInput>;
};
export type refreshTokensCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.refreshTokensCreateManyInput | Prisma.refreshTokensCreateManyInput[];
    skipDuplicates?: boolean;
};
export type refreshTokensUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.refreshTokensSelect<ExtArgs> | null;
    omit?: Prisma.refreshTokensOmit<ExtArgs> | null;
    include?: Prisma.refreshTokensInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.refreshTokensUpdateInput, Prisma.refreshTokensUncheckedUpdateInput>;
    where: Prisma.refreshTokensWhereUniqueInput;
};
export type refreshTokensUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.refreshTokensUpdateManyMutationInput, Prisma.refreshTokensUncheckedUpdateManyInput>;
    where?: Prisma.refreshTokensWhereInput;
    limit?: number;
};
export type refreshTokensUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.refreshTokensSelect<ExtArgs> | null;
    omit?: Prisma.refreshTokensOmit<ExtArgs> | null;
    include?: Prisma.refreshTokensInclude<ExtArgs> | null;
    where: Prisma.refreshTokensWhereUniqueInput;
    create: Prisma.XOR<Prisma.refreshTokensCreateInput, Prisma.refreshTokensUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.refreshTokensUpdateInput, Prisma.refreshTokensUncheckedUpdateInput>;
};
export type refreshTokensDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.refreshTokensSelect<ExtArgs> | null;
    omit?: Prisma.refreshTokensOmit<ExtArgs> | null;
    include?: Prisma.refreshTokensInclude<ExtArgs> | null;
    where: Prisma.refreshTokensWhereUniqueInput;
};
export type refreshTokensDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.refreshTokensWhereInput;
    limit?: number;
};
export type refreshTokensDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.refreshTokensSelect<ExtArgs> | null;
    omit?: Prisma.refreshTokensOmit<ExtArgs> | null;
    include?: Prisma.refreshTokensInclude<ExtArgs> | null;
};
export {};
