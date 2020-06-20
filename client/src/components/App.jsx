import React from 'react';
import ReactDOM from 'react-dom';
import RelatedProducts from './RelatedProducts';
import MyOutfits from './MyOutfits';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <div id="relatedProducts">
          <h4>Related Products</h4>
          <RelatedProducts />
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
