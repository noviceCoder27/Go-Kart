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
        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(400).send({ message: "Invalid Credentials" });
        }
        const userName = yield user_1.default.findOne({ username });
        if (userName) {
            return res.status(400).send({ message: "User already exists" });
        }
        yield user_1.default.create({ userName: username, password });
        res.status(201).send({ message: "User created successfully" });
    });
}
exports.signUp = signUp;
function signIn(req, res) {
    res.json({ message: 'hello' });
}
exports.signIn = signIn;
function purchaseProduct(req, res) {
    res.json({ message: 'hello' });
}
exports.purchaseProduct = purchaseProduct;
