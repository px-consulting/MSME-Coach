
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model BusinessInsight
 * 
 */
export type BusinessInsight = $Result.DefaultSelection<Prisma.$BusinessInsightPayload>
/**
 * Model Assessment
 * 
 */
export type Assessment = $Result.DefaultSelection<Prisma.$AssessmentPayload>
/**
 * Model FundingReadiness
 * 
 */
export type FundingReadiness = $Result.DefaultSelection<Prisma.$FundingReadinessPayload>
/**
 * Model BusinessPlan
 * 
 */
export type BusinessPlan = $Result.DefaultSelection<Prisma.$BusinessPlanPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.businessInsight`: Exposes CRUD operations for the **BusinessInsight** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BusinessInsights
    * const businessInsights = await prisma.businessInsight.findMany()
    * ```
    */
  get businessInsight(): Prisma.BusinessInsightDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.assessment`: Exposes CRUD operations for the **Assessment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Assessments
    * const assessments = await prisma.assessment.findMany()
    * ```
    */
  get assessment(): Prisma.AssessmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fundingReadiness`: Exposes CRUD operations for the **FundingReadiness** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FundingReadinesses
    * const fundingReadinesses = await prisma.fundingReadiness.findMany()
    * ```
    */
  get fundingReadiness(): Prisma.FundingReadinessDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.businessPlan`: Exposes CRUD operations for the **BusinessPlan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BusinessPlans
    * const businessPlans = await prisma.businessPlan.findMany()
    * ```
    */
  get businessPlan(): Prisma.BusinessPlanDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    BusinessInsight: 'BusinessInsight',
    Assessment: 'Assessment',
    FundingReadiness: 'FundingReadiness',
    BusinessPlan: 'BusinessPlan'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "businessInsight" | "assessment" | "fundingReadiness" | "businessPlan"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      BusinessInsight: {
        payload: Prisma.$BusinessInsightPayload<ExtArgs>
        fields: Prisma.BusinessInsightFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BusinessInsightFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessInsightPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BusinessInsightFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessInsightPayload>
          }
          findFirst: {
            args: Prisma.BusinessInsightFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessInsightPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BusinessInsightFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessInsightPayload>
          }
          findMany: {
            args: Prisma.BusinessInsightFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessInsightPayload>[]
          }
          create: {
            args: Prisma.BusinessInsightCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessInsightPayload>
          }
          createMany: {
            args: Prisma.BusinessInsightCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BusinessInsightCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessInsightPayload>[]
          }
          delete: {
            args: Prisma.BusinessInsightDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessInsightPayload>
          }
          update: {
            args: Prisma.BusinessInsightUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessInsightPayload>
          }
          deleteMany: {
            args: Prisma.BusinessInsightDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BusinessInsightUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BusinessInsightUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessInsightPayload>[]
          }
          upsert: {
            args: Prisma.BusinessInsightUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessInsightPayload>
          }
          aggregate: {
            args: Prisma.BusinessInsightAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBusinessInsight>
          }
          groupBy: {
            args: Prisma.BusinessInsightGroupByArgs<ExtArgs>
            result: $Utils.Optional<BusinessInsightGroupByOutputType>[]
          }
          count: {
            args: Prisma.BusinessInsightCountArgs<ExtArgs>
            result: $Utils.Optional<BusinessInsightCountAggregateOutputType> | number
          }
        }
      }
      Assessment: {
        payload: Prisma.$AssessmentPayload<ExtArgs>
        fields: Prisma.AssessmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AssessmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AssessmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload>
          }
          findFirst: {
            args: Prisma.AssessmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AssessmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload>
          }
          findMany: {
            args: Prisma.AssessmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload>[]
          }
          create: {
            args: Prisma.AssessmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload>
          }
          createMany: {
            args: Prisma.AssessmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AssessmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload>[]
          }
          delete: {
            args: Prisma.AssessmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload>
          }
          update: {
            args: Prisma.AssessmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload>
          }
          deleteMany: {
            args: Prisma.AssessmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AssessmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AssessmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload>[]
          }
          upsert: {
            args: Prisma.AssessmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload>
          }
          aggregate: {
            args: Prisma.AssessmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAssessment>
          }
          groupBy: {
            args: Prisma.AssessmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AssessmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AssessmentCountArgs<ExtArgs>
            result: $Utils.Optional<AssessmentCountAggregateOutputType> | number
          }
        }
      }
      FundingReadiness: {
        payload: Prisma.$FundingReadinessPayload<ExtArgs>
        fields: Prisma.FundingReadinessFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FundingReadinessFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundingReadinessPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FundingReadinessFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundingReadinessPayload>
          }
          findFirst: {
            args: Prisma.FundingReadinessFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundingReadinessPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FundingReadinessFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundingReadinessPayload>
          }
          findMany: {
            args: Prisma.FundingReadinessFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundingReadinessPayload>[]
          }
          create: {
            args: Prisma.FundingReadinessCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundingReadinessPayload>
          }
          createMany: {
            args: Prisma.FundingReadinessCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FundingReadinessCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundingReadinessPayload>[]
          }
          delete: {
            args: Prisma.FundingReadinessDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundingReadinessPayload>
          }
          update: {
            args: Prisma.FundingReadinessUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundingReadinessPayload>
          }
          deleteMany: {
            args: Prisma.FundingReadinessDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FundingReadinessUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FundingReadinessUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundingReadinessPayload>[]
          }
          upsert: {
            args: Prisma.FundingReadinessUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundingReadinessPayload>
          }
          aggregate: {
            args: Prisma.FundingReadinessAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFundingReadiness>
          }
          groupBy: {
            args: Prisma.FundingReadinessGroupByArgs<ExtArgs>
            result: $Utils.Optional<FundingReadinessGroupByOutputType>[]
          }
          count: {
            args: Prisma.FundingReadinessCountArgs<ExtArgs>
            result: $Utils.Optional<FundingReadinessCountAggregateOutputType> | number
          }
        }
      }
      BusinessPlan: {
        payload: Prisma.$BusinessPlanPayload<ExtArgs>
        fields: Prisma.BusinessPlanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BusinessPlanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPlanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BusinessPlanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPlanPayload>
          }
          findFirst: {
            args: Prisma.BusinessPlanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPlanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BusinessPlanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPlanPayload>
          }
          findMany: {
            args: Prisma.BusinessPlanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPlanPayload>[]
          }
          create: {
            args: Prisma.BusinessPlanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPlanPayload>
          }
          createMany: {
            args: Prisma.BusinessPlanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BusinessPlanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPlanPayload>[]
          }
          delete: {
            args: Prisma.BusinessPlanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPlanPayload>
          }
          update: {
            args: Prisma.BusinessPlanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPlanPayload>
          }
          deleteMany: {
            args: Prisma.BusinessPlanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BusinessPlanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BusinessPlanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPlanPayload>[]
          }
          upsert: {
            args: Prisma.BusinessPlanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPlanPayload>
          }
          aggregate: {
            args: Prisma.BusinessPlanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBusinessPlan>
          }
          groupBy: {
            args: Prisma.BusinessPlanGroupByArgs<ExtArgs>
            result: $Utils.Optional<BusinessPlanGroupByOutputType>[]
          }
          count: {
            args: Prisma.BusinessPlanCountArgs<ExtArgs>
            result: $Utils.Optional<BusinessPlanCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    businessInsight?: BusinessInsightOmit
    assessment?: AssessmentOmit
    fundingReadiness?: FundingReadinessOmit
    businessPlan?: BusinessPlanOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    assessments: number
    fundingReadiness: number
    businessPlans: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assessments?: boolean | UserCountOutputTypeCountAssessmentsArgs
    fundingReadiness?: boolean | UserCountOutputTypeCountFundingReadinessArgs
    businessPlans?: boolean | UserCountOutputTypeCountBusinessPlansArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAssessmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssessmentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFundingReadinessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FundingReadinessWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBusinessPlansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BusinessPlanWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    authUserId: string | null
    email: string | null
    name: string | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    authUserId: string | null
    email: string | null
    name: string | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    authUserId: number
    email: number
    name: number
    imageUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    authUserId?: true
    email?: true
    name?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    authUserId?: true
    email?: true
    name?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    authUserId?: true
    email?: true
    name?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    authUserId: string
    email: string
    name: string | null
    imageUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    authUserId?: boolean
    email?: boolean
    name?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    businessInsight?: boolean | User$businessInsightArgs<ExtArgs>
    assessments?: boolean | User$assessmentsArgs<ExtArgs>
    fundingReadiness?: boolean | User$fundingReadinessArgs<ExtArgs>
    businessPlans?: boolean | User$businessPlansArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    authUserId?: boolean
    email?: boolean
    name?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    authUserId?: boolean
    email?: boolean
    name?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    authUserId?: boolean
    email?: boolean
    name?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "authUserId" | "email" | "name" | "imageUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    businessInsight?: boolean | User$businessInsightArgs<ExtArgs>
    assessments?: boolean | User$assessmentsArgs<ExtArgs>
    fundingReadiness?: boolean | User$fundingReadinessArgs<ExtArgs>
    businessPlans?: boolean | User$businessPlansArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      businessInsight: Prisma.$BusinessInsightPayload<ExtArgs> | null
      assessments: Prisma.$AssessmentPayload<ExtArgs>[]
      fundingReadiness: Prisma.$FundingReadinessPayload<ExtArgs>[]
      businessPlans: Prisma.$BusinessPlanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      authUserId: string
      email: string
      name: string | null
      imageUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    businessInsight<T extends User$businessInsightArgs<ExtArgs> = {}>(args?: Subset<T, User$businessInsightArgs<ExtArgs>>): Prisma__BusinessInsightClient<$Result.GetResult<Prisma.$BusinessInsightPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    assessments<T extends User$assessmentsArgs<ExtArgs> = {}>(args?: Subset<T, User$assessmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    fundingReadiness<T extends User$fundingReadinessArgs<ExtArgs> = {}>(args?: Subset<T, User$fundingReadinessArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FundingReadinessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    businessPlans<T extends User$businessPlansArgs<ExtArgs> = {}>(args?: Subset<T, User$businessPlansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly authUserId: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly imageUrl: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.businessInsight
   */
  export type User$businessInsightArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessInsight
     */
    select?: BusinessInsightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessInsight
     */
    omit?: BusinessInsightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInsightInclude<ExtArgs> | null
    where?: BusinessInsightWhereInput
  }

  /**
   * User.assessments
   */
  export type User$assessmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentInclude<ExtArgs> | null
    where?: AssessmentWhereInput
    orderBy?: AssessmentOrderByWithRelationInput | AssessmentOrderByWithRelationInput[]
    cursor?: AssessmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssessmentScalarFieldEnum | AssessmentScalarFieldEnum[]
  }

  /**
   * User.fundingReadiness
   */
  export type User$fundingReadinessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundingReadiness
     */
    select?: FundingReadinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FundingReadiness
     */
    omit?: FundingReadinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundingReadinessInclude<ExtArgs> | null
    where?: FundingReadinessWhereInput
    orderBy?: FundingReadinessOrderByWithRelationInput | FundingReadinessOrderByWithRelationInput[]
    cursor?: FundingReadinessWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FundingReadinessScalarFieldEnum | FundingReadinessScalarFieldEnum[]
  }

  /**
   * User.businessPlans
   */
  export type User$businessPlansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessPlan
     */
    select?: BusinessPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessPlan
     */
    omit?: BusinessPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessPlanInclude<ExtArgs> | null
    where?: BusinessPlanWhereInput
    orderBy?: BusinessPlanOrderByWithRelationInput | BusinessPlanOrderByWithRelationInput[]
    cursor?: BusinessPlanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BusinessPlanScalarFieldEnum | BusinessPlanScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model BusinessInsight
   */

  export type AggregateBusinessInsight = {
    _count: BusinessInsightCountAggregateOutputType | null
    _avg: BusinessInsightAvgAggregateOutputType | null
    _sum: BusinessInsightSumAggregateOutputType | null
    _min: BusinessInsightMinAggregateOutputType | null
    _max: BusinessInsightMaxAggregateOutputType | null
  }

  export type BusinessInsightAvgAggregateOutputType = {
    employeeCount: number | null
  }

  export type BusinessInsightSumAggregateOutputType = {
    employeeCount: number | null
  }

  export type BusinessInsightMinAggregateOutputType = {
    id: string | null
    userId: string | null
    businessName: string | null
    industry: string | null
    subSegment: string | null
    businessModel: string | null
    customerType: string | null
    annualRevenue: string | null
    employeeCount: number | null
    marketType: string | null
  }

  export type BusinessInsightMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    businessName: string | null
    industry: string | null
    subSegment: string | null
    businessModel: string | null
    customerType: string | null
    annualRevenue: string | null
    employeeCount: number | null
    marketType: string | null
  }

  export type BusinessInsightCountAggregateOutputType = {
    id: number
    userId: number
    businessName: number
    industry: number
    subSegment: number
    businessModel: number
    customerType: number
    annualRevenue: number
    employeeCount: number
    topProducts: number
    marketType: number
    businessChallenges: number
    desirability: number
    feasibility: number
    viability: number
    _all: number
  }


  export type BusinessInsightAvgAggregateInputType = {
    employeeCount?: true
  }

  export type BusinessInsightSumAggregateInputType = {
    employeeCount?: true
  }

  export type BusinessInsightMinAggregateInputType = {
    id?: true
    userId?: true
    businessName?: true
    industry?: true
    subSegment?: true
    businessModel?: true
    customerType?: true
    annualRevenue?: true
    employeeCount?: true
    marketType?: true
  }

  export type BusinessInsightMaxAggregateInputType = {
    id?: true
    userId?: true
    businessName?: true
    industry?: true
    subSegment?: true
    businessModel?: true
    customerType?: true
    annualRevenue?: true
    employeeCount?: true
    marketType?: true
  }

  export type BusinessInsightCountAggregateInputType = {
    id?: true
    userId?: true
    businessName?: true
    industry?: true
    subSegment?: true
    businessModel?: true
    customerType?: true
    annualRevenue?: true
    employeeCount?: true
    topProducts?: true
    marketType?: true
    businessChallenges?: true
    desirability?: true
    feasibility?: true
    viability?: true
    _all?: true
  }

  export type BusinessInsightAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BusinessInsight to aggregate.
     */
    where?: BusinessInsightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessInsights to fetch.
     */
    orderBy?: BusinessInsightOrderByWithRelationInput | BusinessInsightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BusinessInsightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessInsights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessInsights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BusinessInsights
    **/
    _count?: true | BusinessInsightCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BusinessInsightAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BusinessInsightSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BusinessInsightMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BusinessInsightMaxAggregateInputType
  }

  export type GetBusinessInsightAggregateType<T extends BusinessInsightAggregateArgs> = {
        [P in keyof T & keyof AggregateBusinessInsight]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBusinessInsight[P]>
      : GetScalarType<T[P], AggregateBusinessInsight[P]>
  }




  export type BusinessInsightGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BusinessInsightWhereInput
    orderBy?: BusinessInsightOrderByWithAggregationInput | BusinessInsightOrderByWithAggregationInput[]
    by: BusinessInsightScalarFieldEnum[] | BusinessInsightScalarFieldEnum
    having?: BusinessInsightScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BusinessInsightCountAggregateInputType | true
    _avg?: BusinessInsightAvgAggregateInputType
    _sum?: BusinessInsightSumAggregateInputType
    _min?: BusinessInsightMinAggregateInputType
    _max?: BusinessInsightMaxAggregateInputType
  }

  export type BusinessInsightGroupByOutputType = {
    id: string
    userId: string
    businessName: string
    industry: string
    subSegment: string
    businessModel: string
    customerType: string
    annualRevenue: string
    employeeCount: number
    topProducts: string[]
    marketType: string
    businessChallenges: string[]
    desirability: JsonValue | null
    feasibility: JsonValue | null
    viability: JsonValue | null
    _count: BusinessInsightCountAggregateOutputType | null
    _avg: BusinessInsightAvgAggregateOutputType | null
    _sum: BusinessInsightSumAggregateOutputType | null
    _min: BusinessInsightMinAggregateOutputType | null
    _max: BusinessInsightMaxAggregateOutputType | null
  }

  type GetBusinessInsightGroupByPayload<T extends BusinessInsightGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BusinessInsightGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BusinessInsightGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BusinessInsightGroupByOutputType[P]>
            : GetScalarType<T[P], BusinessInsightGroupByOutputType[P]>
        }
      >
    >


  export type BusinessInsightSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    businessName?: boolean
    industry?: boolean
    subSegment?: boolean
    businessModel?: boolean
    customerType?: boolean
    annualRevenue?: boolean
    employeeCount?: boolean
    topProducts?: boolean
    marketType?: boolean
    businessChallenges?: boolean
    desirability?: boolean
    feasibility?: boolean
    viability?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["businessInsight"]>

  export type BusinessInsightSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    businessName?: boolean
    industry?: boolean
    subSegment?: boolean
    businessModel?: boolean
    customerType?: boolean
    annualRevenue?: boolean
    employeeCount?: boolean
    topProducts?: boolean
    marketType?: boolean
    businessChallenges?: boolean
    desirability?: boolean
    feasibility?: boolean
    viability?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["businessInsight"]>

  export type BusinessInsightSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    businessName?: boolean
    industry?: boolean
    subSegment?: boolean
    businessModel?: boolean
    customerType?: boolean
    annualRevenue?: boolean
    employeeCount?: boolean
    topProducts?: boolean
    marketType?: boolean
    businessChallenges?: boolean
    desirability?: boolean
    feasibility?: boolean
    viability?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["businessInsight"]>

  export type BusinessInsightSelectScalar = {
    id?: boolean
    userId?: boolean
    businessName?: boolean
    industry?: boolean
    subSegment?: boolean
    businessModel?: boolean
    customerType?: boolean
    annualRevenue?: boolean
    employeeCount?: boolean
    topProducts?: boolean
    marketType?: boolean
    businessChallenges?: boolean
    desirability?: boolean
    feasibility?: boolean
    viability?: boolean
  }

  export type BusinessInsightOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "businessName" | "industry" | "subSegment" | "businessModel" | "customerType" | "annualRevenue" | "employeeCount" | "topProducts" | "marketType" | "businessChallenges" | "desirability" | "feasibility" | "viability", ExtArgs["result"]["businessInsight"]>
  export type BusinessInsightInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BusinessInsightIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BusinessInsightIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BusinessInsightPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BusinessInsight"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      businessName: string
      industry: string
      subSegment: string
      businessModel: string
      customerType: string
      annualRevenue: string
      employeeCount: number
      topProducts: string[]
      marketType: string
      businessChallenges: string[]
      desirability: Prisma.JsonValue | null
      feasibility: Prisma.JsonValue | null
      viability: Prisma.JsonValue | null
    }, ExtArgs["result"]["businessInsight"]>
    composites: {}
  }

  type BusinessInsightGetPayload<S extends boolean | null | undefined | BusinessInsightDefaultArgs> = $Result.GetResult<Prisma.$BusinessInsightPayload, S>

  type BusinessInsightCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BusinessInsightFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BusinessInsightCountAggregateInputType | true
    }

  export interface BusinessInsightDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BusinessInsight'], meta: { name: 'BusinessInsight' } }
    /**
     * Find zero or one BusinessInsight that matches the filter.
     * @param {BusinessInsightFindUniqueArgs} args - Arguments to find a BusinessInsight
     * @example
     * // Get one BusinessInsight
     * const businessInsight = await prisma.businessInsight.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BusinessInsightFindUniqueArgs>(args: SelectSubset<T, BusinessInsightFindUniqueArgs<ExtArgs>>): Prisma__BusinessInsightClient<$Result.GetResult<Prisma.$BusinessInsightPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BusinessInsight that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BusinessInsightFindUniqueOrThrowArgs} args - Arguments to find a BusinessInsight
     * @example
     * // Get one BusinessInsight
     * const businessInsight = await prisma.businessInsight.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BusinessInsightFindUniqueOrThrowArgs>(args: SelectSubset<T, BusinessInsightFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BusinessInsightClient<$Result.GetResult<Prisma.$BusinessInsightPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BusinessInsight that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessInsightFindFirstArgs} args - Arguments to find a BusinessInsight
     * @example
     * // Get one BusinessInsight
     * const businessInsight = await prisma.businessInsight.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BusinessInsightFindFirstArgs>(args?: SelectSubset<T, BusinessInsightFindFirstArgs<ExtArgs>>): Prisma__BusinessInsightClient<$Result.GetResult<Prisma.$BusinessInsightPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BusinessInsight that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessInsightFindFirstOrThrowArgs} args - Arguments to find a BusinessInsight
     * @example
     * // Get one BusinessInsight
     * const businessInsight = await prisma.businessInsight.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BusinessInsightFindFirstOrThrowArgs>(args?: SelectSubset<T, BusinessInsightFindFirstOrThrowArgs<ExtArgs>>): Prisma__BusinessInsightClient<$Result.GetResult<Prisma.$BusinessInsightPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BusinessInsights that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessInsightFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BusinessInsights
     * const businessInsights = await prisma.businessInsight.findMany()
     * 
     * // Get first 10 BusinessInsights
     * const businessInsights = await prisma.businessInsight.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const businessInsightWithIdOnly = await prisma.businessInsight.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BusinessInsightFindManyArgs>(args?: SelectSubset<T, BusinessInsightFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessInsightPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BusinessInsight.
     * @param {BusinessInsightCreateArgs} args - Arguments to create a BusinessInsight.
     * @example
     * // Create one BusinessInsight
     * const BusinessInsight = await prisma.businessInsight.create({
     *   data: {
     *     // ... data to create a BusinessInsight
     *   }
     * })
     * 
     */
    create<T extends BusinessInsightCreateArgs>(args: SelectSubset<T, BusinessInsightCreateArgs<ExtArgs>>): Prisma__BusinessInsightClient<$Result.GetResult<Prisma.$BusinessInsightPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BusinessInsights.
     * @param {BusinessInsightCreateManyArgs} args - Arguments to create many BusinessInsights.
     * @example
     * // Create many BusinessInsights
     * const businessInsight = await prisma.businessInsight.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BusinessInsightCreateManyArgs>(args?: SelectSubset<T, BusinessInsightCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BusinessInsights and returns the data saved in the database.
     * @param {BusinessInsightCreateManyAndReturnArgs} args - Arguments to create many BusinessInsights.
     * @example
     * // Create many BusinessInsights
     * const businessInsight = await prisma.businessInsight.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BusinessInsights and only return the `id`
     * const businessInsightWithIdOnly = await prisma.businessInsight.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BusinessInsightCreateManyAndReturnArgs>(args?: SelectSubset<T, BusinessInsightCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessInsightPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BusinessInsight.
     * @param {BusinessInsightDeleteArgs} args - Arguments to delete one BusinessInsight.
     * @example
     * // Delete one BusinessInsight
     * const BusinessInsight = await prisma.businessInsight.delete({
     *   where: {
     *     // ... filter to delete one BusinessInsight
     *   }
     * })
     * 
     */
    delete<T extends BusinessInsightDeleteArgs>(args: SelectSubset<T, BusinessInsightDeleteArgs<ExtArgs>>): Prisma__BusinessInsightClient<$Result.GetResult<Prisma.$BusinessInsightPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BusinessInsight.
     * @param {BusinessInsightUpdateArgs} args - Arguments to update one BusinessInsight.
     * @example
     * // Update one BusinessInsight
     * const businessInsight = await prisma.businessInsight.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BusinessInsightUpdateArgs>(args: SelectSubset<T, BusinessInsightUpdateArgs<ExtArgs>>): Prisma__BusinessInsightClient<$Result.GetResult<Prisma.$BusinessInsightPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BusinessInsights.
     * @param {BusinessInsightDeleteManyArgs} args - Arguments to filter BusinessInsights to delete.
     * @example
     * // Delete a few BusinessInsights
     * const { count } = await prisma.businessInsight.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BusinessInsightDeleteManyArgs>(args?: SelectSubset<T, BusinessInsightDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BusinessInsights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessInsightUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BusinessInsights
     * const businessInsight = await prisma.businessInsight.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BusinessInsightUpdateManyArgs>(args: SelectSubset<T, BusinessInsightUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BusinessInsights and returns the data updated in the database.
     * @param {BusinessInsightUpdateManyAndReturnArgs} args - Arguments to update many BusinessInsights.
     * @example
     * // Update many BusinessInsights
     * const businessInsight = await prisma.businessInsight.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BusinessInsights and only return the `id`
     * const businessInsightWithIdOnly = await prisma.businessInsight.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BusinessInsightUpdateManyAndReturnArgs>(args: SelectSubset<T, BusinessInsightUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessInsightPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BusinessInsight.
     * @param {BusinessInsightUpsertArgs} args - Arguments to update or create a BusinessInsight.
     * @example
     * // Update or create a BusinessInsight
     * const businessInsight = await prisma.businessInsight.upsert({
     *   create: {
     *     // ... data to create a BusinessInsight
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BusinessInsight we want to update
     *   }
     * })
     */
    upsert<T extends BusinessInsightUpsertArgs>(args: SelectSubset<T, BusinessInsightUpsertArgs<ExtArgs>>): Prisma__BusinessInsightClient<$Result.GetResult<Prisma.$BusinessInsightPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BusinessInsights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessInsightCountArgs} args - Arguments to filter BusinessInsights to count.
     * @example
     * // Count the number of BusinessInsights
     * const count = await prisma.businessInsight.count({
     *   where: {
     *     // ... the filter for the BusinessInsights we want to count
     *   }
     * })
    **/
    count<T extends BusinessInsightCountArgs>(
      args?: Subset<T, BusinessInsightCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BusinessInsightCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BusinessInsight.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessInsightAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BusinessInsightAggregateArgs>(args: Subset<T, BusinessInsightAggregateArgs>): Prisma.PrismaPromise<GetBusinessInsightAggregateType<T>>

    /**
     * Group by BusinessInsight.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessInsightGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BusinessInsightGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BusinessInsightGroupByArgs['orderBy'] }
        : { orderBy?: BusinessInsightGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BusinessInsightGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBusinessInsightGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BusinessInsight model
   */
  readonly fields: BusinessInsightFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BusinessInsight.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BusinessInsightClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BusinessInsight model
   */
  interface BusinessInsightFieldRefs {
    readonly id: FieldRef<"BusinessInsight", 'String'>
    readonly userId: FieldRef<"BusinessInsight", 'String'>
    readonly businessName: FieldRef<"BusinessInsight", 'String'>
    readonly industry: FieldRef<"BusinessInsight", 'String'>
    readonly subSegment: FieldRef<"BusinessInsight", 'String'>
    readonly businessModel: FieldRef<"BusinessInsight", 'String'>
    readonly customerType: FieldRef<"BusinessInsight", 'String'>
    readonly annualRevenue: FieldRef<"BusinessInsight", 'String'>
    readonly employeeCount: FieldRef<"BusinessInsight", 'Int'>
    readonly topProducts: FieldRef<"BusinessInsight", 'String[]'>
    readonly marketType: FieldRef<"BusinessInsight", 'String'>
    readonly businessChallenges: FieldRef<"BusinessInsight", 'String[]'>
    readonly desirability: FieldRef<"BusinessInsight", 'Json'>
    readonly feasibility: FieldRef<"BusinessInsight", 'Json'>
    readonly viability: FieldRef<"BusinessInsight", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * BusinessInsight findUnique
   */
  export type BusinessInsightFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessInsight
     */
    select?: BusinessInsightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessInsight
     */
    omit?: BusinessInsightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInsightInclude<ExtArgs> | null
    /**
     * Filter, which BusinessInsight to fetch.
     */
    where: BusinessInsightWhereUniqueInput
  }

  /**
   * BusinessInsight findUniqueOrThrow
   */
  export type BusinessInsightFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessInsight
     */
    select?: BusinessInsightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessInsight
     */
    omit?: BusinessInsightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInsightInclude<ExtArgs> | null
    /**
     * Filter, which BusinessInsight to fetch.
     */
    where: BusinessInsightWhereUniqueInput
  }

  /**
   * BusinessInsight findFirst
   */
  export type BusinessInsightFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessInsight
     */
    select?: BusinessInsightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessInsight
     */
    omit?: BusinessInsightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInsightInclude<ExtArgs> | null
    /**
     * Filter, which BusinessInsight to fetch.
     */
    where?: BusinessInsightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessInsights to fetch.
     */
    orderBy?: BusinessInsightOrderByWithRelationInput | BusinessInsightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BusinessInsights.
     */
    cursor?: BusinessInsightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessInsights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessInsights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BusinessInsights.
     */
    distinct?: BusinessInsightScalarFieldEnum | BusinessInsightScalarFieldEnum[]
  }

  /**
   * BusinessInsight findFirstOrThrow
   */
  export type BusinessInsightFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessInsight
     */
    select?: BusinessInsightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessInsight
     */
    omit?: BusinessInsightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInsightInclude<ExtArgs> | null
    /**
     * Filter, which BusinessInsight to fetch.
     */
    where?: BusinessInsightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessInsights to fetch.
     */
    orderBy?: BusinessInsightOrderByWithRelationInput | BusinessInsightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BusinessInsights.
     */
    cursor?: BusinessInsightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessInsights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessInsights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BusinessInsights.
     */
    distinct?: BusinessInsightScalarFieldEnum | BusinessInsightScalarFieldEnum[]
  }

  /**
   * BusinessInsight findMany
   */
  export type BusinessInsightFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessInsight
     */
    select?: BusinessInsightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessInsight
     */
    omit?: BusinessInsightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInsightInclude<ExtArgs> | null
    /**
     * Filter, which BusinessInsights to fetch.
     */
    where?: BusinessInsightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessInsights to fetch.
     */
    orderBy?: BusinessInsightOrderByWithRelationInput | BusinessInsightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BusinessInsights.
     */
    cursor?: BusinessInsightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessInsights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessInsights.
     */
    skip?: number
    distinct?: BusinessInsightScalarFieldEnum | BusinessInsightScalarFieldEnum[]
  }

  /**
   * BusinessInsight create
   */
  export type BusinessInsightCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessInsight
     */
    select?: BusinessInsightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessInsight
     */
    omit?: BusinessInsightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInsightInclude<ExtArgs> | null
    /**
     * The data needed to create a BusinessInsight.
     */
    data: XOR<BusinessInsightCreateInput, BusinessInsightUncheckedCreateInput>
  }

  /**
   * BusinessInsight createMany
   */
  export type BusinessInsightCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BusinessInsights.
     */
    data: BusinessInsightCreateManyInput | BusinessInsightCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BusinessInsight createManyAndReturn
   */
  export type BusinessInsightCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessInsight
     */
    select?: BusinessInsightSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessInsight
     */
    omit?: BusinessInsightOmit<ExtArgs> | null
    /**
     * The data used to create many BusinessInsights.
     */
    data: BusinessInsightCreateManyInput | BusinessInsightCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInsightIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BusinessInsight update
   */
  export type BusinessInsightUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessInsight
     */
    select?: BusinessInsightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessInsight
     */
    omit?: BusinessInsightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInsightInclude<ExtArgs> | null
    /**
     * The data needed to update a BusinessInsight.
     */
    data: XOR<BusinessInsightUpdateInput, BusinessInsightUncheckedUpdateInput>
    /**
     * Choose, which BusinessInsight to update.
     */
    where: BusinessInsightWhereUniqueInput
  }

  /**
   * BusinessInsight updateMany
   */
  export type BusinessInsightUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BusinessInsights.
     */
    data: XOR<BusinessInsightUpdateManyMutationInput, BusinessInsightUncheckedUpdateManyInput>
    /**
     * Filter which BusinessInsights to update
     */
    where?: BusinessInsightWhereInput
    /**
     * Limit how many BusinessInsights to update.
     */
    limit?: number
  }

  /**
   * BusinessInsight updateManyAndReturn
   */
  export type BusinessInsightUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessInsight
     */
    select?: BusinessInsightSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessInsight
     */
    omit?: BusinessInsightOmit<ExtArgs> | null
    /**
     * The data used to update BusinessInsights.
     */
    data: XOR<BusinessInsightUpdateManyMutationInput, BusinessInsightUncheckedUpdateManyInput>
    /**
     * Filter which BusinessInsights to update
     */
    where?: BusinessInsightWhereInput
    /**
     * Limit how many BusinessInsights to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInsightIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BusinessInsight upsert
   */
  export type BusinessInsightUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessInsight
     */
    select?: BusinessInsightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessInsight
     */
    omit?: BusinessInsightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInsightInclude<ExtArgs> | null
    /**
     * The filter to search for the BusinessInsight to update in case it exists.
     */
    where: BusinessInsightWhereUniqueInput
    /**
     * In case the BusinessInsight found by the `where` argument doesn't exist, create a new BusinessInsight with this data.
     */
    create: XOR<BusinessInsightCreateInput, BusinessInsightUncheckedCreateInput>
    /**
     * In case the BusinessInsight was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BusinessInsightUpdateInput, BusinessInsightUncheckedUpdateInput>
  }

  /**
   * BusinessInsight delete
   */
  export type BusinessInsightDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessInsight
     */
    select?: BusinessInsightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessInsight
     */
    omit?: BusinessInsightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInsightInclude<ExtArgs> | null
    /**
     * Filter which BusinessInsight to delete.
     */
    where: BusinessInsightWhereUniqueInput
  }

  /**
   * BusinessInsight deleteMany
   */
  export type BusinessInsightDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BusinessInsights to delete
     */
    where?: BusinessInsightWhereInput
    /**
     * Limit how many BusinessInsights to delete.
     */
    limit?: number
  }

  /**
   * BusinessInsight without action
   */
  export type BusinessInsightDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessInsight
     */
    select?: BusinessInsightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessInsight
     */
    omit?: BusinessInsightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInsightInclude<ExtArgs> | null
  }


  /**
   * Model Assessment
   */

  export type AggregateAssessment = {
    _count: AssessmentCountAggregateOutputType | null
    _avg: AssessmentAvgAggregateOutputType | null
    _sum: AssessmentSumAggregateOutputType | null
    _min: AssessmentMinAggregateOutputType | null
    _max: AssessmentMaxAggregateOutputType | null
  }

  export type AssessmentAvgAggregateOutputType = {
    score: number | null
  }

  export type AssessmentSumAggregateOutputType = {
    score: number | null
  }

  export type AssessmentMinAggregateOutputType = {
    id: string | null
    userId: string | null
    score: number | null
    maturityLevel: string | null
    report: string | null
    dateTaken: Date | null
  }

  export type AssessmentMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    score: number | null
    maturityLevel: string | null
    report: string | null
    dateTaken: Date | null
  }

  export type AssessmentCountAggregateOutputType = {
    id: number
    userId: number
    score: number
    answers: number
    maturityLevel: number
    report: number
    dateTaken: number
    _all: number
  }


  export type AssessmentAvgAggregateInputType = {
    score?: true
  }

  export type AssessmentSumAggregateInputType = {
    score?: true
  }

  export type AssessmentMinAggregateInputType = {
    id?: true
    userId?: true
    score?: true
    maturityLevel?: true
    report?: true
    dateTaken?: true
  }

  export type AssessmentMaxAggregateInputType = {
    id?: true
    userId?: true
    score?: true
    maturityLevel?: true
    report?: true
    dateTaken?: true
  }

  export type AssessmentCountAggregateInputType = {
    id?: true
    userId?: true
    score?: true
    answers?: true
    maturityLevel?: true
    report?: true
    dateTaken?: true
    _all?: true
  }

  export type AssessmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Assessment to aggregate.
     */
    where?: AssessmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assessments to fetch.
     */
    orderBy?: AssessmentOrderByWithRelationInput | AssessmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssessmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assessments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assessments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Assessments
    **/
    _count?: true | AssessmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AssessmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AssessmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssessmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssessmentMaxAggregateInputType
  }

  export type GetAssessmentAggregateType<T extends AssessmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAssessment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAssessment[P]>
      : GetScalarType<T[P], AggregateAssessment[P]>
  }




  export type AssessmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssessmentWhereInput
    orderBy?: AssessmentOrderByWithAggregationInput | AssessmentOrderByWithAggregationInput[]
    by: AssessmentScalarFieldEnum[] | AssessmentScalarFieldEnum
    having?: AssessmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssessmentCountAggregateInputType | true
    _avg?: AssessmentAvgAggregateInputType
    _sum?: AssessmentSumAggregateInputType
    _min?: AssessmentMinAggregateInputType
    _max?: AssessmentMaxAggregateInputType
  }

  export type AssessmentGroupByOutputType = {
    id: string
    userId: string
    score: number
    answers: JsonValue
    maturityLevel: string
    report: string
    dateTaken: Date
    _count: AssessmentCountAggregateOutputType | null
    _avg: AssessmentAvgAggregateOutputType | null
    _sum: AssessmentSumAggregateOutputType | null
    _min: AssessmentMinAggregateOutputType | null
    _max: AssessmentMaxAggregateOutputType | null
  }

  type GetAssessmentGroupByPayload<T extends AssessmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssessmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssessmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssessmentGroupByOutputType[P]>
            : GetScalarType<T[P], AssessmentGroupByOutputType[P]>
        }
      >
    >


  export type AssessmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    score?: boolean
    answers?: boolean
    maturityLevel?: boolean
    report?: boolean
    dateTaken?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assessment"]>

  export type AssessmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    score?: boolean
    answers?: boolean
    maturityLevel?: boolean
    report?: boolean
    dateTaken?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assessment"]>

  export type AssessmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    score?: boolean
    answers?: boolean
    maturityLevel?: boolean
    report?: boolean
    dateTaken?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assessment"]>

  export type AssessmentSelectScalar = {
    id?: boolean
    userId?: boolean
    score?: boolean
    answers?: boolean
    maturityLevel?: boolean
    report?: boolean
    dateTaken?: boolean
  }

  export type AssessmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "score" | "answers" | "maturityLevel" | "report" | "dateTaken", ExtArgs["result"]["assessment"]>
  export type AssessmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AssessmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AssessmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AssessmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Assessment"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      score: number
      answers: Prisma.JsonValue
      maturityLevel: string
      report: string
      dateTaken: Date
    }, ExtArgs["result"]["assessment"]>
    composites: {}
  }

  type AssessmentGetPayload<S extends boolean | null | undefined | AssessmentDefaultArgs> = $Result.GetResult<Prisma.$AssessmentPayload, S>

  type AssessmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AssessmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AssessmentCountAggregateInputType | true
    }

  export interface AssessmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Assessment'], meta: { name: 'Assessment' } }
    /**
     * Find zero or one Assessment that matches the filter.
     * @param {AssessmentFindUniqueArgs} args - Arguments to find a Assessment
     * @example
     * // Get one Assessment
     * const assessment = await prisma.assessment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AssessmentFindUniqueArgs>(args: SelectSubset<T, AssessmentFindUniqueArgs<ExtArgs>>): Prisma__AssessmentClient<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Assessment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AssessmentFindUniqueOrThrowArgs} args - Arguments to find a Assessment
     * @example
     * // Get one Assessment
     * const assessment = await prisma.assessment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AssessmentFindUniqueOrThrowArgs>(args: SelectSubset<T, AssessmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AssessmentClient<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Assessment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentFindFirstArgs} args - Arguments to find a Assessment
     * @example
     * // Get one Assessment
     * const assessment = await prisma.assessment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AssessmentFindFirstArgs>(args?: SelectSubset<T, AssessmentFindFirstArgs<ExtArgs>>): Prisma__AssessmentClient<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Assessment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentFindFirstOrThrowArgs} args - Arguments to find a Assessment
     * @example
     * // Get one Assessment
     * const assessment = await prisma.assessment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AssessmentFindFirstOrThrowArgs>(args?: SelectSubset<T, AssessmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AssessmentClient<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Assessments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Assessments
     * const assessments = await prisma.assessment.findMany()
     * 
     * // Get first 10 Assessments
     * const assessments = await prisma.assessment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const assessmentWithIdOnly = await prisma.assessment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AssessmentFindManyArgs>(args?: SelectSubset<T, AssessmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Assessment.
     * @param {AssessmentCreateArgs} args - Arguments to create a Assessment.
     * @example
     * // Create one Assessment
     * const Assessment = await prisma.assessment.create({
     *   data: {
     *     // ... data to create a Assessment
     *   }
     * })
     * 
     */
    create<T extends AssessmentCreateArgs>(args: SelectSubset<T, AssessmentCreateArgs<ExtArgs>>): Prisma__AssessmentClient<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Assessments.
     * @param {AssessmentCreateManyArgs} args - Arguments to create many Assessments.
     * @example
     * // Create many Assessments
     * const assessment = await prisma.assessment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AssessmentCreateManyArgs>(args?: SelectSubset<T, AssessmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Assessments and returns the data saved in the database.
     * @param {AssessmentCreateManyAndReturnArgs} args - Arguments to create many Assessments.
     * @example
     * // Create many Assessments
     * const assessment = await prisma.assessment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Assessments and only return the `id`
     * const assessmentWithIdOnly = await prisma.assessment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AssessmentCreateManyAndReturnArgs>(args?: SelectSubset<T, AssessmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Assessment.
     * @param {AssessmentDeleteArgs} args - Arguments to delete one Assessment.
     * @example
     * // Delete one Assessment
     * const Assessment = await prisma.assessment.delete({
     *   where: {
     *     // ... filter to delete one Assessment
     *   }
     * })
     * 
     */
    delete<T extends AssessmentDeleteArgs>(args: SelectSubset<T, AssessmentDeleteArgs<ExtArgs>>): Prisma__AssessmentClient<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Assessment.
     * @param {AssessmentUpdateArgs} args - Arguments to update one Assessment.
     * @example
     * // Update one Assessment
     * const assessment = await prisma.assessment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AssessmentUpdateArgs>(args: SelectSubset<T, AssessmentUpdateArgs<ExtArgs>>): Prisma__AssessmentClient<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Assessments.
     * @param {AssessmentDeleteManyArgs} args - Arguments to filter Assessments to delete.
     * @example
     * // Delete a few Assessments
     * const { count } = await prisma.assessment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AssessmentDeleteManyArgs>(args?: SelectSubset<T, AssessmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assessments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Assessments
     * const assessment = await prisma.assessment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AssessmentUpdateManyArgs>(args: SelectSubset<T, AssessmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assessments and returns the data updated in the database.
     * @param {AssessmentUpdateManyAndReturnArgs} args - Arguments to update many Assessments.
     * @example
     * // Update many Assessments
     * const assessment = await prisma.assessment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Assessments and only return the `id`
     * const assessmentWithIdOnly = await prisma.assessment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AssessmentUpdateManyAndReturnArgs>(args: SelectSubset<T, AssessmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Assessment.
     * @param {AssessmentUpsertArgs} args - Arguments to update or create a Assessment.
     * @example
     * // Update or create a Assessment
     * const assessment = await prisma.assessment.upsert({
     *   create: {
     *     // ... data to create a Assessment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Assessment we want to update
     *   }
     * })
     */
    upsert<T extends AssessmentUpsertArgs>(args: SelectSubset<T, AssessmentUpsertArgs<ExtArgs>>): Prisma__AssessmentClient<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Assessments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentCountArgs} args - Arguments to filter Assessments to count.
     * @example
     * // Count the number of Assessments
     * const count = await prisma.assessment.count({
     *   where: {
     *     // ... the filter for the Assessments we want to count
     *   }
     * })
    **/
    count<T extends AssessmentCountArgs>(
      args?: Subset<T, AssessmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssessmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Assessment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AssessmentAggregateArgs>(args: Subset<T, AssessmentAggregateArgs>): Prisma.PrismaPromise<GetAssessmentAggregateType<T>>

    /**
     * Group by Assessment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AssessmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssessmentGroupByArgs['orderBy'] }
        : { orderBy?: AssessmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AssessmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssessmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Assessment model
   */
  readonly fields: AssessmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Assessment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AssessmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Assessment model
   */
  interface AssessmentFieldRefs {
    readonly id: FieldRef<"Assessment", 'String'>
    readonly userId: FieldRef<"Assessment", 'String'>
    readonly score: FieldRef<"Assessment", 'Float'>
    readonly answers: FieldRef<"Assessment", 'Json'>
    readonly maturityLevel: FieldRef<"Assessment", 'String'>
    readonly report: FieldRef<"Assessment", 'String'>
    readonly dateTaken: FieldRef<"Assessment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Assessment findUnique
   */
  export type AssessmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentInclude<ExtArgs> | null
    /**
     * Filter, which Assessment to fetch.
     */
    where: AssessmentWhereUniqueInput
  }

  /**
   * Assessment findUniqueOrThrow
   */
  export type AssessmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentInclude<ExtArgs> | null
    /**
     * Filter, which Assessment to fetch.
     */
    where: AssessmentWhereUniqueInput
  }

  /**
   * Assessment findFirst
   */
  export type AssessmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentInclude<ExtArgs> | null
    /**
     * Filter, which Assessment to fetch.
     */
    where?: AssessmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assessments to fetch.
     */
    orderBy?: AssessmentOrderByWithRelationInput | AssessmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assessments.
     */
    cursor?: AssessmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assessments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assessments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assessments.
     */
    distinct?: AssessmentScalarFieldEnum | AssessmentScalarFieldEnum[]
  }

  /**
   * Assessment findFirstOrThrow
   */
  export type AssessmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentInclude<ExtArgs> | null
    /**
     * Filter, which Assessment to fetch.
     */
    where?: AssessmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assessments to fetch.
     */
    orderBy?: AssessmentOrderByWithRelationInput | AssessmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assessments.
     */
    cursor?: AssessmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assessments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assessments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assessments.
     */
    distinct?: AssessmentScalarFieldEnum | AssessmentScalarFieldEnum[]
  }

  /**
   * Assessment findMany
   */
  export type AssessmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentInclude<ExtArgs> | null
    /**
     * Filter, which Assessments to fetch.
     */
    where?: AssessmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assessments to fetch.
     */
    orderBy?: AssessmentOrderByWithRelationInput | AssessmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Assessments.
     */
    cursor?: AssessmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assessments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assessments.
     */
    skip?: number
    distinct?: AssessmentScalarFieldEnum | AssessmentScalarFieldEnum[]
  }

  /**
   * Assessment create
   */
  export type AssessmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Assessment.
     */
    data: XOR<AssessmentCreateInput, AssessmentUncheckedCreateInput>
  }

  /**
   * Assessment createMany
   */
  export type AssessmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Assessments.
     */
    data: AssessmentCreateManyInput | AssessmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Assessment createManyAndReturn
   */
  export type AssessmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
    /**
     * The data used to create many Assessments.
     */
    data: AssessmentCreateManyInput | AssessmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Assessment update
   */
  export type AssessmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Assessment.
     */
    data: XOR<AssessmentUpdateInput, AssessmentUncheckedUpdateInput>
    /**
     * Choose, which Assessment to update.
     */
    where: AssessmentWhereUniqueInput
  }

  /**
   * Assessment updateMany
   */
  export type AssessmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Assessments.
     */
    data: XOR<AssessmentUpdateManyMutationInput, AssessmentUncheckedUpdateManyInput>
    /**
     * Filter which Assessments to update
     */
    where?: AssessmentWhereInput
    /**
     * Limit how many Assessments to update.
     */
    limit?: number
  }

  /**
   * Assessment updateManyAndReturn
   */
  export type AssessmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
    /**
     * The data used to update Assessments.
     */
    data: XOR<AssessmentUpdateManyMutationInput, AssessmentUncheckedUpdateManyInput>
    /**
     * Filter which Assessments to update
     */
    where?: AssessmentWhereInput
    /**
     * Limit how many Assessments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Assessment upsert
   */
  export type AssessmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Assessment to update in case it exists.
     */
    where: AssessmentWhereUniqueInput
    /**
     * In case the Assessment found by the `where` argument doesn't exist, create a new Assessment with this data.
     */
    create: XOR<AssessmentCreateInput, AssessmentUncheckedCreateInput>
    /**
     * In case the Assessment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssessmentUpdateInput, AssessmentUncheckedUpdateInput>
  }

  /**
   * Assessment delete
   */
  export type AssessmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentInclude<ExtArgs> | null
    /**
     * Filter which Assessment to delete.
     */
    where: AssessmentWhereUniqueInput
  }

  /**
   * Assessment deleteMany
   */
  export type AssessmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Assessments to delete
     */
    where?: AssessmentWhereInput
    /**
     * Limit how many Assessments to delete.
     */
    limit?: number
  }

  /**
   * Assessment without action
   */
  export type AssessmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assessment
     */
    omit?: AssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentInclude<ExtArgs> | null
  }


  /**
   * Model FundingReadiness
   */

  export type AggregateFundingReadiness = {
    _count: FundingReadinessCountAggregateOutputType | null
    _avg: FundingReadinessAvgAggregateOutputType | null
    _sum: FundingReadinessSumAggregateOutputType | null
    _min: FundingReadinessMinAggregateOutputType | null
    _max: FundingReadinessMaxAggregateOutputType | null
  }

  export type FundingReadinessAvgAggregateOutputType = {
    score: number | null
  }

  export type FundingReadinessSumAggregateOutputType = {
    score: number | null
  }

  export type FundingReadinessMinAggregateOutputType = {
    id: string | null
    userId: string | null
    score: number | null
    readinessLevel: string | null
    report: string | null
    issuedAt: Date | null
  }

  export type FundingReadinessMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    score: number | null
    readinessLevel: string | null
    report: string | null
    issuedAt: Date | null
  }

  export type FundingReadinessCountAggregateOutputType = {
    id: number
    userId: number
    score: number
    answers: number
    readinessLevel: number
    report: number
    issuedAt: number
    _all: number
  }


  export type FundingReadinessAvgAggregateInputType = {
    score?: true
  }

  export type FundingReadinessSumAggregateInputType = {
    score?: true
  }

  export type FundingReadinessMinAggregateInputType = {
    id?: true
    userId?: true
    score?: true
    readinessLevel?: true
    report?: true
    issuedAt?: true
  }

  export type FundingReadinessMaxAggregateInputType = {
    id?: true
    userId?: true
    score?: true
    readinessLevel?: true
    report?: true
    issuedAt?: true
  }

  export type FundingReadinessCountAggregateInputType = {
    id?: true
    userId?: true
    score?: true
    answers?: true
    readinessLevel?: true
    report?: true
    issuedAt?: true
    _all?: true
  }

  export type FundingReadinessAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FundingReadiness to aggregate.
     */
    where?: FundingReadinessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FundingReadinesses to fetch.
     */
    orderBy?: FundingReadinessOrderByWithRelationInput | FundingReadinessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FundingReadinessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FundingReadinesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FundingReadinesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FundingReadinesses
    **/
    _count?: true | FundingReadinessCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FundingReadinessAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FundingReadinessSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FundingReadinessMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FundingReadinessMaxAggregateInputType
  }

  export type GetFundingReadinessAggregateType<T extends FundingReadinessAggregateArgs> = {
        [P in keyof T & keyof AggregateFundingReadiness]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFundingReadiness[P]>
      : GetScalarType<T[P], AggregateFundingReadiness[P]>
  }




  export type FundingReadinessGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FundingReadinessWhereInput
    orderBy?: FundingReadinessOrderByWithAggregationInput | FundingReadinessOrderByWithAggregationInput[]
    by: FundingReadinessScalarFieldEnum[] | FundingReadinessScalarFieldEnum
    having?: FundingReadinessScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FundingReadinessCountAggregateInputType | true
    _avg?: FundingReadinessAvgAggregateInputType
    _sum?: FundingReadinessSumAggregateInputType
    _min?: FundingReadinessMinAggregateInputType
    _max?: FundingReadinessMaxAggregateInputType
  }

  export type FundingReadinessGroupByOutputType = {
    id: string
    userId: string
    score: number
    answers: JsonValue
    readinessLevel: string
    report: string
    issuedAt: Date
    _count: FundingReadinessCountAggregateOutputType | null
    _avg: FundingReadinessAvgAggregateOutputType | null
    _sum: FundingReadinessSumAggregateOutputType | null
    _min: FundingReadinessMinAggregateOutputType | null
    _max: FundingReadinessMaxAggregateOutputType | null
  }

  type GetFundingReadinessGroupByPayload<T extends FundingReadinessGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FundingReadinessGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FundingReadinessGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FundingReadinessGroupByOutputType[P]>
            : GetScalarType<T[P], FundingReadinessGroupByOutputType[P]>
        }
      >
    >


  export type FundingReadinessSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    score?: boolean
    answers?: boolean
    readinessLevel?: boolean
    report?: boolean
    issuedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fundingReadiness"]>

  export type FundingReadinessSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    score?: boolean
    answers?: boolean
    readinessLevel?: boolean
    report?: boolean
    issuedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fundingReadiness"]>

  export type FundingReadinessSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    score?: boolean
    answers?: boolean
    readinessLevel?: boolean
    report?: boolean
    issuedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fundingReadiness"]>

  export type FundingReadinessSelectScalar = {
    id?: boolean
    userId?: boolean
    score?: boolean
    answers?: boolean
    readinessLevel?: boolean
    report?: boolean
    issuedAt?: boolean
  }

  export type FundingReadinessOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "score" | "answers" | "readinessLevel" | "report" | "issuedAt", ExtArgs["result"]["fundingReadiness"]>
  export type FundingReadinessInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FundingReadinessIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FundingReadinessIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FundingReadinessPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FundingReadiness"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      score: number
      answers: Prisma.JsonValue
      readinessLevel: string
      report: string
      issuedAt: Date
    }, ExtArgs["result"]["fundingReadiness"]>
    composites: {}
  }

  type FundingReadinessGetPayload<S extends boolean | null | undefined | FundingReadinessDefaultArgs> = $Result.GetResult<Prisma.$FundingReadinessPayload, S>

  type FundingReadinessCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FundingReadinessFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FundingReadinessCountAggregateInputType | true
    }

  export interface FundingReadinessDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FundingReadiness'], meta: { name: 'FundingReadiness' } }
    /**
     * Find zero or one FundingReadiness that matches the filter.
     * @param {FundingReadinessFindUniqueArgs} args - Arguments to find a FundingReadiness
     * @example
     * // Get one FundingReadiness
     * const fundingReadiness = await prisma.fundingReadiness.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FundingReadinessFindUniqueArgs>(args: SelectSubset<T, FundingReadinessFindUniqueArgs<ExtArgs>>): Prisma__FundingReadinessClient<$Result.GetResult<Prisma.$FundingReadinessPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FundingReadiness that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FundingReadinessFindUniqueOrThrowArgs} args - Arguments to find a FundingReadiness
     * @example
     * // Get one FundingReadiness
     * const fundingReadiness = await prisma.fundingReadiness.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FundingReadinessFindUniqueOrThrowArgs>(args: SelectSubset<T, FundingReadinessFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FundingReadinessClient<$Result.GetResult<Prisma.$FundingReadinessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FundingReadiness that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FundingReadinessFindFirstArgs} args - Arguments to find a FundingReadiness
     * @example
     * // Get one FundingReadiness
     * const fundingReadiness = await prisma.fundingReadiness.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FundingReadinessFindFirstArgs>(args?: SelectSubset<T, FundingReadinessFindFirstArgs<ExtArgs>>): Prisma__FundingReadinessClient<$Result.GetResult<Prisma.$FundingReadinessPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FundingReadiness that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FundingReadinessFindFirstOrThrowArgs} args - Arguments to find a FundingReadiness
     * @example
     * // Get one FundingReadiness
     * const fundingReadiness = await prisma.fundingReadiness.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FundingReadinessFindFirstOrThrowArgs>(args?: SelectSubset<T, FundingReadinessFindFirstOrThrowArgs<ExtArgs>>): Prisma__FundingReadinessClient<$Result.GetResult<Prisma.$FundingReadinessPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FundingReadinesses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FundingReadinessFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FundingReadinesses
     * const fundingReadinesses = await prisma.fundingReadiness.findMany()
     * 
     * // Get first 10 FundingReadinesses
     * const fundingReadinesses = await prisma.fundingReadiness.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fundingReadinessWithIdOnly = await prisma.fundingReadiness.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FundingReadinessFindManyArgs>(args?: SelectSubset<T, FundingReadinessFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FundingReadinessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FundingReadiness.
     * @param {FundingReadinessCreateArgs} args - Arguments to create a FundingReadiness.
     * @example
     * // Create one FundingReadiness
     * const FundingReadiness = await prisma.fundingReadiness.create({
     *   data: {
     *     // ... data to create a FundingReadiness
     *   }
     * })
     * 
     */
    create<T extends FundingReadinessCreateArgs>(args: SelectSubset<T, FundingReadinessCreateArgs<ExtArgs>>): Prisma__FundingReadinessClient<$Result.GetResult<Prisma.$FundingReadinessPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FundingReadinesses.
     * @param {FundingReadinessCreateManyArgs} args - Arguments to create many FundingReadinesses.
     * @example
     * // Create many FundingReadinesses
     * const fundingReadiness = await prisma.fundingReadiness.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FundingReadinessCreateManyArgs>(args?: SelectSubset<T, FundingReadinessCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FundingReadinesses and returns the data saved in the database.
     * @param {FundingReadinessCreateManyAndReturnArgs} args - Arguments to create many FundingReadinesses.
     * @example
     * // Create many FundingReadinesses
     * const fundingReadiness = await prisma.fundingReadiness.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FundingReadinesses and only return the `id`
     * const fundingReadinessWithIdOnly = await prisma.fundingReadiness.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FundingReadinessCreateManyAndReturnArgs>(args?: SelectSubset<T, FundingReadinessCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FundingReadinessPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FundingReadiness.
     * @param {FundingReadinessDeleteArgs} args - Arguments to delete one FundingReadiness.
     * @example
     * // Delete one FundingReadiness
     * const FundingReadiness = await prisma.fundingReadiness.delete({
     *   where: {
     *     // ... filter to delete one FundingReadiness
     *   }
     * })
     * 
     */
    delete<T extends FundingReadinessDeleteArgs>(args: SelectSubset<T, FundingReadinessDeleteArgs<ExtArgs>>): Prisma__FundingReadinessClient<$Result.GetResult<Prisma.$FundingReadinessPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FundingReadiness.
     * @param {FundingReadinessUpdateArgs} args - Arguments to update one FundingReadiness.
     * @example
     * // Update one FundingReadiness
     * const fundingReadiness = await prisma.fundingReadiness.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FundingReadinessUpdateArgs>(args: SelectSubset<T, FundingReadinessUpdateArgs<ExtArgs>>): Prisma__FundingReadinessClient<$Result.GetResult<Prisma.$FundingReadinessPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FundingReadinesses.
     * @param {FundingReadinessDeleteManyArgs} args - Arguments to filter FundingReadinesses to delete.
     * @example
     * // Delete a few FundingReadinesses
     * const { count } = await prisma.fundingReadiness.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FundingReadinessDeleteManyArgs>(args?: SelectSubset<T, FundingReadinessDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FundingReadinesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FundingReadinessUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FundingReadinesses
     * const fundingReadiness = await prisma.fundingReadiness.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FundingReadinessUpdateManyArgs>(args: SelectSubset<T, FundingReadinessUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FundingReadinesses and returns the data updated in the database.
     * @param {FundingReadinessUpdateManyAndReturnArgs} args - Arguments to update many FundingReadinesses.
     * @example
     * // Update many FundingReadinesses
     * const fundingReadiness = await prisma.fundingReadiness.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FundingReadinesses and only return the `id`
     * const fundingReadinessWithIdOnly = await prisma.fundingReadiness.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FundingReadinessUpdateManyAndReturnArgs>(args: SelectSubset<T, FundingReadinessUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FundingReadinessPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FundingReadiness.
     * @param {FundingReadinessUpsertArgs} args - Arguments to update or create a FundingReadiness.
     * @example
     * // Update or create a FundingReadiness
     * const fundingReadiness = await prisma.fundingReadiness.upsert({
     *   create: {
     *     // ... data to create a FundingReadiness
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FundingReadiness we want to update
     *   }
     * })
     */
    upsert<T extends FundingReadinessUpsertArgs>(args: SelectSubset<T, FundingReadinessUpsertArgs<ExtArgs>>): Prisma__FundingReadinessClient<$Result.GetResult<Prisma.$FundingReadinessPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FundingReadinesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FundingReadinessCountArgs} args - Arguments to filter FundingReadinesses to count.
     * @example
     * // Count the number of FundingReadinesses
     * const count = await prisma.fundingReadiness.count({
     *   where: {
     *     // ... the filter for the FundingReadinesses we want to count
     *   }
     * })
    **/
    count<T extends FundingReadinessCountArgs>(
      args?: Subset<T, FundingReadinessCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FundingReadinessCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FundingReadiness.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FundingReadinessAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FundingReadinessAggregateArgs>(args: Subset<T, FundingReadinessAggregateArgs>): Prisma.PrismaPromise<GetFundingReadinessAggregateType<T>>

    /**
     * Group by FundingReadiness.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FundingReadinessGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FundingReadinessGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FundingReadinessGroupByArgs['orderBy'] }
        : { orderBy?: FundingReadinessGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FundingReadinessGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFundingReadinessGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FundingReadiness model
   */
  readonly fields: FundingReadinessFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FundingReadiness.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FundingReadinessClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FundingReadiness model
   */
  interface FundingReadinessFieldRefs {
    readonly id: FieldRef<"FundingReadiness", 'String'>
    readonly userId: FieldRef<"FundingReadiness", 'String'>
    readonly score: FieldRef<"FundingReadiness", 'Float'>
    readonly answers: FieldRef<"FundingReadiness", 'Json'>
    readonly readinessLevel: FieldRef<"FundingReadiness", 'String'>
    readonly report: FieldRef<"FundingReadiness", 'String'>
    readonly issuedAt: FieldRef<"FundingReadiness", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FundingReadiness findUnique
   */
  export type FundingReadinessFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundingReadiness
     */
    select?: FundingReadinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FundingReadiness
     */
    omit?: FundingReadinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundingReadinessInclude<ExtArgs> | null
    /**
     * Filter, which FundingReadiness to fetch.
     */
    where: FundingReadinessWhereUniqueInput
  }

  /**
   * FundingReadiness findUniqueOrThrow
   */
  export type FundingReadinessFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundingReadiness
     */
    select?: FundingReadinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FundingReadiness
     */
    omit?: FundingReadinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundingReadinessInclude<ExtArgs> | null
    /**
     * Filter, which FundingReadiness to fetch.
     */
    where: FundingReadinessWhereUniqueInput
  }

  /**
   * FundingReadiness findFirst
   */
  export type FundingReadinessFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundingReadiness
     */
    select?: FundingReadinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FundingReadiness
     */
    omit?: FundingReadinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundingReadinessInclude<ExtArgs> | null
    /**
     * Filter, which FundingReadiness to fetch.
     */
    where?: FundingReadinessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FundingReadinesses to fetch.
     */
    orderBy?: FundingReadinessOrderByWithRelationInput | FundingReadinessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FundingReadinesses.
     */
    cursor?: FundingReadinessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FundingReadinesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FundingReadinesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FundingReadinesses.
     */
    distinct?: FundingReadinessScalarFieldEnum | FundingReadinessScalarFieldEnum[]
  }

  /**
   * FundingReadiness findFirstOrThrow
   */
  export type FundingReadinessFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundingReadiness
     */
    select?: FundingReadinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FundingReadiness
     */
    omit?: FundingReadinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundingReadinessInclude<ExtArgs> | null
    /**
     * Filter, which FundingReadiness to fetch.
     */
    where?: FundingReadinessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FundingReadinesses to fetch.
     */
    orderBy?: FundingReadinessOrderByWithRelationInput | FundingReadinessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FundingReadinesses.
     */
    cursor?: FundingReadinessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FundingReadinesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FundingReadinesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FundingReadinesses.
     */
    distinct?: FundingReadinessScalarFieldEnum | FundingReadinessScalarFieldEnum[]
  }

  /**
   * FundingReadiness findMany
   */
  export type FundingReadinessFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundingReadiness
     */
    select?: FundingReadinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FundingReadiness
     */
    omit?: FundingReadinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundingReadinessInclude<ExtArgs> | null
    /**
     * Filter, which FundingReadinesses to fetch.
     */
    where?: FundingReadinessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FundingReadinesses to fetch.
     */
    orderBy?: FundingReadinessOrderByWithRelationInput | FundingReadinessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FundingReadinesses.
     */
    cursor?: FundingReadinessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FundingReadinesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FundingReadinesses.
     */
    skip?: number
    distinct?: FundingReadinessScalarFieldEnum | FundingReadinessScalarFieldEnum[]
  }

  /**
   * FundingReadiness create
   */
  export type FundingReadinessCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundingReadiness
     */
    select?: FundingReadinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FundingReadiness
     */
    omit?: FundingReadinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundingReadinessInclude<ExtArgs> | null
    /**
     * The data needed to create a FundingReadiness.
     */
    data: XOR<FundingReadinessCreateInput, FundingReadinessUncheckedCreateInput>
  }

  /**
   * FundingReadiness createMany
   */
  export type FundingReadinessCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FundingReadinesses.
     */
    data: FundingReadinessCreateManyInput | FundingReadinessCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FundingReadiness createManyAndReturn
   */
  export type FundingReadinessCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundingReadiness
     */
    select?: FundingReadinessSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FundingReadiness
     */
    omit?: FundingReadinessOmit<ExtArgs> | null
    /**
     * The data used to create many FundingReadinesses.
     */
    data: FundingReadinessCreateManyInput | FundingReadinessCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundingReadinessIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FundingReadiness update
   */
  export type FundingReadinessUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundingReadiness
     */
    select?: FundingReadinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FundingReadiness
     */
    omit?: FundingReadinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundingReadinessInclude<ExtArgs> | null
    /**
     * The data needed to update a FundingReadiness.
     */
    data: XOR<FundingReadinessUpdateInput, FundingReadinessUncheckedUpdateInput>
    /**
     * Choose, which FundingReadiness to update.
     */
    where: FundingReadinessWhereUniqueInput
  }

  /**
   * FundingReadiness updateMany
   */
  export type FundingReadinessUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FundingReadinesses.
     */
    data: XOR<FundingReadinessUpdateManyMutationInput, FundingReadinessUncheckedUpdateManyInput>
    /**
     * Filter which FundingReadinesses to update
     */
    where?: FundingReadinessWhereInput
    /**
     * Limit how many FundingReadinesses to update.
     */
    limit?: number
  }

  /**
   * FundingReadiness updateManyAndReturn
   */
  export type FundingReadinessUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundingReadiness
     */
    select?: FundingReadinessSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FundingReadiness
     */
    omit?: FundingReadinessOmit<ExtArgs> | null
    /**
     * The data used to update FundingReadinesses.
     */
    data: XOR<FundingReadinessUpdateManyMutationInput, FundingReadinessUncheckedUpdateManyInput>
    /**
     * Filter which FundingReadinesses to update
     */
    where?: FundingReadinessWhereInput
    /**
     * Limit how many FundingReadinesses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundingReadinessIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FundingReadiness upsert
   */
  export type FundingReadinessUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundingReadiness
     */
    select?: FundingReadinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FundingReadiness
     */
    omit?: FundingReadinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundingReadinessInclude<ExtArgs> | null
    /**
     * The filter to search for the FundingReadiness to update in case it exists.
     */
    where: FundingReadinessWhereUniqueInput
    /**
     * In case the FundingReadiness found by the `where` argument doesn't exist, create a new FundingReadiness with this data.
     */
    create: XOR<FundingReadinessCreateInput, FundingReadinessUncheckedCreateInput>
    /**
     * In case the FundingReadiness was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FundingReadinessUpdateInput, FundingReadinessUncheckedUpdateInput>
  }

  /**
   * FundingReadiness delete
   */
  export type FundingReadinessDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundingReadiness
     */
    select?: FundingReadinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FundingReadiness
     */
    omit?: FundingReadinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundingReadinessInclude<ExtArgs> | null
    /**
     * Filter which FundingReadiness to delete.
     */
    where: FundingReadinessWhereUniqueInput
  }

  /**
   * FundingReadiness deleteMany
   */
  export type FundingReadinessDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FundingReadinesses to delete
     */
    where?: FundingReadinessWhereInput
    /**
     * Limit how many FundingReadinesses to delete.
     */
    limit?: number
  }

  /**
   * FundingReadiness without action
   */
  export type FundingReadinessDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundingReadiness
     */
    select?: FundingReadinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FundingReadiness
     */
    omit?: FundingReadinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundingReadinessInclude<ExtArgs> | null
  }


  /**
   * Model BusinessPlan
   */

  export type AggregateBusinessPlan = {
    _count: BusinessPlanCountAggregateOutputType | null
    _min: BusinessPlanMinAggregateOutputType | null
    _max: BusinessPlanMaxAggregateOutputType | null
  }

  export type BusinessPlanMinAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    content: string | null
    createdAt: Date | null
  }

  export type BusinessPlanMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    content: string | null
    createdAt: Date | null
  }

  export type BusinessPlanCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    content: number
    createdAt: number
    _all: number
  }


  export type BusinessPlanMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    content?: true
    createdAt?: true
  }

  export type BusinessPlanMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    content?: true
    createdAt?: true
  }

  export type BusinessPlanCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    content?: true
    createdAt?: true
    _all?: true
  }

  export type BusinessPlanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BusinessPlan to aggregate.
     */
    where?: BusinessPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessPlans to fetch.
     */
    orderBy?: BusinessPlanOrderByWithRelationInput | BusinessPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BusinessPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BusinessPlans
    **/
    _count?: true | BusinessPlanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BusinessPlanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BusinessPlanMaxAggregateInputType
  }

  export type GetBusinessPlanAggregateType<T extends BusinessPlanAggregateArgs> = {
        [P in keyof T & keyof AggregateBusinessPlan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBusinessPlan[P]>
      : GetScalarType<T[P], AggregateBusinessPlan[P]>
  }




  export type BusinessPlanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BusinessPlanWhereInput
    orderBy?: BusinessPlanOrderByWithAggregationInput | BusinessPlanOrderByWithAggregationInput[]
    by: BusinessPlanScalarFieldEnum[] | BusinessPlanScalarFieldEnum
    having?: BusinessPlanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BusinessPlanCountAggregateInputType | true
    _min?: BusinessPlanMinAggregateInputType
    _max?: BusinessPlanMaxAggregateInputType
  }

  export type BusinessPlanGroupByOutputType = {
    id: string
    userId: string
    title: string
    content: string
    createdAt: Date
    _count: BusinessPlanCountAggregateOutputType | null
    _min: BusinessPlanMinAggregateOutputType | null
    _max: BusinessPlanMaxAggregateOutputType | null
  }

  type GetBusinessPlanGroupByPayload<T extends BusinessPlanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BusinessPlanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BusinessPlanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BusinessPlanGroupByOutputType[P]>
            : GetScalarType<T[P], BusinessPlanGroupByOutputType[P]>
        }
      >
    >


  export type BusinessPlanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    content?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["businessPlan"]>

  export type BusinessPlanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    content?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["businessPlan"]>

  export type BusinessPlanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    content?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["businessPlan"]>

  export type BusinessPlanSelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    content?: boolean
    createdAt?: boolean
  }

  export type BusinessPlanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "title" | "content" | "createdAt", ExtArgs["result"]["businessPlan"]>
  export type BusinessPlanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BusinessPlanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BusinessPlanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BusinessPlanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BusinessPlan"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      title: string
      content: string
      createdAt: Date
    }, ExtArgs["result"]["businessPlan"]>
    composites: {}
  }

  type BusinessPlanGetPayload<S extends boolean | null | undefined | BusinessPlanDefaultArgs> = $Result.GetResult<Prisma.$BusinessPlanPayload, S>

  type BusinessPlanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BusinessPlanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BusinessPlanCountAggregateInputType | true
    }

  export interface BusinessPlanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BusinessPlan'], meta: { name: 'BusinessPlan' } }
    /**
     * Find zero or one BusinessPlan that matches the filter.
     * @param {BusinessPlanFindUniqueArgs} args - Arguments to find a BusinessPlan
     * @example
     * // Get one BusinessPlan
     * const businessPlan = await prisma.businessPlan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BusinessPlanFindUniqueArgs>(args: SelectSubset<T, BusinessPlanFindUniqueArgs<ExtArgs>>): Prisma__BusinessPlanClient<$Result.GetResult<Prisma.$BusinessPlanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BusinessPlan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BusinessPlanFindUniqueOrThrowArgs} args - Arguments to find a BusinessPlan
     * @example
     * // Get one BusinessPlan
     * const businessPlan = await prisma.businessPlan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BusinessPlanFindUniqueOrThrowArgs>(args: SelectSubset<T, BusinessPlanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BusinessPlanClient<$Result.GetResult<Prisma.$BusinessPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BusinessPlan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessPlanFindFirstArgs} args - Arguments to find a BusinessPlan
     * @example
     * // Get one BusinessPlan
     * const businessPlan = await prisma.businessPlan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BusinessPlanFindFirstArgs>(args?: SelectSubset<T, BusinessPlanFindFirstArgs<ExtArgs>>): Prisma__BusinessPlanClient<$Result.GetResult<Prisma.$BusinessPlanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BusinessPlan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessPlanFindFirstOrThrowArgs} args - Arguments to find a BusinessPlan
     * @example
     * // Get one BusinessPlan
     * const businessPlan = await prisma.businessPlan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BusinessPlanFindFirstOrThrowArgs>(args?: SelectSubset<T, BusinessPlanFindFirstOrThrowArgs<ExtArgs>>): Prisma__BusinessPlanClient<$Result.GetResult<Prisma.$BusinessPlanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BusinessPlans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessPlanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BusinessPlans
     * const businessPlans = await prisma.businessPlan.findMany()
     * 
     * // Get first 10 BusinessPlans
     * const businessPlans = await prisma.businessPlan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const businessPlanWithIdOnly = await prisma.businessPlan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BusinessPlanFindManyArgs>(args?: SelectSubset<T, BusinessPlanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BusinessPlan.
     * @param {BusinessPlanCreateArgs} args - Arguments to create a BusinessPlan.
     * @example
     * // Create one BusinessPlan
     * const BusinessPlan = await prisma.businessPlan.create({
     *   data: {
     *     // ... data to create a BusinessPlan
     *   }
     * })
     * 
     */
    create<T extends BusinessPlanCreateArgs>(args: SelectSubset<T, BusinessPlanCreateArgs<ExtArgs>>): Prisma__BusinessPlanClient<$Result.GetResult<Prisma.$BusinessPlanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BusinessPlans.
     * @param {BusinessPlanCreateManyArgs} args - Arguments to create many BusinessPlans.
     * @example
     * // Create many BusinessPlans
     * const businessPlan = await prisma.businessPlan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BusinessPlanCreateManyArgs>(args?: SelectSubset<T, BusinessPlanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BusinessPlans and returns the data saved in the database.
     * @param {BusinessPlanCreateManyAndReturnArgs} args - Arguments to create many BusinessPlans.
     * @example
     * // Create many BusinessPlans
     * const businessPlan = await prisma.businessPlan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BusinessPlans and only return the `id`
     * const businessPlanWithIdOnly = await prisma.businessPlan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BusinessPlanCreateManyAndReturnArgs>(args?: SelectSubset<T, BusinessPlanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessPlanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BusinessPlan.
     * @param {BusinessPlanDeleteArgs} args - Arguments to delete one BusinessPlan.
     * @example
     * // Delete one BusinessPlan
     * const BusinessPlan = await prisma.businessPlan.delete({
     *   where: {
     *     // ... filter to delete one BusinessPlan
     *   }
     * })
     * 
     */
    delete<T extends BusinessPlanDeleteArgs>(args: SelectSubset<T, BusinessPlanDeleteArgs<ExtArgs>>): Prisma__BusinessPlanClient<$Result.GetResult<Prisma.$BusinessPlanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BusinessPlan.
     * @param {BusinessPlanUpdateArgs} args - Arguments to update one BusinessPlan.
     * @example
     * // Update one BusinessPlan
     * const businessPlan = await prisma.businessPlan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BusinessPlanUpdateArgs>(args: SelectSubset<T, BusinessPlanUpdateArgs<ExtArgs>>): Prisma__BusinessPlanClient<$Result.GetResult<Prisma.$BusinessPlanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BusinessPlans.
     * @param {BusinessPlanDeleteManyArgs} args - Arguments to filter BusinessPlans to delete.
     * @example
     * // Delete a few BusinessPlans
     * const { count } = await prisma.businessPlan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BusinessPlanDeleteManyArgs>(args?: SelectSubset<T, BusinessPlanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BusinessPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessPlanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BusinessPlans
     * const businessPlan = await prisma.businessPlan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BusinessPlanUpdateManyArgs>(args: SelectSubset<T, BusinessPlanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BusinessPlans and returns the data updated in the database.
     * @param {BusinessPlanUpdateManyAndReturnArgs} args - Arguments to update many BusinessPlans.
     * @example
     * // Update many BusinessPlans
     * const businessPlan = await prisma.businessPlan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BusinessPlans and only return the `id`
     * const businessPlanWithIdOnly = await prisma.businessPlan.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BusinessPlanUpdateManyAndReturnArgs>(args: SelectSubset<T, BusinessPlanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessPlanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BusinessPlan.
     * @param {BusinessPlanUpsertArgs} args - Arguments to update or create a BusinessPlan.
     * @example
     * // Update or create a BusinessPlan
     * const businessPlan = await prisma.businessPlan.upsert({
     *   create: {
     *     // ... data to create a BusinessPlan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BusinessPlan we want to update
     *   }
     * })
     */
    upsert<T extends BusinessPlanUpsertArgs>(args: SelectSubset<T, BusinessPlanUpsertArgs<ExtArgs>>): Prisma__BusinessPlanClient<$Result.GetResult<Prisma.$BusinessPlanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BusinessPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessPlanCountArgs} args - Arguments to filter BusinessPlans to count.
     * @example
     * // Count the number of BusinessPlans
     * const count = await prisma.businessPlan.count({
     *   where: {
     *     // ... the filter for the BusinessPlans we want to count
     *   }
     * })
    **/
    count<T extends BusinessPlanCountArgs>(
      args?: Subset<T, BusinessPlanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BusinessPlanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BusinessPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessPlanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BusinessPlanAggregateArgs>(args: Subset<T, BusinessPlanAggregateArgs>): Prisma.PrismaPromise<GetBusinessPlanAggregateType<T>>

    /**
     * Group by BusinessPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessPlanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BusinessPlanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BusinessPlanGroupByArgs['orderBy'] }
        : { orderBy?: BusinessPlanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BusinessPlanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBusinessPlanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BusinessPlan model
   */
  readonly fields: BusinessPlanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BusinessPlan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BusinessPlanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BusinessPlan model
   */
  interface BusinessPlanFieldRefs {
    readonly id: FieldRef<"BusinessPlan", 'String'>
    readonly userId: FieldRef<"BusinessPlan", 'String'>
    readonly title: FieldRef<"BusinessPlan", 'String'>
    readonly content: FieldRef<"BusinessPlan", 'String'>
    readonly createdAt: FieldRef<"BusinessPlan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BusinessPlan findUnique
   */
  export type BusinessPlanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessPlan
     */
    select?: BusinessPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessPlan
     */
    omit?: BusinessPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessPlanInclude<ExtArgs> | null
    /**
     * Filter, which BusinessPlan to fetch.
     */
    where: BusinessPlanWhereUniqueInput
  }

  /**
   * BusinessPlan findUniqueOrThrow
   */
  export type BusinessPlanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessPlan
     */
    select?: BusinessPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessPlan
     */
    omit?: BusinessPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessPlanInclude<ExtArgs> | null
    /**
     * Filter, which BusinessPlan to fetch.
     */
    where: BusinessPlanWhereUniqueInput
  }

  /**
   * BusinessPlan findFirst
   */
  export type BusinessPlanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessPlan
     */
    select?: BusinessPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessPlan
     */
    omit?: BusinessPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessPlanInclude<ExtArgs> | null
    /**
     * Filter, which BusinessPlan to fetch.
     */
    where?: BusinessPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessPlans to fetch.
     */
    orderBy?: BusinessPlanOrderByWithRelationInput | BusinessPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BusinessPlans.
     */
    cursor?: BusinessPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BusinessPlans.
     */
    distinct?: BusinessPlanScalarFieldEnum | BusinessPlanScalarFieldEnum[]
  }

  /**
   * BusinessPlan findFirstOrThrow
   */
  export type BusinessPlanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessPlan
     */
    select?: BusinessPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessPlan
     */
    omit?: BusinessPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessPlanInclude<ExtArgs> | null
    /**
     * Filter, which BusinessPlan to fetch.
     */
    where?: BusinessPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessPlans to fetch.
     */
    orderBy?: BusinessPlanOrderByWithRelationInput | BusinessPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BusinessPlans.
     */
    cursor?: BusinessPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BusinessPlans.
     */
    distinct?: BusinessPlanScalarFieldEnum | BusinessPlanScalarFieldEnum[]
  }

  /**
   * BusinessPlan findMany
   */
  export type BusinessPlanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessPlan
     */
    select?: BusinessPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessPlan
     */
    omit?: BusinessPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessPlanInclude<ExtArgs> | null
    /**
     * Filter, which BusinessPlans to fetch.
     */
    where?: BusinessPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessPlans to fetch.
     */
    orderBy?: BusinessPlanOrderByWithRelationInput | BusinessPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BusinessPlans.
     */
    cursor?: BusinessPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessPlans.
     */
    skip?: number
    distinct?: BusinessPlanScalarFieldEnum | BusinessPlanScalarFieldEnum[]
  }

  /**
   * BusinessPlan create
   */
  export type BusinessPlanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessPlan
     */
    select?: BusinessPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessPlan
     */
    omit?: BusinessPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessPlanInclude<ExtArgs> | null
    /**
     * The data needed to create a BusinessPlan.
     */
    data: XOR<BusinessPlanCreateInput, BusinessPlanUncheckedCreateInput>
  }

  /**
   * BusinessPlan createMany
   */
  export type BusinessPlanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BusinessPlans.
     */
    data: BusinessPlanCreateManyInput | BusinessPlanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BusinessPlan createManyAndReturn
   */
  export type BusinessPlanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessPlan
     */
    select?: BusinessPlanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessPlan
     */
    omit?: BusinessPlanOmit<ExtArgs> | null
    /**
     * The data used to create many BusinessPlans.
     */
    data: BusinessPlanCreateManyInput | BusinessPlanCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessPlanIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BusinessPlan update
   */
  export type BusinessPlanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessPlan
     */
    select?: BusinessPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessPlan
     */
    omit?: BusinessPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessPlanInclude<ExtArgs> | null
    /**
     * The data needed to update a BusinessPlan.
     */
    data: XOR<BusinessPlanUpdateInput, BusinessPlanUncheckedUpdateInput>
    /**
     * Choose, which BusinessPlan to update.
     */
    where: BusinessPlanWhereUniqueInput
  }

  /**
   * BusinessPlan updateMany
   */
  export type BusinessPlanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BusinessPlans.
     */
    data: XOR<BusinessPlanUpdateManyMutationInput, BusinessPlanUncheckedUpdateManyInput>
    /**
     * Filter which BusinessPlans to update
     */
    where?: BusinessPlanWhereInput
    /**
     * Limit how many BusinessPlans to update.
     */
    limit?: number
  }

  /**
   * BusinessPlan updateManyAndReturn
   */
  export type BusinessPlanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessPlan
     */
    select?: BusinessPlanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessPlan
     */
    omit?: BusinessPlanOmit<ExtArgs> | null
    /**
     * The data used to update BusinessPlans.
     */
    data: XOR<BusinessPlanUpdateManyMutationInput, BusinessPlanUncheckedUpdateManyInput>
    /**
     * Filter which BusinessPlans to update
     */
    where?: BusinessPlanWhereInput
    /**
     * Limit how many BusinessPlans to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessPlanIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BusinessPlan upsert
   */
  export type BusinessPlanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessPlan
     */
    select?: BusinessPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessPlan
     */
    omit?: BusinessPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessPlanInclude<ExtArgs> | null
    /**
     * The filter to search for the BusinessPlan to update in case it exists.
     */
    where: BusinessPlanWhereUniqueInput
    /**
     * In case the BusinessPlan found by the `where` argument doesn't exist, create a new BusinessPlan with this data.
     */
    create: XOR<BusinessPlanCreateInput, BusinessPlanUncheckedCreateInput>
    /**
     * In case the BusinessPlan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BusinessPlanUpdateInput, BusinessPlanUncheckedUpdateInput>
  }

  /**
   * BusinessPlan delete
   */
  export type BusinessPlanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessPlan
     */
    select?: BusinessPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessPlan
     */
    omit?: BusinessPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessPlanInclude<ExtArgs> | null
    /**
     * Filter which BusinessPlan to delete.
     */
    where: BusinessPlanWhereUniqueInput
  }

  /**
   * BusinessPlan deleteMany
   */
  export type BusinessPlanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BusinessPlans to delete
     */
    where?: BusinessPlanWhereInput
    /**
     * Limit how many BusinessPlans to delete.
     */
    limit?: number
  }

  /**
   * BusinessPlan without action
   */
  export type BusinessPlanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessPlan
     */
    select?: BusinessPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessPlan
     */
    omit?: BusinessPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessPlanInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    authUserId: 'authUserId',
    email: 'email',
    name: 'name',
    imageUrl: 'imageUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const BusinessInsightScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    businessName: 'businessName',
    industry: 'industry',
    subSegment: 'subSegment',
    businessModel: 'businessModel',
    customerType: 'customerType',
    annualRevenue: 'annualRevenue',
    employeeCount: 'employeeCount',
    topProducts: 'topProducts',
    marketType: 'marketType',
    businessChallenges: 'businessChallenges',
    desirability: 'desirability',
    feasibility: 'feasibility',
    viability: 'viability'
  };

  export type BusinessInsightScalarFieldEnum = (typeof BusinessInsightScalarFieldEnum)[keyof typeof BusinessInsightScalarFieldEnum]


  export const AssessmentScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    score: 'score',
    answers: 'answers',
    maturityLevel: 'maturityLevel',
    report: 'report',
    dateTaken: 'dateTaken'
  };

  export type AssessmentScalarFieldEnum = (typeof AssessmentScalarFieldEnum)[keyof typeof AssessmentScalarFieldEnum]


  export const FundingReadinessScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    score: 'score',
    answers: 'answers',
    readinessLevel: 'readinessLevel',
    report: 'report',
    issuedAt: 'issuedAt'
  };

  export type FundingReadinessScalarFieldEnum = (typeof FundingReadinessScalarFieldEnum)[keyof typeof FundingReadinessScalarFieldEnum]


  export const BusinessPlanScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    content: 'content',
    createdAt: 'createdAt'
  };

  export type BusinessPlanScalarFieldEnum = (typeof BusinessPlanScalarFieldEnum)[keyof typeof BusinessPlanScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    authUserId?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    imageUrl?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    businessInsight?: XOR<BusinessInsightNullableScalarRelationFilter, BusinessInsightWhereInput> | null
    assessments?: AssessmentListRelationFilter
    fundingReadiness?: FundingReadinessListRelationFilter
    businessPlans?: BusinessPlanListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    authUserId?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    businessInsight?: BusinessInsightOrderByWithRelationInput
    assessments?: AssessmentOrderByRelationAggregateInput
    fundingReadiness?: FundingReadinessOrderByRelationAggregateInput
    businessPlans?: BusinessPlanOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    authUserId?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    imageUrl?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    businessInsight?: XOR<BusinessInsightNullableScalarRelationFilter, BusinessInsightWhereInput> | null
    assessments?: AssessmentListRelationFilter
    fundingReadiness?: FundingReadinessListRelationFilter
    businessPlans?: BusinessPlanListRelationFilter
  }, "id" | "authUserId" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    authUserId?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    authUserId?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type BusinessInsightWhereInput = {
    AND?: BusinessInsightWhereInput | BusinessInsightWhereInput[]
    OR?: BusinessInsightWhereInput[]
    NOT?: BusinessInsightWhereInput | BusinessInsightWhereInput[]
    id?: StringFilter<"BusinessInsight"> | string
    userId?: StringFilter<"BusinessInsight"> | string
    businessName?: StringFilter<"BusinessInsight"> | string
    industry?: StringFilter<"BusinessInsight"> | string
    subSegment?: StringFilter<"BusinessInsight"> | string
    businessModel?: StringFilter<"BusinessInsight"> | string
    customerType?: StringFilter<"BusinessInsight"> | string
    annualRevenue?: StringFilter<"BusinessInsight"> | string
    employeeCount?: IntFilter<"BusinessInsight"> | number
    topProducts?: StringNullableListFilter<"BusinessInsight">
    marketType?: StringFilter<"BusinessInsight"> | string
    businessChallenges?: StringNullableListFilter<"BusinessInsight">
    desirability?: JsonNullableFilter<"BusinessInsight">
    feasibility?: JsonNullableFilter<"BusinessInsight">
    viability?: JsonNullableFilter<"BusinessInsight">
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type BusinessInsightOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    businessName?: SortOrder
    industry?: SortOrder
    subSegment?: SortOrder
    businessModel?: SortOrder
    customerType?: SortOrder
    annualRevenue?: SortOrder
    employeeCount?: SortOrder
    topProducts?: SortOrder
    marketType?: SortOrder
    businessChallenges?: SortOrder
    desirability?: SortOrderInput | SortOrder
    feasibility?: SortOrderInput | SortOrder
    viability?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type BusinessInsightWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: BusinessInsightWhereInput | BusinessInsightWhereInput[]
    OR?: BusinessInsightWhereInput[]
    NOT?: BusinessInsightWhereInput | BusinessInsightWhereInput[]
    businessName?: StringFilter<"BusinessInsight"> | string
    industry?: StringFilter<"BusinessInsight"> | string
    subSegment?: StringFilter<"BusinessInsight"> | string
    businessModel?: StringFilter<"BusinessInsight"> | string
    customerType?: StringFilter<"BusinessInsight"> | string
    annualRevenue?: StringFilter<"BusinessInsight"> | string
    employeeCount?: IntFilter<"BusinessInsight"> | number
    topProducts?: StringNullableListFilter<"BusinessInsight">
    marketType?: StringFilter<"BusinessInsight"> | string
    businessChallenges?: StringNullableListFilter<"BusinessInsight">
    desirability?: JsonNullableFilter<"BusinessInsight">
    feasibility?: JsonNullableFilter<"BusinessInsight">
    viability?: JsonNullableFilter<"BusinessInsight">
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type BusinessInsightOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    businessName?: SortOrder
    industry?: SortOrder
    subSegment?: SortOrder
    businessModel?: SortOrder
    customerType?: SortOrder
    annualRevenue?: SortOrder
    employeeCount?: SortOrder
    topProducts?: SortOrder
    marketType?: SortOrder
    businessChallenges?: SortOrder
    desirability?: SortOrderInput | SortOrder
    feasibility?: SortOrderInput | SortOrder
    viability?: SortOrderInput | SortOrder
    _count?: BusinessInsightCountOrderByAggregateInput
    _avg?: BusinessInsightAvgOrderByAggregateInput
    _max?: BusinessInsightMaxOrderByAggregateInput
    _min?: BusinessInsightMinOrderByAggregateInput
    _sum?: BusinessInsightSumOrderByAggregateInput
  }

  export type BusinessInsightScalarWhereWithAggregatesInput = {
    AND?: BusinessInsightScalarWhereWithAggregatesInput | BusinessInsightScalarWhereWithAggregatesInput[]
    OR?: BusinessInsightScalarWhereWithAggregatesInput[]
    NOT?: BusinessInsightScalarWhereWithAggregatesInput | BusinessInsightScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BusinessInsight"> | string
    userId?: StringWithAggregatesFilter<"BusinessInsight"> | string
    businessName?: StringWithAggregatesFilter<"BusinessInsight"> | string
    industry?: StringWithAggregatesFilter<"BusinessInsight"> | string
    subSegment?: StringWithAggregatesFilter<"BusinessInsight"> | string
    businessModel?: StringWithAggregatesFilter<"BusinessInsight"> | string
    customerType?: StringWithAggregatesFilter<"BusinessInsight"> | string
    annualRevenue?: StringWithAggregatesFilter<"BusinessInsight"> | string
    employeeCount?: IntWithAggregatesFilter<"BusinessInsight"> | number
    topProducts?: StringNullableListFilter<"BusinessInsight">
    marketType?: StringWithAggregatesFilter<"BusinessInsight"> | string
    businessChallenges?: StringNullableListFilter<"BusinessInsight">
    desirability?: JsonNullableWithAggregatesFilter<"BusinessInsight">
    feasibility?: JsonNullableWithAggregatesFilter<"BusinessInsight">
    viability?: JsonNullableWithAggregatesFilter<"BusinessInsight">
  }

  export type AssessmentWhereInput = {
    AND?: AssessmentWhereInput | AssessmentWhereInput[]
    OR?: AssessmentWhereInput[]
    NOT?: AssessmentWhereInput | AssessmentWhereInput[]
    id?: StringFilter<"Assessment"> | string
    userId?: StringFilter<"Assessment"> | string
    score?: FloatFilter<"Assessment"> | number
    answers?: JsonFilter<"Assessment">
    maturityLevel?: StringFilter<"Assessment"> | string
    report?: StringFilter<"Assessment"> | string
    dateTaken?: DateTimeFilter<"Assessment"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AssessmentOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    score?: SortOrder
    answers?: SortOrder
    maturityLevel?: SortOrder
    report?: SortOrder
    dateTaken?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AssessmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AssessmentWhereInput | AssessmentWhereInput[]
    OR?: AssessmentWhereInput[]
    NOT?: AssessmentWhereInput | AssessmentWhereInput[]
    userId?: StringFilter<"Assessment"> | string
    score?: FloatFilter<"Assessment"> | number
    answers?: JsonFilter<"Assessment">
    maturityLevel?: StringFilter<"Assessment"> | string
    report?: StringFilter<"Assessment"> | string
    dateTaken?: DateTimeFilter<"Assessment"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AssessmentOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    score?: SortOrder
    answers?: SortOrder
    maturityLevel?: SortOrder
    report?: SortOrder
    dateTaken?: SortOrder
    _count?: AssessmentCountOrderByAggregateInput
    _avg?: AssessmentAvgOrderByAggregateInput
    _max?: AssessmentMaxOrderByAggregateInput
    _min?: AssessmentMinOrderByAggregateInput
    _sum?: AssessmentSumOrderByAggregateInput
  }

  export type AssessmentScalarWhereWithAggregatesInput = {
    AND?: AssessmentScalarWhereWithAggregatesInput | AssessmentScalarWhereWithAggregatesInput[]
    OR?: AssessmentScalarWhereWithAggregatesInput[]
    NOT?: AssessmentScalarWhereWithAggregatesInput | AssessmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Assessment"> | string
    userId?: StringWithAggregatesFilter<"Assessment"> | string
    score?: FloatWithAggregatesFilter<"Assessment"> | number
    answers?: JsonWithAggregatesFilter<"Assessment">
    maturityLevel?: StringWithAggregatesFilter<"Assessment"> | string
    report?: StringWithAggregatesFilter<"Assessment"> | string
    dateTaken?: DateTimeWithAggregatesFilter<"Assessment"> | Date | string
  }

  export type FundingReadinessWhereInput = {
    AND?: FundingReadinessWhereInput | FundingReadinessWhereInput[]
    OR?: FundingReadinessWhereInput[]
    NOT?: FundingReadinessWhereInput | FundingReadinessWhereInput[]
    id?: StringFilter<"FundingReadiness"> | string
    userId?: StringFilter<"FundingReadiness"> | string
    score?: FloatFilter<"FundingReadiness"> | number
    answers?: JsonFilter<"FundingReadiness">
    readinessLevel?: StringFilter<"FundingReadiness"> | string
    report?: StringFilter<"FundingReadiness"> | string
    issuedAt?: DateTimeFilter<"FundingReadiness"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type FundingReadinessOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    score?: SortOrder
    answers?: SortOrder
    readinessLevel?: SortOrder
    report?: SortOrder
    issuedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type FundingReadinessWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FundingReadinessWhereInput | FundingReadinessWhereInput[]
    OR?: FundingReadinessWhereInput[]
    NOT?: FundingReadinessWhereInput | FundingReadinessWhereInput[]
    userId?: StringFilter<"FundingReadiness"> | string
    score?: FloatFilter<"FundingReadiness"> | number
    answers?: JsonFilter<"FundingReadiness">
    readinessLevel?: StringFilter<"FundingReadiness"> | string
    report?: StringFilter<"FundingReadiness"> | string
    issuedAt?: DateTimeFilter<"FundingReadiness"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type FundingReadinessOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    score?: SortOrder
    answers?: SortOrder
    readinessLevel?: SortOrder
    report?: SortOrder
    issuedAt?: SortOrder
    _count?: FundingReadinessCountOrderByAggregateInput
    _avg?: FundingReadinessAvgOrderByAggregateInput
    _max?: FundingReadinessMaxOrderByAggregateInput
    _min?: FundingReadinessMinOrderByAggregateInput
    _sum?: FundingReadinessSumOrderByAggregateInput
  }

  export type FundingReadinessScalarWhereWithAggregatesInput = {
    AND?: FundingReadinessScalarWhereWithAggregatesInput | FundingReadinessScalarWhereWithAggregatesInput[]
    OR?: FundingReadinessScalarWhereWithAggregatesInput[]
    NOT?: FundingReadinessScalarWhereWithAggregatesInput | FundingReadinessScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FundingReadiness"> | string
    userId?: StringWithAggregatesFilter<"FundingReadiness"> | string
    score?: FloatWithAggregatesFilter<"FundingReadiness"> | number
    answers?: JsonWithAggregatesFilter<"FundingReadiness">
    readinessLevel?: StringWithAggregatesFilter<"FundingReadiness"> | string
    report?: StringWithAggregatesFilter<"FundingReadiness"> | string
    issuedAt?: DateTimeWithAggregatesFilter<"FundingReadiness"> | Date | string
  }

  export type BusinessPlanWhereInput = {
    AND?: BusinessPlanWhereInput | BusinessPlanWhereInput[]
    OR?: BusinessPlanWhereInput[]
    NOT?: BusinessPlanWhereInput | BusinessPlanWhereInput[]
    id?: StringFilter<"BusinessPlan"> | string
    userId?: StringFilter<"BusinessPlan"> | string
    title?: StringFilter<"BusinessPlan"> | string
    content?: StringFilter<"BusinessPlan"> | string
    createdAt?: DateTimeFilter<"BusinessPlan"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type BusinessPlanOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type BusinessPlanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BusinessPlanWhereInput | BusinessPlanWhereInput[]
    OR?: BusinessPlanWhereInput[]
    NOT?: BusinessPlanWhereInput | BusinessPlanWhereInput[]
    userId?: StringFilter<"BusinessPlan"> | string
    title?: StringFilter<"BusinessPlan"> | string
    content?: StringFilter<"BusinessPlan"> | string
    createdAt?: DateTimeFilter<"BusinessPlan"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type BusinessPlanOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    _count?: BusinessPlanCountOrderByAggregateInput
    _max?: BusinessPlanMaxOrderByAggregateInput
    _min?: BusinessPlanMinOrderByAggregateInput
  }

  export type BusinessPlanScalarWhereWithAggregatesInput = {
    AND?: BusinessPlanScalarWhereWithAggregatesInput | BusinessPlanScalarWhereWithAggregatesInput[]
    OR?: BusinessPlanScalarWhereWithAggregatesInput[]
    NOT?: BusinessPlanScalarWhereWithAggregatesInput | BusinessPlanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BusinessPlan"> | string
    userId?: StringWithAggregatesFilter<"BusinessPlan"> | string
    title?: StringWithAggregatesFilter<"BusinessPlan"> | string
    content?: StringWithAggregatesFilter<"BusinessPlan"> | string
    createdAt?: DateTimeWithAggregatesFilter<"BusinessPlan"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    authUserId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    businessInsight?: BusinessInsightCreateNestedOneWithoutUserInput
    assessments?: AssessmentCreateNestedManyWithoutUserInput
    fundingReadiness?: FundingReadinessCreateNestedManyWithoutUserInput
    businessPlans?: BusinessPlanCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    authUserId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    businessInsight?: BusinessInsightUncheckedCreateNestedOneWithoutUserInput
    assessments?: AssessmentUncheckedCreateNestedManyWithoutUserInput
    fundingReadiness?: FundingReadinessUncheckedCreateNestedManyWithoutUserInput
    businessPlans?: BusinessPlanUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    authUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    businessInsight?: BusinessInsightUpdateOneWithoutUserNestedInput
    assessments?: AssessmentUpdateManyWithoutUserNestedInput
    fundingReadiness?: FundingReadinessUpdateManyWithoutUserNestedInput
    businessPlans?: BusinessPlanUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    authUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    businessInsight?: BusinessInsightUncheckedUpdateOneWithoutUserNestedInput
    assessments?: AssessmentUncheckedUpdateManyWithoutUserNestedInput
    fundingReadiness?: FundingReadinessUncheckedUpdateManyWithoutUserNestedInput
    businessPlans?: BusinessPlanUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    authUserId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    authUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    authUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusinessInsightCreateInput = {
    id?: string
    businessName: string
    industry: string
    subSegment: string
    businessModel: string
    customerType: string
    annualRevenue: string
    employeeCount: number
    topProducts?: BusinessInsightCreatetopProductsInput | string[]
    marketType: string
    businessChallenges?: BusinessInsightCreatebusinessChallengesInput | string[]
    desirability?: NullableJsonNullValueInput | InputJsonValue
    feasibility?: NullableJsonNullValueInput | InputJsonValue
    viability?: NullableJsonNullValueInput | InputJsonValue
    user: UserCreateNestedOneWithoutBusinessInsightInput
  }

  export type BusinessInsightUncheckedCreateInput = {
    id?: string
    userId: string
    businessName: string
    industry: string
    subSegment: string
    businessModel: string
    customerType: string
    annualRevenue: string
    employeeCount: number
    topProducts?: BusinessInsightCreatetopProductsInput | string[]
    marketType: string
    businessChallenges?: BusinessInsightCreatebusinessChallengesInput | string[]
    desirability?: NullableJsonNullValueInput | InputJsonValue
    feasibility?: NullableJsonNullValueInput | InputJsonValue
    viability?: NullableJsonNullValueInput | InputJsonValue
  }

  export type BusinessInsightUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessName?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    subSegment?: StringFieldUpdateOperationsInput | string
    businessModel?: StringFieldUpdateOperationsInput | string
    customerType?: StringFieldUpdateOperationsInput | string
    annualRevenue?: StringFieldUpdateOperationsInput | string
    employeeCount?: IntFieldUpdateOperationsInput | number
    topProducts?: BusinessInsightUpdatetopProductsInput | string[]
    marketType?: StringFieldUpdateOperationsInput | string
    businessChallenges?: BusinessInsightUpdatebusinessChallengesInput | string[]
    desirability?: NullableJsonNullValueInput | InputJsonValue
    feasibility?: NullableJsonNullValueInput | InputJsonValue
    viability?: NullableJsonNullValueInput | InputJsonValue
    user?: UserUpdateOneRequiredWithoutBusinessInsightNestedInput
  }

  export type BusinessInsightUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    businessName?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    subSegment?: StringFieldUpdateOperationsInput | string
    businessModel?: StringFieldUpdateOperationsInput | string
    customerType?: StringFieldUpdateOperationsInput | string
    annualRevenue?: StringFieldUpdateOperationsInput | string
    employeeCount?: IntFieldUpdateOperationsInput | number
    topProducts?: BusinessInsightUpdatetopProductsInput | string[]
    marketType?: StringFieldUpdateOperationsInput | string
    businessChallenges?: BusinessInsightUpdatebusinessChallengesInput | string[]
    desirability?: NullableJsonNullValueInput | InputJsonValue
    feasibility?: NullableJsonNullValueInput | InputJsonValue
    viability?: NullableJsonNullValueInput | InputJsonValue
  }

  export type BusinessInsightCreateManyInput = {
    id?: string
    userId: string
    businessName: string
    industry: string
    subSegment: string
    businessModel: string
    customerType: string
    annualRevenue: string
    employeeCount: number
    topProducts?: BusinessInsightCreatetopProductsInput | string[]
    marketType: string
    businessChallenges?: BusinessInsightCreatebusinessChallengesInput | string[]
    desirability?: NullableJsonNullValueInput | InputJsonValue
    feasibility?: NullableJsonNullValueInput | InputJsonValue
    viability?: NullableJsonNullValueInput | InputJsonValue
  }

  export type BusinessInsightUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessName?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    subSegment?: StringFieldUpdateOperationsInput | string
    businessModel?: StringFieldUpdateOperationsInput | string
    customerType?: StringFieldUpdateOperationsInput | string
    annualRevenue?: StringFieldUpdateOperationsInput | string
    employeeCount?: IntFieldUpdateOperationsInput | number
    topProducts?: BusinessInsightUpdatetopProductsInput | string[]
    marketType?: StringFieldUpdateOperationsInput | string
    businessChallenges?: BusinessInsightUpdatebusinessChallengesInput | string[]
    desirability?: NullableJsonNullValueInput | InputJsonValue
    feasibility?: NullableJsonNullValueInput | InputJsonValue
    viability?: NullableJsonNullValueInput | InputJsonValue
  }

  export type BusinessInsightUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    businessName?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    subSegment?: StringFieldUpdateOperationsInput | string
    businessModel?: StringFieldUpdateOperationsInput | string
    customerType?: StringFieldUpdateOperationsInput | string
    annualRevenue?: StringFieldUpdateOperationsInput | string
    employeeCount?: IntFieldUpdateOperationsInput | number
    topProducts?: BusinessInsightUpdatetopProductsInput | string[]
    marketType?: StringFieldUpdateOperationsInput | string
    businessChallenges?: BusinessInsightUpdatebusinessChallengesInput | string[]
    desirability?: NullableJsonNullValueInput | InputJsonValue
    feasibility?: NullableJsonNullValueInput | InputJsonValue
    viability?: NullableJsonNullValueInput | InputJsonValue
  }

  export type AssessmentCreateInput = {
    id?: string
    score: number
    answers: JsonNullValueInput | InputJsonValue
    maturityLevel: string
    report: string
    dateTaken?: Date | string
    user: UserCreateNestedOneWithoutAssessmentsInput
  }

  export type AssessmentUncheckedCreateInput = {
    id?: string
    userId: string
    score: number
    answers: JsonNullValueInput | InputJsonValue
    maturityLevel: string
    report: string
    dateTaken?: Date | string
  }

  export type AssessmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    answers?: JsonNullValueInput | InputJsonValue
    maturityLevel?: StringFieldUpdateOperationsInput | string
    report?: StringFieldUpdateOperationsInput | string
    dateTaken?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAssessmentsNestedInput
  }

  export type AssessmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    answers?: JsonNullValueInput | InputJsonValue
    maturityLevel?: StringFieldUpdateOperationsInput | string
    report?: StringFieldUpdateOperationsInput | string
    dateTaken?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssessmentCreateManyInput = {
    id?: string
    userId: string
    score: number
    answers: JsonNullValueInput | InputJsonValue
    maturityLevel: string
    report: string
    dateTaken?: Date | string
  }

  export type AssessmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    answers?: JsonNullValueInput | InputJsonValue
    maturityLevel?: StringFieldUpdateOperationsInput | string
    report?: StringFieldUpdateOperationsInput | string
    dateTaken?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssessmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    answers?: JsonNullValueInput | InputJsonValue
    maturityLevel?: StringFieldUpdateOperationsInput | string
    report?: StringFieldUpdateOperationsInput | string
    dateTaken?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FundingReadinessCreateInput = {
    id?: string
    score: number
    answers: JsonNullValueInput | InputJsonValue
    readinessLevel: string
    report: string
    issuedAt?: Date | string
    user: UserCreateNestedOneWithoutFundingReadinessInput
  }

  export type FundingReadinessUncheckedCreateInput = {
    id?: string
    userId: string
    score: number
    answers: JsonNullValueInput | InputJsonValue
    readinessLevel: string
    report: string
    issuedAt?: Date | string
  }

  export type FundingReadinessUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    answers?: JsonNullValueInput | InputJsonValue
    readinessLevel?: StringFieldUpdateOperationsInput | string
    report?: StringFieldUpdateOperationsInput | string
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFundingReadinessNestedInput
  }

  export type FundingReadinessUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    answers?: JsonNullValueInput | InputJsonValue
    readinessLevel?: StringFieldUpdateOperationsInput | string
    report?: StringFieldUpdateOperationsInput | string
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FundingReadinessCreateManyInput = {
    id?: string
    userId: string
    score: number
    answers: JsonNullValueInput | InputJsonValue
    readinessLevel: string
    report: string
    issuedAt?: Date | string
  }

  export type FundingReadinessUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    answers?: JsonNullValueInput | InputJsonValue
    readinessLevel?: StringFieldUpdateOperationsInput | string
    report?: StringFieldUpdateOperationsInput | string
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FundingReadinessUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    answers?: JsonNullValueInput | InputJsonValue
    readinessLevel?: StringFieldUpdateOperationsInput | string
    report?: StringFieldUpdateOperationsInput | string
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusinessPlanCreateInput = {
    id?: string
    title: string
    content: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutBusinessPlansInput
  }

  export type BusinessPlanUncheckedCreateInput = {
    id?: string
    userId: string
    title: string
    content: string
    createdAt?: Date | string
  }

  export type BusinessPlanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBusinessPlansNestedInput
  }

  export type BusinessPlanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusinessPlanCreateManyInput = {
    id?: string
    userId: string
    title: string
    content: string
    createdAt?: Date | string
  }

  export type BusinessPlanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusinessPlanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BusinessInsightNullableScalarRelationFilter = {
    is?: BusinessInsightWhereInput | null
    isNot?: BusinessInsightWhereInput | null
  }

  export type AssessmentListRelationFilter = {
    every?: AssessmentWhereInput
    some?: AssessmentWhereInput
    none?: AssessmentWhereInput
  }

  export type FundingReadinessListRelationFilter = {
    every?: FundingReadinessWhereInput
    some?: FundingReadinessWhereInput
    none?: FundingReadinessWhereInput
  }

  export type BusinessPlanListRelationFilter = {
    every?: BusinessPlanWhereInput
    some?: BusinessPlanWhereInput
    none?: BusinessPlanWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AssessmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FundingReadinessOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BusinessPlanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    authUserId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    authUserId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    authUserId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type BusinessInsightCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    businessName?: SortOrder
    industry?: SortOrder
    subSegment?: SortOrder
    businessModel?: SortOrder
    customerType?: SortOrder
    annualRevenue?: SortOrder
    employeeCount?: SortOrder
    topProducts?: SortOrder
    marketType?: SortOrder
    businessChallenges?: SortOrder
    desirability?: SortOrder
    feasibility?: SortOrder
    viability?: SortOrder
  }

  export type BusinessInsightAvgOrderByAggregateInput = {
    employeeCount?: SortOrder
  }

  export type BusinessInsightMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    businessName?: SortOrder
    industry?: SortOrder
    subSegment?: SortOrder
    businessModel?: SortOrder
    customerType?: SortOrder
    annualRevenue?: SortOrder
    employeeCount?: SortOrder
    marketType?: SortOrder
  }

  export type BusinessInsightMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    businessName?: SortOrder
    industry?: SortOrder
    subSegment?: SortOrder
    businessModel?: SortOrder
    customerType?: SortOrder
    annualRevenue?: SortOrder
    employeeCount?: SortOrder
    marketType?: SortOrder
  }

  export type BusinessInsightSumOrderByAggregateInput = {
    employeeCount?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type AssessmentCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    score?: SortOrder
    answers?: SortOrder
    maturityLevel?: SortOrder
    report?: SortOrder
    dateTaken?: SortOrder
  }

  export type AssessmentAvgOrderByAggregateInput = {
    score?: SortOrder
  }

  export type AssessmentMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    score?: SortOrder
    maturityLevel?: SortOrder
    report?: SortOrder
    dateTaken?: SortOrder
  }

  export type AssessmentMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    score?: SortOrder
    maturityLevel?: SortOrder
    report?: SortOrder
    dateTaken?: SortOrder
  }

  export type AssessmentSumOrderByAggregateInput = {
    score?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type FundingReadinessCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    score?: SortOrder
    answers?: SortOrder
    readinessLevel?: SortOrder
    report?: SortOrder
    issuedAt?: SortOrder
  }

  export type FundingReadinessAvgOrderByAggregateInput = {
    score?: SortOrder
  }

  export type FundingReadinessMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    score?: SortOrder
    readinessLevel?: SortOrder
    report?: SortOrder
    issuedAt?: SortOrder
  }

  export type FundingReadinessMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    score?: SortOrder
    readinessLevel?: SortOrder
    report?: SortOrder
    issuedAt?: SortOrder
  }

  export type FundingReadinessSumOrderByAggregateInput = {
    score?: SortOrder
  }

  export type BusinessPlanCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type BusinessPlanMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type BusinessPlanMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type BusinessInsightCreateNestedOneWithoutUserInput = {
    create?: XOR<BusinessInsightCreateWithoutUserInput, BusinessInsightUncheckedCreateWithoutUserInput>
    connectOrCreate?: BusinessInsightCreateOrConnectWithoutUserInput
    connect?: BusinessInsightWhereUniqueInput
  }

  export type AssessmentCreateNestedManyWithoutUserInput = {
    create?: XOR<AssessmentCreateWithoutUserInput, AssessmentUncheckedCreateWithoutUserInput> | AssessmentCreateWithoutUserInput[] | AssessmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AssessmentCreateOrConnectWithoutUserInput | AssessmentCreateOrConnectWithoutUserInput[]
    createMany?: AssessmentCreateManyUserInputEnvelope
    connect?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
  }

  export type FundingReadinessCreateNestedManyWithoutUserInput = {
    create?: XOR<FundingReadinessCreateWithoutUserInput, FundingReadinessUncheckedCreateWithoutUserInput> | FundingReadinessCreateWithoutUserInput[] | FundingReadinessUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FundingReadinessCreateOrConnectWithoutUserInput | FundingReadinessCreateOrConnectWithoutUserInput[]
    createMany?: FundingReadinessCreateManyUserInputEnvelope
    connect?: FundingReadinessWhereUniqueInput | FundingReadinessWhereUniqueInput[]
  }

  export type BusinessPlanCreateNestedManyWithoutUserInput = {
    create?: XOR<BusinessPlanCreateWithoutUserInput, BusinessPlanUncheckedCreateWithoutUserInput> | BusinessPlanCreateWithoutUserInput[] | BusinessPlanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BusinessPlanCreateOrConnectWithoutUserInput | BusinessPlanCreateOrConnectWithoutUserInput[]
    createMany?: BusinessPlanCreateManyUserInputEnvelope
    connect?: BusinessPlanWhereUniqueInput | BusinessPlanWhereUniqueInput[]
  }

  export type BusinessInsightUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<BusinessInsightCreateWithoutUserInput, BusinessInsightUncheckedCreateWithoutUserInput>
    connectOrCreate?: BusinessInsightCreateOrConnectWithoutUserInput
    connect?: BusinessInsightWhereUniqueInput
  }

  export type AssessmentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AssessmentCreateWithoutUserInput, AssessmentUncheckedCreateWithoutUserInput> | AssessmentCreateWithoutUserInput[] | AssessmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AssessmentCreateOrConnectWithoutUserInput | AssessmentCreateOrConnectWithoutUserInput[]
    createMany?: AssessmentCreateManyUserInputEnvelope
    connect?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
  }

  export type FundingReadinessUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FundingReadinessCreateWithoutUserInput, FundingReadinessUncheckedCreateWithoutUserInput> | FundingReadinessCreateWithoutUserInput[] | FundingReadinessUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FundingReadinessCreateOrConnectWithoutUserInput | FundingReadinessCreateOrConnectWithoutUserInput[]
    createMany?: FundingReadinessCreateManyUserInputEnvelope
    connect?: FundingReadinessWhereUniqueInput | FundingReadinessWhereUniqueInput[]
  }

  export type BusinessPlanUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BusinessPlanCreateWithoutUserInput, BusinessPlanUncheckedCreateWithoutUserInput> | BusinessPlanCreateWithoutUserInput[] | BusinessPlanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BusinessPlanCreateOrConnectWithoutUserInput | BusinessPlanCreateOrConnectWithoutUserInput[]
    createMany?: BusinessPlanCreateManyUserInputEnvelope
    connect?: BusinessPlanWhereUniqueInput | BusinessPlanWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BusinessInsightUpdateOneWithoutUserNestedInput = {
    create?: XOR<BusinessInsightCreateWithoutUserInput, BusinessInsightUncheckedCreateWithoutUserInput>
    connectOrCreate?: BusinessInsightCreateOrConnectWithoutUserInput
    upsert?: BusinessInsightUpsertWithoutUserInput
    disconnect?: BusinessInsightWhereInput | boolean
    delete?: BusinessInsightWhereInput | boolean
    connect?: BusinessInsightWhereUniqueInput
    update?: XOR<XOR<BusinessInsightUpdateToOneWithWhereWithoutUserInput, BusinessInsightUpdateWithoutUserInput>, BusinessInsightUncheckedUpdateWithoutUserInput>
  }

  export type AssessmentUpdateManyWithoutUserNestedInput = {
    create?: XOR<AssessmentCreateWithoutUserInput, AssessmentUncheckedCreateWithoutUserInput> | AssessmentCreateWithoutUserInput[] | AssessmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AssessmentCreateOrConnectWithoutUserInput | AssessmentCreateOrConnectWithoutUserInput[]
    upsert?: AssessmentUpsertWithWhereUniqueWithoutUserInput | AssessmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AssessmentCreateManyUserInputEnvelope
    set?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
    disconnect?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
    delete?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
    connect?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
    update?: AssessmentUpdateWithWhereUniqueWithoutUserInput | AssessmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AssessmentUpdateManyWithWhereWithoutUserInput | AssessmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AssessmentScalarWhereInput | AssessmentScalarWhereInput[]
  }

  export type FundingReadinessUpdateManyWithoutUserNestedInput = {
    create?: XOR<FundingReadinessCreateWithoutUserInput, FundingReadinessUncheckedCreateWithoutUserInput> | FundingReadinessCreateWithoutUserInput[] | FundingReadinessUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FundingReadinessCreateOrConnectWithoutUserInput | FundingReadinessCreateOrConnectWithoutUserInput[]
    upsert?: FundingReadinessUpsertWithWhereUniqueWithoutUserInput | FundingReadinessUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FundingReadinessCreateManyUserInputEnvelope
    set?: FundingReadinessWhereUniqueInput | FundingReadinessWhereUniqueInput[]
    disconnect?: FundingReadinessWhereUniqueInput | FundingReadinessWhereUniqueInput[]
    delete?: FundingReadinessWhereUniqueInput | FundingReadinessWhereUniqueInput[]
    connect?: FundingReadinessWhereUniqueInput | FundingReadinessWhereUniqueInput[]
    update?: FundingReadinessUpdateWithWhereUniqueWithoutUserInput | FundingReadinessUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FundingReadinessUpdateManyWithWhereWithoutUserInput | FundingReadinessUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FundingReadinessScalarWhereInput | FundingReadinessScalarWhereInput[]
  }

  export type BusinessPlanUpdateManyWithoutUserNestedInput = {
    create?: XOR<BusinessPlanCreateWithoutUserInput, BusinessPlanUncheckedCreateWithoutUserInput> | BusinessPlanCreateWithoutUserInput[] | BusinessPlanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BusinessPlanCreateOrConnectWithoutUserInput | BusinessPlanCreateOrConnectWithoutUserInput[]
    upsert?: BusinessPlanUpsertWithWhereUniqueWithoutUserInput | BusinessPlanUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BusinessPlanCreateManyUserInputEnvelope
    set?: BusinessPlanWhereUniqueInput | BusinessPlanWhereUniqueInput[]
    disconnect?: BusinessPlanWhereUniqueInput | BusinessPlanWhereUniqueInput[]
    delete?: BusinessPlanWhereUniqueInput | BusinessPlanWhereUniqueInput[]
    connect?: BusinessPlanWhereUniqueInput | BusinessPlanWhereUniqueInput[]
    update?: BusinessPlanUpdateWithWhereUniqueWithoutUserInput | BusinessPlanUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BusinessPlanUpdateManyWithWhereWithoutUserInput | BusinessPlanUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BusinessPlanScalarWhereInput | BusinessPlanScalarWhereInput[]
  }

  export type BusinessInsightUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<BusinessInsightCreateWithoutUserInput, BusinessInsightUncheckedCreateWithoutUserInput>
    connectOrCreate?: BusinessInsightCreateOrConnectWithoutUserInput
    upsert?: BusinessInsightUpsertWithoutUserInput
    disconnect?: BusinessInsightWhereInput | boolean
    delete?: BusinessInsightWhereInput | boolean
    connect?: BusinessInsightWhereUniqueInput
    update?: XOR<XOR<BusinessInsightUpdateToOneWithWhereWithoutUserInput, BusinessInsightUpdateWithoutUserInput>, BusinessInsightUncheckedUpdateWithoutUserInput>
  }

  export type AssessmentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AssessmentCreateWithoutUserInput, AssessmentUncheckedCreateWithoutUserInput> | AssessmentCreateWithoutUserInput[] | AssessmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AssessmentCreateOrConnectWithoutUserInput | AssessmentCreateOrConnectWithoutUserInput[]
    upsert?: AssessmentUpsertWithWhereUniqueWithoutUserInput | AssessmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AssessmentCreateManyUserInputEnvelope
    set?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
    disconnect?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
    delete?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
    connect?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
    update?: AssessmentUpdateWithWhereUniqueWithoutUserInput | AssessmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AssessmentUpdateManyWithWhereWithoutUserInput | AssessmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AssessmentScalarWhereInput | AssessmentScalarWhereInput[]
  }

  export type FundingReadinessUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FundingReadinessCreateWithoutUserInput, FundingReadinessUncheckedCreateWithoutUserInput> | FundingReadinessCreateWithoutUserInput[] | FundingReadinessUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FundingReadinessCreateOrConnectWithoutUserInput | FundingReadinessCreateOrConnectWithoutUserInput[]
    upsert?: FundingReadinessUpsertWithWhereUniqueWithoutUserInput | FundingReadinessUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FundingReadinessCreateManyUserInputEnvelope
    set?: FundingReadinessWhereUniqueInput | FundingReadinessWhereUniqueInput[]
    disconnect?: FundingReadinessWhereUniqueInput | FundingReadinessWhereUniqueInput[]
    delete?: FundingReadinessWhereUniqueInput | FundingReadinessWhereUniqueInput[]
    connect?: FundingReadinessWhereUniqueInput | FundingReadinessWhereUniqueInput[]
    update?: FundingReadinessUpdateWithWhereUniqueWithoutUserInput | FundingReadinessUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FundingReadinessUpdateManyWithWhereWithoutUserInput | FundingReadinessUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FundingReadinessScalarWhereInput | FundingReadinessScalarWhereInput[]
  }

  export type BusinessPlanUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BusinessPlanCreateWithoutUserInput, BusinessPlanUncheckedCreateWithoutUserInput> | BusinessPlanCreateWithoutUserInput[] | BusinessPlanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BusinessPlanCreateOrConnectWithoutUserInput | BusinessPlanCreateOrConnectWithoutUserInput[]
    upsert?: BusinessPlanUpsertWithWhereUniqueWithoutUserInput | BusinessPlanUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BusinessPlanCreateManyUserInputEnvelope
    set?: BusinessPlanWhereUniqueInput | BusinessPlanWhereUniqueInput[]
    disconnect?: BusinessPlanWhereUniqueInput | BusinessPlanWhereUniqueInput[]
    delete?: BusinessPlanWhereUniqueInput | BusinessPlanWhereUniqueInput[]
    connect?: BusinessPlanWhereUniqueInput | BusinessPlanWhereUniqueInput[]
    update?: BusinessPlanUpdateWithWhereUniqueWithoutUserInput | BusinessPlanUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BusinessPlanUpdateManyWithWhereWithoutUserInput | BusinessPlanUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BusinessPlanScalarWhereInput | BusinessPlanScalarWhereInput[]
  }

  export type BusinessInsightCreatetopProductsInput = {
    set: string[]
  }

  export type BusinessInsightCreatebusinessChallengesInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutBusinessInsightInput = {
    create?: XOR<UserCreateWithoutBusinessInsightInput, UserUncheckedCreateWithoutBusinessInsightInput>
    connectOrCreate?: UserCreateOrConnectWithoutBusinessInsightInput
    connect?: UserWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BusinessInsightUpdatetopProductsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type BusinessInsightUpdatebusinessChallengesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutBusinessInsightNestedInput = {
    create?: XOR<UserCreateWithoutBusinessInsightInput, UserUncheckedCreateWithoutBusinessInsightInput>
    connectOrCreate?: UserCreateOrConnectWithoutBusinessInsightInput
    upsert?: UserUpsertWithoutBusinessInsightInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBusinessInsightInput, UserUpdateWithoutBusinessInsightInput>, UserUncheckedUpdateWithoutBusinessInsightInput>
  }

  export type UserCreateNestedOneWithoutAssessmentsInput = {
    create?: XOR<UserCreateWithoutAssessmentsInput, UserUncheckedCreateWithoutAssessmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssessmentsInput
    connect?: UserWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAssessmentsNestedInput = {
    create?: XOR<UserCreateWithoutAssessmentsInput, UserUncheckedCreateWithoutAssessmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssessmentsInput
    upsert?: UserUpsertWithoutAssessmentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAssessmentsInput, UserUpdateWithoutAssessmentsInput>, UserUncheckedUpdateWithoutAssessmentsInput>
  }

  export type UserCreateNestedOneWithoutFundingReadinessInput = {
    create?: XOR<UserCreateWithoutFundingReadinessInput, UserUncheckedCreateWithoutFundingReadinessInput>
    connectOrCreate?: UserCreateOrConnectWithoutFundingReadinessInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFundingReadinessNestedInput = {
    create?: XOR<UserCreateWithoutFundingReadinessInput, UserUncheckedCreateWithoutFundingReadinessInput>
    connectOrCreate?: UserCreateOrConnectWithoutFundingReadinessInput
    upsert?: UserUpsertWithoutFundingReadinessInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFundingReadinessInput, UserUpdateWithoutFundingReadinessInput>, UserUncheckedUpdateWithoutFundingReadinessInput>
  }

  export type UserCreateNestedOneWithoutBusinessPlansInput = {
    create?: XOR<UserCreateWithoutBusinessPlansInput, UserUncheckedCreateWithoutBusinessPlansInput>
    connectOrCreate?: UserCreateOrConnectWithoutBusinessPlansInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutBusinessPlansNestedInput = {
    create?: XOR<UserCreateWithoutBusinessPlansInput, UserUncheckedCreateWithoutBusinessPlansInput>
    connectOrCreate?: UserCreateOrConnectWithoutBusinessPlansInput
    upsert?: UserUpsertWithoutBusinessPlansInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBusinessPlansInput, UserUpdateWithoutBusinessPlansInput>, UserUncheckedUpdateWithoutBusinessPlansInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type BusinessInsightCreateWithoutUserInput = {
    id?: string
    businessName: string
    industry: string
    subSegment: string
    businessModel: string
    customerType: string
    annualRevenue: string
    employeeCount: number
    topProducts?: BusinessInsightCreatetopProductsInput | string[]
    marketType: string
    businessChallenges?: BusinessInsightCreatebusinessChallengesInput | string[]
    desirability?: NullableJsonNullValueInput | InputJsonValue
    feasibility?: NullableJsonNullValueInput | InputJsonValue
    viability?: NullableJsonNullValueInput | InputJsonValue
  }

  export type BusinessInsightUncheckedCreateWithoutUserInput = {
    id?: string
    businessName: string
    industry: string
    subSegment: string
    businessModel: string
    customerType: string
    annualRevenue: string
    employeeCount: number
    topProducts?: BusinessInsightCreatetopProductsInput | string[]
    marketType: string
    businessChallenges?: BusinessInsightCreatebusinessChallengesInput | string[]
    desirability?: NullableJsonNullValueInput | InputJsonValue
    feasibility?: NullableJsonNullValueInput | InputJsonValue
    viability?: NullableJsonNullValueInput | InputJsonValue
  }

  export type BusinessInsightCreateOrConnectWithoutUserInput = {
    where: BusinessInsightWhereUniqueInput
    create: XOR<BusinessInsightCreateWithoutUserInput, BusinessInsightUncheckedCreateWithoutUserInput>
  }

  export type AssessmentCreateWithoutUserInput = {
    id?: string
    score: number
    answers: JsonNullValueInput | InputJsonValue
    maturityLevel: string
    report: string
    dateTaken?: Date | string
  }

  export type AssessmentUncheckedCreateWithoutUserInput = {
    id?: string
    score: number
    answers: JsonNullValueInput | InputJsonValue
    maturityLevel: string
    report: string
    dateTaken?: Date | string
  }

  export type AssessmentCreateOrConnectWithoutUserInput = {
    where: AssessmentWhereUniqueInput
    create: XOR<AssessmentCreateWithoutUserInput, AssessmentUncheckedCreateWithoutUserInput>
  }

  export type AssessmentCreateManyUserInputEnvelope = {
    data: AssessmentCreateManyUserInput | AssessmentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FundingReadinessCreateWithoutUserInput = {
    id?: string
    score: number
    answers: JsonNullValueInput | InputJsonValue
    readinessLevel: string
    report: string
    issuedAt?: Date | string
  }

  export type FundingReadinessUncheckedCreateWithoutUserInput = {
    id?: string
    score: number
    answers: JsonNullValueInput | InputJsonValue
    readinessLevel: string
    report: string
    issuedAt?: Date | string
  }

  export type FundingReadinessCreateOrConnectWithoutUserInput = {
    where: FundingReadinessWhereUniqueInput
    create: XOR<FundingReadinessCreateWithoutUserInput, FundingReadinessUncheckedCreateWithoutUserInput>
  }

  export type FundingReadinessCreateManyUserInputEnvelope = {
    data: FundingReadinessCreateManyUserInput | FundingReadinessCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BusinessPlanCreateWithoutUserInput = {
    id?: string
    title: string
    content: string
    createdAt?: Date | string
  }

  export type BusinessPlanUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    content: string
    createdAt?: Date | string
  }

  export type BusinessPlanCreateOrConnectWithoutUserInput = {
    where: BusinessPlanWhereUniqueInput
    create: XOR<BusinessPlanCreateWithoutUserInput, BusinessPlanUncheckedCreateWithoutUserInput>
  }

  export type BusinessPlanCreateManyUserInputEnvelope = {
    data: BusinessPlanCreateManyUserInput | BusinessPlanCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BusinessInsightUpsertWithoutUserInput = {
    update: XOR<BusinessInsightUpdateWithoutUserInput, BusinessInsightUncheckedUpdateWithoutUserInput>
    create: XOR<BusinessInsightCreateWithoutUserInput, BusinessInsightUncheckedCreateWithoutUserInput>
    where?: BusinessInsightWhereInput
  }

  export type BusinessInsightUpdateToOneWithWhereWithoutUserInput = {
    where?: BusinessInsightWhereInput
    data: XOR<BusinessInsightUpdateWithoutUserInput, BusinessInsightUncheckedUpdateWithoutUserInput>
  }

  export type BusinessInsightUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessName?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    subSegment?: StringFieldUpdateOperationsInput | string
    businessModel?: StringFieldUpdateOperationsInput | string
    customerType?: StringFieldUpdateOperationsInput | string
    annualRevenue?: StringFieldUpdateOperationsInput | string
    employeeCount?: IntFieldUpdateOperationsInput | number
    topProducts?: BusinessInsightUpdatetopProductsInput | string[]
    marketType?: StringFieldUpdateOperationsInput | string
    businessChallenges?: BusinessInsightUpdatebusinessChallengesInput | string[]
    desirability?: NullableJsonNullValueInput | InputJsonValue
    feasibility?: NullableJsonNullValueInput | InputJsonValue
    viability?: NullableJsonNullValueInput | InputJsonValue
  }

  export type BusinessInsightUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessName?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    subSegment?: StringFieldUpdateOperationsInput | string
    businessModel?: StringFieldUpdateOperationsInput | string
    customerType?: StringFieldUpdateOperationsInput | string
    annualRevenue?: StringFieldUpdateOperationsInput | string
    employeeCount?: IntFieldUpdateOperationsInput | number
    topProducts?: BusinessInsightUpdatetopProductsInput | string[]
    marketType?: StringFieldUpdateOperationsInput | string
    businessChallenges?: BusinessInsightUpdatebusinessChallengesInput | string[]
    desirability?: NullableJsonNullValueInput | InputJsonValue
    feasibility?: NullableJsonNullValueInput | InputJsonValue
    viability?: NullableJsonNullValueInput | InputJsonValue
  }

  export type AssessmentUpsertWithWhereUniqueWithoutUserInput = {
    where: AssessmentWhereUniqueInput
    update: XOR<AssessmentUpdateWithoutUserInput, AssessmentUncheckedUpdateWithoutUserInput>
    create: XOR<AssessmentCreateWithoutUserInput, AssessmentUncheckedCreateWithoutUserInput>
  }

  export type AssessmentUpdateWithWhereUniqueWithoutUserInput = {
    where: AssessmentWhereUniqueInput
    data: XOR<AssessmentUpdateWithoutUserInput, AssessmentUncheckedUpdateWithoutUserInput>
  }

  export type AssessmentUpdateManyWithWhereWithoutUserInput = {
    where: AssessmentScalarWhereInput
    data: XOR<AssessmentUpdateManyMutationInput, AssessmentUncheckedUpdateManyWithoutUserInput>
  }

  export type AssessmentScalarWhereInput = {
    AND?: AssessmentScalarWhereInput | AssessmentScalarWhereInput[]
    OR?: AssessmentScalarWhereInput[]
    NOT?: AssessmentScalarWhereInput | AssessmentScalarWhereInput[]
    id?: StringFilter<"Assessment"> | string
    userId?: StringFilter<"Assessment"> | string
    score?: FloatFilter<"Assessment"> | number
    answers?: JsonFilter<"Assessment">
    maturityLevel?: StringFilter<"Assessment"> | string
    report?: StringFilter<"Assessment"> | string
    dateTaken?: DateTimeFilter<"Assessment"> | Date | string
  }

  export type FundingReadinessUpsertWithWhereUniqueWithoutUserInput = {
    where: FundingReadinessWhereUniqueInput
    update: XOR<FundingReadinessUpdateWithoutUserInput, FundingReadinessUncheckedUpdateWithoutUserInput>
    create: XOR<FundingReadinessCreateWithoutUserInput, FundingReadinessUncheckedCreateWithoutUserInput>
  }

  export type FundingReadinessUpdateWithWhereUniqueWithoutUserInput = {
    where: FundingReadinessWhereUniqueInput
    data: XOR<FundingReadinessUpdateWithoutUserInput, FundingReadinessUncheckedUpdateWithoutUserInput>
  }

  export type FundingReadinessUpdateManyWithWhereWithoutUserInput = {
    where: FundingReadinessScalarWhereInput
    data: XOR<FundingReadinessUpdateManyMutationInput, FundingReadinessUncheckedUpdateManyWithoutUserInput>
  }

  export type FundingReadinessScalarWhereInput = {
    AND?: FundingReadinessScalarWhereInput | FundingReadinessScalarWhereInput[]
    OR?: FundingReadinessScalarWhereInput[]
    NOT?: FundingReadinessScalarWhereInput | FundingReadinessScalarWhereInput[]
    id?: StringFilter<"FundingReadiness"> | string
    userId?: StringFilter<"FundingReadiness"> | string
    score?: FloatFilter<"FundingReadiness"> | number
    answers?: JsonFilter<"FundingReadiness">
    readinessLevel?: StringFilter<"FundingReadiness"> | string
    report?: StringFilter<"FundingReadiness"> | string
    issuedAt?: DateTimeFilter<"FundingReadiness"> | Date | string
  }

  export type BusinessPlanUpsertWithWhereUniqueWithoutUserInput = {
    where: BusinessPlanWhereUniqueInput
    update: XOR<BusinessPlanUpdateWithoutUserInput, BusinessPlanUncheckedUpdateWithoutUserInput>
    create: XOR<BusinessPlanCreateWithoutUserInput, BusinessPlanUncheckedCreateWithoutUserInput>
  }

  export type BusinessPlanUpdateWithWhereUniqueWithoutUserInput = {
    where: BusinessPlanWhereUniqueInput
    data: XOR<BusinessPlanUpdateWithoutUserInput, BusinessPlanUncheckedUpdateWithoutUserInput>
  }

  export type BusinessPlanUpdateManyWithWhereWithoutUserInput = {
    where: BusinessPlanScalarWhereInput
    data: XOR<BusinessPlanUpdateManyMutationInput, BusinessPlanUncheckedUpdateManyWithoutUserInput>
  }

  export type BusinessPlanScalarWhereInput = {
    AND?: BusinessPlanScalarWhereInput | BusinessPlanScalarWhereInput[]
    OR?: BusinessPlanScalarWhereInput[]
    NOT?: BusinessPlanScalarWhereInput | BusinessPlanScalarWhereInput[]
    id?: StringFilter<"BusinessPlan"> | string
    userId?: StringFilter<"BusinessPlan"> | string
    title?: StringFilter<"BusinessPlan"> | string
    content?: StringFilter<"BusinessPlan"> | string
    createdAt?: DateTimeFilter<"BusinessPlan"> | Date | string
  }

  export type UserCreateWithoutBusinessInsightInput = {
    id?: string
    authUserId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assessments?: AssessmentCreateNestedManyWithoutUserInput
    fundingReadiness?: FundingReadinessCreateNestedManyWithoutUserInput
    businessPlans?: BusinessPlanCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBusinessInsightInput = {
    id?: string
    authUserId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assessments?: AssessmentUncheckedCreateNestedManyWithoutUserInput
    fundingReadiness?: FundingReadinessUncheckedCreateNestedManyWithoutUserInput
    businessPlans?: BusinessPlanUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBusinessInsightInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBusinessInsightInput, UserUncheckedCreateWithoutBusinessInsightInput>
  }

  export type UserUpsertWithoutBusinessInsightInput = {
    update: XOR<UserUpdateWithoutBusinessInsightInput, UserUncheckedUpdateWithoutBusinessInsightInput>
    create: XOR<UserCreateWithoutBusinessInsightInput, UserUncheckedCreateWithoutBusinessInsightInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBusinessInsightInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBusinessInsightInput, UserUncheckedUpdateWithoutBusinessInsightInput>
  }

  export type UserUpdateWithoutBusinessInsightInput = {
    id?: StringFieldUpdateOperationsInput | string
    authUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assessments?: AssessmentUpdateManyWithoutUserNestedInput
    fundingReadiness?: FundingReadinessUpdateManyWithoutUserNestedInput
    businessPlans?: BusinessPlanUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBusinessInsightInput = {
    id?: StringFieldUpdateOperationsInput | string
    authUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assessments?: AssessmentUncheckedUpdateManyWithoutUserNestedInput
    fundingReadiness?: FundingReadinessUncheckedUpdateManyWithoutUserNestedInput
    businessPlans?: BusinessPlanUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutAssessmentsInput = {
    id?: string
    authUserId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    businessInsight?: BusinessInsightCreateNestedOneWithoutUserInput
    fundingReadiness?: FundingReadinessCreateNestedManyWithoutUserInput
    businessPlans?: BusinessPlanCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAssessmentsInput = {
    id?: string
    authUserId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    businessInsight?: BusinessInsightUncheckedCreateNestedOneWithoutUserInput
    fundingReadiness?: FundingReadinessUncheckedCreateNestedManyWithoutUserInput
    businessPlans?: BusinessPlanUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAssessmentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAssessmentsInput, UserUncheckedCreateWithoutAssessmentsInput>
  }

  export type UserUpsertWithoutAssessmentsInput = {
    update: XOR<UserUpdateWithoutAssessmentsInput, UserUncheckedUpdateWithoutAssessmentsInput>
    create: XOR<UserCreateWithoutAssessmentsInput, UserUncheckedCreateWithoutAssessmentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAssessmentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAssessmentsInput, UserUncheckedUpdateWithoutAssessmentsInput>
  }

  export type UserUpdateWithoutAssessmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    authUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    businessInsight?: BusinessInsightUpdateOneWithoutUserNestedInput
    fundingReadiness?: FundingReadinessUpdateManyWithoutUserNestedInput
    businessPlans?: BusinessPlanUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAssessmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    authUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    businessInsight?: BusinessInsightUncheckedUpdateOneWithoutUserNestedInput
    fundingReadiness?: FundingReadinessUncheckedUpdateManyWithoutUserNestedInput
    businessPlans?: BusinessPlanUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutFundingReadinessInput = {
    id?: string
    authUserId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    businessInsight?: BusinessInsightCreateNestedOneWithoutUserInput
    assessments?: AssessmentCreateNestedManyWithoutUserInput
    businessPlans?: BusinessPlanCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFundingReadinessInput = {
    id?: string
    authUserId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    businessInsight?: BusinessInsightUncheckedCreateNestedOneWithoutUserInput
    assessments?: AssessmentUncheckedCreateNestedManyWithoutUserInput
    businessPlans?: BusinessPlanUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFundingReadinessInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFundingReadinessInput, UserUncheckedCreateWithoutFundingReadinessInput>
  }

  export type UserUpsertWithoutFundingReadinessInput = {
    update: XOR<UserUpdateWithoutFundingReadinessInput, UserUncheckedUpdateWithoutFundingReadinessInput>
    create: XOR<UserCreateWithoutFundingReadinessInput, UserUncheckedCreateWithoutFundingReadinessInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFundingReadinessInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFundingReadinessInput, UserUncheckedUpdateWithoutFundingReadinessInput>
  }

  export type UserUpdateWithoutFundingReadinessInput = {
    id?: StringFieldUpdateOperationsInput | string
    authUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    businessInsight?: BusinessInsightUpdateOneWithoutUserNestedInput
    assessments?: AssessmentUpdateManyWithoutUserNestedInput
    businessPlans?: BusinessPlanUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFundingReadinessInput = {
    id?: StringFieldUpdateOperationsInput | string
    authUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    businessInsight?: BusinessInsightUncheckedUpdateOneWithoutUserNestedInput
    assessments?: AssessmentUncheckedUpdateManyWithoutUserNestedInput
    businessPlans?: BusinessPlanUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutBusinessPlansInput = {
    id?: string
    authUserId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    businessInsight?: BusinessInsightCreateNestedOneWithoutUserInput
    assessments?: AssessmentCreateNestedManyWithoutUserInput
    fundingReadiness?: FundingReadinessCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBusinessPlansInput = {
    id?: string
    authUserId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    businessInsight?: BusinessInsightUncheckedCreateNestedOneWithoutUserInput
    assessments?: AssessmentUncheckedCreateNestedManyWithoutUserInput
    fundingReadiness?: FundingReadinessUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBusinessPlansInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBusinessPlansInput, UserUncheckedCreateWithoutBusinessPlansInput>
  }

  export type UserUpsertWithoutBusinessPlansInput = {
    update: XOR<UserUpdateWithoutBusinessPlansInput, UserUncheckedUpdateWithoutBusinessPlansInput>
    create: XOR<UserCreateWithoutBusinessPlansInput, UserUncheckedCreateWithoutBusinessPlansInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBusinessPlansInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBusinessPlansInput, UserUncheckedUpdateWithoutBusinessPlansInput>
  }

  export type UserUpdateWithoutBusinessPlansInput = {
    id?: StringFieldUpdateOperationsInput | string
    authUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    businessInsight?: BusinessInsightUpdateOneWithoutUserNestedInput
    assessments?: AssessmentUpdateManyWithoutUserNestedInput
    fundingReadiness?: FundingReadinessUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBusinessPlansInput = {
    id?: StringFieldUpdateOperationsInput | string
    authUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    businessInsight?: BusinessInsightUncheckedUpdateOneWithoutUserNestedInput
    assessments?: AssessmentUncheckedUpdateManyWithoutUserNestedInput
    fundingReadiness?: FundingReadinessUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AssessmentCreateManyUserInput = {
    id?: string
    score: number
    answers: JsonNullValueInput | InputJsonValue
    maturityLevel: string
    report: string
    dateTaken?: Date | string
  }

  export type FundingReadinessCreateManyUserInput = {
    id?: string
    score: number
    answers: JsonNullValueInput | InputJsonValue
    readinessLevel: string
    report: string
    issuedAt?: Date | string
  }

  export type BusinessPlanCreateManyUserInput = {
    id?: string
    title: string
    content: string
    createdAt?: Date | string
  }

  export type AssessmentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    answers?: JsonNullValueInput | InputJsonValue
    maturityLevel?: StringFieldUpdateOperationsInput | string
    report?: StringFieldUpdateOperationsInput | string
    dateTaken?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssessmentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    answers?: JsonNullValueInput | InputJsonValue
    maturityLevel?: StringFieldUpdateOperationsInput | string
    report?: StringFieldUpdateOperationsInput | string
    dateTaken?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssessmentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    answers?: JsonNullValueInput | InputJsonValue
    maturityLevel?: StringFieldUpdateOperationsInput | string
    report?: StringFieldUpdateOperationsInput | string
    dateTaken?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FundingReadinessUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    answers?: JsonNullValueInput | InputJsonValue
    readinessLevel?: StringFieldUpdateOperationsInput | string
    report?: StringFieldUpdateOperationsInput | string
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FundingReadinessUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    answers?: JsonNullValueInput | InputJsonValue
    readinessLevel?: StringFieldUpdateOperationsInput | string
    report?: StringFieldUpdateOperationsInput | string
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FundingReadinessUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    answers?: JsonNullValueInput | InputJsonValue
    readinessLevel?: StringFieldUpdateOperationsInput | string
    report?: StringFieldUpdateOperationsInput | string
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusinessPlanUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusinessPlanUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusinessPlanUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}