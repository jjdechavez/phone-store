import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';
import PropTypes from 'prop-types';

class ProductItem extends Component {
  render() {
    const {id, title, img, price} = this.props.product;
    return (
      <section className="product-item">
          <div className="text-center product-container">
            <ProductConsumer>
              {productItem => (
                <div className="col-12 col-lg-12 col-sm-6 col-md-3 mb-3">
                  <div className="product-img mb-3" onClick={() => productItem.handleDetail(id)}>
                    <Link to="/details" className="nav-link">
                      <img className="product-item-img" src={img} alt="product"/>
                      <div className="d-flex justify-content-between">
                        <span className="text-uppercase font-weight-bold">{title} </span>
                        <span className="text-uppercase font-weight-bold">${price}</span>
                      </div> <br />
                      <span>See details</span> <i className="fa fa-caret-right"></i>
                    </Link>
                  </div>
                </div>
              )}
            </ProductConsumer>
          </div>
      </section>
    )
  }
}

ProductItem.propTypes = {
	product: PropTypes.shape({
		id: PropTypes.number,
		img: PropTypes.string,
		title: PropTypes.string,
    price: PropTypes.number,
	}).isRequired
};

export default ProductItem;