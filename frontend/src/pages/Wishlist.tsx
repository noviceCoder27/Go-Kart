import { Box, Table } from "@mantine/core";
import { BiSolidTrash } from "react-icons/bi";
import './../components/styles/Wishlist.css';

const Wishlist = () => {
  return (
    <Box sx = {{fontFamily: "sans-serif"}} p = "2rem 6rem">
        <h2 style = {{fontSize: "3rem"}}>My Wishlist</h2>
        <Table>
            <thead>
                <tr>
                    <th></th>
                    <th style = {{fontSize: "1.3rem"}}>Product</th>
                    <th style = {{fontSize: "1.3rem"}}>Amount</th>
                    <th style = {{fontSize: "1.3rem"}}>Status</th>
                    <th style = {{fontSize: "1.3rem"}}>Actions</th>
                    <th style = {{fontSize: "1.3rem"}}>Remove</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <img src = "https://freshcart.codescandy.com/assets/images/products/product-img-18.jpg"/>
                    </td>
                    <td>
                        <p style = {{fontWeight: "600"}}>Organic Banana</p>
                        <p style = {{color: "gray"}}>500g</p>
                    </td>
                    <td>$5.00</td>
                    <td>
                        <span style = {{background: "#198754",color: "white",padding: "0.2rem 0.5rem",borderRadius: "5px",fontWeight: "600",display: "flex",width: "fit-content"}}>In stock</span>
                    </td>
                    <td>
                        <button className = "cart-btn enable">Add to cart</button>
                    </td>
                    <td>
                        <BiSolidTrash className = "remove-btn"/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <img src = "https://freshcart.codescandy.com/assets/images/products/product-img-18.jpg"/>
                    </td>
                    <td>
                        <p style = {{fontWeight: "600"}}>Organic Banana</p>
                        <p style = {{color: "gray"}}>500g</p>
                    </td>
                    <td>$5.00</td>
                    <td>
                        <span style = {{background: "#db3030",color: "white",padding: "0.2rem 0.5rem",borderRadius: "5px",fontWeight: "600",display: "flex",width: "fit-content"}}>Out of stock</span>
                    </td>
                    <td>
                       <button disabled className= "cart-btn disable">Add to cart</button>
                    </td>
                    <td>
                        <BiSolidTrash className = "remove-btn"/>
                    </td>
                </tr> 
            </tbody>
        </Table>
    </Box>
  )
}

export default Wishlist
