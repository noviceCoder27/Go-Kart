import { Request, Response, NextFunction, RequestHandler} from "express";
import User from "../models/user";
import jwt, { Secret } from 'jsonwebtoken';
import Admin from "../models/admin";


export const requireAuth: RequestHandler = async (req:Request,res:Response, next: NextFunction) => {
    const {authorization} = req.headers;
    if(!authorization) {
        return res.status(403).send({message: "Unauthorized access"});
    }
    const token = authorization.split(" ")[1];
    const secret = process.env.SECRET as Secret;
    const idObj = jwt.verify(token,secret); 
    if(typeof idObj !== "string") {
        const id = idObj.id;
        const user = await User.findById(id)|| await Admin.findById(id);
        if(!user) {
            return res.status(403).send({message: "Unauthorized access"});
        }
        req.headers["user"] = JSON.stringify(user);
    } else {
        return res.status(400).send({message: "Error in user validation"});
    }
    next();
}
