import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {grpc} from '@improbable-eng/grpc-web';
import {ReactNativeTransport} from '@improbable-eng/grpc-web-react-native-transport';

import {MessagesView} from './app/components/MessagesView';
import {AuthView} from './app/components/AuthView';
import {UserProvider} from './app/UserContext';
import {ConversationsTabbedView} from './app/components/ConversationsTabbedView/ConversationsTabbedView';

grpc.setDefaultTransport(ReactNativeTransport({withCredentials: false}));

const Stack = createStackNavigator<RootStackParamList>();

export type RootStackParamList = {
  Auth: {key: string};
  Conversations: {key: string};
  Messages: undefined | {key: string};
  Users: {key: string};
};

const App = () => {
  return (
    <UserProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Auth">
            <Stack.Screen
              name="Auth"
              component={AuthView}
              options={{title: 'Welcome'}}
            />
            <Stack.Screen
              name="Conversations"
              options={{title: ''}}
              component={ConversationsTabbedView}
            />
            <Stack.Screen name="Messages" component={MessagesView} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </UserProvider>
  );
};

export default App;
