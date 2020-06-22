import React from 'react';
import PropTypes from 'prop-types';
import RelatedProductsList from './RelatedProductsList';

class RelatedProducts extends React.Component {
  constructor(props) {
    super(props);
    const { productIds } = this.props;
    this.state = {
      relProdIds: [productIds],
      relatedProducts: [],
    };
    this.getProductInformationById = this.getProductInformationById.bind(this);
    this.fetchProduct = this.fetchProduct.bind(this);
  }

  componentDidMount() {
    // this.getProductInformationById();
  }

  getProductInformationById() {
    const { relProdId } = this.state;
    relProdId.map((id) => this.fetchProduct(id));
  }

  fetchProduct(id) {
    fetch(`http://52.26.193.201:3000/products/${id}`)
      .then((res) => res.json())
      .then((data) => this.setState({ relatedProducts: [...data] }))
      .catch((err) => console.log('Error getting related prod ids', err));
  }

  render() {
    console.log('RP props', this.props);
    const { relatedProducts } = this.state;
    return (
      <div className="rp-container">
        <div className="row rp-row">
          <RelatedProductsList relatedProducts={relatedProducts} />
        </div>
      </div>
    );
  }
}

RelatedProducts.propTypes = {

};

export default RelatedProducts;
