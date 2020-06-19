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
          <h2>Related Products</h2>
          <RelatedProducts />
        </div>
        <div id="myOutfits">
          <h2>My Outfits</h2>
          <MyOutfits />
        </div>
      </div>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById('related'));
