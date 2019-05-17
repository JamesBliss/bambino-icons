import React from 'react';

// reusable function which returns styled SVG component
import GeneratreIcon from '../helpers';

// paths
const paths = (fill) => <path fill={ fill } d='M32,4.5H0V0h32V4.5z' />;

// exported Icon
const Icon = GeneratreIcon({
  paths,
  viewBox: '0 0 32 4.5',
  ratio: 32 / 4.5
});

//
export default Icon;