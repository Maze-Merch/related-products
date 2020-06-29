import React from 'react';
import ReactDOM from 'react-dom';
import regeneratorRuntime from "regenerator-runtime";
import Slider from 'react-slick';
import Card from './Card';
import prodDetailsData from './exampleData/prodDetails.json';
import prodStylesData from './exampleData/prodStyles.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainProdId: 5,
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
        };
        this.products.push(prodInfo);
        count += 1;
      }
    }
    this.setState({ allProducts: this.products });
  }

  render() {
    const { prodDetails, prodStyles, allProducts } = this.state;
    // console.log(allProducts)
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
      <div id="rpCarousel">
        <h4>Related Products 2</h4>
        <Slider {...settings}>
          { allProducts.map((product) => (
            <Card
              id={allProducts.idx}
              product={product}
              key={allProducts.idx}
            />
          ))}
        </Slider>
      </div>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById('related'));

// <div id="RelatedProducts">
//           <h4>Related Products 1</h4>
//           <RelatedProducts details={prodDetails} styles={prodStyles} />
//         </div>
//         <div id="myOutfits">
//           <h4>My Outfits</h4>
//           <MyOutfits />
// </div>
