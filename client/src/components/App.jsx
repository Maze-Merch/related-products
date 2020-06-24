import React from 'react';
import ReactDOM from 'react-dom';
import regeneratorRuntime from "regenerator-runtime";
import RelatedProducts from './RelatedProducts';
import MyOutfits from './MyOutfits';

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
    // this.fetchRelatedIds = this.fetchRelatedIds.bind(this);
    this.fetchProductDetails = this.fetchProductDetails.bind(this);
    this.fetchProductStyles = this.fetchProductStyles.bind(this);
  }

  componentDidMount() {
    // this.fetchRelatedIds();
    const { mainProdId } = this.state;
    fetch(`http://52.26.193.201:3000/products/${mainProdId}/related`)
      .then((res) => res.json())
      .then((data) => {
        this.relatedIdArr = [...new Set(data)];
        for (let i = 0; i < this.relatedIdArr.length; i += 1) {
          this.fetchProductDetails(this.relatedIdArr[i]);
          this.fetchProductStyles(this.relatedIdArr[i]);
        }
        // console.log(this.productDetailsArr);
        // console.log(this.productStylesArr);
      })
      .catch((err) => console.log('Error getting related prod ids', err));
    this.setState({ productDetails: this.productDetailsArr });
    this.setState({ productStyles: this.productStylesArr });
  }

  // async fetchRelatedIds() {
  //   const { mainProdId } = this.state;
  //   const response = await fetch(`http://52.26.193.201:3000/products/${mainProdId}/related`);
  //   const relProdIds = await response.json();
  //   this.setState({ relatedProdIds: [...new Set(relProdIds)] });
  // }

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
    const { relatedProdIds } = this.state;
    return (
      <div>
        <div id="relatedProducts">
          <h4>Related Products</h4>
          <RelatedProducts ids={this.relatedIdArr} styles={this.productStylesArr} details={this.productDetailsArr}/>
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
