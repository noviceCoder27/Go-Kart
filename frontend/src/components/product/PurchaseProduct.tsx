import { Flex } from "@mantine/core"
import ImageGallery from "./purchaseProduct/ImageGallery";
import PurchaseDetails from "./purchaseProduct/PurchaseDetails";
import './../styles/Product.css';

const PurchaseProduct = () => {
  return (
    <Flex w = "100%"  gap = "5rem" className = "main-section">
        <ImageGallery />
        <PurchaseDetails />
    </Flex>
  )
}

export default PurchaseProduct
