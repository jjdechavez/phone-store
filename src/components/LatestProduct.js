import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';
import PropTypes from 'prop-types';

class LatestProduct extends Component {
  render() {
    const {id , title, hero:{regular, mobile}} = this.props.latest;

    return (
      <ProductConsumer>
        {latestProduct => (
          <div className="col-md-6 col-sm-12 hero-img" onClick={() => latestProduct.handleDetail(id)}>
            <Link to="/details">
              <img className="img-fluid d-md-none" src={mobile} alt=""/>
              <img className="mg-fluid d-none d-md-block" src={regular} alt=""/>
            </Link>
            <div className="mt-2">
              <Link to="/details">
                <span className="text-uppercase font-weight-bold">{title}</span> <br/>
                <span>Shop now</span> <i className="fa fa-caret-right"></i>
              </Link>
            </div>
          </div>  
          )
        }
      </ProductConsumer>
    )
  }
}

LatestProduct.propTypes = {
	product: PropTypes.shape({
		id: PropTypes.number,
		title: PropTypes.string,
    hero: PropTypes.string,
	}).isRequired
};

export default LatestProduct;