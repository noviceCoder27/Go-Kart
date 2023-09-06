import {BrowserRouter as Rotuer,Routes,Route} from 'react-router-dom'
import { Home } from './pages/Home';


function App() {
  

  return (
    <>
      <Rotuer>
        <Routes>
          <Route path='/' element = {<Home />}/>
        </Routes>
      </Rotuer>
    </>
  )
}

export default App
