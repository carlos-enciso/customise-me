import React from 'react';
import PropTypes from 'prop-types';
import { Parallax, Background } from 'react-parallax';
import styled from 'styled-components';
import './parallaxBackground.css';

const Container = styled.div`
	width: 100%;
	height: ${(props) => props.height}vh;
`;

const ParallaxBackground = (props) => {
	const { contentHeight } = props;
	return (
		<Parallax strength={500} bgStyle={{ top: '35%', width: '100%' }}>
			<Background className="custom-bg" />
			<Container height={contentHeight} />
		</Parallax>
	);
};
ParallaxBackground.propTypes = {
	contentHeight: PropTypes.string.isRequired,
};

export default ParallaxBackground;
