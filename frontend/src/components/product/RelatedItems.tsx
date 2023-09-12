import {Flex, Grid} from '@mantine/core';
import { Item } from '../home/Item';



const RelatedItems = () => {
  return (
    <Flex direction = "column" mt = '4rem'>
        <h2 style = {{fontSize: "2rem"}}>Related Items</h2>
        <Grid sx = {{gap: "2rem"}} mt = "1rem" mb = "3rem">
            <Item />
            <Item />
            <Item />
            <Item />
        </Grid>
    </Flex>
  )
}

export default RelatedItems
