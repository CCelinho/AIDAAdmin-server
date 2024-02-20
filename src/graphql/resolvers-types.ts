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
  Date: { input: any; output: any; }
  ObjectId: { input: any; output: any; }
  UUID: { input: any; output: any; }
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

export type AnyOrg = Department | Service | Specialty | Uh | Unit;

export type Base = Organization & {
  __typename?: 'Base';
  CR?: Maybe<Scalars['String']['output']>;
  ID_CP?: Maybe<Scalars['String']['output']>;
  VIG_FIM?: Maybe<Scalars['Date']['output']>;
  VIG_INI?: Maybe<Scalars['Date']['output']>;
  _id?: Maybe<Scalars['ObjectId']['output']>;
  active?: Maybe<Scalars['Boolean']['output']>;
  alias?: Maybe<Scalars['String']['output']>;
  contact?: Maybe<ExtendedContactDetail>;
  description?: Maybe<Scalars['String']['output']>;
  endpoint?: Maybe<Reference>;
  errorflag?: Maybe<Scalars['Boolean']['output']>;
  identifier?: Maybe<Identifier>;
  name?: Maybe<Scalars['String']['output']>;
  partOf?: Maybe<Reference>;
  type?: Maybe<CodeableConcept>;
  uuid?: Maybe<Scalars['UUID']['output']>;
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

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

export type Department = Organization & {
  __typename?: 'Department';
  COD_DEPARTAMENTO?: Maybe<Scalars['Int']['output']>;
  COD_ESTATISTICO?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  CR?: Maybe<Scalars['String']['output']>;
  DES_DEPARTAMENTO?: Maybe<Scalars['String']['output']>;
  ID_CP?: Maybe<Scalars['String']['output']>;
  VIG_FIM?: Maybe<Scalars['Date']['output']>;
  VIG_INI?: Maybe<Scalars['Date']['output']>;
  _id?: Maybe<Scalars['ObjectId']['output']>;
  active?: Maybe<Scalars['Boolean']['output']>;
  alias?: Maybe<Scalars['String']['output']>;
  children?: Maybe<Array<Maybe<Service>>>;
  contact?: Maybe<ExtendedContactDetail>;
  description?: Maybe<Scalars['String']['output']>;
  endpoint?: Maybe<Reference>;
  errorflag?: Maybe<Scalars['Boolean']['output']>;
  identifier?: Maybe<Identifier>;
  name?: Maybe<Scalars['String']['output']>;
  parents?: Maybe<Array<Uh>>;
  partOf?: Maybe<Reference>;
  type?: Maybe<CodeableConcept>;
  uuid?: Maybe<Scalars['UUID']['output']>;
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

export type OrgSet = {
  __typename?: 'OrgSet';
  departments?: Maybe<Array<Department>>;
  services?: Maybe<Array<Service>>;
  specialties?: Maybe<Array<Specialty>>;
  uhs?: Maybe<Array<Uh>>;
  units?: Maybe<Array<Unit>>;
};

export type Organization = {
  CR?: Maybe<Scalars['String']['output']>;
  ID_CP?: Maybe<Scalars['String']['output']>;
  VIG_FIM?: Maybe<Scalars['Date']['output']>;
  VIG_INI?: Maybe<Scalars['Date']['output']>;
  _id?: Maybe<Scalars['ObjectId']['output']>;
  active?: Maybe<Scalars['Boolean']['output']>;
  alias?: Maybe<Scalars['String']['output']>;
  contact?: Maybe<ExtendedContactDetail>;
  description?: Maybe<Scalars['String']['output']>;
  endpoint?: Maybe<Reference>;
  errorflag?: Maybe<Scalars['Boolean']['output']>;
  identifier?: Maybe<Identifier>;
  name?: Maybe<Scalars['String']['output']>;
  partOf?: Maybe<Reference>;
  type?: Maybe<CodeableConcept>;
  uuid?: Maybe<Scalars['UUID']['output']>;
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
  departmentById: Department;
  departmentSearch?: Maybe<Array<Department>>;
  departments?: Maybe<Array<Department>>;
  everythingByServ: RelationshipLine;
  everythingBySpec: RelationshipLine;
  everythingByUnit: RelationshipLine;
  orgs?: Maybe<Array<AnyOrg>>;
  serviceById: Service;
  services?: Maybe<Array<Service>>;
  specialties?: Maybe<Array<Specialty>>;
  specialtyById: Specialty;
  textSearch: OrgSet;
  uhById: Uh;
  uhs?: Maybe<Array<Uh>>;
  unitById: Unit;
  units?: Maybe<Array<Unit>>;
};


export type QueryDepartmentByCodArgs = {
  cod: Scalars['Int']['input'];
};


export type QueryDepartmentByDesArgs = {
  des: Scalars['String']['input'];
};


export type QueryDepartmentByIdArgs = {
  id: Scalars['ObjectId']['input'];
};


export type QueryDepartmentSearchArgs = {
  searchString: Scalars['String']['input'];
};


export type QueryDepartmentsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryEverythingByServArgs = {
  servId: Scalars['ObjectId']['input'];
};


export type QueryEverythingBySpecArgs = {
  specId: Scalars['ObjectId']['input'];
};


export type QueryEverythingByUnitArgs = {
  unitId: Scalars['ObjectId']['input'];
};


export type QueryOrgsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryServiceByIdArgs = {
  id: Scalars['ObjectId']['input'];
};


export type QueryServicesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerySpecialtiesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerySpecialtyByIdArgs = {
  id: Scalars['ObjectId']['input'];
};


export type QueryTextSearchArgs = {
  searchString: Scalars['String']['input'];
};


export type QueryUhByIdArgs = {
  id: Scalars['ObjectId']['input'];
};


export type QueryUhsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryUnitByIdArgs = {
  id: Scalars['ObjectId']['input'];
};


export type QueryUnitsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type Reference = {
  __typename?: 'Reference';
  display?: Maybe<Scalars['String']['output']>;
  identifier?: Maybe<Identifier>;
  reference?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type RelationshipLine = {
  __typename?: 'RelationshipLine';
  department?: Maybe<Department>;
  service?: Maybe<Service>;
  specialty?: Maybe<Specialty>;
  uh?: Maybe<Uh>;
  unit?: Maybe<Unit>;
};

export type Service = Organization & {
  __typename?: 'Service';
  COD_ESTATISTICO?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  COD_SERVICO?: Maybe<Scalars['Int']['output']>;
  CR?: Maybe<Scalars['String']['output']>;
  DES_SERVICO?: Maybe<Scalars['String']['output']>;
  ID_CP?: Maybe<Scalars['String']['output']>;
  VIG_FIM?: Maybe<Scalars['Date']['output']>;
  VIG_INI?: Maybe<Scalars['Date']['output']>;
  _id?: Maybe<Scalars['ObjectId']['output']>;
  active?: Maybe<Scalars['Boolean']['output']>;
  alias?: Maybe<Scalars['String']['output']>;
  children?: Maybe<Array<Maybe<Unit>>>;
  contact?: Maybe<ExtendedContactDetail>;
  description?: Maybe<Scalars['String']['output']>;
  endpoint?: Maybe<Reference>;
  errorflag?: Maybe<Scalars['Boolean']['output']>;
  identifier?: Maybe<Identifier>;
  name?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<Department>;
  partOf?: Maybe<Reference>;
  type?: Maybe<CodeableConcept>;
  uuid?: Maybe<Scalars['UUID']['output']>;
};

export type Specialty = Organization & {
  __typename?: 'Specialty';
  AGREGA1?: Maybe<Scalars['String']['output']>;
  AGREGA2?: Maybe<Scalars['String']['output']>;
  AGREGA3?: Maybe<Scalars['String']['output']>;
  COD_ESTATISTICO?: Maybe<Scalars['String']['output']>;
  CR?: Maybe<Scalars['String']['output']>;
  DES_ESTATISTICO?: Maybe<Scalars['String']['output']>;
  ID_CP?: Maybe<Scalars['String']['output']>;
  VIG_FIM?: Maybe<Scalars['Date']['output']>;
  VIG_INI?: Maybe<Scalars['Date']['output']>;
  _id?: Maybe<Scalars['ObjectId']['output']>;
  active?: Maybe<Scalars['Boolean']['output']>;
  alias?: Maybe<Scalars['String']['output']>;
  contact?: Maybe<ExtendedContactDetail>;
  description?: Maybe<Scalars['String']['output']>;
  endpoint?: Maybe<Reference>;
  errorflag?: Maybe<Scalars['Boolean']['output']>;
  identifier?: Maybe<Identifier>;
  name?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<Unit>;
  partOf?: Maybe<Reference>;
  type?: Maybe<CodeableConcept>;
  uuid?: Maybe<Scalars['UUID']['output']>;
};

export type Uh = Organization & {
  __typename?: 'UH';
  COD_ESTATISTICO?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  CR?: Maybe<Scalars['String']['output']>;
  ID_CP?: Maybe<Scalars['String']['output']>;
  UH?: Maybe<Scalars['String']['output']>;
  VIG_FIM?: Maybe<Scalars['Date']['output']>;
  VIG_INI?: Maybe<Scalars['Date']['output']>;
  _id?: Maybe<Scalars['ObjectId']['output']>;
  active?: Maybe<Scalars['Boolean']['output']>;
  alias?: Maybe<Scalars['String']['output']>;
  children?: Maybe<Array<Maybe<Department>>>;
  contact?: Maybe<ExtendedContactDetail>;
  description?: Maybe<Scalars['String']['output']>;
  endpoint?: Maybe<Reference>;
  errorflag?: Maybe<Scalars['Boolean']['output']>;
  identifier?: Maybe<Identifier>;
  name?: Maybe<Scalars['String']['output']>;
  partOf?: Maybe<Reference>;
  type?: Maybe<CodeableConcept>;
  uuid?: Maybe<Scalars['UUID']['output']>;
};

export type Unit = Organization & {
  __typename?: 'Unit';
  COD_ESTATISTICO?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  COD_UNIDADE?: Maybe<Scalars['Int']['output']>;
  CR?: Maybe<Scalars['String']['output']>;
  DES_UNIDADE?: Maybe<Scalars['String']['output']>;
  ID_CP?: Maybe<Scalars['String']['output']>;
  VIG_FIM?: Maybe<Scalars['Date']['output']>;
  VIG_INI?: Maybe<Scalars['Date']['output']>;
  _id?: Maybe<Scalars['ObjectId']['output']>;
  active?: Maybe<Scalars['Boolean']['output']>;
  alias?: Maybe<Scalars['String']['output']>;
  children?: Maybe<Array<Maybe<Specialty>>>;
  contact?: Maybe<ExtendedContactDetail>;
  description?: Maybe<Scalars['String']['output']>;
  endpoint?: Maybe<Reference>;
  errorflag?: Maybe<Scalars['Boolean']['output']>;
  identifier?: Maybe<Identifier>;
  name?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<Service>;
  partOf?: Maybe<Reference>;
  type?: Maybe<CodeableConcept>;
  uuid?: Maybe<Scalars['UUID']['output']>;
};



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

/** Mapping of union types */
export type ResolversUnionTypes<RefType extends Record<string, unknown>> = {
  AnyOrg: ( Department ) | ( Service ) | ( Specialty ) | ( Uh ) | ( Unit );
};

/** Mapping of interface types */
export type ResolversInterfaceTypes<RefType extends Record<string, unknown>> = {
  Organization: ( Base ) | ( Department ) | ( Service ) | ( Specialty ) | ( Uh ) | ( Unit );
};

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Address: ResolverTypeWrapper<Address>;
  AnyOrg: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['AnyOrg']>;
  Base: ResolverTypeWrapper<Base>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  CacheControlScope: CacheControlScope;
  CodeableConcept: ResolverTypeWrapper<CodeableConcept>;
  Coding: ResolverTypeWrapper<Coding>;
  ContactPoint: ResolverTypeWrapper<ContactPoint>;
  Date: ResolverTypeWrapper<Scalars['Date']['output']>;
  Department: ResolverTypeWrapper<Department>;
  ExtendedContactDetail: ResolverTypeWrapper<ExtendedContactDetail>;
  HumanName: ResolverTypeWrapper<HumanName>;
  Identifier: ResolverTypeWrapper<Identifier>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  ObjectId: ResolverTypeWrapper<Scalars['ObjectId']['output']>;
  OrgSet: ResolverTypeWrapper<OrgSet>;
  Organization: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['Organization']>;
  Period: ResolverTypeWrapper<Period>;
  Query: ResolverTypeWrapper<{}>;
  Reference: ResolverTypeWrapper<Reference>;
  RelationshipLine: ResolverTypeWrapper<RelationshipLine>;
  Service: ResolverTypeWrapper<Service>;
  Specialty: ResolverTypeWrapper<Specialty>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  UH: ResolverTypeWrapper<Uh>;
  UUID: ResolverTypeWrapper<Scalars['UUID']['output']>;
  Unit: ResolverTypeWrapper<Unit>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Address: Address;
  AnyOrg: ResolversUnionTypes<ResolversParentTypes>['AnyOrg'];
  Base: Base;
  Boolean: Scalars['Boolean']['output'];
  CodeableConcept: CodeableConcept;
  Coding: Coding;
  ContactPoint: ContactPoint;
  Date: Scalars['Date']['output'];
  Department: Department;
  ExtendedContactDetail: ExtendedContactDetail;
  HumanName: HumanName;
  Identifier: Identifier;
  Int: Scalars['Int']['output'];
  ObjectId: Scalars['ObjectId']['output'];
  OrgSet: OrgSet;
  Organization: ResolversInterfaceTypes<ResolversParentTypes>['Organization'];
  Period: Period;
  Query: {};
  Reference: Reference;
  RelationshipLine: RelationshipLine;
  Service: Service;
  Specialty: Specialty;
  String: Scalars['String']['output'];
  UH: Uh;
  UUID: Scalars['UUID']['output'];
  Unit: Unit;
};

export type CacheControlDirectiveArgs = {
  inheritMaxAge?: Maybe<Scalars['Boolean']['input']>;
  maxAge?: Maybe<Scalars['Int']['input']>;
  scope?: Maybe<CacheControlScope>;
};

export type CacheControlDirectiveResolver<Result, Parent, ContextType = any, Args = CacheControlDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AddressResolvers<ContextType = any, ParentType extends ResolversParentTypes['Address'] = ResolversParentTypes['Address']> = {
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
};

export type AnyOrgResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnyOrg'] = ResolversParentTypes['AnyOrg']> = {
  __resolveType: TypeResolveFn<'Department' | 'Service' | 'Specialty' | 'UH' | 'Unit', ParentType, ContextType>;
};

export type BaseResolvers<ContextType = any, ParentType extends ResolversParentTypes['Base'] = ResolversParentTypes['Base']> = {
  CR?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ID_CP?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  VIG_FIM?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  VIG_INI?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  _id?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  active?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  alias?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contact?: Resolver<Maybe<ResolversTypes['ExtendedContactDetail']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  endpoint?: Resolver<Maybe<ResolversTypes['Reference']>, ParentType, ContextType>;
  errorflag?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  identifier?: Resolver<Maybe<ResolversTypes['Identifier']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  partOf?: Resolver<Maybe<ResolversTypes['Reference']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['CodeableConcept']>, ParentType, ContextType>;
  uuid?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CodeableConceptResolvers<ContextType = any, ParentType extends ResolversParentTypes['CodeableConcept'] = ResolversParentTypes['CodeableConcept']> = {
  coding?: Resolver<Maybe<ResolversTypes['Coding']>, ParentType, ContextType>;
  text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CodingResolvers<ContextType = any, ParentType extends ResolversParentTypes['Coding'] = ResolversParentTypes['Coding']> = {
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  display?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  system?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContactPointResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContactPoint'] = ResolversParentTypes['ContactPoint']> = {
  period?: Resolver<Maybe<ResolversTypes['Period']>, ParentType, ContextType>;
  rank?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  system?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  use?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type DepartmentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Department'] = ResolversParentTypes['Department']> = {
  COD_DEPARTAMENTO?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  COD_ESTATISTICO?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  CR?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  DES_DEPARTAMENTO?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ID_CP?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  VIG_FIM?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  VIG_INI?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  _id?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  active?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  alias?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  children?: Resolver<Maybe<Array<Maybe<ResolversTypes['Service']>>>, ParentType, ContextType>;
  contact?: Resolver<Maybe<ResolversTypes['ExtendedContactDetail']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  endpoint?: Resolver<Maybe<ResolversTypes['Reference']>, ParentType, ContextType>;
  errorflag?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  identifier?: Resolver<Maybe<ResolversTypes['Identifier']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  parents?: Resolver<Maybe<Array<ResolversTypes['UH']>>, ParentType, ContextType>;
  partOf?: Resolver<Maybe<ResolversTypes['Reference']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['CodeableConcept']>, ParentType, ContextType>;
  uuid?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ExtendedContactDetailResolvers<ContextType = any, ParentType extends ResolversParentTypes['ExtendedContactDetail'] = ResolversParentTypes['ExtendedContactDetail']> = {
  address?: Resolver<Maybe<Array<Maybe<ResolversTypes['Address']>>>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['HumanName']>, ParentType, ContextType>;
  organization?: Resolver<Maybe<ResolversTypes['Reference']>, ParentType, ContextType>;
  period?: Resolver<Maybe<ResolversTypes['Period']>, ParentType, ContextType>;
  purpose?: Resolver<Maybe<ResolversTypes['CodeableConcept']>, ParentType, ContextType>;
  telecom?: Resolver<Maybe<Array<Maybe<ResolversTypes['ContactPoint']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HumanNameResolvers<ContextType = any, ParentType extends ResolversParentTypes['HumanName'] = ResolversParentTypes['HumanName']> = {
  family?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  given?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  period?: Resolver<Maybe<ResolversTypes['Period']>, ParentType, ContextType>;
  prefix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  suffix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  use?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IdentifierResolvers<ContextType = any, ParentType extends ResolversParentTypes['Identifier'] = ResolversParentTypes['Identifier']> = {
  assigner?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  period?: Resolver<Maybe<ResolversTypes['Period']>, ParentType, ContextType>;
  system?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['CodeableConcept']>, ParentType, ContextType>;
  use?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface ObjectIdScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['ObjectId'], any> {
  name: 'ObjectId';
}

export type OrgSetResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrgSet'] = ResolversParentTypes['OrgSet']> = {
  departments?: Resolver<Maybe<Array<ResolversTypes['Department']>>, ParentType, ContextType>;
  services?: Resolver<Maybe<Array<ResolversTypes['Service']>>, ParentType, ContextType>;
  specialties?: Resolver<Maybe<Array<ResolversTypes['Specialty']>>, ParentType, ContextType>;
  uhs?: Resolver<Maybe<Array<ResolversTypes['UH']>>, ParentType, ContextType>;
  units?: Resolver<Maybe<Array<ResolversTypes['Unit']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrganizationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Organization'] = ResolversParentTypes['Organization']> = {
  __resolveType: TypeResolveFn<'Base' | 'Department' | 'Service' | 'Specialty' | 'UH' | 'Unit', ParentType, ContextType>;
  CR?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ID_CP?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  VIG_FIM?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  VIG_INI?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  _id?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  active?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  alias?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contact?: Resolver<Maybe<ResolversTypes['ExtendedContactDetail']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  endpoint?: Resolver<Maybe<ResolversTypes['Reference']>, ParentType, ContextType>;
  errorflag?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  identifier?: Resolver<Maybe<ResolversTypes['Identifier']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  partOf?: Resolver<Maybe<ResolversTypes['Reference']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['CodeableConcept']>, ParentType, ContextType>;
  uuid?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
};

export type PeriodResolvers<ContextType = any, ParentType extends ResolversParentTypes['Period'] = ResolversParentTypes['Period']> = {
  end?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  start?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  departmentByCOD?: Resolver<Maybe<ResolversTypes['Department']>, ParentType, ContextType, RequireFields<QueryDepartmentByCodArgs, 'cod'>>;
  departmentByDES?: Resolver<Maybe<ResolversTypes['Department']>, ParentType, ContextType, RequireFields<QueryDepartmentByDesArgs, 'des'>>;
  departmentById?: Resolver<ResolversTypes['Department'], ParentType, ContextType, RequireFields<QueryDepartmentByIdArgs, 'id'>>;
  departmentSearch?: Resolver<Maybe<Array<ResolversTypes['Department']>>, ParentType, ContextType, RequireFields<QueryDepartmentSearchArgs, 'searchString'>>;
  departments?: Resolver<Maybe<Array<ResolversTypes['Department']>>, ParentType, ContextType, Partial<QueryDepartmentsArgs>>;
  everythingByServ?: Resolver<ResolversTypes['RelationshipLine'], ParentType, ContextType, RequireFields<QueryEverythingByServArgs, 'servId'>>;
  everythingBySpec?: Resolver<ResolversTypes['RelationshipLine'], ParentType, ContextType, RequireFields<QueryEverythingBySpecArgs, 'specId'>>;
  everythingByUnit?: Resolver<ResolversTypes['RelationshipLine'], ParentType, ContextType, RequireFields<QueryEverythingByUnitArgs, 'unitId'>>;
  orgs?: Resolver<Maybe<Array<ResolversTypes['AnyOrg']>>, ParentType, ContextType, Partial<QueryOrgsArgs>>;
  serviceById?: Resolver<ResolversTypes['Service'], ParentType, ContextType, RequireFields<QueryServiceByIdArgs, 'id'>>;
  services?: Resolver<Maybe<Array<ResolversTypes['Service']>>, ParentType, ContextType, Partial<QueryServicesArgs>>;
  specialties?: Resolver<Maybe<Array<ResolversTypes['Specialty']>>, ParentType, ContextType, Partial<QuerySpecialtiesArgs>>;
  specialtyById?: Resolver<ResolversTypes['Specialty'], ParentType, ContextType, RequireFields<QuerySpecialtyByIdArgs, 'id'>>;
  textSearch?: Resolver<ResolversTypes['OrgSet'], ParentType, ContextType, RequireFields<QueryTextSearchArgs, 'searchString'>>;
  uhById?: Resolver<ResolversTypes['UH'], ParentType, ContextType, RequireFields<QueryUhByIdArgs, 'id'>>;
  uhs?: Resolver<Maybe<Array<ResolversTypes['UH']>>, ParentType, ContextType, Partial<QueryUhsArgs>>;
  unitById?: Resolver<ResolversTypes['Unit'], ParentType, ContextType, RequireFields<QueryUnitByIdArgs, 'id'>>;
  units?: Resolver<Maybe<Array<ResolversTypes['Unit']>>, ParentType, ContextType, Partial<QueryUnitsArgs>>;
};

export type ReferenceResolvers<ContextType = any, ParentType extends ResolversParentTypes['Reference'] = ResolversParentTypes['Reference']> = {
  display?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  identifier?: Resolver<Maybe<ResolversTypes['Identifier']>, ParentType, ContextType>;
  reference?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RelationshipLineResolvers<ContextType = any, ParentType extends ResolversParentTypes['RelationshipLine'] = ResolversParentTypes['RelationshipLine']> = {
  department?: Resolver<Maybe<ResolversTypes['Department']>, ParentType, ContextType>;
  service?: Resolver<Maybe<ResolversTypes['Service']>, ParentType, ContextType>;
  specialty?: Resolver<Maybe<ResolversTypes['Specialty']>, ParentType, ContextType>;
  uh?: Resolver<Maybe<ResolversTypes['UH']>, ParentType, ContextType>;
  unit?: Resolver<Maybe<ResolversTypes['Unit']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ServiceResolvers<ContextType = any, ParentType extends ResolversParentTypes['Service'] = ResolversParentTypes['Service']> = {
  COD_ESTATISTICO?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  COD_SERVICO?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  CR?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  DES_SERVICO?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ID_CP?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  VIG_FIM?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  VIG_INI?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  _id?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  active?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  alias?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  children?: Resolver<Maybe<Array<Maybe<ResolversTypes['Unit']>>>, ParentType, ContextType>;
  contact?: Resolver<Maybe<ResolversTypes['ExtendedContactDetail']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  endpoint?: Resolver<Maybe<ResolversTypes['Reference']>, ParentType, ContextType>;
  errorflag?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  identifier?: Resolver<Maybe<ResolversTypes['Identifier']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['Department']>, ParentType, ContextType>;
  partOf?: Resolver<Maybe<ResolversTypes['Reference']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['CodeableConcept']>, ParentType, ContextType>;
  uuid?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SpecialtyResolvers<ContextType = any, ParentType extends ResolversParentTypes['Specialty'] = ResolversParentTypes['Specialty']> = {
  AGREGA1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  AGREGA2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  AGREGA3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  COD_ESTATISTICO?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  CR?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  DES_ESTATISTICO?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ID_CP?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  VIG_FIM?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  VIG_INI?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  _id?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  active?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  alias?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contact?: Resolver<Maybe<ResolversTypes['ExtendedContactDetail']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  endpoint?: Resolver<Maybe<ResolversTypes['Reference']>, ParentType, ContextType>;
  errorflag?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  identifier?: Resolver<Maybe<ResolversTypes['Identifier']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['Unit']>, ParentType, ContextType>;
  partOf?: Resolver<Maybe<ResolversTypes['Reference']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['CodeableConcept']>, ParentType, ContextType>;
  uuid?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UhResolvers<ContextType = any, ParentType extends ResolversParentTypes['UH'] = ResolversParentTypes['UH']> = {
  COD_ESTATISTICO?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  CR?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ID_CP?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  UH?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  VIG_FIM?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  VIG_INI?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  _id?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  active?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  alias?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  children?: Resolver<Maybe<Array<Maybe<ResolversTypes['Department']>>>, ParentType, ContextType>;
  contact?: Resolver<Maybe<ResolversTypes['ExtendedContactDetail']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  endpoint?: Resolver<Maybe<ResolversTypes['Reference']>, ParentType, ContextType>;
  errorflag?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  identifier?: Resolver<Maybe<ResolversTypes['Identifier']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  partOf?: Resolver<Maybe<ResolversTypes['Reference']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['CodeableConcept']>, ParentType, ContextType>;
  uuid?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface UuidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['UUID'], any> {
  name: 'UUID';
}

export type UnitResolvers<ContextType = any, ParentType extends ResolversParentTypes['Unit'] = ResolversParentTypes['Unit']> = {
  COD_ESTATISTICO?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  COD_UNIDADE?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  CR?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  DES_UNIDADE?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ID_CP?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  VIG_FIM?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  VIG_INI?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  _id?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  active?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  alias?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  children?: Resolver<Maybe<Array<Maybe<ResolversTypes['Specialty']>>>, ParentType, ContextType>;
  contact?: Resolver<Maybe<ResolversTypes['ExtendedContactDetail']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  endpoint?: Resolver<Maybe<ResolversTypes['Reference']>, ParentType, ContextType>;
  errorflag?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  identifier?: Resolver<Maybe<ResolversTypes['Identifier']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['Service']>, ParentType, ContextType>;
  partOf?: Resolver<Maybe<ResolversTypes['Reference']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['CodeableConcept']>, ParentType, ContextType>;
  uuid?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Address?: AddressResolvers<ContextType>;
  AnyOrg?: AnyOrgResolvers<ContextType>;
  Base?: BaseResolvers<ContextType>;
  CodeableConcept?: CodeableConceptResolvers<ContextType>;
  Coding?: CodingResolvers<ContextType>;
  ContactPoint?: ContactPointResolvers<ContextType>;
  Date?: GraphQLScalarType;
  Department?: DepartmentResolvers<ContextType>;
  ExtendedContactDetail?: ExtendedContactDetailResolvers<ContextType>;
  HumanName?: HumanNameResolvers<ContextType>;
  Identifier?: IdentifierResolvers<ContextType>;
  ObjectId?: GraphQLScalarType;
  OrgSet?: OrgSetResolvers<ContextType>;
  Organization?: OrganizationResolvers<ContextType>;
  Period?: PeriodResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Reference?: ReferenceResolvers<ContextType>;
  RelationshipLine?: RelationshipLineResolvers<ContextType>;
  Service?: ServiceResolvers<ContextType>;
  Specialty?: SpecialtyResolvers<ContextType>;
  UH?: UhResolvers<ContextType>;
  UUID?: GraphQLScalarType;
  Unit?: UnitResolvers<ContextType>;
};

export type DirectiveResolvers<ContextType = any> = {
  cacheControl?: CacheControlDirectiveResolver<any, any, ContextType>;
};
