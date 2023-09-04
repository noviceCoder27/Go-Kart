import { Request, Response } from "express";
import Admin from '../models/admin';
import jwt,{ Secret } from "jsonwebtoken";
import { IAdmin } from './../models/admin';
import Products, { IProduct } from './../models/product';
import Order, { IOrder } from './../models/order';
import { purchaseProduct } from "./userControllers";




export async function getProducts(req:Request,res:Response) {
    const userStr = req.headers["user"];
    if(!userStr) {
        return res.status(403).send({message: "Unauthorized access"});
    }
    try {
        const products  = await Products.find({});
        if(products) {
            res.status(200).send({products});
        } else {
            res.status(404).send({err: "No products"});
        }
    } catch(err) {
        console.log(err);
        res.status(400).send({err: "Error finding products"});
    }
}


export async function signUp(req:Request,res:Response) {
    const {email,password} = req.body;
    const user = await (Admin as unknown as IAdmin).signUp(email,password);
    if(!user){
        return res.status(400).send({message: "Error creating account"});
    }
    const secret = process.env.SECRET as Secret;
    const token = jwt.sign({id:user._id},secret,{expiresIn: '2h'});
    res.status(201).send({message: "User created successfully",token});
}

export async function signIn(req:Request,res:Response) {
    const {email,password} = req.body;
    const user = await (Admin as unknown as IAdmin).signIn(email,password);
    if(!user){
        return res.status(400).send({message: "Error logging in"});
    }
    const secret = process.env.SECRET as Secret;
    const token = jwt.sign({id:user._id},secret,{expiresIn: '2h'});
    res.status(201).send({message: "Logged in successfully",token});
}

export async function addProduct(req:Request,res:Response) {
    const userStr = req.headers["user"];
    if(!userStr) {
        return res.status(403).send({message: "Unauthorized access"});
    }
    const product = req.body;
    try {
        const createdProduct = await Products.create(product);
        res.status(201).send({Sucessful: createdProduct});
    }catch(err) {
        console.log(err);
        res.status(400).send("Failed to add product");
    }
}

export async function deleteProduct(req:Request,res:Response) {
    const userStr = req.headers["user"];
    const {productId} = req.params; 
    if(!userStr) {
        return res.status(403).send({message: "Unauthorized access"});
    }
    try {
        const product = await Products.findByIdAndDelete(productId);
        res.status(201).send({Deleted: product});
    }catch(err) {
        console.log(err);
        res.status(400).send({message: "Error finding product"});
    } 
    

}

export async function updateProduct(req:Request,res:Response) {
    const userStr = req.headers["user"];
    const {productId} = req.params; 
    const updatedProduct = req.body;
    if(!userStr) {
        return res.status(403).send({message: "Unauthorized access"});
    }
    try {
        const product = await Products.findByIdAndUpdate(productId, updatedProduct ,{new: true});
        res.status(201).send({Updated: product});
    }catch(err) {
        console.log(err);
        res.status(400).send({message: "Error finding product"});
    } 
}

export async function confirmDelivery(req:Request,res:Response) {
    const userStr = req.headers["user"];
    if(!userStr) {
        return res.status(403).send({message: "Unauthorized access"});
    }
    const {_id,action} = req.body;
    try {
        const order = await Order.findById(_id);
        if(order) {
            try {
                const userId:string = order.userId;
                const productId:string = order.productId;
                const product: boolean  = await purchaseProduct(userId,productId);
                if(product) {
                    order.status = `${action}`;
                    try {
                        const orderObj = order.toObject();
                        const updatedOrder =  {...orderObj,status:action}
                        await Order.findByIdAndUpdate(_id,updatedOrder,{new:true});
                        res.status(201).send({message: action === "confirmed" ? "Order placed successfully": "Order delivery cancelled"});
                    } catch(err) {
                        console.log(err);
                        res.status(400).send({message: "Error updating order status"});
                    }
                    
                } else {
                    order.status = `${action}`;
                    res.status(400).send({message: 'Product not found'});
                }
            } catch(err) {
                res.status(400).send({message: 'Error confirming order'});
            }
        } else {
            res.status(404).send({message: 'Order not found'});
        }
    } catch(err) {
        console.log(err);
        res.status(400).send({message: 'Error confirming order'});
    }
}

export async function trackOrders(req:Request,res:Response) {
    const userStr = req.headers["user"];
    if(!userStr) {
        return res.status(403).send({message: "Unauthorized access"});
    }
    try {      
        const orders = await Order.find({});
        res.status(200).send({Orders: orders});
    } catch(err) {
        console.log(err);
        res.status(400).send({message: "Error finding orders"});
    }
}

export async function cancelOrder(req:Request,res:Response) {
    const {userId,productId} = req.body;
    try {
        const order: IOrder | null = await Order.findOne({userId,productId});
        if(order) {
            const updatedOrder = {...order,status: "cancelled"};
            const {_id} = order;
            try {
                const updateStatus = await Order.findByIdAndUpdate(_id,updatedOrder,{new:true});
                res.status(201).send({Cancelled: updateStatus});
            } catch(err) {
                return res.status(400).send({err: "Error cancelling order"}); 
            }
        } else {
            return res.status(404).send({err: "Order not found"});
        }
    } catch(err) {
        console.log(err);
        return res.status(400).send({err: "Error finding order"});
    }
}
