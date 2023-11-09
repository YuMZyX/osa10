import { View, StyleSheet, ScrollView } from 'react-native'
import { Link } from 'react-router-native'
import Constants from 'expo-constants'
import Text from './Text'
import theme from '../theme'

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backfaceVisibility: 'visible',
    backgroundColor: theme.backgroundColors.bgAppBar,
    flexDirection: 'row',
  },
  tabs: {
    padding: 20
  },
  fontColor: {
    color: 'white'
  }
})

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Link style={styles.tabs} to='/'>
          <Text fontSize='subheading' fontWeight='bold' style={styles.fontColor}>Repositories</Text>
        </Link>
        <Link style={styles.tabs} to='/login'>
          <Text fontSize='subheading' fontWeight='bold' style={styles.fontColor}>Sign in</Text>
        </Link>
      </ScrollView>
    </View>
  )
}

export default AppBar