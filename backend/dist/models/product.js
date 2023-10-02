"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const ProductSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: {
            info: {
                type: {
                    weight: Number,
                    brand: String,
                    manufactureDate: Date,
                    expiryDate: Date
                }
            },
            details: {
                type: {
                    nutrients: String,
                    storage: String,
                    units: Number,
                    seller: String
                }
            }
        },
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
    },
    shippingDate: {
        type: Date,
        required: true
    }
}, { timestamps: true });
exports.default = mongoose_1.default.model('Products', ProductSchema);
