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
exports.cancelOrder = exports.trackOrders = exports.confirmDelivery = exports.updateProduct = exports.deleteProduct = exports.addProduct = exports.signIn = exports.signUp = exports.getProducts = void 0;
const admin_1 = __importDefault(require("../models/admin"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const product_1 = __importDefault(require("./../models/product"));
const order_1 = __importDefault(require("./../models/order"));
const userControllers_1 = require("./userControllers");
function getProducts(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const userStr = req.headers["user"];
        if (!userStr) {
            return res.status(403).send({ message: "Unauthorized access" });
        }
        try {
            const products = yield product_1.default.find({});
            if (products) {
                res.status(200).send({ products });
            }
            else {
                res.status(404).send({ err: "No products" });
            }
        }
        catch (err) {
            console.log(err);
            res.status(400).send({ err: "Error finding products" });
        }
    });
}
exports.getProducts = getProducts;
function signUp(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { email, password } = req.body;
        const user = yield admin_1.default.signUp(email, password);
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
        const user = yield admin_1.default.signIn(email, password);
        if (!user) {
            return res.status(400).send({ message: "Error logging in" });
        }
        const secret = process.env.SECRET;
        const token = jsonwebtoken_1.default.sign({ id: user._id }, secret, { expiresIn: '2h' });
        res.status(201).send({ message: "Logged in successfully", token });
    });
}
exports.signIn = signIn;
function addProduct(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const userStr = req.headers["user"];
        if (!userStr) {
            return res.status(403).send({ message: "Unauthorized access" });
        }
        const product = req.body;
        try {
            const createdProduct = yield product_1.default.create(product);
            res.status(201).send({ Sucessful: createdProduct });
        }
        catch (err) {
            console.log(err);
            res.status(400).send("Failed to add product");
        }
    });
}
exports.addProduct = addProduct;
function deleteProduct(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const userStr = req.headers["user"];
        const { productId } = req.params;
        if (!userStr) {
            return res.status(403).send({ message: "Unauthorized access" });
        }
        try {
            const product = yield product_1.default.findByIdAndDelete(productId);
            res.status(201).send({ Deleted: product });
        }
        catch (err) {
            console.log(err);
            res.status(400).send({ message: "Error finding product" });
        }
    });
}
exports.deleteProduct = deleteProduct;
function updateProduct(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const userStr = req.headers["user"];
        const { productId } = req.params;
        const updatedProduct = req.body;
        if (!userStr) {
            return res.status(403).send({ message: "Unauthorized access" });
        }
        try {
            const product = yield product_1.default.findByIdAndUpdate(productId, updatedProduct, { new: true });
            res.status(201).send({ Updated: product });
        }
        catch (err) {
            console.log(err);
            res.status(400).send({ message: "Error finding product" });
        }
    });
}
exports.updateProduct = updateProduct;
function confirmDelivery(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const userStr = req.headers["user"];
        if (!userStr) {
            return res.status(403).send({ message: "Unauthorized access" });
        }
        const { _id, action } = req.body;
        try {
            const order = yield order_1.default.findById(_id);
            if (order) {
                try {
                    const userId = order.userId;
                    const productId = order.productId;
                    const product = yield (0, userControllers_1.purchaseProduct)(userId, productId);
                    if (product) {
                        order.status = `${action}`;
                        try {
                            const orderObj = order.toObject();
                            const updatedOrder = Object.assign(Object.assign({}, orderObj), { status: action });
                            yield order_1.default.findByIdAndUpdate(_id, updatedOrder, { new: true });
                            res.status(201).send({ message: action === "confirmed" ? "Order placed successfully" : "Order delivery cancelled" });
                        }
                        catch (err) {
                            console.log(err);
                            res.status(400).send({ message: "Error updating order status" });
                        }
                    }
                    else {
                        order.status = `${action}`;
                        res.status(400).send({ message: 'Product not found' });
                    }
                }
                catch (err) {
                    res.status(400).send({ message: 'Error confirming order' });
                }
            }
            else {
                res.status(404).send({ message: 'Order not found' });
            }
        }
        catch (err) {
            console.log(err);
            res.status(400).send({ message: 'Error confirming order' });
        }
    });
}
exports.confirmDelivery = confirmDelivery;
function trackOrders(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const userStr = req.headers["user"];
        if (!userStr) {
            return res.status(403).send({ message: "Unauthorized access" });
        }
        try {
            const orders = yield order_1.default.find({});
            res.status(200).send({ Orders: orders });
        }
        catch (err) {
            console.log(err);
            res.status(400).send({ message: "Error finding orders" });
        }
    });
}
exports.trackOrders = trackOrders;
function cancelOrder(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { userId, productId } = req.body;
        try {
            const order = yield order_1.default.findOne({ userId, productId });
            if (order) {
                const updatedOrder = Object.assign(Object.assign({}, order), { status: "cancelled" });
                const { _id } = order;
                try {
                    const updateStatus = yield order_1.default.findByIdAndUpdate(_id, updatedOrder, { new: true });
                    res.status(201).send({ Cancelled: updateStatus });
                }
                catch (err) {
                    return res.status(400).send({ err: "Error cancelling order" });
                }
            }
            else {
                return res.status(404).send({ err: "Order not found" });
            }
        }
        catch (err) {
            console.log(err);
            return res.status(400).send({ err: "Error finding order" });
        }
    });
}
exports.cancelOrder = cancelOrder;
