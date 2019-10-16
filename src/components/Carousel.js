import React from 'react';

function Carousel() {
  return(
    <div className="row">

      <div className="carousel slide" id="carousel-indicators" data-ride="carousel">
        <ol className="carousel-indicators">
          <li className="active" data-target="#carousel-indicators" data-slide-to="0"></li>
          <li data-target="#carousel-indicators" data-slide-to="1"></li>
          <li data-target="#carousel-indicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <a href="#test">
              <img className="img-fluid d-md-none" src="./img/carousel/Carousel-3-mobile.webp" alt=""/>
              <img className="img-fluid d-none d-md-block" src="./img/carousel/Carousel-3.webp" alt=""/>
            </a>
          </div>
          <div className="carousel-item">
            <a href="#test">
              <img className="img-fluid d-md-none" src="./img/carousel/realme-mobile.webp" alt=""/>
              <img className="img-fluid d-none d-md-block" src="./img/carousel/realme.webp" alt=""/>
            </a>
          </div>
          <div className="carousel-item">
            <a href="#test">
              <img className="img-fluid d-md-none" src="./img/carousel/Carousel-2-mobile.webp" alt=""/>
              <img className="img-fluid d-none d-md-block" src="./img/carousel/Carousel-2.webp" alt=""/>
            </a>
          </div>
        </div>
        <a href="#carousel-indicators" className="carousel-control-prev" role="button" data-slide="prev">
          <i className="fa fa-chevron-left text-clipped"></i>
        </a>
        <a href="#carousel-indicators" className="carousel-control-next" role="button" data-slide="next">
          <i className="fa fa-chevron-right text-clipped"></i>
        </a>
      </div>
    </div>
  )
}

export default Carousel;