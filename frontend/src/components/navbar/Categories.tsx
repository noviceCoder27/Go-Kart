import { Container, Flex } from "@mantine/core"
import { BiGridAlt } from "react-icons/bi";
import './../styles/Navbar.css';

export const Categories = () => {

    return (
        <Container mt={"1rem"} p={"0"}>
            <button className="categories-button">
                <BiGridAlt />
                <span>All Departments</span>
            </button>
            <Flex direction= "column" gap = "md" sx = {{border: "1px solid #c1c7c6", borderRadius: "8px", padding: "1.2rem"}}>
                <button className="category-btn">Dairy,Bread & Eggs</button>
                <button className="category-btn">Snacks & Munchies</button>
                <button className="category-btn">Fruits & Vegetables</button>
                <button className="category-btn">Cold Drinks & Juices</button>
                <button className="category-btn">Breakfast & Instant Food</button>
                <button className="category-btn">Bakery & Biscuits</button>
                <button className="category-btn">Chicken,Meat & Fish</button>
                </Flex>
        </Container>
    )
}
