import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
        type : String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    userName: {
        type: String,
    },
    profilePic: {
        type: String
    },
    purchasedProucts :{
        type: Array<String>,
    }
},{timestamps: true});

module.exports = mongoose.model('User',UserSchema);
