import {Carousel} from '@mantine/carousel'
import { BackgroundImage, Flex } from '@mantine/core'

export const Slider = () => {

  return (
    <Flex justify= "center" mt= "1.5rem">
        <Carousel withIndicators height={500} withControls = {false} w={"90%"} loop>
          <Carousel.Slide>
            <BackgroundImage
            src = "https://freshcart.codescandy.com/assets/images/slider/slide-1.jpg"
            h= "100%"
            radius= "md"
            >
              <Flex direction = "column" justify="center" h="100%" pl="4rem" sx = {{fontFamily: "sans-serif"}}>
                <p style = {{
                  backgroundColor: "#ffc107",
                  width: "11vw",
                  padding: "0.4rem",
                  borderRadius: "5px",
                  fontSize: "0.8rem",
                  fontWeight: "600"}}>Opening sale discount 50%</p>
                <span style = {{fontSize: "3rem",fontWeight: "600"}}>Supermarket For <br />Fresh Grocery</span>
                <p style = {{color: "#3d4f58", fontSize: "1.1rem",lineHeight: "1.5",fontWeight: "500"}}>Introduced a new model for online grocery shopping<br /> and convenient home delivery.</p>
                <button style = {{
                  width: "10vw",
                  color: "white",
                  backgroundColor: "#001e2b",
                  border: "none",
                  padding: "1rem ",
                  display: "flex",
                  justifyContent: "center",
                  fontSize: "1.2rem",
                  marginTop: "2rem",
                  borderRadius: "8px",
                  cursor: "pointer"
                  }}>
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
                <p style = {{
                  backgroundColor: "#ffc107",
                  width: "13vw",
                  padding: "0.4rem",
                  borderRadius: "5px",
                  fontSize: "0.8rem",
                  fontWeight: "600"}}>Free shipping - orders over $100</p>
                <span style = {{fontSize: "3rem",fontWeight: "600"}}>Free shipping on <br /> orders over <span style = {{color: "#0AAD0A"}}>$100</span></span>
                <p style = {{color: "#3d4f58", fontSize: "1.1rem",lineHeight: "1.5",fontWeight: "500"}}>Free Shipping to First-Time Customers Only, After <br/> promotions and discounts are applied.
                </p>
                <button style = {{
                  width: "10vw",
                  color: "white",
                  backgroundColor: "#001e2b",
                  border: "none",
                  padding: "1rem",
                  display: "flex",
                  justifyContent: "center",
                  fontSize: "1.2rem",
                  marginTop: "2rem",
                  borderRadius: "8px",
                  cursor: "pointer"
                  }}>
                  Shop Now
                </button>
              </Flex>
          </BackgroundImage>
          </Carousel.Slide>
        </Carousel>
    </Flex>
    
  )
}
