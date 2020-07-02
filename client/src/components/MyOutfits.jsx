import React from 'react';

class MyOutfits extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myOutfitProdId: 0,
    };
    this.handleAddToOutfitClick = this.handleAddToOutfitClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleAddToOutfitClick(e) {
    console.log('TARGET ID=', e.target.dataset.id);
    this.setState({ myOutfitProdId: e.target.dataset.id });
  }

  handleKeyPress(e) {
    this.setState({ myOutfitProdId: e.target.dataset.id });
  }

  render() {
    const { mainProdId } = this.props;
    return (
      <div className="rp-container">
        <h4>My Outfits</h4>
        <div className="rp-card outfit-card">
          <h3>Add to Outfit</h3>
          <i
            className="icon icon-solid plus"
            data-id={mainProdId}
            onClick={this.handleAddToOutfitClick}
            role="button"
            onKeyPress={this.handleKeyPress}
            tabIndex={0}
            aria-label="Add to My Outfits"
          />
        </div>
      </div>
    );
  }
}

export default MyOutfits;
