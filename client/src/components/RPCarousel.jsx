import React from 'react';
import Slider from 'react-slick';
import CarouselList from './CarouselList';

let counter = -1;
function incrementCount() {
  counter += 1;
  return counter;
}
const settings = {
  dots: true,
  infinite: true,
  rows: 1,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 5,
};

const RPCarousel = ({details, styles}) => {
  return (
    <Slider {...settings}>
      {details.map((det, i) => (
        <CarouselList
          id={det.id}
          name={det.name}
          slogan={det.slogan}
          desc={det.description}
          cat={det.category}
          price={det.price}
          count={incrementCount()}
          key={i}
        />
      ))}
    </Slider>
  );
}

export default RPCarousel;
