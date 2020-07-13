import React from 'react';
import styled from 'styled-components';
import './banner.css';

const customiseMeLogo = require('../assets/logo-white.png');
const customiseMeSlogan = require('../assets/slogan.png');
const customiseMeJourney = require('../assets/journey.png');

const Wrapper = styled.div`
	height: 100vh;
	width: 100vw;
	-ms-overflow-style: none;
	background: rgb(0,94,251);
	background: linear-gradient(90deg, rgba(0,94,251,1) 25%, rgba(34,0,234,1) 100%);
`;
const Container = styled.div`
	display: flex;
	flex-flow: column;
	justify-content: center;
	align-content: center;
	padding-top: 1em;
	padding-left: 4em;
	padding-right: 4em;
`;
const LogoContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-content: center;
	justify-content: center;
`;
const JourneyContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-content: center;
	justify-content: center;
	padding-top: 1em;
`;
const Logo = styled.img`
	width: 35%;
	background: transparent;
`;

const Slogan = styled.img`
	width: 43%;
	background: transparent;
	align-self: flex-end;
	margin-left: 5em;
	margin-bottom: 2em;
`;

const Journey = styled.img`
	width: 78%;
	background: transparent;
    height:auto;
`;

const Banner = React.forwardRef(() => {
	return (
		<Wrapper>
			<Container>
				<LogoContainer>
					<Logo src={customiseMeLogo} />
					<Slogan src={customiseMeSlogan} />
				</LogoContainer>
				<JourneyContainer>
					<Journey src={customiseMeJourney} />
				</JourneyContainer>
			</Container>
		</Wrapper>
	);
});

export default Banner;
