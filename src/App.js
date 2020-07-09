import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
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
	const [isScrollable, setIsScrollable] = useState(false);

	useEffect(() => {
		if (isScrollable) {
			enableBodyScroll(wrapper);
		} else {
			disableBodyScroll(wrapper);
		}
	}, [isScrollable]);

	function scrollFromBanner(event) {
		console.log('scrollToNext');
		if (event.deltaY > 0) {
			flatContent.current.scrollIntoView({
				behavior: 'smooth',
				block: 'end',
				inline: 'nearest',
			});
		}
	}
	function scrollFromUs(event) {
		console.log('scrollToPrev');
		if (event.deltaY < 0) {
			setIsScrollable(false);
			bannerContent.current.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
				inline: 'nearest',
			});
		} else {
			setIsScrollable(true);
			parallaxContent.current.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
				inline: 'nearest',
			});
		}
	}

	function scrollFromParallax(event) {
		console.log('scrollToPrev');
		if (event.deltaY < 0) {
			flatContent.current.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
				inline: 'nearest',
			});
		}
	}

	return (
		<div>
			<GlobalBodyStyle />
			<Wrapper ref={wrapper}>
				<Banner ref={bannerContent} onWheel={scrollFromBanner} />
				<FlatContent ref={flatContent} onWheel={scrollFromUs} height="100" />
				<div ref={parallaxContent} onWheel={scrollFromParallax}>
					<ParallaxContent contentHeight="100" backgroundLogo={backgroundLogo} />
					<ParallaxBackground contentHeight="100" />
				</div>
			</Wrapper>
		</div>
	);
}

export default App;
