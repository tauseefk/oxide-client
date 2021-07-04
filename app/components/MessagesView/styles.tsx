import { StyleSheet } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const styles = StyleSheet.create({
  messagesContainer: {
    flex: 1,
    backgroundColor: 'powderblue', // debug
  },
  messageContainer: {
    flexDirection: 'row',
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  messageBubble: {
    fontSize: 14,
    maxWidth: '60%',
    padding: 10,
    borderRadius: 14,
    overflow: 'hidden',
    backgroundColor: 'lightgrey',
    
  },
  isOwn: {
    borderBottomRightRadius: 1,
    backgroundColor: 'steelblue',
    color: 'white',
  },
  messageComposeContainer: {
    flexDirection: 'row',
    marginHorizontal: 8,
    marginVertical: 5,
    borderColor: Colors.grey20,
    borderWidth: 1,
    padding: 8,
    borderRadius: 5,
    justifyContent: 'flex-end'
  },
  textArea: {
    flex: 1,
    paddingTop: 10,
    maxHeight: 150,
    justifyContent: 'flex-start',
  },
})

export default styles
