import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Parallax, Background } from 'react-parallax';
import './banner.css';

const customiseMeLogo = require('../assets/customizeme_final_color.png');

const Wrapper = styled.div`
	height: 100vh;
	width: 100vw;
	-ms-overflow-style: none;
`;

const Logo = styled.img`
	height: 300px;
	width: 300px;
	background: transparent;
	padding: 20px;
	position: absolute;
	top: 65%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 1000;
`;

const Banner = React.forwardRef((props, ref) => {
	const { onWheel } = props;
	return (
		<Wrapper ref={ref} onWheel={onWheel}>
			<Parallax
				strength={100}
				style={{ height: '100vh', width: '100vw' }}
				bgStyle={{ height: '104%', width: '100vw' }}
				renderLayer={(percentage) => (
					<div
						style={{
							position: 'absolute',
							background: `white`,
							left: '50%',
							top: '65%',
							borderRadius: '50%',
							transform: 'translate(-50%,-50%)',
							width: 400 - percentage * 50,
							height: 400 - percentage * 50,
							zIndex: 99,
						}}
					/>
				)}
			>
				<Background className="banner-bg" />
				<div style={{ height: '100vh' }}>
					<Logo src={customiseMeLogo} />
				</div>
			</Parallax>
		</Wrapper>
	);
});
Banner.propTypes = {
	onWheel: PropTypes.func.isRequired,
};

export default Banner;
