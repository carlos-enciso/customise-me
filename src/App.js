import React from 'react';
import styled from 'styled-components';
import GlobalBodyStyle from './styles/globalStyles';
import { Banner, FlatContent, ParallaxBackground, ParallaxContent } from './components';

const backgroundLogo = require('./assets/background1.jpg');

const wrapper = React.createRef();
const bannerContent = React.createRef();
const flatContent = React.createRef();
const parallaxContent = React.createRef();

const Wrapper = styled.div`
	height: 100vh;
	width: 100vw;
`;

function App() {
	return (
		<div>
			<GlobalBodyStyle />
			<Wrapper ref={wrapper}>
				<div className="section">
					<Banner ref={bannerContent} />
				</div>
				<div className="section">
					<FlatContent ref={flatContent} height="100" />
				</div>
				<div ref={parallaxContent} className="section">
					<ParallaxContent contentHeight="100" backgroundLogo={backgroundLogo} />
					<ParallaxBackground contentHeight="100" />
				</div>
			</Wrapper>
		</div>
	);
}

export default App;
