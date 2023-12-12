import mongoose from 'mongoose';

const userCollection = 'Users';

const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    telephone: {
        type: String,
        required: true,
    },
    favorites: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Event',
        },
    ],
    role: {
        type: String,
        enum: ['user', 'event_manager'],
        default: 'user',
    },
    tickets: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Ticket',
        }
    ],
    isActive: {
        type: Boolean,
        default: true,
    },
});

userSchema.set('toJSON', {
    transform: function (doc, ret) {
        delete ret.password;
        return ret;
    },
});

const userModel = mongoose.model(userCollection, userSchema);

export default userModel;
