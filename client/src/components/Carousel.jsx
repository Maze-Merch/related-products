import React from 'react';
import Slider from 'react-slick';
import Card from './card/Card';
import Modal from './Modal';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedProdFeat: [],
      show: false,
    };
    this.handleStarClick = this.handleStarClick.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  handleStarClick(e) {
    // const { allProducts } = this.state;
    this.toggleModal();
    this.setState({ clickedProdFeat: this.props.allProducts[e.target.dataset.id].features });
  }

  toggleModal() {
    const { show } = this.state;
    this.setState({
      show: !show,
    });
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <>
        <div className="modal-container">
          <Modal
            displayModal={this.state.show}
            closeModal={this.toggleModal}
            currentProd={this.props.currProd.features}
            compProd={this.state.clickedProdFeat}
          />
        </div>
        <div id="rpCarousel">
          <h4>Related Products</h4>
          <Slider {...settings}>
            { this.props.allProducts.map((product) => (
              <Card
                product={product}
                openModal={this.handleStarClick}
              />
            ))}
          </Slider>
        </div>
      </>
    );
  }
}

export default Carousel;
