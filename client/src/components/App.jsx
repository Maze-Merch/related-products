import React from 'react';
import ReactDOM from 'react-dom';
import regeneratorRuntime from "regenerator-runtime";
import Slider from 'react-slick';
import Modal from './Modal';
import MyOutfits from './MyOutfits';
import Card from './Card';
import prodDetailsData from './exampleData/prodDetails.json';
import prodStylesData from './exampleData/prodStyles.json';
import currentProduct from './exampleData/currentProduct.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      clickedProdFeat: [],
      mainProdFeat: [],
      mainProdId: 5,
      myOutfitProdId: 0,
      currentProd: currentProduct,
      relatedProdIds: [],
      prodDetails: prodDetailsData,
      prodStyles: prodStylesData,
      allProducts: [],
      product: {},
    };
    this.relatedIdArr = [];
    this.productStylesArr = [];
    this.productDetailsArr = [];
    this.products = [];
    this.toggelModel = this.toggelModel.bind(this);
    this.handleStarClick = this.handleStarClick.bind(this);
    this.handleAddToOutfitClick = this.handleAddToOutfitClick.bind(this);
    this.createCompProductFeatArr = this.createCompProductFeatArr.bind(this);
    // this.createCurrProdFeatArr = this.createCurrProdFeatArr.bind(this);
  }

  componentDidMount() {
    // fetch moved to DataFetcher.jsx
    this.buildProductData();
    this.setState({ product: this.products[0] });
  }

  componentDidUpdate() {
    // console.log ('State didUpdate - All Products', this.state);
  }

  buildProductData() {
    const { prodDetails, prodStyles } = this.state;
    let count = 0;
    for (let x = 0; x < prodDetails.length; x += 1) {
      for (let i = 0; i < prodStyles[x].results.length; i += 1) {
        const prodInfo = {
          idx: count,
          id: prodDetails[x].id,
          name: prodDetails[x].name,
          slogan: prodDetails[x].slogan,
          description: prodDetails[x].description,
          category: prodDetails[x].category,
          default_price: prodDetails[x].default_price,
          styleId: prodStyles[x].results[i].style_id,
          styleName: prodStyles[x].results[i].name,
          origPrice: prodStyles[x].results[i].original_price,
          salePrice: prodStyles[x].results[i].sale_price,
          thumb: prodStyles[x].results[i].photos[0].thumbnail_url,
          img: prodStyles[x].results[i].photos[0].url,
          features: prodDetails[x].features,
        };
        this.products.push(prodInfo);
        count += 1;
      }
    }
    this.setState({ allProducts: this.products });
  }

  createCompProductFeatArr(id) {
    const { allProducts } = this.state;
    console.log('id', id);
    console.log('all prod  length =', allProducts.length);
    for (let i = 0; allProducts.length; i += 1) {
      // console.log('all prod  i =', allProducts[i].idx);
      // let testId = allProducts[0].idx;
      if (0 === id) {
        this.setState({ clickedProdFeat: allProducts[i].features });
      }
    }
  }

  handleStarClick(e) {
    this.toggelModel();
    console.log('TARGET ID=', e.target.dataset.id);
    this.createCompProductFeatArr(e.target.dataset.id);
  }

  handleAddToOutfitClick(e) {
    console.log('TARGET ID=', e.target.dataset.id);
    this.setState({ myOutfitProdId: e.target.dataset.id });
  }

  toggelModel() {
    const { show } = this.state;
    this.setState({
      show: !show,
    });
  }

  render() {
    const { allProducts, show, currentProd, clickedProdFeat, mainProdId } = this.state;
    // console.log(allProducts)
    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    });

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
        <div className="model">
          <Modal
            displayModal={show}
            closeModal={this.toggelModel}
            currentProd={currentProd.features}
            compProd={clickedProdFeat}
            allProd={allProducts}
          />
        </div>
        <div id="rpCarousel">
          <h4>Related Products</h4>
          <Slider {...settings}>
            { allProducts.map((product) => (
              <Card
                product={product}
                key={allProducts.idx}
                openModal={this.handleStarClick}
              />
            ))}
          </Slider>
        </div>
        <div id="myOutfits">
          <h4>My Outfits</h4>
          <MyOutfits mainProdId={mainProdId} click={this.handleAddToOutfitClick} />
        </div>
      </>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById('related'));
