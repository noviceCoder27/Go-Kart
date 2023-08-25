import mongoose, {Document} from "mongoose";

export interface IOrder extends Document {
    userId: string,
    productId: string,
    country: string,
    city: string,
    landmark: string,
    firstName: string,
    lastName:string,
    pinCode: number,
    state: string,
    mobileNumber: number,
    emailId: string,
    deliveryType: string,
    status: string
}

const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    userId: {
        type : String,
        required: true
    },
    productId: {
        type: String,
        required: true
    },
    country: {
        type: String,
        requried: true
    },
    city: {
        type: String,
        required: true,
    },
    landmark: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    pinCode: {
        type: Number,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    mobileNumber: {
        type: Number,
        required: true,
    },
    emailId :{
        type: String,
        requried: true
    },
    deliveryType: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }
},{timestamps: true});

export default mongoose.model<IOrder>('Orders',OrderSchema);