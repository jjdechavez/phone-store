import React from 'react';

function CartBanner({title}) {
  return(
    <section className="cart-banner mb-5">
      <div className="heading-bg d-flex">
        <div className="container text-left align-self-center">
          <h1 className="text-uppercase">{title}</h1>
        </div>
      </div>
    </section>
  )
}

export default CartBanner;