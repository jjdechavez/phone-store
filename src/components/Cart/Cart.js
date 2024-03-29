import React, {Component} from 'react';
import CartBanner from './CartBanner';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import {ProductConsumer} from '../../context';
import CartList from './CartList';
import CartTotals from './CartTotals';

class Cart extends Component{
	render() {
		return(
			<section className="p-0">
				<ProductConsumer>
					{value => {
						const {cart} = value;
						if(cart.length > 0) {
							return(
								<React.Fragment>
									<CartBanner title="Cart" />
									<CartColumns />
									<CartList value={value} />
									<CartTotals value={value} history={this.props.history} />
								</React.Fragment>
							)
						} else {
							return <EmptyCart />
						}
					}}
				</ProductConsumer>
			</section>
		)
	}
}

export default Cart;