import { useMutation } from '@apollo/client'
import { AUTHENTICATE } from '../components/graphql/queries';
import useAuthStorage from './useAuthStorage'
import { useApolloClient } from '@apollo/client';

const useSignIn = () => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const [mutate, result] = useMutation(AUTHENTICATE, {
    onError: (error) => {
      console.log(error.message)
    }
  });

  const signIn = async ({ username, password }) => {
    const { data } = await mutate({ variables: { username: username, password: password } });
    await authStorage.setAccessToken(data.authenticate.accessToken)
    apolloClient.resetStore();
  };

  return [signIn, result];
};

export default useSignIn;