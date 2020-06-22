import React from 'react';
import ReactDOM from 'react-dom';
import RelatedProducts from './RelatedProducts';
import MyOutfits from './MyOutfits';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainProdId: 5,
      relatedProdIds: [],

    };
    this.getRelatedProductsIds = this.getRelatedProductsIds.bind(this);
  }

  componentDidMount() {
    this.getRelatedProductsIds();
  }

  getRelatedProductsIds() {
    const { mainProdId } = this.state;
    fetch(`http://52.26.193.201:3000/products/${mainProdId}/styles`)
      .then((res) => res.json())
      .then((data) => this.setState({ relatedProdIds: data }))
      .catch((err) => console.log('Error getting related prod ids', err));
  }

  render() {
    const { relatedProdIds } = this.state;
    return (
      <div>
        <div id="relatedProducts">
          <h4>Related Products</h4>
          <RelatedProducts productIds={relatedProdIds} />
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
