import { Request, Response } from "express";
import Admin from '../models/admin';

export function getProducts(req:Request,res:Response) {
    res.json({message: 'hello'});
}


export async function signUp(req:Request,res:Response) {
    const {username,password} = req.body;
    if(!username || !password){
        return res.status(400).send({message: "Invalid Credentials"});
    }
    const userName = await Admin.findOne({username});
    if(userName) {
        return res.status(400).send({message: "Admin already exists"})
    }
    await Admin.create({userName: username, password});
    res.status(201).send({message: "Admin created successfully"});
}

export async function signIn(req:Request,res:Response) {
    const {username,password} = req.body;
    if(!username || !password){
        return res.status(400).send({message: "Invalid Credentials"});
    }
    const user = await Admin.findOne({username,password});
    if(!user) {
        return res.status(400).send({message: "User doesn't exists"})
    }
    await Admin.create({userName: username, password});
    res.status(201).send({message: "successfully logged in"});
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

