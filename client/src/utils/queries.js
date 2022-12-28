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
 {
  me {
    _id
    username
    email
    password
    links {
      _id
      name
      link
      description
      category
    }
    notes {
      note
      linkId
    }
  }
}
`;

export const QUERY_LINK = gql`
query Links {
  links {
    _id
    category
    description
    link
    name
  }
}`;

