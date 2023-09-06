import { Container, Flex } from "@mantine/core"
import { BiGridAlt } from "react-icons/bi";


export const Categories = () => {

    const categoryBtnStyles = {
        backgroundColor: "transparent",
        border: "none",
        borderRadius: "8px",
        color: "#3d4f58",
        fontWeight: "500",
        fontSize: "1rem",
        padding: "0.5rem",
        cursor: "pointer",
        width: "100%",
        textAlign : "start" as const
    }

    const allCategoriesStyles = getCategoryStyles();

      const setBackground = (e: React.MouseEvent) => {
        if (e.currentTarget instanceof HTMLElement) {
          const styling = e.currentTarget.style;
          styling.backgroundColor = '';
        }
      }
  
      const removeBackground = (e:React.MouseEvent) => {
        if (e.currentTarget instanceof HTMLElement) {
          const styling = e.currentTarget.style;
          styling.backgroundColor = 'transparent';
        }
      }

    return (
        <Container mt={"1rem"} p={"0"}>
            <button style={allCategoriesStyles}>
                <BiGridAlt />
                <span>All Departments</span>
            </button>
            <Flex direction= "column" gap = "md" sx = {{border: "1px solid #c1c7c6", borderRadius: "8px", padding: "1.2rem"}}>
                <button style = {categoryBtnStyles} onMouseEnter = {(e) => setBackground(e)} onMouseLeave={(e) => removeBackground(e)}>Dairy,Bread & Eggs</button>
                <button style = {categoryBtnStyles} onMouseEnter = {(e) => setBackground(e)} onMouseLeave={(e) => removeBackground(e)}>Snacks & Munchies</button>
                <button style = {categoryBtnStyles} onMouseEnter = {(e) => setBackground(e)} onMouseLeave={(e) => removeBackground(e)}>Fruits & Vegetables</button>
                <button style = {categoryBtnStyles} onMouseEnter = {(e) => setBackground(e)} onMouseLeave={(e) => removeBackground(e)}>Cold Drinks & Juices</button>
                <button style = {categoryBtnStyles} onMouseEnter = {(e) => setBackground(e)} onMouseLeave={(e) => removeBackground(e)}>Breakfast & Instant Food</button>
                <button style = {categoryBtnStyles} onMouseEnter = {(e) => setBackground(e)} onMouseLeave={(e) => removeBackground(e)}>Bakery & Biscuits</button>
                <button style = {categoryBtnStyles} onMouseEnter = {(e) => setBackground(e)} onMouseLeave={(e) => removeBackground(e)}>Chicken,Meat & Fish</button>
                </Flex>
        </Container>
    )
}

export const getCategoryStyles  = () => {
    const allCategoriesStyles = {
        width: "100%",
                backgroundColor: "#0aad0a",
                color: "white",
                border: "none",
                borderRadius: "8px",
                fontFamily: "sans-serif",
                padding: "0.8rem",
                fontSize: "1rem",
                marginBottom: "1rem",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.3rem",
        }
    return allCategoriesStyles;
}