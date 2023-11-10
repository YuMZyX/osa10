import { gql } from '@apollo/client'
import { REPOSITORY_BASE_FIELDS, USER_BASE_FIELDS } from './fragments'

export const GET_REPOSITORIES = gql`
  query {
    repositories {
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
    }
  }
  ${REPOSITORY_BASE_FIELDS}
`
export const AUTHENTICATE = gql`
  mutation authenticate($username: String!, $password: String!) {
    authenticate(credentials: { username: $username, password: $password }) {
      ...userBaseFields
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