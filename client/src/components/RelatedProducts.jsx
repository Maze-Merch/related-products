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
            <div className="rp-favorite">
              <svg class="bi bi-star-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
            </div>
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
          <div className="col rp-card d-none d-sm-none d-md-block d-lg-block d-xl-block">
            3 of 5
          </div>
          <div className="col rp-card d-none d-sm-none d-md-none d-lg-block d-xl-block">
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
