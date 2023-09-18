import { Box } from "@mantine/core"
import ProductDetails from "../components/product/ProductDetails";
import RelatedItems from "../components/product/RelatedItems";
import PurchaseProduct from "../components/product/PurchaseProduct";
import './../components/styles/Product.css'

const Product = () => {
  return (
    <Box sx = {{fontFamily: "sans-serif",overflowX: "hidden"}} className="product-page">
        <PurchaseProduct />
        <ProductDetails />
        <RelatedItems />
    </Box>
  )
}

export default Product
