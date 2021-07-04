// package: oxide
// file: chat.proto

import * as jspb from "google-protobuf";

export class Text extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getContent(): string;
  setContent(value: string): void;

  getFrom(): string;
  setFrom(value: string): void;

  getChatid(): string;
  setChatid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Text.AsObject;
  static toObject(includeInstance: boolean, msg: Text): Text.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Text, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Text;
  static deserializeBinaryFromReader(message: Text, reader: jspb.BinaryReader): Text;
}

export namespace Text {
  export type AsObject = {
    id: string,
    content: string,
    from: string,
    chatid: string,
  }
}

export class FetchTextsForChatRequest extends jspb.Message {
  getChatid(): string;
  setChatid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FetchTextsForChatRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FetchTextsForChatRequest): FetchTextsForChatRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FetchTextsForChatRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FetchTextsForChatRequest;
  static deserializeBinaryFromReader(message: FetchTextsForChatRequest, reader: jspb.BinaryReader): FetchTextsForChatRequest;
}

export namespace FetchTextsForChatRequest {
  export type AsObject = {
    chatid: string,
  }
}

export class SendTextToUserRequest extends jspb.Message {
  getContent(): string;
  setContent(value: string): void;

  getChatid(): string;
  setChatid(value: string): void;

  getFrom(): string;
  setFrom(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendTextToUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SendTextToUserRequest): SendTextToUserRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SendTextToUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendTextToUserRequest;
  static deserializeBinaryFromReader(message: SendTextToUserRequest, reader: jspb.BinaryReader): SendTextToUserRequest;
}

export namespace SendTextToUserRequest {
  export type AsObject = {
    content: string,
    chatid: string,
    from: string,
  }
}

export class Chat extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  clearParticipantidsList(): void;
  getParticipantidsList(): Array<string>;
  setParticipantidsList(value: Array<string>): void;
  addParticipantids(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Chat.AsObject;
  static toObject(includeInstance: boolean, msg: Chat): Chat.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Chat, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Chat;
  static deserializeBinaryFromReader(message: Chat, reader: jspb.BinaryReader): Chat;
}

export namespace Chat {
  export type AsObject = {
    id: string,
    participantidsList: Array<string>,
  }
}

export class CreateNewChatRequest extends jspb.Message {
  getFrom(): string;
  setFrom(value: string): void;

  getTo(): string;
  setTo(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateNewChatRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateNewChatRequest): CreateNewChatRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateNewChatRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateNewChatRequest;
  static deserializeBinaryFromReader(message: CreateNewChatRequest, reader: jspb.BinaryReader): CreateNewChatRequest;
}

export namespace CreateNewChatRequest {
  export type AsObject = {
    from: string,
    to: string,
  }
}

export class FetchChatsForUserRequest extends jspb.Message {
  getUserid(): string;
  setUserid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FetchChatsForUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FetchChatsForUserRequest): FetchChatsForUserRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FetchChatsForUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FetchChatsForUserRequest;
  static deserializeBinaryFromReader(message: FetchChatsForUserRequest, reader: jspb.BinaryReader): FetchChatsForUserRequest;
}

export namespace FetchChatsForUserRequest {
  export type AsObject = {
    userid: string,
  }
}

export class User extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): User.AsObject;
  static toObject(includeInstance: boolean, msg: User): User.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): User;
  static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
  export type AsObject = {
    id: string,
    name: string,
  }
}

export class FetchUsersRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FetchUsersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FetchUsersRequest): FetchUsersRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FetchUsersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FetchUsersRequest;
  static deserializeBinaryFromReader(message: FetchUsersRequest, reader: jspb.BinaryReader): FetchUsersRequest;
}

export namespace FetchUsersRequest {
  export type AsObject = {
  }
}

export class SignupOrLoginUserRequest extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignupOrLoginUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SignupOrLoginUserRequest): SignupOrLoginUserRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SignupOrLoginUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignupOrLoginUserRequest;
  static deserializeBinaryFromReader(message: SignupOrLoginUserRequest, reader: jspb.BinaryReader): SignupOrLoginUserRequest;
}

export namespace SignupOrLoginUserRequest {
  export type AsObject = {
    username: string,
    password: string,
  }
}

export class LoginInfo extends jspb.Message {
  getLoggedin(): boolean;
  setLoggedin(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginInfo.AsObject;
  static toObject(includeInstance: boolean, msg: LoginInfo): LoginInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LoginInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginInfo;
  static deserializeBinaryFromReader(message: LoginInfo, reader: jspb.BinaryReader): LoginInfo;
}

export namespace LoginInfo {
  export type AsObject = {
    loggedin: boolean,
  }
}

export class TextSent extends jspb.Message {
  getText(): string;
  setText(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TextSent.AsObject;
  static toObject(includeInstance: boolean, msg: TextSent): TextSent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TextSent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TextSent;
  static deserializeBinaryFromReader(message: TextSent, reader: jspb.BinaryReader): TextSent;
}

export namespace TextSent {
  export type AsObject = {
    text: string,
  }
}

