import React from 'react';

function Title({name,title}){
  return(
    <div className="row promotions text-center text-white mb-5">
      <div className="col-10 mx-auto my-2 text-center">
        <span>
        {name} <span className="text-capitalize">{title}</span>
        </span>
      </div>
    </div>
  );
}

export default Title;