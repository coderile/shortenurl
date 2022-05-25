const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ShortUrlSchema = new Schema(
    {
        url:{
            type: String,
            // required:true
        },
        shortId: {
            type: String,
            // required: true
        }
    }
)

const ShortURL = mongoose.model('shorturl',ShortUrlSchema)
module.exports = ShortURL