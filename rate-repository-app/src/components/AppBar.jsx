import { View, StyleSheet, Pressable } from 'react-native';
import Constants from 'expo-constants';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backfaceVisibility: 'visible',
    backgroundColor: '#24292e'
  },
  tabs: {
    padding: 20
  },
  fontColor: {
    color: 'white'
  }
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.tabs}>
        <Text fontSize='subheading' fontWeight='bold' style={styles.fontColor}>Repositories</Text>
      </Pressable>
    </View>
  )
};

export default AppBar;