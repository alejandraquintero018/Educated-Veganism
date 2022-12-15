import { gql } from '@apollo/client';


export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!) {
  addUser(username: $username, email: $email, password: $password) {
    token
  }
}
`

export const LOGIN = gql`
mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
      email
      links {
        name
        link
        description
        _id
      }
      username
    }
  }
}
`

export const ADD_LINK = gql`
mutation saveLinks($linkId: ID!) {
  saveLinks(linkId: $linkId) {
    _id
    email
    password
    username
    links {
      _id
      description
      link
      name
      category
    }
  }
}`
