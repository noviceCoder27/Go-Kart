import { Request, Response } from "express";
import User from '../models/user';
import Products from '../models/product';
import { IUser } from "../models/user";
import { IProduct } from './../models/product';
import jwt, { Secret } from 'jsonwebtoken';
import Order from "../models/order";
import { IOrder } from './../models/order';

export interface UserHeader {
    _id: string
    email: string,
    password: string
}

export async function getProducts(req:Request,res:Response) {
    const products = await Products.find({});
    res.status(200).send({"Products": products});
}

export async function getPurchasedProducts(req:Request,res:Response) {
    const userStr = req.headers["user"];
    if(!userStr) {
        return res.status(403).send({message: "Unauthorized access"});
    }
    if(typeof userStr === "string") {
        const getUser: UserHeader = JSON.parse(userStr);
        const _id = getUser._id;
        try {
            const user  = await User.findOne({_id});
            if(user) {
                res.status(200).send({Purchased_Items: user.purchasedProducts || []});
            } else {
                res.status(404).send({err: "User not found"});
            }
        } catch(err) {
            console.log(err);
            res.status(400).send({err: "Error finding user"});
        }
    } else {
        console.log("Check your user ID");
        res.status(401).send({err: "Check your user ID"});
    }
    
}


export async function signUp(req:Request,res:Response) {
    const {email,password} = req.body;
    const user = await (User as unknown as IUser).signUp(email,password);
    if(!user){
        return res.status(400).send({message: "Error creating account"});
    }
    const secret = process.env.SECRET as Secret;
    const token = jwt.sign({id:user._id},secret,{expiresIn: '2h'});
    res.status(201).send({message: "User created successfully",token});
}

export async function signIn(req:Request,res:Response) {
    const {email,password} = req.body;
    const user: UserHeader = await (User as unknown as IUser).signIn(email,password);
    if(!user){
        return res.status(400).send({message: "Error logging in"});
    }
    const secret = process.env.SECRET as Secret;
    const token = jwt.sign({id:user._id},secret,{expiresIn: '2h'});
    res.status(201).send({message: "Logged in successfully",token});
}

export async function purchaseProduct(userId:string,productId:string) {
    try {
        const user = await User.findOne({_id: userId});
        if(user) {
            try {
                const product: IProduct | null = await Products.findOne({_id: productId});
                if(product) {
                    let getPurchasedProducts = user.purchasedProducts;
                    const userObj = user.toObject();
                    const purchasedProduct = product._id;
                    const updatedPurchasedProducts = getPurchasedProducts ? [...getPurchasedProducts,purchasedProduct.toString()]: [purchasedProduct.toString()];
                    const newUser = {...userObj,purchasedProducts:updatedPurchasedProducts};
                    try {
                        await User.findByIdAndUpdate(userId,newUser,{new:true});
                        return true;
                    } catch(err) {
                        console.log(err);
                        return false;
                    }
                } else {
                    return false;
                }
            } catch(err) {
                console.log(err);
                return false;
            }
        } else {
            return false;
        }
    } catch(err) {
        console.log(err);
        return false;
    }
}

export async function placeOrder(req:Request,res:Response) {
    const userStr = req.headers["user"];
    if(!userStr) {
        return res.status(403).send({message: "Unauthorized access"});
    }
    const orderDetails:IOrder = req.body;
    orderDetails.status = "placed";
    try {
        const order = await Order.create(orderDetails);
        res.status(201).send({Sucessfull: order});
    } catch(err) {
        console.log(err);
        return res.status(400).send({err: "Error creating order "});
    }
}

