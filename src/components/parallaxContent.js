import React from 'react';
import PropTypes from 'prop-types';
import { Parallax } from 'react-parallax';
import styled from 'styled-components';

const Container = styled.div`
	width: 100%;
	height: ${(props) => props.height}vh;
`;

const ParallaxContent = React.forwardRef((props, ref) => {
	const { contentHeight, backgroundLogo } = props;
	return (
		<Container height={contentHeight} ref={ref} >
			<Parallax
				bgImage={backgroundLogo}
				bgImageAlt="background"
				strength={700}
				bgImageStyle={{ top: '50%', width: '100%' }}
				style={{ height: '400px' }}
			/>
		</Container>
	);
});
ParallaxContent.propTypes = {
	contentHeight: PropTypes.string.isRequired,
	backgroundLogo: PropTypes.string.isRequired
};

export default ParallaxContent;
