import React from 'react';
import ReactDOM from 'react-dom';
import regeneratorRuntime from "regenerator-runtime";
// import RelatedProducts from './RelatedProducts';
// import MyOutfits from './MyOutfits';
// import RPCarousel from './RPCarousel';
// import Carousel from './Carousel';
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

    this.nextProduct = this.nextProduct.bind(this);
    this.prevProduct = this.prevProduct.bind(this);
    this.changeTranslateX = this.changeTranslateX.bind(this);
  }

  componentDidMount() {
    // fetch moved to DataFetcher.jsx
    this.buildProductData();
    this.setState({ product: this.products[0] });
  }

  componentDidUpdate() {
    console.log ('State didUpdate - All Products', this.state);
    // console.log('here')
    // console.log('this.productDetailsArr', this.productDetailsArr)
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

  nextProduct() {
    console.log('next clicked!')
    const newIndex = this.state.allProducts.idx + 1;
    this.setState({ product: this.state.allProducts[newIndex] });
    console.log('Prod index= ', this.state.product.idx);
    this.changeTranslateX();
  }

  prevProduct() {
    const newIndex = this.state.allProducts.idx - 1;
    this.setState({ product: this.state.allProducts[newIndex] });
    this.changeTranslateX();
  }

  changeTranslateX() {
    let num = this.state.product.idx * (100 / 24);
    document.getElementById('cardsWrapper').style.transform = `-${num}%`;
  }

  render() {
    const { prodDetails, prodStyles, allProducts } = this.state;
    return (
      <div id="rpCarousel">
        <h4>Related Products 2</h4>
        <button
          type="button"
          onClick={() => this.nextProduct()}
          disabled={allProducts.idx === allProducts.length - 1}
        >
          Next
        </button>
        <button
          type="button"
          onClick={() => this.prevProduct()}
          disabled={allProducts.idx === 0}
        >
          Prev
        </button>

        <div className="cards-slider">
          <div
            id="cardsWrapper"
            className="cards-slider-wrapper"
            style={{
              transform: 'translateX(-0%)'
            }}
          >
            { allProducts.map((product) => (
              <Card
                id={allProducts.idx}
                product={product}
                key={allProducts.idx}
              />
            ))}
          </div>
        </div>
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
