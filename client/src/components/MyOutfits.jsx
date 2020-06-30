import React from 'react';

class MyOutfits extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="rp-container">
        <div className="rp-card outfit-card">
          <h3>Add to Outfit</h3>
          <i className="icon icon-solid plus" />
        </div>
      </div>
    );
  }
}

export default MyOutfits;
