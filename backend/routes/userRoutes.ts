import express from 'express';
const router = express.Router();
import {
    getProducts,
    getPurchasedProducts,
    signUp,
    signIn,
    placeOrder} from '../controllers/userControllers';
import { cancelOrder } from '../controllers/adminControllers';
import { requireAuth } from './../middleware/requireAuth';


router.get('/products', getProducts);
router.get('/purchasedProducts',requireAuth,getPurchasedProducts);
router.post('/signup',signUp);
router.post('/signin',signIn);
router.post('/purchase',requireAuth,placeOrder);
router.post('/cancel',requireAuth,cancelOrder);

export default router;
