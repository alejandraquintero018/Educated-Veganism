const { Schema, model } = require('mongoose');

const noteSchema = new Schema(
    {
        linkId: {
            type: Schema.Types.ObjectId,
            ref: "Link",
        },
        note: String,
    }

)

module.exports = noteSchema;


