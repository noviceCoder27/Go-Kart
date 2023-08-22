import { Request, Response } from "express";
import User from '../models/user';



export function getProducts(req:Request,res:Response) {
    res.json({message: 'hello'});
}

export function getPurchasedProducts(req:Request,res:Response) {
    res.json({message: 'hello'});
}

export async function signUp(req:Request,res:Response) {
    const {username,password} = req.body;
    if(!username || !password){
        return res.status(400).send({message: "Invalid Credentials"});
    }
    const userName = await User.findOne({username});
    if(userName) {
        return res.status(400).send({message: "User already exists"})
    }
    await User.create({userName: username, password});
    res.status(201).send({message: "User created successfully"});
}

export async function signIn(req:Request,res:Response) {
    const {username,password} = req.body;
    if(!username || !password){
        return res.status(400).send({message: "Invalid Credentials"});
    }
    const user = await User.findOne({username,password});
    if(!user) {
        return res.status(400).send({message: "User doesn't exists"})
    }
    await User.create({userName: username, password});
    res.status(201).send({message: "successfully logged in"});
}

export function purchaseProduct(req:Request,res:Response) {
    res.json({message: 'hello'});
}


