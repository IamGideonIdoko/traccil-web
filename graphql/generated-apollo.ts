import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  AccountNumber: any;
  BigInt: any;
  Byte: any;
  CountryCode: any;
  Cuid: any;
  Currency: any;
  DID: any;
  Date: any;
  DateTime: any;
  Duration: any;
  EmailAddress: any;
  GUID: any;
  HSL: any;
  HSLA: any;
  HexColorCode: any;
  Hexadecimal: any;
  IBAN: any;
  IPv4: any;
  IPv6: any;
  ISBN: any;
  ISO8601Duration: any;
  JSON: any;
  JSONObject: any;
  JWT: any;
  Latitude: any;
  LocalDate: any;
  LocalEndTime: any;
  LocalTime: any;
  Locale: any;
  Long: any;
  Longitude: any;
  MAC: any;
  NegativeFloat: any;
  NegativeInt: any;
  NonEmptyString: any;
  NonNegativeFloat: any;
  NonNegativeInt: any;
  NonPositiveFloat: any;
  NonPositiveInt: any;
  ObjectID: any;
  PhoneNumber: any;
  Port: any;
  PositiveFloat: any;
  PositiveInt: any;
  PostalCode: any;
  RGB: any;
  RGBA: any;
  RoutingNumber: any;
  SafeInt: any;
  Time: any;
  TimeZone: any;
  Timestamp: any;
  URL: any;
  USCurrency: any;
  UUID: any;
  UnsignedFloat: any;
  UnsignedInt: any;
  UtcOffset: any;
  Void: any;
};

export type Admin = {
  __typename?: 'Admin';
  email: Scalars['String'];
  id: Scalars['ID'];
  joinedDate: Scalars['DateTime'];
  name: Scalars['String'];
  password: Scalars['String'];
};

export type Book = {
  __typename?: 'Book';
  genre?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type Client = {
  __typename?: 'Client';
  address?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['URL']>;
  bio?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  dob?: Maybe<Scalars['DateTime']>;
  email: Scalars['EmailAddress'];
  emailVerified?: Maybe<Scalars['Boolean']>;
  gender?: Maybe<Gender>;
  id: Scalars['ID'];
  joinedDate: Scalars['DateTime'];
  location?: Maybe<ClientLocation>;
  name: Scalars['String'];
  password: Scalars['String'];
  phone?: Maybe<Scalars['PhoneNumber']>;
  phoneVerified?: Maybe<Scalars['Boolean']>;
  verified?: Maybe<Scalars['Boolean']>;
  work: Array<Work>;
};

export type ClientLocation = {
  __typename?: 'ClientLocation';
  client: Client;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  updatedAt: Scalars['DateTime'];
};

export enum Gender {
  Female = 'FEMALE',
  Male = 'MALE'
}

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addBook?: Maybe<Book>;
  addUser?: Maybe<User>;
  registerClient?: Maybe<ReturnedRegisteredClient>;
  registerWorker?: Maybe<ReturnedRegisteredWorker>;
};


export type MutationAddBookArgs = {
  genre?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
};


export type MutationAddUserArgs = {
  age?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};


export type MutationRegisterClientArgs = {
  client: RegisterClientInput;
};


export type MutationRegisterWorkerArgs = {
  worker: RegisterWorkerInput;
};

export type Query = {
  __typename?: 'Query';
  book?: Maybe<Book>;
  books?: Maybe<Array<Maybe<Book>>>;
  loginAdmin?: Maybe<ReturnedRegisteredAdmin>;
  loginClient?: Maybe<ReturnedRegisteredClient>;
  loginWorker?: Maybe<ReturnedRegisteredWorker>;
  user?: Maybe<User>;
  users?: Maybe<Array<Maybe<User>>>;
};


export type QueryBookArgs = {
  id: Scalars['ID'];
};


export type QueryLoginAdminArgs = {
  loginInput: LoginInput;
};


export type QueryLoginClientArgs = {
  loginInput: LoginInput;
};


export type QueryLoginWorkerArgs = {
  loginInput: LoginInput;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};

export type RegisterClientInput = {
  address?: InputMaybe<Scalars['String']>;
  bio?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  dob?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['EmailAddress'];
  gender?: InputMaybe<Gender>;
  name: Scalars['String'];
  password: Scalars['String'];
  phone?: InputMaybe<Scalars['PhoneNumber']>;
  repeat_password: Scalars['String'];
};

export type RegisterWorkerInput = {
  address?: InputMaybe<Scalars['String']>;
  bio?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  dob?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['EmailAddress'];
  gender?: InputMaybe<Gender>;
  name: Scalars['String'];
  password: Scalars['String'];
  phone?: InputMaybe<Scalars['PhoneNumber']>;
  repeat_password: Scalars['String'];
};

export type RegisteredAdmin = {
  __typename?: 'RegisteredAdmin';
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  joinedDate: Scalars['DateTime'];
  name: Scalars['String'];
};

export type RegisteredClient = {
  __typename?: 'RegisteredClient';
  address?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['URL']>;
  bio?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  dob?: Maybe<Scalars['DateTime']>;
  email: Scalars['EmailAddress'];
  emailVerified?: Maybe<Scalars['Boolean']>;
  gender?: Maybe<Gender>;
  id: Scalars['ID'];
  joinedDate: Scalars['DateTime'];
  name: Scalars['String'];
  phone?: Maybe<Scalars['PhoneNumber']>;
  phoneVerified?: Maybe<Scalars['Boolean']>;
  verified?: Maybe<Scalars['Boolean']>;
};

