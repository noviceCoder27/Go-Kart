import { Flex } from "@mantine/core"
import ImageGallery from "./purchaseProduct/ImageGallery";
import PurchaseDetails from "./purchaseProduct/PurchaseDetails";


const PurchseProduct = () => {
  return (
    <Flex w = "100%" mt = "5rem" gap = "5rem">
        <ImageGallery />
        <PurchaseDetails />
    </Flex>
  )
}

export default PurchseProduct
