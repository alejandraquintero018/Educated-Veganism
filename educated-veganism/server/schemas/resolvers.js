const { AuthenticationError } = require('apollo-server-express');
const { User, Link } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
	Query: {
		me: async (parent, args, context) => {
			if (context.user) {
				const userData = await User.findOne({ _id: context.user._id }).select('-__v -password').populate('links');
				return userData;
			}
			throw new AuthenticationError('Not logged in');
		},
		links: async (parent, args, context) => {
			const links = await Link.find({})
			return links; 
		}
	},

	Mutation: {
		addUser: async (_, { username, email, password }) => {
			const user = await User.create({ username, email, password });
			const token = signToken(user);

			return { token, user };
		},
		login: async (parent, { email, password }) => {
			const user = await User.findOne({ email });

			if (!user) {
				throw new AuthenticationError('This account has not been created yet');
			}

			const correctPassword = await user.isCorrectPassword(password);

			if (!correctPassword) {
				throw new AuthenticationError('Your password and email do not match');
			}

			const token = signToken(user)

			return { token, user }
		},
		saveLinks: async (parent, { linkId }, context) => {
			if (context.user) {
				const user = await User.findByIdAndUpdate({ _id: context.user._id }, { $push: { links: linkId } }, { new: true })
				return user
			}

			throw new AuthenticationError('you must be logged in to see your links');

		},
		addNote: async (parent, { linkId, note }, context) => {
			if(context.user) {
				const user = await User.findByIdAndUpdate({ _id: context.user._id}, { $push: { notes: { linkId, note } } }, { new: true })
				return user
			}

			throw new AuthenticationError('you must be logged in to make notes');
		}
	},
};

module.exports = resolvers;
