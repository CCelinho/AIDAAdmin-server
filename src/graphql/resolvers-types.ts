import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: "Date"; output: "Date"; }
};

export type Address = {
  __typename?: 'Address';
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  district?: Maybe<Scalars['String']['output']>;
  line?: Maybe<Scalars['String']['output']>;
  period?: Maybe<Period>;
  postalCode?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  use?: Maybe<Scalars['String']['output']>;
};

export type CodeableConcept = {
  __typename?: 'CodeableConcept';
  coding?: Maybe<Coding>;
  text?: Maybe<Scalars['String']['output']>;
};

export type Coding = {
  __typename?: 'Coding';
  code?: Maybe<Scalars['String']['output']>;
  display?: Maybe<Scalars['String']['output']>;
  system?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

export type ContactPoint = {
  __typename?: 'ContactPoint';
  period?: Maybe<Period>;
  rank?: Maybe<Scalars['Int']['output']>;
  system?: Maybe<Scalars['String']['output']>;
  use?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type Department = {
  __typename?: 'Department';
  AGREGA1?: Maybe<Scalars['String']['output']>;
  AGREGA2?: Maybe<Scalars['String']['output']>;
  AGREGA3?: Maybe<Scalars['String']['output']>;
  CHILDREN?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  COD_DEPARTAMENTO?: Maybe<Scalars['Int']['output']>;
  COD_ESTATISTICO?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  CR?: Maybe<Scalars['String']['output']>;
  DES_DEPARTAMENTO?: Maybe<Scalars['String']['output']>;
  ID_CP?: Maybe<Scalars['String']['output']>;
  UH?: Maybe<Scalars['String']['output']>;
  VIG_FIM?: Maybe<Scalars['Date']['output']>;
  VIG_INI?: Maybe<Scalars['Date']['output']>;
  _id: Scalars['ID']['output'];
  active?: Maybe<Scalars['Boolean']['output']>;
  alias?: Maybe<Scalars['String']['output']>;
  contact?: Maybe<ExtendedContactDetail>;
  description?: Maybe<Scalars['String']['output']>;
  endpoint?: Maybe<Reference>;
  identifier?: Maybe<Identifier>;
  name?: Maybe<Scalars['String']['output']>;
  partOf?: Maybe<Reference>;
  type?: Maybe<CodeableConcept>;
};

export type ExtendedContactDetail = {
  __typename?: 'ExtendedContactDetail';
  address?: Maybe<Array<Maybe<Address>>>;
  name?: Maybe<HumanName>;
  organization?: Maybe<Reference>;
  period?: Maybe<Period>;
  purpose?: Maybe<CodeableConcept>;
  telecom?: Maybe<Array<Maybe<ContactPoint>>>;
};

export type HumanName = {
  __typename?: 'HumanName';
  family?: Maybe<Scalars['String']['output']>;
  given?: Maybe<Scalars['String']['output']>;
  period?: Maybe<Period>;
  prefix?: Maybe<Scalars['String']['output']>;
  suffix?: Maybe<Scalars['String']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  use?: Maybe<Scalars['String']['output']>;
};

export type Identifier = {
  __typename?: 'Identifier';
  assigner?: Maybe<Scalars['String']['output']>;
  period?: Maybe<Period>;
  system?: Maybe<Scalars['String']['output']>;
  type?: Maybe<CodeableConcept>;
  use?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type Period = {
  __typename?: 'Period';
  end?: Maybe<Scalars['Date']['output']>;
  start?: Maybe<Scalars['Date']['output']>;
};

export type Query = {
  __typename?: 'Query';
  departmentByCOD?: Maybe<Department>;
  departmentByDES?: Maybe<Department>;
  departmentById?: Maybe<Department>;
  departments?: Maybe<Array<Maybe<Department>>>;
  services?: Maybe<Array<Maybe<Service>>>;
  specialties?: Maybe<Array<Maybe<Specialty>>>;
  units?: Maybe<Array<Maybe<Unit>>>;
};


export type QueryDepartmentByCodArgs = {
  cod: Scalars['Int']['input'];
};


export type QueryDepartmentByDesArgs = {
  des: Scalars['String']['input'];
};


export type QueryDepartmentByIdArgs = {
  id: Scalars['ID']['input'];
};

export type Reference = {
  __typename?: 'Reference';
  display?: Maybe<Scalars['String']['output']>;
  identifier?: Maybe<Identifier>;
  reference?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type Service = {
  __typename?: 'Service';
  AGREGA1?: Maybe<Scalars['String']['output']>;
  AGREGA2?: Maybe<Scalars['String']['output']>;
  AGREGA3?: Maybe<Scalars['String']['output']>;
  CHILDREN?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  COD_DEPARTAMENTO?: Maybe<Scalars['Int']['output']>;
  COD_ESTATISTICO?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  COD_SERVICO?: Maybe<Scalars['Int']['output']>;
  CR?: Maybe<Scalars['String']['output']>;
  DES_DEPARTAMENTO?: Maybe<Scalars['String']['output']>;
  DES_SERVICO?: Maybe<Scalars['String']['output']>;
  ID_CP?: Maybe<Scalars['String']['output']>;
  UH?: Maybe<Scalars['String']['output']>;
  VIG_FIM?: Maybe<Scalars['Date']['output']>;
  VIG_INI?: Maybe<Scalars['Date']['output']>;
  _id: Scalars['ID']['output'];
  active?: Maybe<Scalars['Boolean']['output']>;
  alias?: Maybe<Scalars['String']['output']>;
  contact?: Maybe<ExtendedContactDetail>;
  description?: Maybe<Scalars['String']['output']>;
  endpoint?: Maybe<Reference>;
  identifier?: Maybe<Identifier>;
  name?: Maybe<Scalars['String']['output']>;
  partOf?: Maybe<Reference>;
  type?: Maybe<CodeableConcept>;
};

export type Specialty = {
  __typename?: 'Specialty';
  AGREGA1?: Maybe<Scalars['String']['output']>;
  AGREGA2?: Maybe<Scalars['String']['output']>;
  AGREGA3?: Maybe<Scalars['String']['output']>;
  COD_DEPARTAMENTO?: Maybe<Scalars['Int']['output']>;
  COD_ESTATISTICO?: Maybe<Scalars['String']['output']>;
  COD_SERVICO?: Maybe<Scalars['Int']['output']>;
  COD_UNIDADE?: Maybe<Scalars['Int']['output']>;
  CR?: Maybe<Scalars['String']['output']>;
  DES_DEPARTAMENTO?: Maybe<Scalars['String']['output']>;
  DES_ESTATISTICO?: Maybe<Scalars['String']['output']>;
  DES_SERVICO?: Maybe<Scalars['String']['output']>;
  DES_UNIDADE?: Maybe<Scalars['String']['output']>;
  ID_CP?: Maybe<Scalars['String']['output']>;
  UH?: Maybe<Scalars['String']['output']>;
  VIG_FIM?: Maybe<Scalars['Date']['output']>;
  VIG_INI?: Maybe<Scalars['Date']['output']>;
  _id: Scalars['ID']['output'];
  active?: Maybe<Scalars['Boolean']['output']>;
  alias?: Maybe<Scalars['String']['output']>;
  contact?: Maybe<ExtendedContactDetail>;
  description?: Maybe<Scalars['String']['output']>;
  endpoint?: Maybe<Reference>;
  identifier?: Maybe<Identifier>;
  name?: Maybe<Scalars['String']['output']>;
  partOf?: Maybe<Reference>;
  type?: Maybe<CodeableConcept>;
};

export type Unit = {
  __typename?: 'Unit';
  AGREGA1?: Maybe<Scalars['String']['output']>;
  AGREGA2?: Maybe<Scalars['String']['output']>;
  AGREGA3?: Maybe<Scalars['String']['output']>;
  COD_DEPARTAMENTO?: Maybe<Scalars['Int']['output']>;
  COD_ESTATISTICO?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  COD_SERVICO?: Maybe<Scalars['Int']['output']>;
  COD_UNIDADE?: Maybe<Scalars['Int']['output']>;
  CR?: Maybe<Scalars['String']['output']>;
  DES_DEPARTAMENTO?: Maybe<Scalars['String']['output']>;
  DES_SERVICO?: Maybe<Scalars['String']['output']>;
  DES_UNIDADE?: Maybe<Scalars['String']['output']>;
  ID_CP?: Maybe<Scalars['String']['output']>;
  UH?: Maybe<Scalars['String']['output']>;
  VIG_FIM?: Maybe<Scalars['Date']['output']>;
  VIG_INI?: Maybe<Scalars['Date']['output']>;
  _id: Scalars['ID']['output'];
  active?: Maybe<Scalars['Boolean']['output']>;
  alias?: Maybe<Scalars['String']['output']>;
  contact?: Maybe<ExtendedContactDetail>;
  description?: Maybe<Scalars['String']['output']>;
  endpoint?: Maybe<Reference>;
  identifier?: Maybe<Identifier>;
  name?: Maybe<Scalars['String']['output']>;
  partOf?: Maybe<Reference>;
  type?: Maybe<CodeableConcept>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Address: ResolverTypeWrapper<Address>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  CodeableConcept: ResolverTypeWrapper<CodeableConcept>;
  Coding: ResolverTypeWrapper<Coding>;
  ContactPoint: ResolverTypeWrapper<ContactPoint>;
  Date: ResolverTypeWrapper<Scalars['Date']['output']>;
  Department: ResolverTypeWrapper<Department>;
  ExtendedContactDetail: ResolverTypeWrapper<ExtendedContactDetail>;
  HumanName: ResolverTypeWrapper<HumanName>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Identifier: ResolverTypeWrapper<Identifier>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Period: ResolverTypeWrapper<Period>;
  Query: ResolverTypeWrapper<{}>;
  Reference: ResolverTypeWrapper<Reference>;
  Service: ResolverTypeWrapper<Service>;
  Specialty: ResolverTypeWrapper<Specialty>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Unit: ResolverTypeWrapper<Unit>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Address: Address;
  Boolean: Scalars['Boolean']['output'];
  CodeableConcept: CodeableConcept;
  Coding: Coding;
  ContactPoint: ContactPoint;
  Date: Scalars['Date']['output'];
  Department: Department;
  ExtendedContactDetail: ExtendedContactDetail;
  HumanName: HumanName;
  ID: Scalars['ID']['output'];
  Identifier: Identifier;
  Int: Scalars['Int']['output'];
  Period: Period;
  Query: {};
  Reference: Reference;
  Service: Service;
  Specialty: Specialty;
  String: Scalars['String']['output'];
  Unit: Unit;
}>;

export type AddressResolvers<ContextType = any, ParentType extends ResolversParentTypes['Address'] = ResolversParentTypes['Address']> = ResolversObject<{
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  district?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  line?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  period?: Resolver<Maybe<ResolversTypes['Period']>, ParentType, ContextType>;
  postalCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  use?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CodeableConceptResolvers<ContextType = any, ParentType extends ResolversParentTypes['CodeableConcept'] = ResolversParentTypes['CodeableConcept']> = ResolversObject<{
  coding?: Resolver<Maybe<ResolversTypes['Coding']>, ParentType, ContextType>;
  text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CodingResolvers<ContextType = any, ParentType extends ResolversParentTypes['Coding'] = ResolversParentTypes['Coding']> = ResolversObject<{
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  display?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  system?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ContactPointResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContactPoint'] = ResolversParentTypes['ContactPoint']> = ResolversObject<{
  period?: Resolver<Maybe<ResolversTypes['Period']>, ParentType, ContextType>;
  rank?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  system?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  use?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type DepartmentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Department'] = ResolversParentTypes['Department']> = ResolversObject<{
  AGREGA1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  AGREGA2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  AGREGA3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  CHILDREN?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  COD_DEPARTAMENTO?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  COD_ESTATISTICO?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  CR?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  DES_DEPARTAMENTO?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ID_CP?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  UH?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  VIG_FIM?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  VIG_INI?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  active?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  alias?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contact?: Resolver<Maybe<ResolversTypes['ExtendedContactDetail']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  endpoint?: Resolver<Maybe<ResolversTypes['Reference']>, ParentType, ContextType>;
  identifier?: Resolver<Maybe<ResolversTypes['Identifier']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  partOf?: Resolver<Maybe<ResolversTypes['Reference']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['CodeableConcept']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ExtendedContactDetailResolvers<ContextType = any, ParentType extends ResolversParentTypes['ExtendedContactDetail'] = ResolversParentTypes['ExtendedContactDetail']> = ResolversObject<{
  address?: Resolver<Maybe<Array<Maybe<ResolversTypes['Address']>>>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['HumanName']>, ParentType, ContextType>;
  organization?: Resolver<Maybe<ResolversTypes['Reference']>, ParentType, ContextType>;
  period?: Resolver<Maybe<ResolversTypes['Period']>, ParentType, ContextType>;
  purpose?: Resolver<Maybe<ResolversTypes['CodeableConcept']>, ParentType, ContextType>;
  telecom?: Resolver<Maybe<Array<Maybe<ResolversTypes['ContactPoint']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type HumanNameResolvers<ContextType = any, ParentType extends ResolversParentTypes['HumanName'] = ResolversParentTypes['HumanName']> = ResolversObject<{
  family?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  given?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  period?: Resolver<Maybe<ResolversTypes['Period']>, ParentType, ContextType>;
  prefix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  suffix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  use?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IdentifierResolvers<ContextType = any, ParentType extends ResolversParentTypes['Identifier'] = ResolversParentTypes['Identifier']> = ResolversObject<{
  assigner?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  period?: Resolver<Maybe<ResolversTypes['Period']>, ParentType, ContextType>;
  system?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['CodeableConcept']>, ParentType, ContextType>;
  use?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PeriodResolvers<ContextType = any, ParentType extends ResolversParentTypes['Period'] = ResolversParentTypes['Period']> = ResolversObject<{
  end?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  start?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  departmentByCOD?: Resolver<Maybe<ResolversTypes['Department']>, ParentType, ContextType, RequireFields<QueryDepartmentByCodArgs, 'cod'>>;
  departmentByDES?: Resolver<Maybe<ResolversTypes['Department']>, ParentType, ContextType, RequireFields<QueryDepartmentByDesArgs, 'des'>>;
  departmentById?: Resolver<Maybe<ResolversTypes['Department']>, ParentType, ContextType, RequireFields<QueryDepartmentByIdArgs, 'id'>>;
  departments?: Resolver<Maybe<Array<Maybe<ResolversTypes['Department']>>>, ParentType, ContextType>;
  services?: Resolver<Maybe<Array<Maybe<ResolversTypes['Service']>>>, ParentType, ContextType>;
  specialties?: Resolver<Maybe<Array<Maybe<ResolversTypes['Specialty']>>>, ParentType, ContextType>;
  units?: Resolver<Maybe<Array<Maybe<ResolversTypes['Unit']>>>, ParentType, ContextType>;
}>;

export type ReferenceResolvers<ContextType = any, ParentType extends ResolversParentTypes['Reference'] = ResolversParentTypes['Reference']> = ResolversObject<{
  display?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  identifier?: Resolver<Maybe<ResolversTypes['Identifier']>, ParentType, ContextType>;
  reference?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ServiceResolvers<ContextType = any, ParentType extends ResolversParentTypes['Service'] = ResolversParentTypes['Service']> = ResolversObject<{
  AGREGA1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  AGREGA2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  AGREGA3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  CHILDREN?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  COD_DEPARTAMENTO?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  COD_ESTATISTICO?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  COD_SERVICO?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  CR?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  DES_DEPARTAMENTO?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  DES_SERVICO?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ID_CP?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  UH?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  VIG_FIM?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  VIG_INI?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  active?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  alias?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contact?: Resolver<Maybe<ResolversTypes['ExtendedContactDetail']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  endpoint?: Resolver<Maybe<ResolversTypes['Reference']>, ParentType, ContextType>;
  identifier?: Resolver<Maybe<ResolversTypes['Identifier']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  partOf?: Resolver<Maybe<ResolversTypes['Reference']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['CodeableConcept']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SpecialtyResolvers<ContextType = any, ParentType extends ResolversParentTypes['Specialty'] = ResolversParentTypes['Specialty']> = ResolversObject<{
  AGREGA1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  AGREGA2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  AGREGA3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  COD_DEPARTAMENTO?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  COD_ESTATISTICO?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  COD_SERVICO?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  COD_UNIDADE?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  CR?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  DES_DEPARTAMENTO?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  DES_ESTATISTICO?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  DES_SERVICO?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  DES_UNIDADE?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ID_CP?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  UH?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  VIG_FIM?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  VIG_INI?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  active?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  alias?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contact?: Resolver<Maybe<ResolversTypes['ExtendedContactDetail']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  endpoint?: Resolver<Maybe<ResolversTypes['Reference']>, ParentType, ContextType>;
  identifier?: Resolver<Maybe<ResolversTypes['Identifier']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  partOf?: Resolver<Maybe<ResolversTypes['Reference']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['CodeableConcept']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UnitResolvers<ContextType = any, ParentType extends ResolversParentTypes['Unit'] = ResolversParentTypes['Unit']> = ResolversObject<{
  AGREGA1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  AGREGA2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  AGREGA3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  COD_DEPARTAMENTO?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  COD_ESTATISTICO?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  COD_SERVICO?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  COD_UNIDADE?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  CR?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  DES_DEPARTAMENTO?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  DES_SERVICO?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  DES_UNIDADE?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ID_CP?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  UH?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  VIG_FIM?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  VIG_INI?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  active?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  alias?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contact?: Resolver<Maybe<ResolversTypes['ExtendedContactDetail']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  endpoint?: Resolver<Maybe<ResolversTypes['Reference']>, ParentType, ContextType>;
  identifier?: Resolver<Maybe<ResolversTypes['Identifier']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  partOf?: Resolver<Maybe<ResolversTypes['Reference']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['CodeableConcept']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  Address?: AddressResolvers<ContextType>;
  CodeableConcept?: CodeableConceptResolvers<ContextType>;
  Coding?: CodingResolvers<ContextType>;
  ContactPoint?: ContactPointResolvers<ContextType>;
  Date?: GraphQLScalarType;
  Department?: DepartmentResolvers<ContextType>;
  ExtendedContactDetail?: ExtendedContactDetailResolvers<ContextType>;
  HumanName?: HumanNameResolvers<ContextType>;
  Identifier?: IdentifierResolvers<ContextType>;
  Period?: PeriodResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Reference?: ReferenceResolvers<ContextType>;
  Service?: ServiceResolvers<ContextType>;
  Specialty?: SpecialtyResolvers<ContextType>;
  Unit?: UnitResolvers<ContextType>;
}>;

