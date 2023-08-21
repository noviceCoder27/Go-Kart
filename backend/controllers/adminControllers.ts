import { Request, Response } from "express";

function getProducts(req:Request,res:Response) {
    res.json({message: 'hello'});
}


function signUp(req:Request,res:Response) {
    res.json({message: 'hello'});
}

function signIn(req:Request,res:Response) {
    res.json({message: 'hello'});
}

function addProduct(req:Request,res:Response) {
    res.json({message: 'hello'});
}

function deleteProduct(req:Request,res:Response) {
    res.json({message: 'hello'});
}

function updateProduct(req:Request,res:Response) {
    res.json({message: 'hello'});
}

function confirmDelivery(req:Request,res:Response) {
    res.json({message: 'hello'});
}

function trackOrders(req:Request,res:Response) {
    res.json({message: 'hello'});
}

module.exports = {
    getProducts ,
    signUp,
    signIn,
    addProduct,
    deleteProduct,
    updateProduct,
    confirmDelivery,
    trackOrders
};