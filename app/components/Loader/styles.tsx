import { StyleSheet } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const styles = StyleSheet.create({
  loader: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    backgroundColor: 'grey',
    opacity: 0.4,
  },
  safeArea: {
    backgroundColor: 'grey',
    opacity: 0.4,
  },
})

export default styles
