import {BrowserRouter as Rotuer,Routes,Route} from 'react-router-dom'
import { Home } from './pages/Home';
import Product from './pages/Product';
import { Navbar } from './components/home/Navbar';
import Wishlist from './pages/Wishlist';


function App() {
  

  return (
    <>
      <Rotuer>
        <Navbar />
        <Routes>
          <Route path='/' element = {<Home />}/>
          <Route path = '/product' element = {<Product />} />
          <Route path = '/wishlist' element = {<Wishlist />} />
        </Routes>
      </Rotuer>
    </>
  )
}

export default App
