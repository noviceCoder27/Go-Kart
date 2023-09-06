import { Flex } from "@mantine/core"


export const CategoriesDesktop = () => {

    return (
        <Flex direction= "column" gap = "md">
            <button className="category-btn">Dairy,Bread & Eggs</button>
            <button className="category-btn">Snacks & Munchies</button>
            <button className="category-btn">Fruits & Vegetables</button>
            <button className="category-btn">Cold Drinks & Juices</button>
            <button className="category-btn">Breakfast & Instant Food</button>
            <button className="category-btn">Bakery & Biscuits</button>
            <button className="category-btn">Chicken,Meat & Fish</button>
        </Flex>
        
    )
}
