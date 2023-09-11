import { Box, Flex, Grid, Table, Tabs, Image } from "@mantine/core"
import { BiSolidShoppingBags } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { Item } from "../components/home/Item";
import './../components/styles/Product.css'

const Product = () => {
  return (
    <Box p = " 0 10rem" sx = {{fontFamily: "sans-serif",overflowX: "hidden"}} >
        <Flex w = "100%" mt = "5rem" gap = "5rem">
            <Flex w = "50%" direction="column" p = "1rem 0" gap = "4rem">
                <Image maw={600}  radius="md" src="https://freshcart.codescandy.com/assets/images/products/product-single-img-1.jpg" alt="Random image"/>
                <Flex gap = "2rem">
                    <Image maw= {180} radius="md" src="https://freshcart.codescandy.com/assets/images/products/product-single-img-1.jpg" />
                    <Image maw= {180} radius="md" src="https://freshcart.codescandy.com/assets/images/products/product-single-img-1.jpg" />
                    <Image maw= {180} radius="md" src="https://freshcart.codescandy.com/assets/images/products/product-single-img-1.jpg" />
                    
                </Flex>
            </Flex>
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
        </Flex>
        <Tabs color="lime" defaultValue="Details">
            <Tabs.List >
                <Tabs.Tab value = "Details" className = "title-section">
                    <span >Product Details</span> 
                </Tabs.Tab>
                <Tabs.Tab value = "Information" className = "title-section">
                    <span >Information</span>
                </Tabs.Tab>
                <Tabs.Tab value = "Reviews" className = "title-section">
                    <span >Reviews</span>
                </Tabs.Tab>
            </Tabs.List>
            <Tabs.Panel value="Details" mb = "3rem">
                <div>
                    <h2 style = {{marginBottom: "0", marginTop: "3rem"}}>Nutrient Value & Benefits</h2>
                    <p style = {{marginTop: "0.5rem",color: "#3d4f58"}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi, tellus iaculis urna bibendum in lacus, integer. Id imperdiet vitae varius sed magnis eu nisi nunc sit. Vel, varius habitant ornare ac rhoncus. Consequat risus facilisis ante ipsum netus risus adipiscing sagittis sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div>
                    <h2 style = {{marginBottom: "0"}}>Storage Tips</h2>
                    <p style = {{marginTop: "0.5rem",color: "#3d4f58#3d4f58"}}> Nisi, tellus iaculis urna bibendum in lacus, integer. Id imperdiet vitae varius sed magnis eu nisi nunc sit. Vel, varius habitant ornare ac rhoncus. Consequat risus facilisis ante ipsum netus risus adipiscing sagittis sed.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div>
                    <h2 style = {{marginBottom: "0"}}> Unit</h2>
                    <p style = {{marginTop: "0.5rem",color: "#3d4f58"}}> 3 units</p>
                </div>
                <div>
                    <h2 style = {{marginBottom: "0"}}>Seller</h2>
                    <p style = {{marginTop: "0.5rem",color: "#3d4f58"}}>DMart Pvt. LTD</p>
                </div>
                <div>
                    <h2 style = {{marginBottom: "0"}}> Disclaimer</h2>
                    <p style = {{marginTop: "0.5rem",color: "#3d4f58"}}> Image shown is a representation and may slightly vary from the actual product. Every effort is made to maintain accuracy of all information displayed.</p>
                </div>
            </Tabs.Panel>
            <Tabs.Panel value="Information" mb = "3rem">
                <h2 style = {{fontSize: "2rem"}}>Details</h2>
                <Table striped verticalSpacing="md">
                    <tbody>
                        <tr>
                            <td style = {{fontSize: "1.2rem"}}>Weight</td>
                            <td style = {{fontSize: "1.2rem"}}>1000 Grams</td>
                        </tr>
                        <tr>
                            <td style = {{fontSize: "1.2rem"}}>Ingredient Type</td>
                            <td style = {{fontSize: "1.2rem"}}>Vegetarian</td>
                        </tr>
                        <tr>
                            <td style = {{fontSize: "1.2rem"}}>Brand</td>
                            <td style = {{fontSize: "1.2rem"}}>Dmart</td>
                        </tr>
                        <tr>
                            <td style = {{fontSize: "1.2rem"}}>Item package quantity</td>
                            <td style = {{fontSize: "1.2rem"}}>1</td>
                        </tr>
                    </tbody>
                </Table>
            </Tabs.Panel>
        </Tabs>
        <Flex direction = "column" mt = '4rem'>
            <h2 style = {{fontSize: "2rem"}}>Related Items</h2>
            <Grid sx = {{gap: "2rem"}} mt = "1rem" mb = "3rem">
                <Item />
                <Item />
                <Item />
                <Item />
            </Grid>
        </Flex>
    </Box>
  )
}

export default Product
