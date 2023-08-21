"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const { getProducts, getPurchasedProducts, signUp, signIn, purchaseProduct } = require('../controllers/userControllers');
router.get('/products', getProducts);
router.get('/purchasedProducts', getPurchasedProducts);
router.post('/signup', signUp);
router.post('/signin', signIn);
router.post('/purchase', purchaseProduct);
module.exports = router;
