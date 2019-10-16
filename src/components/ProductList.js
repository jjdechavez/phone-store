import React, {Component} from 'react';

import Title from './Title';
import SubTitle from './SubTitle';
import Carousel from './Carousel';
import Brands from './Brands';
import LatestProduct from './LatestProduct';
import ProductItem from './ProductItem';
import Services from './Services';

import {ProductConsumer} from '../context';

class ProductList extends Component{
	render() {
		return(
			<React.Fragment>
				<div className="container-fluid">
					<Title name="Our store is officially supported" title="payPal" />
				</div>			
				<div className="container">
					<Carousel />
				</div>
				<section className="featured-brands">
					<div className="container">
						<div className="row align-items-center text-center">
							<ProductConsumer>
								{brandProduct => {
									return brandProduct.products.map((logo,index) => index < 6 ? <Brands key={logo.id} brand={logo.brand} /> : null);
								}}
							</ProductConsumer>
						</div>
					</div>
    		</section>
				<section className="latest-product pt-o">
					<div className="container">
						<SubTitle headline="Latest Product" sub="Shop the newest trends" />
						<div className="row">
							<ProductConsumer>
								{latestProduct => {
									return latestProduct.products.sort((a,b) => new Date(b.released) - new Date(a.released))
													.map((latest, index) => index < 4 ? <LatestProduct key={latest.id} latest={latest} /> : null);
								}}
							</ProductConsumer>
						</div>
					</div>
				</section>
				<div className="container">
					<SubTitle headline="Our product" sub="Shop the other phones" />
					<div className="row d-flex justify-content-around">
						<ProductConsumer>
							{productlist => {
								return productlist.products.map(product => <ProductItem key={product.id} product={product} />	);
							}}
						</ProductConsumer>				
					</div>
				</div>
				<Services />
			</React.Fragment>
			// <Product />
		)
	}
}

export default ProductList;