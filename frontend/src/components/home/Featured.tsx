import { Flex } from "@mantine/core"
import {Carousel} from '@mantine/carousel'



export const Featured = () => {
  return (
    <Flex w={"100%"} direction = "column" sx = {{fontFamily: "sans-serif"}}>
        <Flex justify={"space-between"} mt = "1.5rem">
            <h1 style = {{fontSize: "1.5rem"}}>Featured Products</h1>
        </Flex>
          <Carousel 
          slideSize="80%" 
          w= "100%" 
          slideGap="xl"
          align="start"  
          loop 
          withControls={false}
          p ="2rem 0"
          >
            <Flex w = "100%"  className = 'flex-item'>
              <Carousel.Slide  className="carousel-item">
                <img src = "https://freshcart.codescandy.com/assets/images/category/category-cleaning-essentials.jpg" alt = "Category Image" />
                <p>Product</p>
              </Carousel.Slide>
            </Flex>
            <Flex w = "100%">
              <Carousel.Slide className="carousel-item">
                <img src = "https://freshcart.codescandy.com/assets/images/category/category-atta-rice-dal.jpg" alt = "Category Image" />
                <p>Product</p>
              </Carousel.Slide>
            </Flex>
            <Flex w= "100%" className = 'flex-item'>
              <Carousel.Slide className="carousel-item">
                <img src = "https://freshcart.codescandy.com/assets/images/category/category-pet-care.jpg" alt = "Category Image" />
                <p>Product</p>
              </Carousel.Slide>
            </Flex>
            <Flex w= "100%" className = 'flex-item'>
              <Carousel.Slide className="carousel-item">
                <img src = "https://freshcart.codescandy.com/assets/images/category/category-snack-munchies.jpg" alt = "Category Image" />
                <p>Product</p>
              </Carousel.Slide>
            </Flex>
          </Carousel>  
    </Flex>
  )
}
