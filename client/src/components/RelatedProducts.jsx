import React from 'react';
// import regeneratorRuntime from "regenerator-runtime";
import RelatedProductsList from './RelatedProductsList';

const PRODUCTS = [];

class RelatedProducts extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      // relProdIds: [productIds],
      relatedProducts: [PRODUCTS],
    };
    // this.getProductInformationById = this.getProductInformationById.bind(this);
    this.fetchProduct = this.fetchProduct.bind(this);
    // this.productIds = this.props.productIds;
  }

  componentDidMount() {
    // getProductInformationById()
    // console.log('componentDidMount = ', this.props.productIds);
  }

  render() {
    console.log('RP props', this.props);
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
