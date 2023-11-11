import Text from "./Text";
import theme from "../theme";
import { View, StyleSheet } from "react-native";
import { format, parseISO } from 'date-fns'

const ReviewItem = ({ review }) => {
  const {
    text,
    rating,
    createdAt,
    user
  } = review

  const formattedCreatedAt = format(parseISO(createdAt), 'dd.MM.yyy')

  const itemStyles = StyleSheet.create({
    container: {
      backgroundColor: theme.backgroundColors.bgWhite,
      padding: 15,
      alignItems: 'stretch',
    },
  })
  const reviewStyles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      flexGrow: 1,
    },
    rating: {
      width: 50,
      height: 50,
      borderRadius: 50 / 2,
      borderWidth: 2,
      borderColor: theme.colors.primary,
      justifyContent: 'center',
    },
    infoContainer: {
      flexGrow: 1,
      paddingLeft: 15,
      paddingRight: 50,
    },
    creationDate: {
      marginTop: 2,
      marginBottom: 8,
    }
  })

  return (
    <View style={itemStyles.container}>
      <View style={reviewStyles.container}>
        <View style={reviewStyles.rating}>
          <Text color='primary' textAlign='center' fontWeight='bold' fontSize='subheading'>{rating}</Text>
        </View>
        <View style={reviewStyles.infoContainer}>
          <Text fontWeight='bold'>{user.username}</Text>
          <Text style={reviewStyles.creationDate} color='textSecondary'>{formattedCreatedAt}</Text>
          <Text>{text}</Text>
        </View>
      </View>
    </View>
  )
};

export default ReviewItem;