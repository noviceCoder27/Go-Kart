import mongoose, {Document} from "mongoose";


export interface IProduct extends Document{
    title: string,
    description: string,
    category:string,
    price:number,
    isAvailable: boolean,
    shippingDate: Date,
}


const Schema = mongoose.Schema;

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
},{timestamps: true});

export default mongoose.model<IProduct>('Products', ProductSchema);