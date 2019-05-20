import React from 'react';

// reusable function which returns styled SVG component
import GeneratreIcon from '../helpers';

// paths
const paths = (fill) => <path fill={ fill } d='M16,0l16,16l-3.8,3.8L16,7.5L3.8,19.8L0,16L16,0z' />;

// exported Icon
const Icon = GeneratreIcon({
  paths,
  viewBox: '0 0 32 19.8',
  ratio: 32 / 19.8
});

//
export default Icon;