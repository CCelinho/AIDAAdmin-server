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
  _id?: Maybe<Scalars['ObjectId']['output']>;
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

export type Organization = {
  AGREGA1?: Maybe<Scalars['String']['output']>;
  AGREGA2?: Maybe<Scalars['String']['output']>;
  AGREGA3?: Maybe<Scalars['String']['output']>;
  COD_DEPARTAMENTO?: Maybe<Scalars['Int']['output']>;
  CR?: Maybe<Scalars['String']['output']>;
  DES_DEPARTAMENTO?: Maybe<Scalars['String']['output']>;
  ID_CP?: Maybe<Scalars['String']['output']>;
  UH?: Maybe<Scalars['String']['output']>;
  VIG_FIM?: Maybe<Scalars['Date']['output']>;
  VIG_INI?: Maybe<Scalars['Date']['output']>;
  _id?: Maybe<Scalars['ObjectId']['output']>;
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
  departments?: Maybe<Array<Department>>;
  organizations?: Maybe<Array<Organization>>;
  services?: Maybe<Array<Service>>;
  servicesByDep?: Maybe<Array<Service>>;
  specialties?: Maybe<Array<Specialty>>;
  units?: Maybe<Array<Unit>>;
};


export type QueryDepartmentByCodArgs = {
  cod?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryDepartmentByDesArgs = {
  des: Scalars['String']['input'];
};


export type QueryDepartmentByIdArgs = {
  id?: InputMaybe<Scalars['ObjectId']['input']>;
};


export type QueryDepartmentsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryOrganizationsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryServicesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryServicesByDepArgs = {
  cod?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerySpecialtiesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
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

export type Service = Organization & {
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
  _id?: Maybe<Scalars['ObjectId']['output']>;
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

export type Specialty = Organization & {
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
  _id?: Maybe<Scalars['ObjectId']['output']>;
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

export type Unit = Organization & {
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
  _id?: Maybe<Scalars['ObjectId']['output']>;
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


/** Mapping of interface types */
export type ResolversInterfaceTypes<RefType extends Record<string, unknown>> = {
  Organization: ( Department ) | ( Service ) | ( Specialty ) | ( Unit );
};

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Address: ResolverTypeWrapper<Address>;
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
  Organization: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['Organization']>;
  Period: ResolverTypeWrapper<Period>;
  Query: ResolverTypeWrapper<{}>;
  Reference: ResolverTypeWrapper<Reference>;
  Service: ResolverTypeWrapper<Service>;
  Specialty: ResolverTypeWrapper<Specialty>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Unit: ResolverTypeWrapper<Unit>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Address: Address;
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
  Organization: ResolversInterfaceTypes<ResolversParentTypes>['Organization'];
  Period: Period;
  Query: {};
  Reference: Reference;
  Service: Service;
  Specialty: Specialty;
  String: Scalars['String']['output'];
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
  _id?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
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

export type OrganizationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Organization'] = ResolversParentTypes['Organization']> = {
  __resolveType: TypeResolveFn<'Department' | 'Service' | 'Specialty' | 'Unit', ParentType, ContextType>;
  AGREGA1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  AGREGA2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  AGREGA3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  COD_DEPARTAMENTO?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  CR?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  DES_DEPARTAMENTO?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ID_CP?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  UH?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  VIG_FIM?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  VIG_INI?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  _id?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  active?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  alias?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contact?: Resolver<Maybe<ResolversTypes['ExtendedContactDetail']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  endpoint?: Resolver<Maybe<ResolversTypes['Reference']>, ParentType, ContextType>;
  identifier?: Resolver<Maybe<ResolversTypes['Identifier']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  partOf?: Resolver<Maybe<ResolversTypes['Reference']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['CodeableConcept']>, ParentType, ContextType>;
};

export type PeriodResolvers<ContextType = any, ParentType extends ResolversParentTypes['Period'] = ResolversParentTypes['Period']> = {
  end?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  start?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  departmentByCOD?: Resolver<Maybe<ResolversTypes['Department']>, ParentType, ContextType, Partial<QueryDepartmentByCodArgs>>;
  departmentByDES?: Resolver<Maybe<ResolversTypes['Department']>, ParentType, ContextType, RequireFields<QueryDepartmentByDesArgs, 'des'>>;
  departmentById?: Resolver<Maybe<ResolversTypes['Department']>, ParentType, ContextType, Partial<QueryDepartmentByIdArgs>>;
  departments?: Resolver<Maybe<Array<ResolversTypes['Department']>>, ParentType, ContextType, Partial<QueryDepartmentsArgs>>;
  organizations?: Resolver<Maybe<Array<ResolversTypes['Organization']>>, ParentType, ContextType, Partial<QueryOrganizationsArgs>>;
  services?: Resolver<Maybe<Array<ResolversTypes['Service']>>, ParentType, ContextType, Partial<QueryServicesArgs>>;
  servicesByDep?: Resolver<Maybe<Array<ResolversTypes['Service']>>, ParentType, ContextType, Partial<QueryServicesByDepArgs>>;
  specialties?: Resolver<Maybe<Array<ResolversTypes['Specialty']>>, ParentType, ContextType, Partial<QuerySpecialtiesArgs>>;
  units?: Resolver<Maybe<Array<ResolversTypes['Unit']>>, ParentType, ContextType, Partial<QueryUnitsArgs>>;
};

export type ReferenceResolvers<ContextType = any, ParentType extends ResolversParentTypes['Reference'] = ResolversParentTypes['Reference']> = {
  display?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  identifier?: Resolver<Maybe<ResolversTypes['Identifier']>, ParentType, ContextType>;
  reference?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ServiceResolvers<ContextType = any, ParentType extends ResolversParentTypes['Service'] = ResolversParentTypes['Service']> = {
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
  _id?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
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
};

export type SpecialtyResolvers<ContextType = any, ParentType extends ResolversParentTypes['Specialty'] = ResolversParentTypes['Specialty']> = {
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
  _id?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
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
};

export type UnitResolvers<ContextType = any, ParentType extends ResolversParentTypes['Unit'] = ResolversParentTypes['Unit']> = {
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
  _id?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
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
};

export type Resolvers<ContextType = any> = {
  Address?: AddressResolvers<ContextType>;
  CodeableConcept?: CodeableConceptResolvers<ContextType>;
  Coding?: CodingResolvers<ContextType>;
  ContactPoint?: ContactPointResolvers<ContextType>;
  Date?: GraphQLScalarType;
  Department?: DepartmentResolvers<ContextType>;
  ExtendedContactDetail?: ExtendedContactDetailResolvers<ContextType>;
  HumanName?: HumanNameResolvers<ContextType>;
  Identifier?: IdentifierResolvers<ContextType>;
  ObjectId?: GraphQLScalarType;
  Organization?: OrganizationResolvers<ContextType>;
  Period?: PeriodResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Reference?: ReferenceResolvers<ContextType>;
  Service?: ServiceResolvers<ContextType>;
  Specialty?: SpecialtyResolvers<ContextType>;
  Unit?: UnitResolvers<ContextType>;
};

export type DirectiveResolvers<ContextType = any> = {
  cacheControl?: CacheControlDirectiveResolver<any, any, ContextType>;
};
