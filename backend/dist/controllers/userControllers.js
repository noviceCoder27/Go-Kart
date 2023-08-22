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
exports.purchaseProduct = exports.signIn = exports.signUp = exports.getPurchasedProducts = exports.getProducts = void 0;
const user_1 = __importDefault(require("../models/user"));
function getProducts(req, res) {
    res.json({ message: 'hello' });
}
exports.getProducts = getProducts;
function getPurchasedProducts(req, res) {
    res.json({ message: 'hello' });
}
exports.getPurchasedProducts = getPurchasedProducts;
function signUp(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { email, password } = req.body;
        const user = yield user_1.default.signUp(email, password);
        if (!user) {
            return res.status(400).send({ message: "Error creating account" });
        }
        res.status(201).send({ message: "User created successfully" });
    });
}
exports.signUp = signUp;
function signIn(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { email, password } = req.body;
        const user = yield user_1.default.signIn(email, password);
        if (!user) {
            return res.status(400).send({ message: "Error logging in" });
        }
        res.status(201).send({ message: "Logged in successfully" });
    });
}
exports.signIn = signIn;
function purchaseProduct(req, res) {
    res.json({ message: 'hello' });
}
exports.purchaseProduct = purchaseProduct;
