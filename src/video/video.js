import React from 'react';

// reusable function which returns styled SVG component
import GeneratreIcon from '../helpers';

// paths
const paths = (fill) => <path fill={ fill } d='M0,0l25.3,16L0,32V0z' />;

// exported Icon
const Icon = GeneratreIcon({
  paths,
  viewBox: '0 0 25.3 32',
  ratio: 25.3 / 32
});

//
export default Icon;