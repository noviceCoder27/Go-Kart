import { Flex, Grid, Modal,ScrollArea } from "@mantine/core";
import { Item } from "./Item";
import { useDisclosure, useMediaQuery } from "@mantine/hooks"
import PurchaseProduct from "../product/PurchaseProduct";
import './../styles/Home.css';



export const Popular = () => {

  const [opened, {open,close}] = useDisclosure(false);
  const mediumScreen = useMediaQuery('(max-width: 1024px) and (min-width: 768px)')
  const smallScreen = useMediaQuery('(max-width: 768px)')
  return (
    <>
      <Flex direction="column">
          <h2 style= {{margin: "0"}}>Popular Products</h2>
          <Grid my= "2rem" sx= {{gap: "1rem"}} justify="center">
              <Item openModal = {open}/>
              <Item openModal = {open}/>
              <Item openModal = {open}/>
              <Item openModal = {open}/>
              <Item openModal = {open}/>
          </Grid>
      </Flex>
      <Modal opened={opened} onClose={close} size = {smallScreen ? 'xs' : mediumScreen ? 'lg': '2xl'} radius="lg" scrollAreaComponent={ScrollArea.Autosize} > 
        <PurchaseProduct />
      </Modal>
    </>
    
  )
}
