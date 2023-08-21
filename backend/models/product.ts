import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    tite: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    isAvailable: {
        type: Boolean,
        required: true
    }
},{timestamps: true});

module.exports = mongoose.model('Products', ProductSchema);