import React, { FC } from 'react'
import { Text, TextInput, TextInputProps, View } from 'react-native'
import styles from './styles'

interface ITextInputProps {
  value: string
  setValue: (value: string) => void
  showError?: boolean
  errorMessage?: string
  contentType?: string
}

export type Props = ITextInputProps & TextInputProps

export const TextInputWithError: FC<Props> = ({ value, setValue, showError = false, errorMessage, ...domProps }) => {
  return (
    <View style={styles.textInputContainer}>
      <TextInput {...domProps} style={styles.textInput} value={value} onChangeText={setValue} />
      {showError && <Text style={styles.loginError}>{errorMessage || "Incorrect username or password"}</Text>}
    </View>
  )
}
