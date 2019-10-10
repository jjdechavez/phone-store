import React from 'react';

function SubTitle({headline, sub}) {
  return (
    <div className="section-heading text-center mb-5">
      <h1 className="text-clipped text-uppercase">{headline}</h1>
      <p className="text-secondary">{sub}</p>
    </div>
  )
}

export default SubTitle;