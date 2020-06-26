import React from 'react';
import ReactDOM from 'react-dom';
import regeneratorRuntime from "regenerator-runtime";
import RelatedProducts from './RelatedProducts';
import MyOutfits from './MyOutfits';
import RPCarousel from './RPCarousel';
import Carousel from './Carousel';
import prodDetailsData from './exampleData/prodDetails.json';
import prodStylesData from './exampleData/prodStyles.json';
let _ = require('lodash');



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainProdId: 5,
      relatedProdIds: [],
      prodDetails: prodDetailsData,
      prodStyles: prodStylesData,
    };
    this.relatedIdArr = [];
    this.productStylesArr = [];
    this.productDetailsArr = [];
    this.products = [];
    // this.fetchRelatedIds = this.fetchRelatedIds.bind(this);
    this.fetchProductDetails = this.fetchProductDetails.bind(this);
    this.fetchProductStyles = this.fetchProductStyles.bind(this);
  }

  componentDidMount() {
    const { mainProdId } = this.state;
    // fetch(`http://52.26.193.201:3000/products/${mainProdId}/related`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     this.relatedIdArr = [...new Set(data)];
    //     // this.relatedIdArr.sort();
    //     console.log(this.relatedIdArr);
    //     for (let i = 0; i < this.relatedIdArr.length; i += 1) {
    //       this.fetchProductDetails(this.relatedIdArr[i]);
    //       this.fetchProductStyles(this.relatedIdArr[i]);
    //     }
    //   })
    //   .catch((err) => console.log('Error getting related prod ids', err));
    // this.setState({ prodDetails: this.productDetailsArr, prodStyles: this.productStylesArr });
  }

  componentDidUpdate() {
    console.log ('State - styles', this.state);
    // console.log('this.productDetailsArr', this.productDetailsArr)
  }

  mergeObjects() {
    for (let i = 0; i < this.prodDetailsArr.length; i += 1) {
      // if this.prodDetailsArr[i].id === this.productStylesArr[i].product_id
      for (let j = 0; j < this.productStylesArr[0].results.length; j += 1) {
        const mergedObj = Object.assign(this.prodDetailsArr[i], this.productStylesArr.results[j]);
        this.products.push(mergedObj);
      }
    }
  }

  async fetchProductDetails(id) {
    // const { prodDetails } = this.state;
    const response = await fetch(`http://52.26.193.201:3000/products/${id}`);
    const details = await response.json();
    this.productDetailsArr.push(details);
    // prodDetails.push(details);
  }

  async fetchProductStyles(id) {
    // const { prodStyles } = this.state;
    const response = await fetch(`http://52.26.193.201:3000/products/${id}/styles`);
    const styles = await response.json();
    this.productStylesArr.push(styles.results);
    // prodStyles.push(styles.results);
  }

  render() {
    const { prodDetails, prodStyles } = this.state;
    return (
      <div>
        <div id="rpItemCarousel">
          <RPCarousel details={prodDetails} styles={prodStyles} />
        </div>
        <div id="myOutfits">
          <h4>My Outfits</h4>
          <MyOutfits />
        </div>
      </div>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById('related'));
