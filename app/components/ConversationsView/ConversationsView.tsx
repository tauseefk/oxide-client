import React, { useCallback, useContext, useEffect, useState } from 'react'
import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'

import { SafeAreaWrapper } from '../utils/SafeAreaWrapper'
import styles from './styles'
import { RootStackParamList } from '../../../App'
import { fetchChats, IChat } from '../../api'
import { UserContext } from '../../UserContext'
import { useInterval } from '../utils/utils'

interface IConversation {
  item: IChat & { key: string }
  onConversationTap: (payload: any) => void
}

const ConversationsListItem = ({ item, onConversationTap }: IConversation) => {
  return (
    <TouchableOpacity onPress={() => onConversationTap(item.key)}>
      <View style={styles.conversationsListItemContainer}>
        <Text style={styles.conversationsListItemTitle}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  )
}

type ConversationsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Conversations'>
type ConversationsScreenRouteProp = RouteProp<RootStackParamList, 'Conversations'>

export const ConversationsView = ({
  navigation,
  route,
}: {
  navigation: ConversationsScreenNavigationProp
  route: ConversationsScreenRouteProp
}) => {
  const [username] = useContext(UserContext)
  useInterval(() => {
    fetchChats(username, addToChats)
  }, 15000)

  const [conversations, setConversations] = useState<IChat[]>([])
  const onConversationTap = (conversationKey: string) => {
    navigation.navigate('Messages', { key: conversationKey })
  }

  const addToChats = (c: IChat) => {
    setConversations(chats => {
      return [c, ...chats.filter(chat => chat.key !== c.key)]
    })
  }

  useEffect(() => {
    fetchChats(username, addToChats)
  }, [])

  return (
    <SafeAreaWrapper>
      <View style={{ height: '100%' }}>
        <FlatList
          data={conversations}
          renderItem={({ item }) => <ConversationsListItem item={item} onConversationTap={onConversationTap} />}
        />
      </View>
    </SafeAreaWrapper>
  )
}
