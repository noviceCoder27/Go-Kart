import { Flex } from "@mantine/core"
import { BiSolidShoppingBags } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";



const PurchaseDetails = () => {
  return (
    <Flex direction="column" w= "50%">
                <Flex direction="column">
                    <p style = {{color: "#0aad0a"}}>Bakery Biscuits</p>
                    <h2 style = {{fontSize: "2.5rem",marginTop: "0.2rem"}}>Hide & Seek</h2>
                    <Flex gap ='0.5rem' align="center" mb = "2rem">
                        <span style = {{fontWeight: "600",fontSize: "1.5rem"}}>$32</span>
                        <span style = {{fontSize: "1.5rem",color: "gray",textDecorationLine: "line-through"}}>$35</span>
                        <span style = {{color: "#db3030",marginLeft: "0.5rem"}}>26% off</span>
                    </Flex>
                </Flex>
                <hr style = {{width: "100%"}}/>
                <Flex gap = "sm" my = "2rem">
                    <button className="product-weight">250g</button>
                    <button className="product-weight">500g</button>
                    <button className="product-weight">1kg</button>
                </Flex>
                <Flex w = "8rem" mb = "2rem" h= "30px">
                    <button className="quantity-btn btn1">-</button>
                    <input className = "quantity-input"/>
                    <button className="quantity-btn btn2">+</button>
                </Flex>
                <Flex mb = "2rem" gap = 'md' className = "add-cart">
                    <button style ={{display:"flex", gap: "0.5rem"}}>
                        <BiSolidShoppingBags />
                        <span>Add to cart</span>
                    </button>
                    <button >
                        <AiOutlineHeart style = {{fontSize: "1.8rem"}}/>
                    </button>
                </Flex>
                <hr style = {{width: "100%"}}/>
                <Flex direction= "column" my = '2rem'>
                    <Flex justify="space-between" w = "70%">
                        <p style = {{fontWeight: "600"}}>Product Code: </p>
                        <p>FBB2321</p>
                    </Flex>
                    <Flex justify="space-between" w = "70%">
                        <p style = {{fontWeight: "600"}}>Availibility: </p>
                        <p>In Stock</p>
                    </Flex>
                    <Flex justify="space-between" w = "70%">
                        <p style = {{fontWeight: "600"}}>Type: </p>
                        <p>Biscuits</p>
                    </Flex>
                    <Flex justify="space-between" w = "70%">
                        <p style = {{fontWeight: "600"}}>Shipping: </p>
                        <p>01 day shipping</p>
                    </Flex>
                </Flex>
            </Flex>
  )
}

export default PurchaseDetails
