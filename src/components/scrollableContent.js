import React from 'react';
import styled from 'styled-components';

import backgroundImage from '../assets/slide2.png';
import customisemeLogo from '../assets/customizeme_final_color.png';

const Container = styled.div`
	width: 100%;
	background-image: url(${backgroundImage});
	background-color: #d3d3d380;
	background-position: bottom;
	background-repeat: no-repeat;
	background-size: contain;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	@media only screen and (min-width: 768px) {
	}
`;
const AboutUsContainer = styled.div`
	margin-left: 45px;
	margin-top: 20px;
	margin-right: 20px;
	background-color: transparent;
	flex: 9;
	display: flex;
	flex-direction: column;
	@media only screen and (min-width: 768px) {
		flex-direction: row;
		top: 20px;
		left: 300px;
	}
`;
const CustomiseMeLogo = styled.img`
	margin-top: 20px;
	margin-left: 20px;
	width: 145px;
	height: 145px;
	flex: 1;
	@media only screen and (min-width: 768px) {
		width: 295px;
		height: 303px;
	}
`;
const AboutUsLabel = styled.label`
	flex: 4;
	height: 100%;
	color: #000000;
	font-family: 'Segoe UI';
	font-size: 15px;
	font-weight: 400;
	line-height: 15px;
	text-align: justify;
	vertical-align: middle;
	display: inline-block;
	margin-top: 15px;
	@media only screen and (min-width: 768px) {
		font-size: 18px;
		line-height: 24px;
	}
`;
const Divider = styled.div`
	width: 180px;
	margin: 15px 0 0;
	height: 5px;
	background: #b3dec9;
	@media only screen and (min-width: 768px) {
		width: 5px;
		margin: 33px;
		height: 270px;
	}
`;
const Separator = styled.div`
	flex-grow: 1;
	width: 100%;
	height: 25vh;
	@media only screen and (min-width: 768px) {
		height: 70vh;
	}
`;

const ParallaxContent = React.forwardRef(() => {
	return (
		<Container>
			<AboutUsContainer>
				<CustomiseMeLogo src={customisemeLogo} />
				<Divider />
				<AboutUsLabel>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
					incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
					nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
					Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
					fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit
					amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
					dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
					laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
					Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
					deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur
					adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
					ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
					voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
					occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
					id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
					veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
					dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
					sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor
					sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
					labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
					exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
					irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
					nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
					qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet,
					consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
					dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
					laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
					Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
					deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur
					adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
					ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
					voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
					occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
					id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
					veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
					dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
					sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor
					sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
					labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
					exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
					irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
					nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
					qui officia deserunt mollit anim id est laborum.
				</AboutUsLabel>
			</AboutUsContainer>
			<Separator />
		</Container>
	);
});

export default ParallaxContent;
