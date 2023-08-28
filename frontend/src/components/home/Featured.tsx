import { BiLeftArrow } from "react-icons/bi";
import { BiRightArrow } from "react-icons/bi";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const Featured = () => {

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };


  return (
    <div>
      <section className="flex items-center justify-between p-2">
        <div>Featured Categories</div>
        <div className="flex">
          <BiLeftArrow />
          <BiRightArrow />
        </div>
      </section>
      <div>
      <Carousel responsive={responsive} className="ml-10">
        <div className="w-[200px] h-[200px] border-[1px] border-black">1</div>
        <div className="w-[200px] h-[200px] border-[1px] border-black">2</div>
        <div className="w-[200px] h-[200px] border-[1px] border-black">3</div>
        <div className="w-[200px] h-[200px] border-[1px] border-black">4</div>
        <div className="w-[200px] h-[200px] border-[1px] border-black">5</div>
        <div className="w-[200px] h-[200px] border-[1px] border-black">6</div>
        <div className="w-[200px] h-[200px] border-[1px] border-black">7</div>
        <div className="w-[200px] h-[200px] border-[1px] border-black">8</div>
      </Carousel>
      </div>
      
    </div>
  )
}

const CustomRightArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType }
  } = rest;
  // onMove means if dragging or swiping in progress.
  return <button onClick={() => onClick()} />;
};