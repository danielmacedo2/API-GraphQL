import mongoose from 'mongoose';

const User = mongoose.model('User', {
    firstname: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: String,
    active: {
        type: Boolean,
        required: true,
    }
})

export default User;