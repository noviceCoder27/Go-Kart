import { Slider } from '@/components/home/Slider';
import { Navbar } from './../components/home/Navbar';
import { Featured } from '@/components/home/Featured';
import { ProductImages } from '@/components/home/ProductImages';
import { Popular } from '@/components/home/Popular';
import { Cards } from '@/components/home/Cards';


export const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
        <Navbar />
        <Slider />
        <Featured />
        <ProductImages />
        <Popular />
        <Cards />
    </div>
  )
}
