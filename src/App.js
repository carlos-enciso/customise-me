import React from 'react';
import { Parallax } from 'react-parallax';
import { Banner, FlatContent, ParallaxBackground } from './components';

const backgroundLogo = require('./assets/background1.jpg');

function App() {
  return (
    <div>
      <Banner />
      <FlatContent height="800" />
      <Parallax
        bgImage={backgroundLogo}
        bgImageAlt="background"
        strength={700}
        bgImageStyle={{ top: '50%', width: '100%' }}
        style={{ height: '400px', 'background-color': 'red' }}
      />
      <ParallaxBackground contentHeight="800" />
    </div>
  );
}

export default App;
