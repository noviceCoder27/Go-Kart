import { Request, Response } from "express";
import User from '../models/user';

interface IUser extends Document{
    signUp: Function,
    signIn: Function 
}

export function getProducts(req:Request,res:Response) {
    res.json({message: 'hello'});
}

export function getPurchasedProducts(req:Request,res:Response) {
    res.json({message: 'hello'});
}

interface IUser  extends Document {
    signUp: Function,
    signIn: Function
}

export async function signUp(req:Request,res:Response) {
    const {email,password} = req.body;
    const user = await (User as unknown as IUser).signUp(email,password);
    if(!user){
        return res.status(400).send({message: "Error creating account"});
    }
    res.status(201).send({message: "User created successfully"});
}

export async function signIn(req:Request,res:Response) {
    const {email,password} = req.body;
    const user = await (User as unknown as IUser).signIn(email,password);
    if(!user){
        return res.status(400).send({message: "Error logging in"});
    }
    res.status(201).send({message: "Logged in successfully"});
}

export function purchaseProduct(req:Request,res:Response) {
    res.json({message: 'hello'});
}


