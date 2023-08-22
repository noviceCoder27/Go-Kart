"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const adminControllers_1 = require("../controllers/adminControllers");
router.get('/products', adminControllers_1.getProducts);
router.post('/signup', adminControllers_1.signUp);
router.post('/signin', adminControllers_1.signIn);
router.post('/product', adminControllers_1.addProduct);
router.delete('/:productId', adminControllers_1.deleteProduct);
router.put('/:productId', adminControllers_1.updateProduct);
router.post('/confirm', adminControllers_1.confirmDelivery);
router.get('/status', adminControllers_1.trackOrders);
exports.default = router;
