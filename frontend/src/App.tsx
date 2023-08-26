import { Button } from "@/components/ui/button"
import 'animate.css'
function App() {

  const animate = "animate__animated animate__bounce"

  return (
    <>
      <Button className = {animate}>Click Me</Button>
    </>
  )
}

export default App
