import { Box, Drawer, Flex } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useEffect } from 'react';
import { BsTrash } from "react-icons/bs";
import './../styles/Cart.css';

interface Cart {
    showCart: boolean
    setShowCart: React.Dispatch<React.SetStateAction<boolean>>
}

const Cart = ({showCart,setShowCart}: Cart) => {
    const [opened, {open,close}] = useDisclosure(showCart);
    useEffect(() => {
        if(showCart) {
            open()
        }
    },[showCart,open]);

    const closeCart = () => {
        setShowCart(false);
        close();
    }

    return (
        <Drawer 
        opened={opened} 
        onClose={closeCart}  
        position="right"
        sx = {{fontFamily: "sans-serif"}}>
           <h1>Shopping Cart</h1> 
           <hr />
           <Flex direction="column" justify="center" mt = "3rem">
                <Flex justify="space-between" mih ="150px" align="center">
                    <Flex>
                        <Flex align="center">
                            <img src = "https://freshcart.codescandy.com/assets/images/products/product-img-1.jpg" width = "150px" height = "150px" alt = "Product Image"/>
                        </Flex>
                        <Flex direction="column" mt = "2rem" ml = "-1.5rem">
                            <p style = {{fontWeight: "600", fontSize: "80%"}}>Haldiram's Sev Bhujia</p>
                             <Flex sx = {{cursor: "pointer"}} align="center" gap = "0.5rem" className='remove'>
                                <BsTrash style = {{color: "#0AAD0A"}}/>
                                <p style = {{fontSize: "80%"}}>Remove</p>
                             </Flex>
                        </Flex>
                    </Flex>
                    <Flex w= "100px">
                        <button className='quantity-btn btn1'>-</button>
                        <div style = {{flexGrow: "1",textAlign:"center",paddingTop: "0.2rem",border: "1px solid lightgray"}}>1</div>
                        <button className='quantity-btn btn2'>+</button>
                    </Flex> 
                    <Box>
                        <h3>$5</h3>
                    </Box> 
                </Flex>
                <hr style = {{width: "100%"}}/>
           </Flex>
        </Drawer>
    )
}

export default Cart
