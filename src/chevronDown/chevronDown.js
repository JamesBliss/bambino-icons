import React from 'react';

// reusable function which returns styled SVG component
import GeneratreIcon from '../helpers';

// paths
const paths = (fill) => <path fill={ fill } d='M28.2,0L32,3.8l-16,16L0,3.8L3.8,0L16,12.3L28.2,0z' />;

// exported Icon
const Icon = GeneratreIcon({
  paths,
  viewBox: '0 0 32 19.8',
  ratio: 32 / 19.8
});

//
export default Icon;