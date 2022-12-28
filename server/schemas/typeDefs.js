const { gql } = require('apollo-server-express');

const typeDefs = gql`

	type User {
		_id: ID
		username: String
		email: String
		password: String
		links: [Link]!
		notes: [Note]
	}

	type Note {
		note: String
		linkId: ID
	}

	type Category {
		name: String
	}

	type Auth {
		token: ID!
		user: User
	}

	type Query {
		me: User
		links: [Link]
	}

	type Link { 
		_id: ID
		name: String
		link: String
		description: String
		category: String
	}

	type Mutation {
		addUser(username: String!, email: String!, password: String!): Auth
		login(email: String!, password: String!): Auth
		saveLinks(linkId: ID!): User
		addNote(linkId: ID!, note:String!): User
	}
`;

module.exports = typeDefs;
