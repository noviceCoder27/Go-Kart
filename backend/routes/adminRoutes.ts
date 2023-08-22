import express from 'express';
const router = express.Router();
import {
    getProducts ,
    signUp,
    signIn,
    addProduct,
    deleteProduct,
    updateProduct,
    confirmDelivery,
    trackOrders
} from '../controllers/adminControllers';

router.get('/products', getProducts);
router.post('/signup',signUp);
router.post('/signin',signIn);
router.post('/product',addProduct);
router.delete('/:productId',deleteProduct);
router.put('/:productId',updateProduct);
router.post('/confirm',confirmDelivery);
router.get('/status',trackOrders);


export default router;