import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Slider = ({imageList}) => {
  return (
    <div className="w-full sm:w-auto">
        <Carousel
          showThumbs={false}
          showStatus={false}
          swipeable={true}
          infiniteLoop={true}
          useKeyboardArrows={true}
          autoPlay={true}
          interval={3000}
          className="carousel"
        >{
            imageList.map((image, ind)=>{
                return (
                    <div key={`image${ind}`}>
                        <img src={image} alt="Location 1" className="w-full h-auto" />
                    </div>
                )
            })
        }
        </Carousel>
      </div>
  )
}

export default Slider