import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      related: [],
    };
  }

  render() {
    return (
      <h1>Related Products</h1>
    );
  }
}

export default App;

const wrapper = document.getElementById('container');
wrapper ? ReactDOM.render(<App />, wrapper) : false;
