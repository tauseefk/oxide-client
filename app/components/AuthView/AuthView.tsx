import React, { useContext, useEffect, useState } from 'react'
import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { Button, View } from 'react-native'

import { SafeAreaWrapper } from '../utils/SafeAreaWrapper'
import styles from './styles'
import { RootStackParamList } from '../../../App'
import { loginUser, signupUser } from '../../api'
import { UserContext } from '../../UserContext'
import { TextInputWithError } from '../TextInputWithError/TextInputWithError'
import { Loader } from '../Loader/Loader'

enum AUTHERRORS {
  LOGIN = 'Incorrect user name or password',
  SIGNUP = 'User already exists',
}

type AuthScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Auth'>
type AuthScreenRouteProp = RouteProp<RootStackParamList, 'Conversations'>

export const AuthView = ({ navigation }: { navigation: AuthScreenNavigationProp; route: AuthScreenRouteProp }) => {
  const [_, setAuthenticatedUsername] = useContext(UserContext)
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [authError, setAuthError] = useState(false)
  const [errorMessage, setErrorMessage] = useState(AUTHERRORS.LOGIN)
  const [loading, setLoading] = useState(false)

  const onLoginButtonTap = () => {
    setLoading(true)
    loginUser({ username, password }, isLoggedIn => {
      setLoading(false)
      if (isLoggedIn) {
        setAuthenticatedUsername(username)
        setAuthError(false)
        navigation.replace('Conversations', { key: 'Conversations' })
      } else {
        setAuthError(true)
        setErrorMessage(AUTHERRORS.LOGIN)
      }
    })
  }

  const onSignupButtonTap = () => {
    setLoading(true)
    signupUser({ username, password }, isLoggedIn => {
      setLoading(false)
      if (isLoggedIn) {
        setAuthenticatedUsername(username)
        setAuthError(false)
        navigation.replace('Conversations', { key: 'Users' })
      } else {
        setAuthError(true)
        setErrorMessage(AUTHERRORS.SIGNUP)
      }
    })
  }

  // remove login error when user updates username or password
  useEffect(() => {
    setAuthError(false)
  }, [username, password])

  return (
    <View>
      <SafeAreaWrapper>
        <View style={styles.viewContainer}>
          <View style={styles.formContainer}>
            <TextInputWithError
              autoCapitalize="none"
              placeholderTextColor="grey"
              placeholder="Username"
              value={username}
              setValue={setUsername}
            />
            <TextInputWithError
              secureTextEntry
              autoCapitalize="none"
              textContentType="password"
              placeholderTextColor="grey"
              placeholder="Password"
              value={password}
              setValue={setPassword}
              showError={authError}
              errorMessage={errorMessage}
            />
          </View>
          <Button disabled={!username || !password} title="Login" onPress={onLoginButtonTap} />
          <Button disabled={!username || !password} title="Sign-up" onPress={onSignupButtonTap} />
        </View>
      </SafeAreaWrapper>
      {loading && <Loader />}
    </View>
  )
}
