import express from 'express';
const router = express.Router();
const {
    getProducts,
    getPurchasedProducts,
    signUp,
    signIn,
    purchaseProduct} = require('../controllers/userControllers');

router.get('/products', getProducts);
router.get('/purchasedProducts',getPurchasedProducts);
router.post('/signup',signUp);
router.post('/signin',signIn);
router.post('/purchase',purchaseProduct);

module.exports = router;
