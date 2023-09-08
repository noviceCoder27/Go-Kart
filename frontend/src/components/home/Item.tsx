import { BackgroundImage, Flex, Grid } from "@mantine/core"
import { AiOutlineEye, AiOutlineHeart } from "react-icons/ai"


export const Item = () => {
  return (
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
                    <button >
                      <AiOutlineEye className = "btn-icon"/>
                    </button>
                    <button >
                      <AiOutlineHeart className = "btn-icon"/>
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
  )
}
