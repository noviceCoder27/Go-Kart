import { Tabs,Table } from "@mantine/core"



const ProductDetails = () => {
  return (
    <Tabs color="lime" defaultValue="Details">
            <Tabs.List >
                <Tabs.Tab value = "Details" className = "title-section">
                    <span >Product Details</span> 
                </Tabs.Tab>
                <Tabs.Tab value = "Information" className = "title-section">
                    <span >Information</span>
                </Tabs.Tab>
                <Tabs.Tab value = "Reviews" className = "title-section">
                    <span >Reviews</span>
                </Tabs.Tab>
            </Tabs.List>
            <Tabs.Panel value="Details" mb = "3rem">
                <div>
                    <h2 style = {{marginBottom: "0", marginTop: "3rem"}}>Nutrient Value & Benefits</h2>
                    <p style = {{marginTop: "0.5rem",color: "#3d4f58"}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi, tellus iaculis urna bibendum in lacus, integer. Id imperdiet vitae varius sed magnis eu nisi nunc sit. Vel, varius habitant ornare ac rhoncus. Consequat risus facilisis ante ipsum netus risus adipiscing sagittis sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div>
                    <h2 style = {{marginBottom: "0"}}>Storage Tips</h2>
                    <p style = {{marginTop: "0.5rem",color: "#3d4f58#3d4f58"}}> Nisi, tellus iaculis urna bibendum in lacus, integer. Id imperdiet vitae varius sed magnis eu nisi nunc sit. Vel, varius habitant ornare ac rhoncus. Consequat risus facilisis ante ipsum netus risus adipiscing sagittis sed.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div>
                    <h2 style = {{marginBottom: "0"}}> Unit</h2>
                    <p style = {{marginTop: "0.5rem",color: "#3d4f58"}}> 3 units</p>
                </div>
                <div>
                    <h2 style = {{marginBottom: "0"}}>Seller</h2>
                    <p style = {{marginTop: "0.5rem",color: "#3d4f58"}}>DMart Pvt. LTD</p>
                </div>
                <div>
                    <h2 style = {{marginBottom: "0"}}> Disclaimer</h2>
                    <p style = {{marginTop: "0.5rem",color: "#3d4f58"}}> Image shown is a representation and may slightly vary from the actual product. Every effort is made to maintain accuracy of all information displayed.</p>
                </div>
            </Tabs.Panel>
            <Tabs.Panel value="Information" mb = "3rem">
                <h2 style = {{fontSize: "2rem"}}>Details</h2>
                <Table striped verticalSpacing="md">
                    <tbody>
                        <tr>
                            <td style = {{fontSize: "1.2rem"}}>Weight</td>
                            <td style = {{fontSize: "1.2rem"}}>1000 Grams</td>
                        </tr>
                        <tr>
                            <td style = {{fontSize: "1.2rem"}}>Ingredient Type</td>
                            <td style = {{fontSize: "1.2rem"}}>Vegetarian</td>
                        </tr>
                        <tr>
                            <td style = {{fontSize: "1.2rem"}}>Brand</td>
                            <td style = {{fontSize: "1.2rem"}}>Dmart</td>
                        </tr>
                        <tr>
                            <td style = {{fontSize: "1.2rem"}}>Item package quantity</td>
                            <td style = {{fontSize: "1.2rem"}}>1</td>
                        </tr>
                    </tbody>
                </Table>
            </Tabs.Panel>
        </Tabs>
  )
}

export default ProductDetails
