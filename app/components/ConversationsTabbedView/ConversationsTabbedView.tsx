import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { UsersView } from '../UsersView'
import { ConversationsView } from '../ConversationsView'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../../../App'
import { RouteProp } from '@react-navigation/native'

const Tab = createBottomTabNavigator()
type ConversationsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Conversations'>
type ConversationsScreenRouteProp = RouteProp<RootStackParamList, 'Conversations'>

export const ConversationsTabbedView = ({
  navigation,
  route,
}: {
  navigation: ConversationsScreenNavigationProp
  route: ConversationsScreenRouteProp
}) => {
  return (
    <Tab.Navigator
      initialRouteName={route.params.key}
      tabBarOptions={{
        labelStyle: {
          fontSize: 15,
        },
      }}>
      <Tab.Screen name="Users" component={UsersView} />
      <Tab.Screen name="Conversations" component={ConversationsView} />
    </Tab.Navigator>
  )
}
