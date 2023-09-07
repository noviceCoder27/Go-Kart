import { Slider } from './../components/home/Slider';
import { Navbar } from './../components/home/Navbar';
import { Featured } from '../components/home/Featured';
import { Popular } from '../components/home/Popular';
import { Cards } from '../components/home/Cards';
import { Flex } from '@mantine/core';
import { Footer } from '../components/home/Footer';



export const Home = () => {
  
  return (
    <Flex direction={"column"} mih={"100vh"} sx = {{overflowX: "hidden", fontFamily: "sans-serif"}}>
        <Navbar />
        <Flex direction={"column"} px = "3rem">
          <Slider />
          <Featured />
          <Cards />
          <Popular />
          <Footer />
        </Flex>
    </Flex>
  )
}
