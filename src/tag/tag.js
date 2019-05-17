import React from 'react';

// reusable function which returns styled SVG component
import GeneratreIcon from '../helpers';

// paths
const paths = (fill) => <path fill={ fill } d='M29.3,0c0.8,0,1.4,0.3,1.9,0.8S32,1.9,32,2.7v18.6c0,0.8-0.3,1.4-0.8,1.9S30.1,24,29.3,24h-20c-0.9,0-1.6-0.4-2.1-1.2L0,12 L7.2,1.2C7.7,0.4,8.4,0,9.3,0H29.3z' />;

// exported Icon
const Icon = GeneratreIcon({
  paths,
  viewBox: '0 0 32 24',
  ratio: 32 / 24
});

//
export default Icon;