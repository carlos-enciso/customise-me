import React from 'react';
import styled from 'styled-components';

const slideBackground = require('../assets/slide1.png');

const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	align-content: center;
	justify-content: center;
	background-color: #00c6ac;
`;
const Slide = styled.img`
	width: 100vw;
	height: auto;
	@media only screen and (min-width: 768px) {
		width: 75vw;
	}
`;

const Button = styled.button`
	position: absolute;
	border-radius: 30px;
	border: none;
	:focus {
		outline: none;
	}
	background: linear-gradient(-49deg, #2200ea, #005efb);
	top: 70vh;
	left: 60vw;
	@media only screen and (min-width: 768px) {
		top: 62vh;
		left: 62vw;
	}
`;

const LabelContent = styled.label`
	color: #ffffff;
	font-family: 'Bebas Neue';
	font-weight: 400;
	line-height: 65px;
	text-align: center;
	text-transform: uppercase;
	margin-bottom: 0em;
	font-size: 20px;
	@media only screen and (min-width: 768px) {
		font-size: 25px;
	}
`;

const FlatContent = React.forwardRef(() => {
	return (
		<Container>
			<Slide src={slideBackground} />
			<Button>
				<LabelContent>Customize</LabelContent>
			</Button>
		</Container>
	);
});

export default FlatContent;
