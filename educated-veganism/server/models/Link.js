const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const linkSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
        link: {
            type: String,
            required: true,
            unique: true,
        },
        description: {
            type: String,
            required: true,
        },
        category: {
            type: String, 
            required: true
        }
    }

); 

const Link = model('Link', linkSchema); 

module.exports = Link; 