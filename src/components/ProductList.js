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
									return brandProduct.products.map((logo,index) => {
										let brand;
										if (index < 6) {
											brand = <Brands key={logo.id} brand={logo.brand} />
										}
										return brand;
									});
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
									const sortDate = latestProduct.products.sort(function(a,b){
										let dateA = new Date(a.released);
										let dateB = new Date(b.released);
										return dateB - dateA;
									});

									return sortDate.map((product, index) => {
										let latest;
										if(index < 4) {
											latest = <LatestProduct key={product.id} product={product} />
										}
										return latest;
									});
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
								return productlist.products.map(product => {	
									return <ProductItem key={product.id} product={product} />	
								});
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