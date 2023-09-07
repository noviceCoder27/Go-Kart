import { BackgroundImage, Flex, Grid } from "@mantine/core";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";

export const Popular = () => {
  return (
    <Flex direction="column">
        <h2 style= {{margin: "0"}}>Popular Products</h2>
         <Grid my= "2rem" sx= {{gap: "1rem"}} justify="center">
            <Grid.Col 
              span={5} 
              sm={4}
              md = {3} 
              lg = {2}
              mih="350px"
              className = "popular-item"
            >
                <Flex sx = {{background: "#198754",borderRadius: "5px",fontSize: "0.8rem"}} 
                w =  "fit-content" 
                c = "white"
                p = "0.2rem 0.5rem"
                mt = "0.5rem"
                ml = "0.5rem"
                fw = "bold"
                >
                  14%
                </Flex>
                <Flex>
                  <BackgroundImage
                  src = "https://freshcart.codescandy.com/assets/images/products/product-img-1.jpg"
                  h = "145px"
                  mt = "0.5rem">
                    <Flex className="image-btns" gap = "0.8rem">
                    <button style = {{border: 'none', background: "white",borderRadius: "8px",boxShadow: "1px 1px 5px 2px gray"}}>
                      <AiOutlineEye style = {{fontSize:"1.5rem",color: "gray"}}/>
                    </button>
                    <button style = {{border: 'none', background: "white",borderRadius: "8px",boxShadow: "1px 1px 5px 2px gray"}}>
                      <AiOutlineHeart style = {{fontSize:"1.5rem",color: "gray"}}/>
                    </button>
                    </Flex>
                    <p style = {{color: "gray",fontSize: "0.7rem",marginTop: "4rem",marginLeft: "0.5rem"}}>Snack & Munchies</p>
                    <p style = {{fontSize: "0.8rem",marginTop: "0.5rem",fontWeight: "600",marginLeft: "0.5rem"}}>Haldiram's Sev Bhujia</p>
                    <Flex justify="space-between">
                      <p style={{margin: "0.5rem",fontWeight: "600"}}>$18</p>
                      <button className="add-btn">
                        + Add 
                      </button>
                    </Flex>
                  </BackgroundImage>
                </Flex>
                <Flex>

                </Flex>
            </Grid.Col>
            <Grid.Col 
              span={5} 
              sm={4} 
              md = {3}
              lg = {2}
              mih="350px"
              className = "popular-item"
            >

            </Grid.Col>
            <Grid.Col 
              span={5} 
              sm={4} 
              md = {3}
              lg = {2}
              mih="350px"
              className = "popular-item"
            >

            </Grid.Col>
            <Grid.Col 
              span={5} 
              sm={4} 
              md = {3}
              lg = {2}
              mih="350px"
              className = "popular-item"
            >

            </Grid.Col>
            <Grid.Col 
              span={5} 
              sm={4} 
              md = {3}
              lg = {2}
              mih="350px"
              className = "popular-item"
            >
            </Grid.Col>
         </Grid>
    </Flex>
    
  )
}
