import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
    user_comments: {
        type: String,
        required: true,
    },
    user_ref: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
});

const Comment = mongoose.model('Comment', commentSchema);

export default Comment;
