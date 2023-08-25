import express from 'express';
const router = express.Router();
import {requireAuth} from '../middleware/requireAuth';
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



router.get('/products',requireAuth, getProducts);
router.post('/signup',signUp);
router.post('/signin',signIn);
router.post('/product',requireAuth,addProduct);
router.delete('/:productId',requireAuth,deleteProduct);
router.put('/:productId',requireAuth,updateProduct);
router.post('/confirm',requireAuth,confirmDelivery);
router.get('/status',requireAuth,trackOrders);


export default router;