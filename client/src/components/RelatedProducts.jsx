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
            <div className="rp-card-image-box">
              <img src="https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" className="rp-card-image" alt="..." />
            </div>
            <div className="rp-card-body">
              <div className="rp-card-category">CATEGORY</div>
              <h5>Product Name 1 of 5</h5>
              <p className="rp-card-text">Some quick example text to build on the card title.</p>
              <div className="rp-card-price">$125</div>
              <div className="rp-card-stars">*****</div>
            </div>
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
