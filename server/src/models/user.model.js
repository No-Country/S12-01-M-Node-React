import mongoose from "mongoose";

const userCollection = "Users";

const userSchema = new mongoose.Schema ({
    first_name : {
        type: String,
        required: true
    },
    last_name : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique : true
    },
    password: {
        type: String,
        required: true
    },
    telephone : {
        type: String,
        required: true
    },
    favourites : [String],
    role : {
        type: String,
        enum : ["user", "admin", "event_manager"],
        default: "user"
    }
})

userSchema.set('toJSON', {
    transform: function (doc, ret) {
        delete ret.password;
        return ret;
    },
});

const userModel = mongoose.model(userCollection, userSchema);

export default userModel;