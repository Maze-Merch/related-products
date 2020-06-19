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
      <h2>Related Products</h2>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById('app'));
