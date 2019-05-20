import React from 'react';

// reusable function which returns styled SVG component
import GeneratreIcon from '../helpers';

// paths
const paths = (fill) => <path fill={ fill } d='M3.8,0l16,16l-16,16L0,28.2L12.3,16L0,3.8L3.8,0z' />;

// exported Icon
const Icon = GeneratreIcon({
  paths,
  viewBox: '0 0 19.8 32',
  ratio: 19.8 / 32
});

//
export default Icon;