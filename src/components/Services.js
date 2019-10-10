import React from 'react';

function Services() {
  return (
    <section className="our-services">
      <div className="container">
        <div className="row text-center">
          <div className="col-12 col-sm-6 col-md-3 mb-5">
            <div className="our-services-icon d-flex mb-3 mx-auto">
              <i className="fa fa-truck text-clipped m-auto"></i>
            </div>
            <div className="our-services-description">
              <h5 className="text-uppercase font-weight-bold">Free worldwide shipping</h5>
              <p>Free shipping for all orders over $100</p>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3 mb-5">
            <div className="our-services-icon d-flex mb-3 mx-auto">
              <i className="fa fa-money text-clipped m-auto"></i>
            </div>
            <div className="our-services-description">
              <h5 className="text-uppercase font-weight-bold">Money back guarantee</h5>
              <p>We return money within 30 days of purchase</p>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3 mb-5">
            <div className="our-services-icon d-flex mb-3 mx-auto">
              <i className="fa fa-users text-clipped m-auto"></i>
            </div>
            <div className="our-services-description">
              <h5 className="text-uppercase font-weight-bold">24/7 customer support</h5>
              <p>On Demand 24/7 customer support</p>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3 mb-5">
            <div className="our-services-icon d-flex mb-3 mx-auto">
              <i className="fa fa-credit-card text-clipped m-auto"></i>
            </div>
            <div className="our-services-description">
              <h5 className="text-uppercase font-weight-bold">Secure Online Payment</h5>
              <p>We use top the line data encryption</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services;