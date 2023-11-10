import { View, Image, StyleSheet } from "react-native"
import Text from "./Text"

const repositoryStyles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    padding: 15,
    backgroundColor: 'white',
  },
})
const headerStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexGrow: 1,
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 45 / 4,
  },
  avatarContainer: {
    flexGrow: 0,
    paddingRight: 15,
  },
  infoContainer: {
    flexGrow: 1,
    marginLeft: 3
  },
})
const infoStyles = StyleSheet.create({
  containerRow: {
    flexDirection: 'row',
    flexGrow: 1,
    justifyContent: 'space-around',
    marginTop: 12,
  },
  containerColumn: {
    flexDirection: 'column',
  }
})
const descriptionStyles = StyleSheet.create({
  description: {
    marginTop: 7,
    paddingRight: 50
  }
})

const RepositoryItem = ({ fullName, description, language, stars, forks, reviews, rating, avatar }) => {

  const checkAmount = (amount) => {
    if (amount >= 1000) {
      return (amount / 1000).toFixed(1) + 'k'
    } else {
      return amount
    }
  }
  const starsChecked = checkAmount(stars)
  const forksChecked = checkAmount(forks)
  const reviewsChecked = checkAmount(reviews)

  return (
    <View style={repositoryStyles.container} testID='repositoryItem'>
      <View style={headerStyles.container}>
        <View style={headerStyles.avatarContainer}>
          <Image style={headerStyles.avatar} source={{ uri: avatar }}></Image>
        </View>
        <View style={headerStyles.infoContainer}>
          <Text fontSize='subheading' fontWeight='bold'>{fullName}</Text>
          <Text style={descriptionStyles.description}>{description}</Text>
          <Text color='white' backgroundColor='primary'>{language}</Text>
        </View>
      </View>
      <View style={infoStyles.containerRow}>
        <View style={infoStyles.containerColumn}>
          <Text fontWeight='bold' textAlign='center'>{starsChecked}</Text>
          <Text textAlign='center' style={{ marginTop: 4 }}>Stars</Text>
        </View>
        <View style={infoStyles.containerColumn}>
          <Text fontWeight='bold' textAlign='center'>{forksChecked}</Text>
          <Text textAlign='center' style={{ marginTop: 4 }}>Forks</Text>
        </View>
        <View style={infoStyles.containerColumn}>
          <Text fontWeight='bold' textAlign='center'>{reviewsChecked}</Text>
          <Text textAlign='center' style={{ marginTop: 4 }}>Reviews</Text>
        </View>
        <View style={infoStyles.containerColumn}>
          <Text fontWeight='bold' textAlign='center'>{rating}</Text>
          <Text textAlign='center' style={{ marginTop: 4 }}>Rating</Text>
        </View>
      </View>
    </View>
  )
}

export default RepositoryItem