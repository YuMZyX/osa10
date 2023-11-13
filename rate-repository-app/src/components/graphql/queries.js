import { gql } from '@apollo/client'
import { REPOSITORY_BASE_FIELDS, USER_BASE_FIELDS } from './fragments'

export const GET_REPOSITORIES = gql`
  query repositories($orderBy: AllRepositoriesOrderBy!, $orderDirection: OrderDirection!, $searchKeyword: String!) {
    repositories(orderBy: $orderBy, orderDirection: $orderDirection, searchKeyword: $searchKeyword) {
      edges {
        node {
          ...repositoryBaseFields
          ratingAverage
          reviewCount
        }
      }
    }
  }
  ${REPOSITORY_BASE_FIELDS}
`
export const GET_REPOSITORY = gql`
  query repository($repositoryId: ID!) {
    repository(id: $repositoryId) {
      ...repositoryBaseFields
      ratingAverage
      reviewCount
      reviews {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
        }
      }
    }
  }
  ${REPOSITORY_BASE_FIELDS}
`
export const AUTHENTICATE = gql`
  mutation authorize($credentials: AuthenticateInput!) {
    authenticate(credentials: $credentials) {
      accessToken
      user {
        ...userBaseFields
      }
    }
  }
  ${USER_BASE_FIELDS}
`
export const ME = gql`
  query {
    me {
      ...userBaseFields
    }
  }
  ${USER_BASE_FIELDS}
`
export const CREATE_REVIEW = gql`
  mutation createNewReview($review: CreateReviewInput) {
    createReview(review: $review) {
      id
      repositoryId
    }
  }
`
export const CREATE_USER = gql`
  mutation createNewUser($user: CreateUserInput) {
    createUser(user: $user) {
      id
      username
    }
  }
`