import mongoose from "mongoose";

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
    }
},{timestamps: true});

module.exports = mongoose.model('UserAddress',OrderSchema);