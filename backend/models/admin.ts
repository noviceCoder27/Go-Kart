import mongoose, {Document} from "mongoose";
import validator from "validator";
import  bcrpyt  from 'bcrypt';


export interface IAdmin extends Document{
    email: string,
    password: string,
    userName?: string,
    profilePic?: string,
    signUp: Function,
    signIn: Function 
}

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
    }
},{timestamps: true});

AdminSchema.statics.signUp = async function(email,password) {
    if(!email || !password) {
        return null;
    }
    
    if(!validator.isEmail) {
        return null;
    }

    const salt = await bcrpyt.genSalt(10);
    const hash = await bcrpyt.hash(password,salt);
    const userExists = await this.findOne({email});
    if(userExists) {
        return null;
    }
    const user = await this.create({email,password:hash});
    return user;
}

AdminSchema.statics.signIn = async function(email,password) {
    if(!email || !password) {
        return null;
    }
    
    if(!validator.isEmail) {
        return null;
    }
    const user = await this.findOne({email});
    const validUser = await bcrpyt.compare(password,user.password);
    if(!validUser) {
        return null;
    }
    return user;
}

export default mongoose.model<IAdmin>('Admin',AdminSchema);