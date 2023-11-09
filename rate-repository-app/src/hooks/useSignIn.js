import { useMutation } from '@apollo/client'
import { AUTHENTICATE } from '../components/graphql/queries';

const useSignIn = () => {
  const [mutate, result] = useMutation(AUTHENTICATE, {
    onError: (error) => {
      console.log(error.message)
    }
  });

  const signIn = async ({ username, password }) => {
    mutate({ variables: { username: username, password: password } })
  };

  //console.log(result);

  return [signIn, result];
};

export default useSignIn;