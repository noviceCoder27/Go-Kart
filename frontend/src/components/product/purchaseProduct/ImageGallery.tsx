import { Flex, Image } from "@mantine/core"



const ImageGallery = () => {
  return (
    <Flex w = "50%" direction="column" p = "1rem 0" gap = "4rem">
        <Image maw={600}  radius="md" src="https://freshcart.codescandy.com/assets/images/products/product-single-img-1.jpg" alt="Random image"/>
        <Flex gap = "2rem">
            <Image maw= {180} radius="md" src="https://freshcart.codescandy.com/assets/images/products/product-single-img-1.jpg" />
            <Image maw= {180} radius="md" src="https://freshcart.codescandy.com/assets/images/products/product-single-img-1.jpg" />
            <Image maw= {180} radius="md" src="https://freshcart.codescandy.com/assets/images/products/product-single-img-1.jpg" />
        </Flex>
    </Flex>
  )
}

export default ImageGallery
