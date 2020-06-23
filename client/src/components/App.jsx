import React from 'react';
import ReactDOM from 'react-dom';
import regeneratorRuntime from "regenerator-runtime";
import RelatedProducts from './RelatedProducts';
import MyOutfits from './MyOutfits';

// const RELATED_PROD_IDS = [];
// const PRODUCT_DETAILS = [];
// const PRODUCT_STYLES = [];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainProdId: 5,
      relatedProdIds: [],
      productDetails: [],
      productStyles: [],
    };
    this.relatedIdArr = [];
    this.productStylesArr = [];
    this.productDetailsArr = [];
    this.fetchProductDetails = this.fetchProductDetails.bind(this);
    this.fetchProductStyles = this.fetchProductStyles.bind(this);
  }

  componentDidMount() {
    const { mainProdId } = this.state;
    fetch(`http://52.26.193.201:3000/products/${mainProdId}/related`)
      .then((res) => res.json())
      // .then((data) => obj = data)
      // .then(() => console.log('Obj =', obj))
      // .then((data) => function assignData() { this.relatedIdArr.push(data); })
      // console.log(data);
      .then((data) => this.setState({ relatedProdIds: [...new Set(data)] }))
      .catch((err) => console.log('Error getting related prod ids', err));

    // for (let i = 0; i < this.relatedIdArr.length; i += 1) {
    //   this.fetchProductDetails(this.relatedIdArr[i]);
    //   this.fetchProductStyles(this.relatedIdArr[i]);
    // }
    // console.log('Prod Det Arr= ', this.productDetailsArr);
    // this.setState({ productDetails: this.productDetailsArr });
    // this.setState({ productStyles: this.productStylesArr });
  }

  componentDidUpdate() {
    const { relatedProdIds } = this.state;
    this.relatedIdArr = relatedProdIds;
    // console.log('Related Arr= ', this.relatedIdArr);
  }

  async fetchProductDetails(id) {
    const response = await fetch(`http://52.26.193.201:3000/products/${id}`);
    const prodDetails = await response.json();
    this.productDetailsArr.push(prodDetails);
  }

  async fetchProductStyles(id) {
    const response = await fetch(`http://52.26.193.201:3000/products/${id}/styles`);
    const styles = await response.json();
    this.productStylesArr.push(styles);
  }

  render() {
    // const { productDetails, productStyles } = this.state;
    return (
      <div>
        <div id="relatedProducts">
          <h4>Related Products</h4>
          <RelatedProducts prodDetails={this.productDetailsArr} prodStyles={this.productStylesArr} />
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