export type RegisteredWorker = {
  __typename?: 'RegisteredWorker';
  address?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['URL']>;
  bio?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  dob?: Maybe<Scalars['DateTime']>;
  email: Scalars['EmailAddress'];
  emailVerified?: Maybe<Scalars['Boolean']>;
  gender?: Maybe<Gender>;
  id: Scalars['ID'];
  joinedDate: Scalars['DateTime'];
  name: Scalars['String'];
  phone?: Maybe<Scalars['PhoneNumber']>;
  phoneVerified?: Maybe<Scalars['Boolean']>;
  verified?: Maybe<Scalars['Boolean']>;
};

export type ReturnedRegisteredAdmin = Token & {
  __typename?: 'ReturnedRegisteredAdmin';
  accessToken: Scalars['JWT'];
  admin: RegisteredAdmin;
  refreshToken: Scalars['JWT'];
};

export type ReturnedRegisteredClient = Token & {
  __typename?: 'ReturnedRegisteredClient';
  accessToken: Scalars['JWT'];
  client: RegisteredClient;
  refreshToken: Scalars['JWT'];
};

export type ReturnedRegisteredWorker = Token & {
  __typename?: 'ReturnedRegisteredWorker';
  accessToken: Scalars['JWT'];
  refreshToken: Scalars['JWT'];
  worker: RegisteredWorker;
};

export type Section = {
  __typename?: 'Section';
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  services: Array<ServiceSection>;
  title: Scalars['String'];
};

export type Service = {
  __typename?: 'Service';
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  sections: Array<ServiceSection>;
  title: Scalars['String'];
  work: Array<Work>;
  workmen: Array<WorkerService>;
};

export type ServiceSection = {
  __typename?: 'ServiceSection';
  section: Section;
  service: Service;
};

/** This file holds all interfaces defined in the GraphQL schema of this app. */
export type Token = {
  accessToken: Scalars['JWT'];
  refreshToken: Scalars['JWT'];
};

export type User = {
  __typename?: 'User';
  age?: Maybe<Scalars['Int']>;
  books?: Maybe<Array<Book>>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

export type Work = {
  __typename?: 'Work';
  client: Client;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  location?: Maybe<WorkLocation>;
  paymentId?: Maybe<Scalars['String']>;
  requestTime: Scalars['DateTime'];
  service: Service;
  workEndTime?: Maybe<Scalars['DateTime']>;
  workStartTime?: Maybe<Scalars['DateTime']>;
  worker: Worker;
};

export type WorkLocation = {
  __typename?: 'WorkLocation';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  updatedAt: Scalars['DateTime'];
  work: Work;
};

export type Worker = {
  __typename?: 'Worker';
  address?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['URL']>;
  bio?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  dob?: Maybe<Scalars['DateTime']>;
  email: Scalars['EmailAddress'];
  emailVerified?: Maybe<Scalars['Boolean']>;
  gender?: Maybe<Gender>;
  id: Scalars['ID'];
  joinedDate: Scalars['DateTime'];
  location?: Maybe<WorkerLocation>;
  name: Scalars['String'];
  password: Scalars['String'];
  phone?: Maybe<Scalars['PhoneNumber']>;
  phoneVerified?: Maybe<Scalars['Boolean']>;
  services: Array<WorkerService>;
  verified?: Maybe<Scalars['Boolean']>;
  work: Array<Work>;
};

export type WorkerLocation = {
  __typename?: 'WorkerLocation';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  updatedAt: Scalars['DateTime'];
  worker: Worker;
};

export type WorkerService = {
  __typename?: 'WorkerService';
  service: Service;
  worker: Worker;
};

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = { __typename?: 'Query', users?: Array<{ __typename?: 'User', id: string, name?: string | null, age?: number | null, books?: Array<{ __typename?: 'Book', name?: string | null }> | null } | null> | null };

export type RegisterWorkerMutationVariables = Exact<{
  worker: RegisterWorkerInput;
}>;


export type RegisterWorkerMutation = { __typename?: 'Mutation', registerWorker?: { __typename?: 'ReturnedRegisteredWorker', accessToken: any, refreshToken: any, worker: { __typename?: 'RegisteredWorker', name: string, email: any } } | null };


export const UsersDocument = gql`
    query Users {
  users {
    id
    name
    age
    books {
      name
    }
  }
}
    `;

/**
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useUsersQuery(baseOptions?: Apollo.QueryHookOptions<UsersQuery, UsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
      }
export function useUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UsersQuery, UsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
        }
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>;
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>;
export type UsersQueryResult = Apollo.QueryResult<UsersQuery, UsersQueryVariables>;
export const RegisterWorkerDocument = gql`
    mutation RegisterWorker($worker: RegisterWorkerInput!) {
  registerWorker(worker: $worker) {
    accessToken
    refreshToken
    worker {
      name
      email
    }
  }
}
    `;
export type RegisterWorkerMutationFn = Apollo.MutationFunction<RegisterWorkerMutation, RegisterWorkerMutationVariables>;

/**
 * __useRegisterWorkerMutation__
 *
 * To run a mutation, you first call `useRegisterWorkerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterWorkerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerWorkerMutation, { data, loading, error }] = useRegisterWorkerMutation({
 *   variables: {
 *      worker: // value for 'worker'
 *   },
 * });
 */
export function useRegisterWorkerMutation(baseOptions?: Apollo.MutationHookOptions<RegisterWorkerMutation, RegisterWorkerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterWorkerMutation, RegisterWorkerMutationVariables>(RegisterWorkerDocument, options);
      }
export type RegisterWorkerMutationHookResult = ReturnType<typeof useRegisterWorkerMutation>;
export type RegisterWorkerMutationResult = Apollo.MutationResult<RegisterWorkerMutation>;
export type RegisterWorkerMutationOptions = Apollo.BaseMutationOptions<RegisterWorkerMutation, RegisterWorkerMutationVariables>;