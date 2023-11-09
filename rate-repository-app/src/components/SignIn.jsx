import { View, StyleSheet, Pressable } from 'react-native'
import FormikTextInput from './FormikTextInput'
import { Formik } from 'formik'
import * as yup from 'yup'
import theme from '../theme'
import Text from './Text'
import useSignIn from '../hooks/useSignIn'
import AuthStorage from '../utils/authStorage'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: theme.backgroundColors.bgWhite,
  },
  input: {
    padding: 15,
    borderRadius: 10 / 2,
    marginTop: 15,
    height: 55,
  },
  signIn: {
    backgroundColor: theme.backgroundColors.bgPrimary,
    borderRadius: 10 / 2,
    marginTop: 15,
    marginBottom: 15,
    height: 55,
    textAlign: 'center',
    textAlignVertical: 'center',
  }
})

const validationSchema = yup.object().shape({
  username: yup
    .string().required('Username is required'),
  password: yup
    .string().required('Password is required'),
})

const SignIn = () => {
  const [signIn, result] = useSignIn();
  const authStorage = new AuthStorage('userToken');

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      await signIn({ username, password });
      await authStorage.setAccessToken(result.data.authenticate.accessToken);
      //console.log(result.data.authenticate.accessToken)
    } catch (e) {
      console.log(e);
    }

    //const token = await authStorage.getAccessToken()
    //console.log(token)
  }


  return (
    <Formik initialValues={{ username: '', password: ''}} onSubmit={onSubmit} validationSchema={validationSchema}>
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

export default SignIn