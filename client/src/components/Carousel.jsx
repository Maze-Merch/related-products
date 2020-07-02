import React from 'react';
import Slider from 'react-slick';
import Card from './card/Card';
import Modal from './Modal';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allProducts: [],
      clickedProdFeat: [],
      mainProdFeat: [],
      show: false,
    };
    this.cardData = [];
    this.handleStarClick = this.handleStarClick.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.buildCardData = this.buildCardData.bind(this);
  }

  componentDidMount() {
    this.buildCardData();
  }

  componentDidUpdate() {
    const { allProducts } = this.state;
    // if (allProducts !== this.cardData) {
    //   this.setState({ allProducts: this.cardData });
    // }
  }

  buildCardData() {
    const { det, style } = this.props;
    const details = det;
    const styles = style;
    // console.log('Details from props', details);
    // const cardData = [];
    let count = 0;
    for (let x = 0; x <= details.length - 1; x += 1) {
      for (let i = 0; i <= styles[x].results.length - 1; i += 1) {

        const prodInfo = {
          idx: count,
          id: details[x].id,
          name: details[x].name,
          slogan: details[x].slogan,
          description: details[x].description,
          category: details[x].category,
          default_price: details[x].default_price,
          styleId: styles[x].results[i].style_id,
          styleName: styles[x].results[i].name,
          origPrice: styles[x].results[i].original_price,
          salePrice: styles[x].results[i].sale_price,
          thumb: styles[x].results[i].photos[0].thumbnail_url,
          img: styles[x].results[i].photos[0].url,
          features: details[x].features,
        };
        this.cardData.push(prodInfo);
        count += 1;
      }
    }
    this.setState({ allProducts: this.cardData });
  }

  handleStarClick(e) {
    const { allProducts } = this.state;
    this.toggleModal();
    this.setState({ clickedProdFeat: allProducts[e.target.dataset.id].features });
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
    const { allProducts } = this.state;
    console.log(this.props);
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
          <Slider {...settings}>
            { allProducts.map((product) => (
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
