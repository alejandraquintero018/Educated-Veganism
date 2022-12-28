const { gql } = require('apollo-server-express');
const { Schema, model } = require('mongoose');

const categorySchema = new Schema(
    {
        name: {
            type: String,
            required: true,

        }
    }
); 

const Category = model('Category', categorySchema);

module.exports = Category; 