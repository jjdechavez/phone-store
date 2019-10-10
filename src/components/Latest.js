import React from 'react';

function Latest() {
  return (
    <section className="latests">
      <div className="container">
        <div className="section-heading text-center mb-5">
          <h1 className="text-clipped text-uppercase">The latest phone</h1>
          <p className="text-secondary">Shop the newest releases</p>
        </div>

        <div className="row text-center">
          <div className="col-12 col-sm-6 col-md-3 mb-3">
            <div className="new-arrival-img mb-3">
              <img src="./img/images/shoes/shoe1.jpg" alt=""/>
            </div>
            <a href="test">
              <span className="text-uppercase font-weight-bold">Nike Air Max</span> <br />
              <span>Shop now</span> <i className="fa fa-caret-right"></i>
            </a>
          </div>
          <div className="col-12 col-sm-6 col-md-3 mb-3">
            <div className="new-arrival-img mb-3">
              <img src="./img/images/shoes/shoe2.jpg" alt=""/>
            </div>
            <a href="test">
              <span className="text-uppercase font-weight-bold">Nike Air Max</span> <br />
              <span>Shop now</span> <i className="fa fa-caret-right"></i>
            </a>
          </div>
          <div className="col-12 col-sm-6 col-md-3 mb-3">
            <div className="new-arrival-img mb-3">
              <img src="./img/images/shoes/shoe3.jpg" alt=""/>
            </div>
            <a href="test">
              <span className="text-uppercase font-weight-bold">Nike Air Max</span> <br />
              <span>Shop now</span> <i className="fa fa-caret-right"></i>
            </a>
          </div>
          <div className="col-12 col-sm-6 col-md-3 mb-3">
            <div className="new-arrival-img mb-3">
              <img src="./img/images/shoes/shoe4.jpg" alt=""/>
            </div>
            <a href="test">
              <span className="text-uppercase font-weight-bold">Nike Air Max</span> <br />
              <span>Shop now</span> <i className="fa fa-caret-right"></i>
            </a>
          </div>
          <div className="col-12 col-sm-6 col-md-3 mb-3">
            <div className="new-arrival-img mb-3">
              <img src="./img/images/shoes/shoe4.jpg" alt=""/>
            </div>
            <a href="test">
              <span className="text-uppercase font-weight-bold">Nike Air Max</span> <br />
              <span>Shop now</span> <i className="fa fa-caret-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Latest;