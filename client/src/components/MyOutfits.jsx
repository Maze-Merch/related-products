import React from 'react';

class MyOutfits extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myOutfitProdId: 0,
    };
    this.handleAddToOutfitClick = this.handleAddToOutfitClick.bind(this);
  }

  handleAddToOutfitClick(e) {
    console.log('TARGET ID=', e.target.dataset.id);
    this.setState({ myOutfitProdId: e.target.dataset.id });
  }

  render() {
    return (
      <div className="rp-container">
        <h4>My Outfits</h4>
        <div className="rp-card outfit-card">
          <h3>Add to Outfit</h3>
          <i
            className="icon icon-solid plus"
            data-id={this.props.mainProdId}
            onClick={this.handleAddToOutfitClick}
          />
        </div>
      </div>
    );
  }
}

export default MyOutfits;
