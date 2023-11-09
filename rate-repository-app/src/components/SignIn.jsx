import { View, StyleSheet, Pressable } from 'react-native'
import FormikTextInput from './FormikTextInput'
import { Formik } from 'formik'
import * as yup from 'yup'
import theme from '../theme'
import Text from './Text'

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

  const onSubmit = (values) => {
    console.log(values)
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