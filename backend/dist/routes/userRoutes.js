"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const userControllers_1 = require("../controllers/userControllers");
const requireAuth_1 = require("./../middleware/requireAuth");
router.get('/products', userControllers_1.getProducts);
router.get('/purchasedProducts', requireAuth_1.requireAuth, userControllers_1.getPurchasedProducts);
router.post('/signup', userControllers_1.signUp);
router.post('/signin', userControllers_1.signIn);
router.post('/purchase', requireAuth_1.requireAuth, userControllers_1.placeOrder);
exports.default = router;
