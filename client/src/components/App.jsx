/* eslint-disable class-methods-use-this */
import React from 'react';
import ReactDOM from 'react-dom';
import regeneratorRuntime from 'regenerator-runtime';
import MyOutfits from './MyOutfits';
import Carousel from './Carousel';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainProdId: 5,
      currentProd: {},
      relatedProdIds: [],
      prodDetails: [],
      prodStyles: [],
    };
    this.productDetailsArr = [];
    this.productStylesArr = [];
    this.getDetails = this.getDetails.bind(this);
    this.getStyles = this.getStyles.bind(this);
  }

  componentDidMount() {
    this.getCurrentProduct();
    this.dataFetcher();
  }

  getRelIds() {
    const { mainProdId } = this.state;
    let relIds = [];

    return fetch(`http://52.26.193.201:3000/products/${mainProdId}/related`)
      .then((res) => res.json())
      .then((data) => {
        relIds = [...new Set(data)];
        relIds.sort();
        return relIds;
      })
      .catch((err) => console.log('Error getting related prod ids', err));
  }

  getDetails(relIds) {
    const detailsPromises = [];

    for (let i = 0; i <= relIds.length - 1; i += 1) {
      const id = relIds[i];
      const detailPromise = fetch(`http://52.26.193.201:3000/products/${id}`)
        .then((res) => res.json());
      detailsPromises.push(detailPromise);
    }
    return Promise.all(detailsPromises);
  }

  getStyles(relIds) {
    const stylesPromises = [];

    for (let i = 0; i <= relIds.length - 1; i += 1) {
      const id = relIds[i];
      const stylePromise = fetch(`http://52.26.193.201:3000/products/${id}/styles`)
        .then((res) => res.json());
      stylesPromises.push(stylePromise);
    }
    return Promise.all(stylesPromises);
  }

  async getCurrentProduct() {
    const { mainProdId } = this.state;
    const response = await fetch(`http://52.26.193.201:3000/products/${mainProdId}`);
    const currProdDet = await response.json();
    this.setState({ currentProd: currProdDet });
  }

  async dataFetcher() {
    try {
      const relatedIds = await this.getRelIds();
      this.productDetailsArr = await this.getDetails(relatedIds);
      this.productStylesArr = await this.getStyles(relatedIds);
    } catch (err) {
      console.log(err);
    }

    this.setState({
      relatedProdIds: this.relatedIds,
      prodDetails: this.productDetailsArr,
      prodStyles: this.productStylesArr,
    });
  }

  render() {
    const {
      currentProd, relatedProdIds, prodDetails, prodStyles,
    } = this.state;

    return (
      <>
        <div id="rp-carousel">
          <h4>Related Products</h4>
          {
            relatedProdIds ? <div className="fa fa-refresh fa-spin fa-3x fa-fw rp-loading"><span className="sr-only">Loading...</span></div>
              : <Carousel currProd={currentProd} det={prodDetails} style={prodStyles} />
          }
        </div>
        <div id="myOutfits">
          <MyOutfits det={currentProd} style={prodStyles} />
        </div>
      </>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById('related'));
