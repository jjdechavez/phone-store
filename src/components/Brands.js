import React from 'react';
import { Link } from 'react-router-dom';

function Brands({brand}) {
  return (
    <div className="col-12 col-sm-6 col-md-2 mb-5">
      <Link to="/">
        <img src={brand} alt=""/>
      </Link>
    </div>
  )
}

export default Brands;