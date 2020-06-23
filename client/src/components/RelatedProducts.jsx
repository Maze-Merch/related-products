import React from 'react';
// import regeneratorRuntime from "regenerator-runtime";
import RelatedProductsList from './RelatedProductsList';

const PRODUCTS = [];

class RelatedProducts extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      // relProdIds: [productIds],
      // relatedProducts: [PRODUCTS],
    };
    // this.getProductInformationById = this.getProductInformationById.bind(this);
    // this.fetchProduct = this.fetchProduct.bind(this);
    // this.productIds = this.props.productIds;
  }

  componentDidMount() {
    // getProductInformationById()
    // console.log('componentDidMount = ', this.props.productIds);
  }

  componentDidUpdate() {
    // const productIds = this.props.productIds;
    // console.log('componentDidUpdate = ', this.props.productIds);
    // this.props.productIds.map((id) => this.fetchProduct(id));
    // for (let i = 0; i < this.props.productIds.length; i += 1) {
    //   this.fetchProduct(this.props.productIds[i]);
    // }
    // console.log('RP PRODUCTS', PRODUCTS);
  }

  // getProductInformationById() {
  //   // const { relProdId } = this.state;
  //   this.productIds.map((id) => this.fetchProduct(id));
  // }

  // async fetchProduct(id) {
  //   const response = await fetch(`http://52.26.193.201:3000/products/${id}`);
  //   const data = await response.json();
  //   console.log('Data', data);
  //   PRODUCTS.push(data);
  //   this.state.relatedProducts.concat(data);
  //   // this.setState({ relatedProducts: data });
  //   // .catch((err) => console.log('Error getting related prod ids', err));
  // }

  // fetchProduct(id) {
  //   fetch(`http://52.26.193.201:3000/products/${id}`)
  //     .then((res) => res.json())
  //     .then((data) => this.setState({ relatedProducts: data }))
  //     .catch((err) => console.log('Error getting related prod ids', err));
  // }

  render() {
    // console.log('RP props', this.props);
    // const { relatedProducts } = this.state;
    return (
      <div className="rp-container">
        <div className="row rp-row">
          <RelatedProductsList />
        </div>
      </div>
    );
  }
}

RelatedProducts.propTypes = {

};

export default RelatedProducts;
