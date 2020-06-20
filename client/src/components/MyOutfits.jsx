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
        <ul className="list-group list-group-horizontal rp-row">
          <li className="list-group-item rp-card">Product Card 1</li>
          <li className="list-group-item rp-card">Product Card 2</li>
          <li className="list-group-item rp-card">Product Card 3</li>
          <li className="list-group-item rp-card">Product Card 4</li>
          <li className="list-group-item rp-card">Product Card 5</li>
        </ul>
      </div>
    );
  }
}

export default MyOutfits;
