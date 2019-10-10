import React, {Component} from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';

class Details extends Component{
	render() {
		return(
			<ProductConsumer>
				{data => {
					const {id, company, img, price, title, info, inCart, features: {display, camera, ram, battery}} = data.detailProduct;
					return (
						<div className="container py-5">
							{/* product info */}
							<div className="row">
								<div className="col-lg-6 col-sm-12 mx-auto my-3">
									<img src={img} className="img-fluid" alt="product" />
								</div>
								{/* product text */}
								<div className="col-lg-6 col-sm-12 mx-auto my-3 text-capitalize">
									<div className="container d-flex justify-content-start">
										<h2 className="">{title}</h2>
										<h4 className="item-price mt-1">
											<strong><span>$</span>{price}</strong>
										</h4>
									</div>
									<div className="container">
										<h4 className="text-title text-muted mb-2">
											made by: <span className="text-decoration-none">{company}</span>
										</h4>
									</div>
									<div className="container">
										<p className="text-capitalize font-weight-bold mt-3 mb-0">
											product details:
										</p>
										<p className="item-info">{info}</p>
									</div>
									<div className="container">
										<p className="font-weight-bold">Product features:</p>
									</div>
									<div className="row d-flex align-items-end">
										<div className="col-lg-3 col-md-3 col-sm-12 text-center feature-item feature-border">
											<i className="fa fa-mobile" style={{fontSize: "2.9rem"}}></i>
											<h4>{display}"</h4>
										</div>
										<div className="col-lg-3 col-md-3 col-sm-12 text-center feature-item feature-border">
											<i className="fa fa-camera mb-1"></i>
											<h4>{camera}MP</h4>
										</div>
										<div className="col-lg-3 col-md-3 col-sm-12 text-center feature-item feature-border">
											<i className="fa fa-microchip mb-1"></i>
											<h4>{ram}GB RAM</h4>
										</div>
										<div className="col-lg-3 col-md-3 col-sm-12 text-center feature-item">
											<i className="fa fa-battery mb-1"></i>
											<h4>{battery}mAh</h4>
										</div>
									</div>
									{/* buttons */}
									<div className="container mt-5">
										<div className="row">
											<Link to="/">
												<ButtonContainer>Back to products</ButtonContainer>
											</Link>
											<ButtonContainer 
												cart
												disabled={inCart ? true : false}
												onClick={() => {
													data.addToCart(id)
												}}
											>
												{inCart ? 'inCart' : 'Add to cart'}
											</ButtonContainer>
										</div>
									</div>
								</div>
							</div>
							{/* end product info */}
						</div>
					);
				}}
			</ProductConsumer>
		)
	}
}

export default Details;