import React from 'react';
import styled from 'styled-components';

const slideBackground = require('../assets/slide1.png');

const Wrapper = styled.div`
	height: 100vh;
	width: 100vw;
	-ms-overflow-style: none;
	background: rgb(0,199,172);
	background: linear-gradient(135deg, rgba(0,199,172,1) 50%, rgba(0,188,171,1) 100%);
	max-height: calc(100vh - 80px);	
	@media only screen and (min-width: 768px) {
	}
`;
const Container = styled.div`
	width: auto;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-content: center;
	@media only screen and (min-width: 768px) {
		max-height: calc(100vh - 80px);
	}
`;
const Slide = styled.img`
	width: 100%;
	height: 100%;
	object-fit: contain;
	@media only screen and (min-width: 768px) {
		object-fit: cover;
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
		top: 50vh;
		left: 66vw;
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
		<Wrapper>
			<Container>
				<Slide src={slideBackground} />
				<Button>
					<LabelContent>Customize</LabelContent>
				</Button>
			</Container>
		</Wrapper>
	);
});

export default FlatContent;
