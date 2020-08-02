import React from 'react';
import styled from 'styled-components';
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

function App() {
	return (
		<div>
			<GlobalBodyStyle />
			<Wrapper>
				<div id="header" style={{ position: 'fixed', top: 0, left: 0 }}>
					<NavBar />
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
}

export default App;
