"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const OrderSchema = new Schema({
    userId: {
        type: String,
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
    emailId: {
        type: String,
        requried: true
    },
    deliveryType: {
        type: String,
        required: true
    }
}, { timestamps: true });
module.exports = mongoose_1.default.model('UserAddress', OrderSchema);
