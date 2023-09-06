import { Box, Container, Flex } from "@mantine/core"
import {BiLeftArrow} from 'react-icons/bi'
import {BiRightArrow} from 'react-icons/bi'
import {Carousel} from '@mantine/carousel'



export const Featured = () => {
  return (
    <Container w={"100%"}>
        <Flex justify={"space-between"} px={"2rem"}>
            <Box>Featured Products</Box>
            <Flex>
                <BiLeftArrow />
                <BiRightArrow />
            </Flex>
        </Flex>
        <Flex >
                <Carousel
                    withIndicators
                    height={200}
                    w = {"100%"}
                    slideGap="md"
                    align="start"
                >
                <Carousel.Slide size = {"30%"} sx = {{border: "1px solid red", marginRight: "2rem"}}>1</Carousel.Slide>
                <Carousel.Slide size = {"30%"} sx = {{border: "1px solid darkgreen", marginRight: "2rem"}}>2</Carousel.Slide>
                <Carousel.Slide size = {"30%"} sx = {{border: "1px solid violet", marginRight: "2rem"}}>3</Carousel.Slide>
                <Carousel.Slide size = {"30%"} sx = {{border: "1px solid green", marginRight: "2rem"}}>4</Carousel.Slide>
                <Carousel.Slide size = {"30%"} sx = {{border: "1px solid blue", marginRight: "2rem"}}>5</Carousel.Slide>
            </Carousel>
        </Flex>
    </Container>
  )
}
