import React, { useContext, useEffect, useState } from 'react'
import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'

import { SafeAreaWrapper } from '../utils/SafeAreaWrapper'
import styles from './styles'
import { RootStackParamList } from '../../../App'
import { createNewChat, fetchUsers, IUser } from '../../api'
import { UserContext } from '../../UserContext'
import { useInterval } from '../utils/utils'

interface IUsersListProps {
  item: IUser & { key: string }
  onUserTap: (payload: any) => void
}

const UsersListItem = ({ item, onUserTap }: IUsersListProps) => {
  return (
    <TouchableOpacity onPress={() => onUserTap(item.key)}>
      <View style={styles.usersListItemContainer}>
        <Text style={styles.usersListItemTitle}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  )
}

type UsersScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Users'>
type UsersScreenRouteProp = RouteProp<RootStackParamList, 'Users'>

export const UsersView = ({ navigation }: { navigation: UsersScreenNavigationProp; route: UsersScreenRouteProp }) => {
  const [username] = useContext(UserContext)
  useInterval(() => {
    fetchUsers(addToUsers)
  }, 15000)

  const [users, setUsers] = useState<IUser[]>([])
  const onUserTap = (userKey: string) => {
    createNewChat({ from: username, to: userKey }, (chatId: string) => {
      navigation.navigate('Messages', { key: chatId })
    })
  }

  const addToUsers = (u: IUser) => {
    setUsers(users => [...users.filter(user => user.key !== u.key), u].filter(user => user.name !== username))
  }

  useEffect(() => {
    fetchUsers(addToUsers)
  }, [])

  return (
    <SafeAreaWrapper>
      <View style={{ height: '100%' }}>
        <FlatList data={users} renderItem={({ item }) => <UsersListItem item={item} onUserTap={onUserTap} />} />
      </View>
    </SafeAreaWrapper>
  )
}
