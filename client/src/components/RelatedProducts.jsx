import React from 'react';

class RelatedProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ul className="list-group list-group-horizontal">
        <li className="list-group-item">Product Card 1</li>
        <li className="list-group-item">Product Card 2</li>
        <li className="list-group-item">Product Card 3</li>
        <li className="list-group-item">Product Card 4</li>
        <li className="list-group-item">Product Card 5</li>
      </ul>
    );
  }
}

export default RelatedProducts;
