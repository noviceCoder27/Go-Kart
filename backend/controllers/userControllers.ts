import { Request, Response } from "express";

function getProducts(req:Request,res:Response) {
    res.json({message: 'hello'});
}

function getPurchasedProducts(req:Request,res:Response) {
    res.json({message: 'hello'});
}

function signUp(req:Request,res:Response) {
    res.json({message: 'hello'});
}

function signIn(req:Request,res:Response) {
    res.json({message: 'hello'});
}

function purchaseProduct(req:Request,res:Response) {
    res.json({message: 'hello'});
}

module.exports = {
    getProducts,
    getPurchasedProducts,
    signUp,
    signIn,
    purchaseProduct
};
