import React from 'react';

// reusable function which returns styled SVG component
import GeneratreIcon from '../helpers';

// paths
const paths = (fill) => <path fill={ fill } d='M3.2,0h12.8l9.6,9.6v19.3c0,0.9-0.3,1.6-0.9,2.2S23.4,32,22.6,32H3.1c-0.9,0-1.6-0.3-2.2-0.9S0,29.7,0,28.9V3.2 C0,2.3,0.3,1.6,0.9,1S2.3,0,3.2,0z M14.4,11.2h8.8l-8.8-8.8C14.4,2.4,14.4,11.2,14.4,11.2z' />;

// exported Icon
const Icon = GeneratreIcon({
  paths,
  viewBox: '0 0 25.7 32',
  ratio: 25.7 / 32
});

//
export default Icon;