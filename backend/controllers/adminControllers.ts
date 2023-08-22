import { Request, Response } from "express";
import Admin from '../models/admin';


interface IAdmin extends Document{
    signUp: Function,
    signIn: Function 
}


export function getProducts(req:Request,res:Response) {
    res.json({message: 'hello'});
}


export async function signUp(req:Request,res:Response) {
    const {email,password} = req.body;
    const user = await (Admin as unknown as IAdmin).signUp(email,password);
    if(!user){
        return res.status(400).send({message: "Error creating account"});
    }
    res.status(201).send({message: "User created successfully"});
}

export async function signIn(req:Request,res:Response) {
    const {email,password} = req.body;
    const user = await (Admin as unknown as IAdmin).signIn(email,password);
    if(!user){
        return res.status(400).send({message: "Error logging in"});
    }
    res.status(201).send({message: "Logged in successfully"});
}

export function addProduct(req:Request,res:Response) {
    res.json({message: 'hello'});
}

export function deleteProduct(req:Request,res:Response) {
    res.json({message: 'hello'});
}

export function updateProduct(req:Request,res:Response) {
    res.json({message: 'hello'});
}

export function confirmDelivery(req:Request,res:Response) {
    res.json({message: 'hello'});
}

export function trackOrders(req:Request,res:Response) {
    res.json({message: 'hello'});
}

