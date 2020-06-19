import React from 'react';

class RelatedProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="rp-container">
        <div className="row rp-row">
          <div className="col rp-card">
            1 of 5
          </div>
          <div className="col rp-card">
            2 of 5
          </div>
          <div className="col rp-card d-none d-sm-block d-md-block d-lg-block d-xl-block">
            3 of 5
          </div>
          <div className="col rp-card d-none d-sm-none d-md-block d-lg-block d-xl-block">
            4 of 5
          </div>
          <div className="col rp-card d-none d-sm-none d-md-none d-lg-none d-xl-block">
            5 of 5
          </div>
        </div>
      </div>
    );
  }
}

export default RelatedProducts;
