import { View, StyleSheet, ScrollView } from 'react-native'
import { Link } from 'react-router-native'
import { useQuery, useApolloClient } from "@apollo/client"
import { ME } from './graphql/queries'
import useAuthStorage from '../hooks/useAuthStorage'
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
  const user = useQuery(ME);
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const logout = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
  }

  if (user.loading) {
    return null
  }

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Link style={styles.tabs} to='/'>
          <Text fontSize='subheading' fontWeight='bold' style={styles.fontColor}>Repositories</Text>
        </Link>
        {user.data.me
        ?
        <Link style={styles.tabs} onPress={logout} to='/login'>
          <Text fontSize='subheading' fontWeight='bold' style={styles.fontColor}>Sign out</Text>
        </Link>
        :
        <Link style={styles.tabs} to='/login'>
          <Text fontSize='subheading' fontWeight='bold' style={styles.fontColor}>Sign in</Text>
        </Link>
        }
      </ScrollView>
    </View>
  )
}

export default AppBar