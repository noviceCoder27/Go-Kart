import {Carousel} from '@mantine/carousel'
import { BackgroundImage, Flex } from '@mantine/core'
import './../styles/Slider.css';


export const Slider = () => {


  return (
    <Flex mt= "1.5rem">
        <Carousel withIndicators height={500} withControls = {false} w={"100%"} loop >
          <Carousel.Slide>
            <BackgroundImage
            src = "https://freshcart.codescandy.com/assets/images/slider/slide-1.jpg"
            h= "100%"
            radius= "md"
            >
              <Flex direction = "column" justify="center" h="100%" pl="4rem" sx = {{fontFamily: "sans-serif"}}>
                <p className='offer-label' style = {{
                  width: "11vw",
                  minWidth: "180px",
                 }}>Opening sale discount 50%</p>
                <span className='heading' >Supermarket For <br />Fresh Grocery</span>
                <p style = {{color: "#3d4f58", fontSize: "1.1rem",lineHeight: "1.5",fontWeight: "500"}}>Introduced a new model for online grocery shopping<br /> and convenient home delivery.</p>
                <button className='shop-btn'>
                  Shop Now
                </button>
              </Flex>
              
          </BackgroundImage>
          </Carousel.Slide>
          <Carousel.Slide >
          <BackgroundImage
            src = "https://freshcart.codescandy.com/assets/images/slider/slider-2.jpg"
            h= "100%"
            radius= "md"
            >
              <Flex direction = "column" justify="center" h="100%" pl="4rem" sx = {{fontFamily: "sans-serif"}}>
                <p className='offer-label'>Free shipping - orders over $100</p>
                <span className='heading'>Free shipping on <br /> orders over <span style = {{color: "#0AAD0A"}}>$100</span></span>
                <p style = {{color: "#3d4f58", fontSize: "1.1rem",lineHeight: "1.5",fontWeight: "500"}}>Free Shipping to First-Time Customers Only, After <br/> promotions and discounts are applied.
                </p>
                <button className = "shop-btn">
                  Shop Now
                </button>
              </Flex>
          </BackgroundImage>
          </Carousel.Slide>
        </Carousel>
    </Flex>
    
  )
}
