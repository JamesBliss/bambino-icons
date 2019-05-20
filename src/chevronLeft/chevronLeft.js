import React from 'react';

// reusable function which returns styled SVG component
import GeneratreIcon from '../helpers';

// paths
const paths = (fill) => <path fill={ fill } d='M19.8,3.8L7.5,16l12.2,12.2L16,32L0,16L16,0L19.8,3.8z' />;

// exported Icon
const Icon = GeneratreIcon({
  paths,
  viewBox: '0 0 19.8 32',
  ratio: 19.8 / 32
});

//
export default Icon;