import express from 'express';
const router = express.Router();
import {
    getProducts,
    getPurchasedProducts,
    signUp,
    signIn,
    purchaseProduct} from '../controllers/userControllers';

router.get('/products', getProducts);
router.get('/purchasedProducts',getPurchasedProducts);
router.post('/signup',signUp);
router.post('/signin',signIn);
router.post('/purchase',purchaseProduct);

export default router;
