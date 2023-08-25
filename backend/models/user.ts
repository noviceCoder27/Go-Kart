import mongoose, {Document,Schema} from "mongoose";
import validator from 'validator'
import bcrpyt from 'bcrypt'


export interface IUser extends Document{
    email: string,
    password: string,
    userName?: string,
    profilePic?: string,
    purchasedProducts: Array<string>
    signUp: Function,
    signIn: Function 
}


const UserSchema: Schema = new Schema({
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
    purchasedProducts :{
        type: Array<String>,
        requried: true
    }
},{timestamps: true});

UserSchema.statics.signUp = async function(email,password) {
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

UserSchema.statics.signIn = async function(email,password) {
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

export default mongoose.model<IUser>('User',UserSchema);
