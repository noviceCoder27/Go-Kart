import { Flex, TextInput } from "@mantine/core"
import { Drawer,HoverCard } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiShoppingBag3Line } from "react-icons/ri";
import { TbShoppingCartDiscount } from "react-icons/tb";
import { BiGridAlt } from "react-icons/bi";
import {Categories } from "../navbar/Categories";
import { CategoriesDesktop } from "../navbar/CategoriesDesktop";
import { useState } from "react";
import './../styles/Navbar.css';
import Cart from "../navbar/Cart";
import SignIn from "../user/SignIn";
import SignUp from "../user/SignUp";
import { Link } from "react-router-dom";


export const Navbar = () => {
    const [screenWidth,setScreenWidth] = useState(window.innerWidth);
    const [opened, { open, close }] = useDisclosure(false);
    window.onresize = () => {
        setScreenWidth(window.innerWidth);
    } 
    const [showCart,setShowCart] = useState(false);
    const [credentialsPopup,setCredentialsPopup] = useState(false);
    return (
      <header>
        <Link to = "/" style ={{textDecoration: "none",color: "#0aad0a"}}>
          <Flex align= "center" gap= "sm" sx={{marginRight: "3rem"}}>
              <TbShoppingCartDiscount style = {{color: "#198754",fontSize: "2.5rem"}}/>
              <h2 style = {{fontSize: "2rem"}}><span style = {{color: "#0aad0a"}}>Go</span>-Kart</h2>
            </Flex>
        </Link>
          
          {screenWidth > 768 && 
          <Flex sx={{marginRight: "auto"}} align= "center" gap= "md">
            <HoverCard>
              <HoverCard.Target>
                <button className="categories-button" style = {{width: "15vw",marginTop: "1rem"}}>
                  <BiGridAlt style = {{marginBottom: "0.1rem"}}/>
                  <span>All Departments</span>
                </button>
              </HoverCard.Target>
              <HoverCard.Dropdown sx = {{borderRadius: "8px",boxShadow: "1px 1px 4px 1px gray"}}>
                <CategoriesDesktop />
              </HoverCard.Dropdown>
            </HoverCard>
            
            <TextInput 
            sx = {{width: "30vw",}} 
            rightSection = {<AiOutlineSearch />}
            placeholder="Search for products"
            size="md"
            radius= "md"
            /> 
          </Flex>}
          <Flex gap="md" sx = {{"fontSize" : "1.5rem"}} ml="auto">
            <Link to = "/wishlist">
              <AiOutlineHeart style = {{color: "#3d4f58",cursor: "pointer"}}/>
            </Link>
            <AiOutlineUser onClick = {() => setCredentialsPopup(true)} style = {{color: "#3d4f58",cursor: "pointer"}}/>
            <RiShoppingBag3Line style = {{color: "#3d4f58",cursor: "pointer"}} onClick = {() => setShowCart(true)}/>
            {screenWidth < 768 && <GiHamburgerMenu style = {{cursor: "pointer", color: "#0aad0a"}} onClick = {open}/>}
          </Flex>
          {screenWidth < 768 && 
          <Drawer
          opened={opened}
          onClose={close}
          overlayProps={{ opacity: 0.5, blur: 4 }}
          >
              <Flex align= "center" gap= "sm" sx={{marginRight: "auto"}}>
                  <TbShoppingCartDiscount style = {{color: "#198754",fontSize: "2.5rem"}}/>
                <h2 style = 
                  {{fontSize: "2rem",fontFamily: "sans-serif"}}>
                    <span style = {{color: "#0aad0a"}}>Go</span>-Kart
                  </h2>
            </Flex>
            <TextInput 
            placeholder = "Search for products"
            rightSection = {<AiOutlineSearch />}
            />
            <Categories />
          </Drawer>}
          <Cart showCart = {showCart} setShowCart = {setShowCart}/>
          {<SignIn credentialsPopup = {credentialsPopup} setCredentialsPopup = {setCredentialsPopup}/>}
          {false && <SignUp credentialsPopup = {credentialsPopup} setCredentialsPopup = {setCredentialsPopup}/>}   
      </header>
    )
}
