import React from 'react';
import Slider from 'react-slick';
import CarouselList from './CarouselList';

let counter = -1;
function incrementCount() {
  counter += 1;
  return counter;
}

const RPCarousel = ({details, styles}) => {
  return (
    <div className="container-fluid">
      <h2>Related Products Carousel</h2>
      <div id="rpCarousel" className="carousel slide" data-ride="carousel" data-interval="3000">
        <div className="carousel-inner row w-10 mx-auto" role="listbox">
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
        </div>
        <a className="carousel-control-prev" href="#carouselExample" role="button" data-slide="prev">
          <i className="fa fa-chevron-left fa-lg text-muted"></i>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next text-faded" href="#carouselExample" role="button" data-slide="next">
          <i className="fa fa-chevron-right fa-lg text-muted"></i>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}

export default RPCarousel;
