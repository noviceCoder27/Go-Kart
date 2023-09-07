import { Box, Flex } from "@mantine/core"
import { PiTimerLight } from "react-icons/pi";
import { AiOutlineGift } from "react-icons/ai";
import { ImLoop2 } from "react-icons/im";
import { BsBoxSeam } from "react-icons/bs";


export const Footer = () => {
   

    return (
      <Flex className="footer" gap = "3rem" my = "2rem">
          <Box>
            <PiTimerLight style = {{fontSize: "2.5rem", color: "green"}}/>
            <p style = {{fontSize: "1.3rem"}}>10 minute grocery now</p>
            <p style = {{color: "#5c6c75", fontSize: "1rem"}}>Get your order delivered to your doorstep at the earliest from FreshCart pickup stores near you.</p>
          </Box>
          <Box>
            <AiOutlineGift style = {{fontSize: "2.5rem", color: "green"}}/>
            <p style = {{fontSize: "1.3rem"}}>Best Prices & Offers</p>
            <p style = {{color: "#5c6c75", fontSize: "1rem"}}>Cheaper prices than your local supermarket, great cashback offers to top it off. Get best pricess & offers.</p>
          </Box>
          <Box>
            <BsBoxSeam style = {{fontSize: "2rem", color: "green"}}/>
            <p style = {{fontSize: "1.3rem"}}>Wide Assortment</p>
            <p style = {{color: "#5c6c75", fontSize: "1rem"}}>Choose from 5000+ products across food, personal care, household, bakery, veg and non-veg & other categories.</p>
          </Box>
          <Box>
            <ImLoop2 style = {{fontSize: "2rem", color: "green"}}/>
            <p style = {{fontSize: "1.3rem"}}>Easy Returns</p>
            <p style = {{color: "#5c6c75", fontSize: "1rem"}}>Not satisfied with a product? Return it at the doorstep & get a refund within hours. No questions asked policy.</p>
          </Box>
      </Flex>
    )
}
