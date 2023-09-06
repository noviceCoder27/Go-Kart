import { Slider } from './../components/home/Slider';
import { Navbar } from './../components/home/Navbar';
import { Products } from '../components/home/Products';
import { Featured } from '../components/home/Featured';
import { Popular } from '../components/home/Popular';
import { Cards } from '../components/home/Cards';
import { Flex } from '@mantine/core';



export const Home = () => {
  
  return (
    <Flex direction={"column"} mih={"100vh"} sx = {{overflowX: "hidden"}}>
        <Navbar />
        <Slider />
        <Featured />
        <Products />
        <Popular />
        <Cards />
    </Flex>
  )
}
