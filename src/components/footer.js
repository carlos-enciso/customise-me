import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	width: 100%;
	height: 10vh;
	background: linear-gradient(134deg, #005bea, #00c6fb);
	display: flex;
	align-items: center;
	justify-content: center;
`;

const FooterLabel = styled.label`
	height: 100%;
	color: #ffffff;
	font-family: 'Segoe UI';
	font-size: 11px;
	font-weight: 400;
	line-height: 12px;
	text-align: center;
	vertical-align: middle;
	display: inline-block;
	margin-bottom: 0px;
	@media only screen and (min-width: 768px) {
		font-size: 18px;
		line-height: 24px;
	}
`;

const ParallaxBackground = () => {
	return (
		<Container>
			<FooterLabel>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
				incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
				exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
				irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
				pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
				deserunt mollit anim id est laborum.
			</FooterLabel>
		</Container>
	);
};

export default ParallaxBackground;
