import React from 'react';
// import Slider from 'react-slick';
import CarouselList from './CarouselList';

let counter = -1;
function incrementCount() {
  counter += 1;
  return counter;
}

const RPCarousel = ({details, styles}) => {
  return (
    <>
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
    </>
  );
}

export default RPCarousel;
