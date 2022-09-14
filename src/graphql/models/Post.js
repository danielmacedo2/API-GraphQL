import mongoose from 'mongoose';

const post = mongoose.model('Post', {
    title: {
        type: String,
        required: true,
        minlength: 5
    },
    content: {
        type: String,
        required: true,
        minlength: 200
    },
    author: {
        type: mongoose.model.Types.ObjectId,
        ref: 'User',
        required: true
    }
})