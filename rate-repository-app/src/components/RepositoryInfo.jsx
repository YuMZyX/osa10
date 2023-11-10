import RepositoryItem from "./RepositoryItem";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-native";
import { GET_REPOSITORY } from "./graphql/queries";
import { StyleSheet, View } from 'react-native';
import * as Linking from 'expo-linking';
import Button from './Button'

const RepositoryInfo = () => {
  const id = useParams();
  const { loading, error, data } = useQuery(GET_REPOSITORY, {
    variables: { repositoryId: id.repositoryId }
  });

  if (loading) return null;
  if (error) return console.log(error);
  const repository = data.repository;

  const openURL = () => {
    Linking.openURL(repository.url);
  }

  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      padding: 15
    },
  })

  return (
    <View>
      <RepositoryItem repository={repository} button={true} />
      <View style={styles.container}>
        <Button onPress={openURL} style={styles.button}>Open in GitHub</Button>
      </View>
    </View>
  )
}

export default RepositoryInfo;