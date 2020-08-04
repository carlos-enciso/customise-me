import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import GlobalBodyStyle from './styles/globalStyles';
import { Banner, FlatContent, Footer, ScrollableContent, NavBar } from './components';

const Wrapper = styled.div`
	height: 100vh;
	width: 100vw;
`;

const Separator = styled.div`
	top: 0px;
	height: 80px;
	width: 100vw;
	background: linear-gradient(134deg, #005bea, #00c6fb);
`;

const App = React.forwardRef((props, ref) => {
	const { expandedNav } = props;
	return (
		<div>
			<GlobalBodyStyle />
			<Wrapper>
				<div id="header" style={{ position: 'fixed', top: 0, left: 0 }}>
					<NavBar expandedNav={expandedNav} />
				</div>
				<div className="section">
					<Banner />
				</div>
				<div className="section">
					<Separator />
					<FlatContent />
				</div>
				<div className="section">
					<Separator />
					<ScrollableContent />
					<Footer />
				</div>
			</Wrapper>
		</div>
	);
});
App.propTypes = {
	expandedNav: PropTypes.bool.isRequired,
};

export default App;
