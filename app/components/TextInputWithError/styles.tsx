import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  viewContainer: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    height: 100,
    width: '80%',
  },
  textInput: {
    height: 40,
    backgroundColor: 'powderblue', // debug
    padding: 5,
    borderRadius: 5,
    marginBottom: 5
  },
  textInputContainer: {
    height: 50,
  },
  loginError: {
    color: 'red',
    paddingLeft: 8,
    fontSize: 10,
  },
})

export default styles
