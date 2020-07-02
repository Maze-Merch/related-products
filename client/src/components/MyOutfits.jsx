import React from 'react';
import Card from './card/Card';

class MyOutfits extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addToId: 0,
      myOutfits: [],
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  buildCardData() {
    const { det, style } = this.props;
    const details = det;
    const styles = style;
    // console.log('Details from props', details);
    // const cardData = [];
    let count = 0;
    for (let x = 0; x <= details.length - 1; x += 1) {
      for (let i = 0; i <= styles[x].results.length - 1; i += 1) {
        const prodInfo = {
          idx: count,
          id: details[x].id,
          name: details[x].name,
          slogan: details[x].slogan,
          description: details[x].description,
          category: details[x].category,
          default_price: details[x].default_price,
          styleId: styles[x].results[i].style_id,
          styleName: styles[x].results[i].name,
          origPrice: styles[x].results[i].original_price,
          salePrice: styles[x].results[i].sale_price,
          thumb: styles[x].results[i].photos[0].thumbnail_url,
          img: styles[x].results[i].photos[0].url,
          features: details[x].features,
        };
        this.cardData.push(prodInfo);
        count += 1;
      }
    }
    this.setState({ allProducts: this.cardData });
  }

  handleClick(e) {
    console.log('TARGET ID=', e.target.dataset.id);
    this.setState({ addToId: e.target.dataset.id });
  }

  handleKeyPress(e) {
    this.setState({ addToId: e.target.dataset.id });
  }

  render() {
    console.log(
      'MO Props = ', this.props,
    );
    const { mainProdId } = this.props;
    return (
      <>
      <div className="rp-container">
        <h4>My Outfits</h4>
        <div className="rp-card outfit-card">
          <h3>Add to Outfit</h3>
          <i
            className="icon icon-solid plus"
            data-id={mainProdId}
            onClick={this.handleClick}
            role="button"
            onKeyPress={this.handleKeyPress}
            tabIndex={0}
            aria-label="Add to My Outfits"
          />
        </div>
      </div>
      <div id="addedOutfits">
         <h4>Added Outfits</h4>
      </div>
      </>
    );
  }
}

export default MyOutfits;
