import mongoose, {Document} from "mongoose";

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

export default mongoose.model<Document>('Admin',AdminSchema);