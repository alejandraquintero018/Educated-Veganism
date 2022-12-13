import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
	query Query {
		users {
			username
			email
			_id
		}
	}
`;

export const QUERY_ME = gql`
query Me {
  me {
    _id
    email
    username
    links {
      _id
      description
      link
      name
      read
    }
  }
}
`;

export const QUERY_LINK = gql`
query Links {
  links {
    category
    description
    link
    name
  }
}`; 

