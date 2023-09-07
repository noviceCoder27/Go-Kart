import { BackgroundImage, Flex } from "@mantine/core"
import './../styles/Home.css'

export const Cards = () => {
  return (
      <Flex gap= "lg" mb= "3rem" mt = "2.5rem" className="flex-breakPt">
        <BackgroundImage
        src = "https://freshcart.codescandy.com/assets/images/banner/grocery-banner.png" 
        mih= '220px'
        radius= "md">
          <Flex direction= "column" pl="3rem" >
            <h3 style = {{margin: "0",marginTop: "3rem",fontSize: "1.5rem"}}>Fruits & Vegetables</h3>
              <p style = {{color: "#5c6c75",marginTop: "0.5rem"}}>Get upto <span style = {{fontWeight: "600"}}>30%</span> off</p>
            <button className="shop-btn">Shop Now</button>
          </Flex>
        </BackgroundImage>
        <BackgroundImage
          src = "https://freshcart.codescandy.com/assets/images/banner/grocery-banner-2.jpg"
          radius= "md"
          mih= '220px'>
            <Flex direction= "column" pl="3rem" >
              <h3 style = {{margin: "0",marginTop: "3rem",fontSize: "1.5rem"}}>Freshly Baked Buns</h3>
              <p style = {{color: "#5c6c75",marginTop: "0.5rem"}}>Get upto <span style = {{fontWeight: "600"}}>25%</span> off</p>
              <button className="shop-btn">Shop Now</button>
            </Flex>
           
        </BackgroundImage>

      </Flex>
  )
}
