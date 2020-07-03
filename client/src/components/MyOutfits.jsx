import React from 'react';
import Card from './card/Card';

class MyOutfits extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allProducts: [],
      addToId: 0,
      myOutfits: [],
    };
    this.cardData = [];
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.buildCardData = this.buildCardData.bind(this);
  }

  componentDidMount() {
    this.buildCardData();
  }

  componentDidUpdate() {
    const { allProducts } = this.state;
    if (allProducts !== this.cardData) {
      // console.log('here in update if');
      this.setState({ allProducts: this.cardData });
    }
    // console.log('Did Update state = ', this.state)
  }

  buildCardData() {
    const { det, style } = this.props;
    const details = det;
    const styles = style;
    // console.log('Details from props', details);
    // let count = 0;
    const prodInfo = {
      idx: details.id,
      id: details.id,
      name: details.name,
      slogan: details.slogan,
      description: details.description,
      category: details.category,
      default_price: details.default_price,
      styleId: styles.style_id,
      styleName: styles.name,
      origPrice: styles.original_price,
      salePrice: styles.sale_price,
      thumb: styles.photos[0].thumbnail_url,
      img: styles.photos[0].url,
    };

    this.cardData.push(prodInfo);
    this.setState({ myOutfits: this.cardData });
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
      'MO State = ', this.state,
    );
    const { allProducts } = this.state;
    const { det } = this.props;
    return (
      <>
        <div className="container row">
          <div className="rp-card outfit-card">
            <h3>Add to Outfit</h3>
            <i
              className="icon icon-solid plus"
              data-id={det.id}
              onClick={this.handleClick}
              role="button"
              onKeyPress={this.handleKeyPress}
              tabIndex={0}
              aria-label="Add to My Outfits"
            />
          </div>
          { allProducts.map((product, i) => (
            <Card
              product={product}
              openModal={this.handleStarClick}
              key={i}
            />
          ))}
        </div>
      </>
    );
  }
}

export default MyOutfits;
