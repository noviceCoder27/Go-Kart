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
exports.placeOrder = exports.purchaseProduct = exports.signIn = exports.signUp = exports.getPurchasedProducts = exports.getProducts = void 0;
const user_1 = __importDefault(require("../models/user"));
const product_1 = __importDefault(require("../models/product"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const order_1 = __importDefault(require("../models/order"));
function getProducts(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const products = yield product_1.default.find({});
        res.status(200).send({ "Products": products });
    });
}
exports.getProducts = getProducts;
function getPurchasedProducts(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const userStr = req.headers["user"];
        if (!userStr) {
            return res.status(403).send({ message: "Unauthorized access" });
        }
        if (typeof userStr === "string") {
            const getUser = JSON.parse(userStr);
            const _id = getUser._id;
            try {
                const user = yield user_1.default.findOne({ _id });
                if (user) {
                    res.status(200).send({ Purchased_Items: user.purchasedProducts || [] });
                }
                else {
                    res.status(404).send({ err: "User not found" });
                }
            }
            catch (err) {
                console.log(err);
                res.status(400).send({ err: "Error finding user" });
            }
        }
        else {
            console.log("Check your user ID");
            res.status(401).send({ err: "Check your user ID" });
        }
    });
}
exports.getPurchasedProducts = getPurchasedProducts;
function signUp(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { email, password } = req.body;
        const user = yield user_1.default.signUp(email, password);
        if (!user) {
            return res.status(400).send({ message: "Error creating account" });
        }
        const secret = process.env.SECRET;
        const token = jsonwebtoken_1.default.sign({ id: user._id }, secret, { expiresIn: '2h' });
        res.status(201).send({ message: "User created successfully", token });
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
        const secret = process.env.SECRET;
        const token = jsonwebtoken_1.default.sign({ id: user._id }, secret, { expiresIn: '2h' });
        res.status(201).send({ message: "Logged in successfully", token });
    });
}
exports.signIn = signIn;
function purchaseProduct(userId, productId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield user_1.default.findOne({ _id: userId });
            if (user) {
                try {
                    const product = yield product_1.default.findOne({ _id: productId });
                    if (product) {
                        let getPurchasedProducts = user.purchasedProducts;
                        const userObj = user.toObject();
                        const purchasedProduct = product._id;
                        const updatedPurchasedProducts = getPurchasedProducts ? [...getPurchasedProducts, purchasedProduct.toString()] : [purchasedProduct.toString()];
                        const newUser = Object.assign(Object.assign({}, userObj), { purchasedProducts: updatedPurchasedProducts });
                        try {
                            yield user_1.default.findByIdAndUpdate(userId, newUser, { new: true });
                            return true;
                        }
                        catch (err) {
                            console.log(err);
                            return false;
                        }
                    }
                    else {
                        return false;
                    }
                }
                catch (err) {
                    console.log(err);
                    return false;
                }
            }
            else {
                return false;
            }
        }
        catch (err) {
            console.log(err);
            return false;
        }
    });
}
exports.purchaseProduct = purchaseProduct;
function placeOrder(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const userStr = req.headers["user"];
        if (!userStr) {
            return res.status(403).send({ message: "Unauthorized access" });
        }
        const orderDetails = req.body;
        orderDetails.status = "placed";
        try {
            const order = yield order_1.default.create(orderDetails);
            res.status(201).send({ Sucessfull: order });
        }
        catch (err) {
            console.log(err);
            return res.status(400).send({ err: "Error creating order " });
        }
    });
}
exports.placeOrder = placeOrder;
