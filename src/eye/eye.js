import React from 'react';

// reusable function which returns styled SVG component
import GeneratreIcon from '../helpers';

// paths
const paths = (fill) => <path fill={ fill } d='M16.1,0.1c3.6,0,6.8,1,9.7,3s5,4.7,6.2,7.9c-1.3,3.2-3.4,5.9-6.2,7.9s-6.1,3-9.7,3s-6.8-1-9.8-3S1.3,14.2,0,11 c1.3-3.2,3.4-5.9,6.3-7.9S12.4,0.1,16.1,0.1z M16.1,18.3c2,0,3.7-0.7,5.1-2.1s2.1-3.1,2.1-5.2s-0.7-3.7-2.1-5.2s-3.1-2.1-5.1-2.1 s-3.7,0.7-5.2,2.1S8.7,9,8.7,11s0.7,3.7,2.1,5.2C12.3,17.6,14,18.3,16.1,18.3z M16.1,6.6c1.2,0,2.2,0.4,3.1,1.3 c0.9,0.8,1.3,1.9,1.3,3.1s-0.4,2.3-1.3,3.1c-0.9,0.8-1.9,1.3-3.1,1.3s-2.2-0.4-3.1-1.3c-0.8-0.8-1.3-1.9-1.3-3.1s0.4-2.3,1.3-3.1 C13.8,7.1,14.8,6.6,16.1,6.6z' />;

// exported Icon
const Icon = GeneratreIcon({
  paths,
  viewBox: '0 0 32 22',
  ratio: 32 / 22
});

//
export default Icon;