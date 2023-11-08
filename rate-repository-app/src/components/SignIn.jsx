import { View, StyleSheet, Pressable } from 'react-native';
import FormikTextInput from './FormikTextInput';
import { Formik } from 'formik';
import theme from '../theme';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    padding: 15,
    backgroundColor: theme.backgroundColors.bgWhite,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    borderColor: theme.colors.grey,
    borderRadius: 10 / 2,
    marginBottom: 15,
    height: 55,
  },
  signIn: {
    backgroundColor: theme.backgroundColors.bgPrimary,
    borderRadius: 10 / 2,
    padding: 10,
    height: 55,
    textAlign: 'center',
    textAlignVertical: 'center',
  }
})

const SignIn = () => {

  const onSubmit = (values) => {
    console.log(values)
  }

  return (
    <Formik initialValues={{ username: '', password: ''}} onSubmit={onSubmit}>
      {({ handleSubmit }) => (
      <View style={styles.container}>
        <FormikTextInput style={styles.input} name='username' 
          placeholder='Username' placeholderTextColor='grey' />
        <FormikTextInput style={styles.input} name='password' placeholder='Password' 
          secureTextEntry placeholderTextColor='grey' />
        <Pressable onPress={handleSubmit} >
          <Text color='white' style={styles.signIn}
            fontWeight='bold' fontSize='subheading'>Sign in</Text>
        </Pressable>
      </View>)}
    </Formik>
  )
};

export default SignIn;