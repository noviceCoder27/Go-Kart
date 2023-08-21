import mongoose from "mongoose";

const Schema = mongoose.Schema;

const AdminSchema = new Schema({
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
    userAddress: {
        type: String,
    }
},{timestamps: true});

module.exports = mongoose.model('Admin',AdminSchema);