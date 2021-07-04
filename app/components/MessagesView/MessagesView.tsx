import { RouteProp } from '@react-navigation/core'
import { StackNavigationProp } from '@react-navigation/stack'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { Button, FlatList, Text, TextInput, View } from 'react-native'
import * as uuid from 'react-native-uuid'

import { RootStackParamList } from '../../../App'
import { fetchTextsForChat, IMessage, sendTextToUser } from '../../api'
import { UserContext } from '../../UserContext'
import { SafeAreaWrapper } from '../utils/SafeAreaWrapper'
import { useInterval } from '../utils/utils'
import styles from './styles'

interface IComposeViewProps {
  onSubmit: (content: string) => void
}

const MessageComposeView = ({ onSubmit }: IComposeViewProps) => {
  const [messageContent, setMessageContent] = useState('')

  const onPressSend = () => {
    onSubmit(messageContent)
    setMessageContent('')
  }

  return (
    <View style={styles.messageComposeContainer}>
      <TextInput
        multiline={true}
        style={styles.textArea}
        placeholderTextColor="grey"
        placeholder="Write a message.."
        value={messageContent}
        onChangeText={setMessageContent}
      />
      <Button title="Send" disabled={!messageContent.length} onPress={onPressSend} />
    </View>
  )
}

interface IConversation {
  item: IMessage
}

const MessagesListItem = ({ item }: IConversation) => {
  return (
    <View style={{ ...styles.messageContainer, justifyContent: item.isOwn ? 'flex-end' : 'flex-start' }}>
      <Text style={item.isOwn ? { ...styles.messageBubble, ...styles.isOwn } : styles.messageBubble}>
        {item.content}
      </Text>
    </View>
  )
}

type MessagesScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Messages'>
type MessagesScreenRouteProp = RouteProp<RootStackParamList, 'Messages'>

export const MessagesView = ({
  navigation,
  route,
}: {
  navigation: MessagesScreenNavigationProp
  route: MessagesScreenRouteProp
}) => {
  const [username] = useContext(UserContext)
  const [messages, setMessages] = useState<IMessage[]>([])
  const flatListRef = useRef<FlatList>(null)
  const chatId = route.params?.key || '1'
  useInterval(() => {
    fetchTextsForChat({ username, chatId }, addToMessages)
  }, 15000)

  useEffect(() => {
    fetchTextsForChat({ username, chatId }, addToMessages)
  }, [])

  useEffect(() => {
    flatListRef.current?.scrollToEnd({ animated: true })
  }, [messages.length])

  const addToMessages = (m: IMessage) => {
    setMessages(messages => [...messages.filter(msg => msg.key !== m.key), m])
  }

  const onMessageSubmit = (content: string) => {
    sendTextToUser({ from: username, chatId, content }, () => {})
    addToMessages({
      content,
      conversationId: chatId,
      isOwn: true,
      key: uuid.default.v4(),
    })
  }

  return (
    <SafeAreaWrapper>
      <View style={{ height: '100%' }}>
        <FlatList ref={flatListRef} data={messages} renderItem={MessagesListItem} />
        {chatId && <MessageComposeView onSubmit={onMessageSubmit} />}
      </View>
    </SafeAreaWrapper>
  )
}
