import { grpc } from '@improbable-eng/grpc-web'

import {
  Chat,
  FetchChatsForUserRequest,
  FetchTextsForChatRequest,
  FetchUsersRequest,
  LoginInfo,
  SendTextToUserRequest,
  SignupOrLoginUserRequest,
  Text,
  TextSent,
  User,
  CreateNewChatRequest
} from '../_proto/chat_pb'
import { ChatService } from '../_proto/chat_pb_service'
import Hashes from 'jshashes'

export interface IMessage {
  key: any
  content: string
  isOwn: boolean
  conversationId: string
}

export interface IUser {
  key: any
  name: string
}

export interface IChat {
  key: string
  title: string
  participants: string[]
}

const getHost = () => 'http://127.0.0.1:10000'

export const getAPIEndpoint = () => `${getHost()}/api/v0`

export const fetchChats = (username: string, callback: (chats: IChat) => void) => {
  const fetchChatsRequest = new FetchChatsForUserRequest()
  fetchChatsRequest.setUserid(username)

  const client = grpc.client(ChatService.FetchChatsForUser, {
    host: getHost(),
  })
  client.onHeaders((headers: grpc.Metadata) => {
    console.log('send.onHeaders', headers)
  })
  // @ts-ignore; not sure why this is complaining
  client.onMessage((message: Chat) => {
    callback({
      participants: message.getParticipantidsList(),
      key: message.getId().toString(),
      title: message.getParticipantidsList().filter(id => id !== username)[0],
    })
  })
  client.onEnd((code: grpc.Code, msg: string, trailers: grpc.Metadata) => {
    console.log('say.onEnd', code, msg, trailers)
  })
  client.start()
  client.send(fetchChatsRequest)
}

export const fetchTextsForChat = (
  { username, chatId }: { username: string; chatId: string },
  callback: (texts: IMessage) => void
) => {
  const fetchTextsRequest = new FetchTextsForChatRequest()
  fetchTextsRequest.setChatid(chatId)

  const client = grpc.client(ChatService.FetchTextsForChat, {
    host: getHost(),
  })
  client.onHeaders((headers: grpc.Metadata) => {
    console.log('send.onHeaders', headers)
  })
  // @ts-ignore; not sure why this is complaining
  client.onMessage((message: Text) => {
    callback({
      key: message.getId().toString(),
      content: message.getContent(),
      isOwn: message.getFrom() === username,
      conversationId: message.getFrom(),
    })
  })
  client.onEnd((code: grpc.Code, msg: string, trailers: grpc.Metadata) => {
    console.log('say.onEnd', code, msg, trailers)
  })
  client.start()
  client.send(fetchTextsRequest)
}

export const fetchUsers = (callback: (users: IUser) => void) => {
  const fetchUsersRequest = new FetchUsersRequest()

  const client = grpc.client(ChatService.FetchUsers, {
    host: getHost(),
  })
  client.onHeaders((headers: grpc.Metadata) => {
    console.log('send.onHeaders', headers)
  })
  // @ts-ignore; not sure why this is complaining
  client.onMessage((message: User) => {
    callback({
      key: message.getId().toString(),
      name: message.getName(),
    })
  })
  client.onEnd((code: grpc.Code, msg: string, trailers: grpc.Metadata) => {
    console.log('say.onEnd', code, msg, trailers)
  })
  client.start()
  client.send(fetchUsersRequest)
}

interface ISendTextToUserParams {
  chatId: string
  content: string
  from: string
}

export const sendTextToUser = ({ from, chatId, content }: ISendTextToUserParams, callback: (sent: string) => void) => {
  const sendTextRequest = new SendTextToUserRequest()
  sendTextRequest.setChatid(chatId)
  sendTextRequest.setContent(content)
  sendTextRequest.setFrom(from)

  const client = grpc.client(ChatService.SendTextToUser, {
    host: getHost(),
  })
  client.onHeaders((headers: grpc.Metadata) => {
    console.log('send.onHeaders', headers)
  })
  // @ts-ignore; not sure why this is complaining
  client.onMessage((message: TextSent) => {
    callback(message.getText())
  })
  client.onEnd((code: grpc.Code, msg: string, trailers: grpc.Metadata) => {
    console.log('say.onEnd', code, msg, trailers)
  })
  client.start()
  client.send(sendTextRequest)
}

interface ISignupOrLoginParams {
  username: string
  password: string
}
export const loginUser = async (
  { username, password }: ISignupOrLoginParams,
  callback: (isLoggedIn: boolean) => void
) => {
  try {
    let SHA256 = new Hashes.SHA256()
    const loginUserRequest = new SignupOrLoginUserRequest()
    loginUserRequest.setUsername(username)
    loginUserRequest.setPassword(SHA256.hex(password))

    const client = grpc.client(ChatService.LoginUser, {
      host: getHost(),
    })
    client.onHeaders((headers: grpc.Metadata) => {
      console.log('send.onHeaders', headers)
    })
    // @ts-ignore; not sure why this is complaining
    client.onMessage((message: LoginInfo) => {
      callback(message.getLoggedin())
    })
    client.onEnd((code: grpc.Code, msg: string, trailers: grpc.Metadata) => {
      console.log('say.onEnd', code, msg, trailers)
    })
    client.start()
    client.send(loginUserRequest)
  } catch (e) {
    console.error(e)
  }
}

export const signupUser = async (
  { username, password }: ISignupOrLoginParams,
  callback: (isLoggedIn: boolean) => void
) => {
  try {
    let SHA256 = new Hashes.SHA256()
    const signupUserRequest = new SignupOrLoginUserRequest()
    signupUserRequest.setUsername(username)
    signupUserRequest.setPassword(SHA256.hex(password))

    const client = grpc.client(ChatService.SignupUser, {
      host: getHost(),
    })
    client.onHeaders((headers: grpc.Metadata) => {
      console.log('send.onHeaders', headers)
    })
    // @ts-ignore; not sure why this is complaining
    client.onMessage((message: LoginInfo) => {
      callback(message.getLoggedin())
    })
    client.onEnd((code: grpc.Code, msg: string, trailers: grpc.Metadata) => {
      console.log('say.onEnd', code, msg, trailers)
    })
    client.start()
    client.send(signupUserRequest)
  } catch (e) {
    console.error(e)
  }
}

interface ICreateChatParams {
  from: string
  to: string
}
export const createNewChat = async (
  { from, to }: ICreateChatParams,
  callback: (chatId: string) => void
) => {
  try {
    const createChatRequest = new CreateNewChatRequest()
    createChatRequest.setFrom(from)
    createChatRequest.setTo(to)

    const client = grpc.client(ChatService.CreateNewChat, {
      host: getHost(),
    })
    client.onHeaders((headers: grpc.Metadata) => {
      console.log('send.onHeaders', headers)
    })
    // @ts-ignore; not sure why this is complaining
    client.onMessage((message: Chat) => {
      callback(message.getId())
    })
    client.onEnd((code: grpc.Code, msg: string, trailers: grpc.Metadata) => {
      console.log('say.onEnd', code, msg, trailers)
    })
    client.start()
    client.send(createChatRequest)
  } catch (e) {
    console.error(e)
  }
}
