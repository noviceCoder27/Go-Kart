"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireAuth = void 0;
const user_1 = __importDefault(require("../models/user"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const admin_1 = __importDefault(require("../models/admin"));
const requireAuth = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(403).send({ message: "Unauthorized access" });
    }
    const token = authorization.split(" ")[1];
    const secret = process.env.SECRET;
    const idObj = jsonwebtoken_1.default.verify(token, secret);
    if (typeof idObj !== "string") {
        const id = idObj.id;
        const user = (yield user_1.default.findById(id)) || (yield admin_1.default.findById(id));
        if (!user) {
            return res.status(403).send({ message: "Unauthorized access" });
        }
        req.headers["user"] = JSON.stringify(user);
    }
    else {
        return res.status(400).send({ message: "Error in user validation" });
    }
    next();
});
exports.requireAuth = requireAuth;
