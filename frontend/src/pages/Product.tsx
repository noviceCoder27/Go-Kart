import { Box } from "@mantine/core"
import ProductDetails from "../components/product/ProductDetails";
import RelatedItems from "../components/product/RelatedItems";
import PurchseProduct from "../components/product/PurchseProduct";
import './../components/styles/Product.css'

const Product = () => {
  return (
    <Box p = " 0 10rem" sx = {{fontFamily: "sans-serif",overflowX: "hidden"}} >
        <PurchseProduct />
        <ProductDetails />
        <RelatedItems />
    </Box>
  )
}

export default Product
