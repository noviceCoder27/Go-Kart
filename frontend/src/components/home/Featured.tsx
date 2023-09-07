import { Flex } from "@mantine/core"
import {Carousel} from '@mantine/carousel'



export const Featured = () => {
  return (
    <Flex w={"100%"} direction = "column" sx = {{fontFamily: "sans-serif"}}>
        <Flex justify={"space-between"} mt = "1.5rem">
            <h1 style = {{fontSize: "1.5rem"}}>Featured Products</h1>
        </Flex>
        <Flex>
            <Carousel slideSize="70%" w= "100%" align="start" slideGap="md" loop withControls={false}>
                <Carousel.Slide  sx = {{border: "1px solid black", width: "200px", height: "200px"}}>1</Carousel.Slide>
                <Carousel.Slide>2</Carousel.Slide>
                <Carousel.Slide>3</Carousel.Slide>
            </Carousel>  
        </Flex>
    </Flex>
  )
}
