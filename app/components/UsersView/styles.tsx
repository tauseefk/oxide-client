import { StyleSheet } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const styles = StyleSheet.create({
  usersListContainer: {
    flex: 1,
    width: 330,
    backgroundColor: 'powderblue', // debug
  },
  usersListItemContainer: {
    flexDirection: 'row',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderBottomColor: Colors.black,
    borderBottomWidth: 1,
  },
  usersListItemTitle: {
    fontSize: 18,
    justifyContent: 'center',
    alignSelf: 'stretch',
    flex: 1,
  },
  usersListItemTimestamp: {
    fontSize: 12,
    justifyContent: 'flex-end',
  },
})

export default styles
