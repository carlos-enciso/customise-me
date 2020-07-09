import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
	width: 100%;
	height: ${(props) => props.height}vh;
	background-color: red;
`;

const FlatContent = React.forwardRef((props, ref) => {
	const { height, onWheel } = props;
	return (
		<Container ref={ref} onWheel={onWheel} height={height}>
			I&apos;m in the flat content
		</Container>
	);
});
FlatContent.propTypes = {
	height: PropTypes.string.isRequired,
	onWheel: PropTypes.func.isRequired,
};

export default FlatContent;
