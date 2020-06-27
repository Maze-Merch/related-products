import React from 'react';
import ReactDOM from 'react-dom';
import regeneratorRuntime from "regenerator-runtime";
import RelatedProducts from './RelatedProducts';
import MyOutfits from './MyOutfits';
import RPCarousel from './RPCarousel';
import Carousel from './Carousel';
import prodDetailsData from './exampleData/prodDetails.json';
import prodStylesData from './exampleData/prodStyles.json';
import { forEach } from 'lodash';
let _ = require('lodash');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainProdId: 5,
      relatedProdIds: [],
      prodDetails: prodDetailsData,
      prodStyles: prodStylesData,
      totalProd: 24,
      prodIndex: 0,
      nextIndex: 0,
      allProducts: [],
    };
    this.relatedIdArr = [];
    this.productStylesArr = [];
    this.productDetailsArr = [];
    this.products = [];
    // this.prodIndex = 0;
    // this.nextIndex = 0;
    this.prevIndex = 0;
    this.nextProduct = this.nextProduct.bind(this);
    this.prevProduct = this.prevProduct.bind(this);
  }

  componentDidMount() {
    // fetch moved to DataFetcher.jsx
    this.buildProductData();
  }

  componentDidUpdate() {
    // console.log ('State - styles', this.state);
    // console.log('this.productDetailsArr', this.productDetailsArr)
  }

  buildProductData() {
    const { allProducts, prodDetails, prodStyles } = this.state;
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
        allProducts.push(prodInfo);
        count += 1;
      }
    }
  }

  nextProduct() {
    console.log('next clicked!')
    const newIndex = this.prodIndex + 1;
    newIndex > this.state.totalProd ? newIndex = this.state.totalProd : newIndex
    this.state.nextIndex = newIndex;
    this.state.prodIndex = newIndex;
    console.log('Prod index= ', this.prodIndex);
  }

  prevProduct() {
    const newIndex = this.state.prodIndex - 1;
    newIndex < 0 ? newIndex = 0 : newIndex;
    this.prevIndex = newIndex;
    this.prodIndex = newIndex;
  }

  render() {
    const { prodDetails, prodStyles } = this.state;
    console.log(this.state.allProducts);
    return (
      <>
        <div id="rpCarousel">
          <h4>Related Products 2</h4>
          <button
            type="button"
            onClick={() => this.nextProduct()}
            disabled={this.prodIndex === this.state.totalProd}
          >
            Next
          </button>
          <button
            type="button"
            onClick={() => this.prevProduct()}
            disabled={this.prodIndex === 0}
          >
            Prev
          </button>

          <div className="cards-slider">
            <div className="cards-slider-wrapper"
              style={{
                transform: `translateX(-${this.state.prodIndex * (100 / 24)}%)`,
              }}
            >
              <RPCarousel details={prodDetails} styles={prodStyles} />
            </div>
          </div>
        </div>
      </>
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
