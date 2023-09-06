import { Flex } from "@mantine/core"


export const CategoriesDesktop = () => {

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
        <Flex direction= "column" gap = "md">
            <button style = {categoryBtnStyles} onMouseEnter = {(e) => setBackground(e)} onMouseLeave={(e) => removeBackground(e)}>Dairy,Bread & Eggs</button>
            <button style = {categoryBtnStyles} onMouseEnter = {(e) => setBackground(e)} onMouseLeave={(e) => removeBackground(e)}>Snacks & Munchies</button>
            <button style = {categoryBtnStyles} onMouseEnter = {(e) => setBackground(e)} onMouseLeave={(e) => removeBackground(e)}>Fruits & Vegetables</button>
            <button style = {categoryBtnStyles} onMouseEnter = {(e) => setBackground(e)} onMouseLeave={(e) => removeBackground(e)}>Cold Drinks & Juices</button>
            <button style = {categoryBtnStyles} onMouseEnter = {(e) => setBackground(e)} onMouseLeave={(e) => removeBackground(e)}>Breakfast & Instant Food</button>
            <button style = {categoryBtnStyles} onMouseEnter = {(e) => setBackground(e)} onMouseLeave={(e) => removeBackground(e)}>Bakery & Biscuits</button>
            <button style = {categoryBtnStyles} onMouseEnter = {(e) => setBackground(e)} onMouseLeave={(e) => removeBackground(e)}>Chicken,Meat & Fish</button>
        </Flex>
        
    )
}
