import mongoose, {Document} from "mongoose";


export interface IProduct extends Document{
    title: string,
    description: string,
    category:string,
    price:number,
    isAvailable: boolean,
}
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    title: {
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

export default mongoose.model<IProduct>('Products', ProductSchema);