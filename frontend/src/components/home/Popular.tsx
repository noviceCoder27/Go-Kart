import { Flex, Grid } from "@mantine/core";
import { Item } from "./Item";

export const Popular = () => {
  return (
    <Flex direction="column">
        <h2 style= {{margin: "0"}}>Popular Products</h2>
         <Grid my= "2rem" sx= {{gap: "1rem"}} justify="center">
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
         </Grid>
    </Flex>
    
  )
}
