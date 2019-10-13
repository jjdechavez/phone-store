import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from '../Phonelogo.svg';
import styled from 'styled-components';

class Navbar extends Component{
	render() {
		return(
			<NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
				<Link to="/" className="d-flex align-items-center">
					<img src={logo} alt="store" width="50" height="50" class="d-inline-block align-top" className="navbar-brand"/>
					<span className="head-title d-flex flex-column">
						<p className="logo-title">MR.CHICKEN</p>
						<span className="logo-sub text-center">PHONE SHOP</span>
					</span>
				</Link>
				<div className="ml-auto">
					<Link to="/">
						<span className="p-3 cart-icon" style={{"fontSize": "1.3rem"}}>
							<i className="fa fa-shopping-bag"></i>
						</span>
					</Link>
					<Link to="/cart">
						<span className="p-3 cart-icon" style={{"fontSize": "1.3rem"}}>
							<i className="fa fa-cart-plus"></i>
						</span>
					</Link>
				</div>
			</NavWrapper>
		);
	}
}

const NavWrapper = styled.nav`
// background: #1998c4 !important;
// position: relative;
// width: 100%;
// 	&::before {
// 		content: "";
// 		position: absolute;
// 		left: 0;
// 		bottom: 0;
// 		right: 0;
// 		top: 0;
// 		width: 80%;
// 		border-bottom: 2px solid black;
// 	}
	.navlink{
		color: var(--mainWhite) !important;
		font-size: 1.3rem;
		text-transform : capitalize;
	}
	.cart-icon {
		color: var(--mainBlack) !important;
	}
`;


export default Navbar;