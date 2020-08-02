import React from 'react';
import PropTypes from 'prop-types';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
import './navbar.css';

const NavBar = React.forwardRef((props) => {
	const { expandedNav } = props;
	return (
		<Navbar bg="primary" fixed="top" expanded={expandedNav}>
			<Navbar.Brand href="#home">
				<svg
					width="52px"
					height="52px"
					viewBox="0 0 104 94"
					version="1.1"
					xmlnsXlink="http://www.w3.org/1999/xlink"
					xmlns="http://www.w3.org/2000/svg"
				>
					<defs>
						<image
							width="103"
							height="94"
							// eslint-disable-next-line max-len
							xlinkHref="data:image/png;base64,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"
							id="brandLogo"
						/>
					</defs>
					<use xlinkHref="#brandLogo" fill="#FFFFFF" stroke="none" />
				</svg>
			</Navbar.Brand>
			<Nav className="w-100" justify>
				<Nav.Item href="#Home">Who we are</Nav.Item>
				<Nav.Item href="#About">E-Commerce</Nav.Item>
				<Nav.Item href="#Contact">Contact Us</Nav.Item>
				<div
					style={{
						display: 'flex',
						'flex-direction': 'row',
						'justify-content': 'space-between',
						'flex-basis': 0,
						'flex-grow': 1,
					}}
				>
					<Nav.Item href="#">
						<FontAwesomeIcon icon={faInstagram} />
					</Nav.Item>
					<Nav.Item href="#">
						<FontAwesomeIcon icon={faTwitter} />
					</Nav.Item>
					<Nav.Item href="#">
						<FontAwesomeIcon icon={faFacebook} />
					</Nav.Item>
				</div>
			</Nav>
		</Navbar>
	);
});
NavBar.propTypes = {
	expandedNav: PropTypes.bool.isRequired,
};

export default NavBar;
