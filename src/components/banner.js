import React from 'react';
import { Parallax, Background } from 'react-parallax';
import styled from 'styled-components';
import './banner.css';

const customiseMeLogo = require('../assets/customizeme_final_color.png');

const Logo = styled.img`
  height: 100px;
  width: 100px;
  background: transparent;
  padding: 20px;
  position: absolute;
  top: 65%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
`;

function Banner() {
  return (
    <div>
      <Parallax
        strength={700}
        bgStyle={{ top: '50%', width: '100%', height: '100%' }}
        renderLayer={(percentage) => (
          <div
            style={{
              position: 'absolute',
              background: `white`,
              left: '50%',
              top: '65%',
              borderRadius: '50%',
              transform: 'translate(-50%,-50%)',
              width: percentage * 270,
              height: percentage * 270,
              zIndex: 99,
            }}
          />
        )}
      >
        <Background className="banner-bg" />
        <div style={{ height: '400px' }}>
          <Logo src={customiseMeLogo} />
        </div>
      </Parallax>
    </div>
  );
}

export default Banner;
