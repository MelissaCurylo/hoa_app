const mongoose = require('mongoose');

const CommunityPostSchema = new mongoose.Schema({

    postTitle:{
        type: String,
        required: [ true, "Post title is required."],
        minLength: [5, "Post title must be at minimum 5 characters in length."]
    },
    postDetails:{
        type: String,
        required: [ true, "Post details are required."],
        max: [250, "Post details max length is 250, please shorten details."]
    }

},{ timestamp: true})

module.exports.Post = mongoose.model('Post', CommunityPostSchema)