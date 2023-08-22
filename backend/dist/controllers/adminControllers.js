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
exports.trackOrders = exports.confirmDelivery = exports.updateProduct = exports.deleteProduct = exports.addProduct = exports.signIn = exports.signUp = exports.getProducts = void 0;
const admin_1 = __importDefault(require("../models/admin"));
function getProducts(req, res) {
    res.json({ message: 'hello' });
}
exports.getProducts = getProducts;
function signUp(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { email, password } = req.body;
        const user = yield admin_1.default.signUp(email, password);
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
        const user = yield admin_1.default.signIn(email, password);
        if (!user) {
            return res.status(400).send({ message: "Error logging in" });
        }
        res.status(201).send({ message: "Logged in successfully" });
    });
}
exports.signIn = signIn;
function addProduct(req, res) {
    res.json({ message: 'hello' });
}
exports.addProduct = addProduct;
function deleteProduct(req, res) {
    res.json({ message: 'hello' });
}
exports.deleteProduct = deleteProduct;
function updateProduct(req, res) {
    res.json({ message: 'hello' });
}
exports.updateProduct = updateProduct;
function confirmDelivery(req, res) {
    res.json({ message: 'hello' });
}
exports.confirmDelivery = confirmDelivery;
function trackOrders(req, res) {
    res.json({ message: 'hello' });
}
exports.trackOrders = trackOrders;
