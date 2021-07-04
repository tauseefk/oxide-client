// package: oxide
// file: chat.proto

import * as chat_pb from "./chat_pb";
import {grpc} from "@improbable-eng/grpc-web";

type ChatServiceLoginUser = {
  readonly methodName: string;
  readonly service: typeof ChatService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof chat_pb.SignupOrLoginUserRequest;
  readonly responseType: typeof chat_pb.LoginInfo;
};

type ChatServiceSignupUser = {
  readonly methodName: string;
  readonly service: typeof ChatService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof chat_pb.SignupOrLoginUserRequest;
  readonly responseType: typeof chat_pb.LoginInfo;
};

type ChatServiceFetchTextsForChat = {
  readonly methodName: string;
  readonly service: typeof ChatService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof chat_pb.FetchTextsForChatRequest;
  readonly responseType: typeof chat_pb.Text;
};

type ChatServiceFetchChatsForUser = {
  readonly methodName: string;
  readonly service: typeof ChatService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof chat_pb.FetchChatsForUserRequest;
  readonly responseType: typeof chat_pb.Chat;
};

type ChatServiceFetchUsers = {
  readonly methodName: string;
  readonly service: typeof ChatService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof chat_pb.FetchUsersRequest;
  readonly responseType: typeof chat_pb.User;
};

type ChatServiceSendTextToUser = {
  readonly methodName: string;
  readonly service: typeof ChatService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof chat_pb.SendTextToUserRequest;
  readonly responseType: typeof chat_pb.TextSent;
};

type ChatServiceCreateNewChat = {
  readonly methodName: string;
  readonly service: typeof ChatService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof chat_pb.CreateNewChatRequest;
  readonly responseType: typeof chat_pb.Chat;
};

export class ChatService {
  static readonly serviceName: string;
  static readonly LoginUser: ChatServiceLoginUser;
  static readonly SignupUser: ChatServiceSignupUser;
  static readonly FetchTextsForChat: ChatServiceFetchTextsForChat;
  static readonly FetchChatsForUser: ChatServiceFetchChatsForUser;
  static readonly FetchUsers: ChatServiceFetchUsers;
  static readonly SendTextToUser: ChatServiceSendTextToUser;
  static readonly CreateNewChat: ChatServiceCreateNewChat;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class ChatServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  loginUser(
    requestMessage: chat_pb.SignupOrLoginUserRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: chat_pb.LoginInfo|null) => void
  ): UnaryResponse;
  loginUser(
    requestMessage: chat_pb.SignupOrLoginUserRequest,
    callback: (error: ServiceError|null, responseMessage: chat_pb.LoginInfo|null) => void
  ): UnaryResponse;
  signupUser(
    requestMessage: chat_pb.SignupOrLoginUserRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: chat_pb.LoginInfo|null) => void
  ): UnaryResponse;
  signupUser(
    requestMessage: chat_pb.SignupOrLoginUserRequest,
    callback: (error: ServiceError|null, responseMessage: chat_pb.LoginInfo|null) => void
  ): UnaryResponse;
  fetchTextsForChat(requestMessage: chat_pb.FetchTextsForChatRequest, metadata?: grpc.Metadata): ResponseStream<chat_pb.Text>;
  fetchChatsForUser(requestMessage: chat_pb.FetchChatsForUserRequest, metadata?: grpc.Metadata): ResponseStream<chat_pb.Chat>;
  fetchUsers(requestMessage: chat_pb.FetchUsersRequest, metadata?: grpc.Metadata): ResponseStream<chat_pb.User>;
  sendTextToUser(
    requestMessage: chat_pb.SendTextToUserRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: chat_pb.TextSent|null) => void
  ): UnaryResponse;
  sendTextToUser(
    requestMessage: chat_pb.SendTextToUserRequest,
    callback: (error: ServiceError|null, responseMessage: chat_pb.TextSent|null) => void
  ): UnaryResponse;
  createNewChat(
    requestMessage: chat_pb.CreateNewChatRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: chat_pb.Chat|null) => void
  ): UnaryResponse;
  createNewChat(
    requestMessage: chat_pb.CreateNewChatRequest,
    callback: (error: ServiceError|null, responseMessage: chat_pb.Chat|null) => void
  ): UnaryResponse;
}

