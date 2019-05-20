import React from 'react';

// reusable function which returns styled SVG component
import GeneratreIcon from '../helpers';

// paths
const paths = (fill) => <path fill={ fill } d='M11.2,0c3.1,0,5.8,1.1,8,3.3s3.3,4.8,3.3,7.9c0,1.6-0.4,3.3-1.2,5.4c-0.8,2-1.7,3.9-2.8,5.6c-1.1,1.7-2.2,3.4-3.3,4.9 c-1.1,1.5-2,2.7-2.8,3.6L11.2,32c-0.3-0.3-0.7-0.8-1.2-1.4s-1.4-1.8-2.7-3.5s-2.4-3.4-3.4-5S2,18.6,1.2,16.6S0,12.7,0,11.2 c0-3.1,1.1-5.7,3.3-7.9S8.1,0,11.2,0z M11.2,15.2c1.1,0,2.1-0.4,2.9-1.2s1.2-1.7,1.2-2.8s-0.4-2-1.2-2.8s-1.8-1.2-2.9-1.2 s-2,0.4-2.8,1.2s-1.2,1.7-1.2,2.8s0.4,2,1.2,2.8C9.1,14.8,10.1,15.2,11.2,15.2z' />;

// exported Icon
const Icon = GeneratreIcon({
  paths,
  viewBox: '0 0 22.5 32',
  ratio: 22.5 / 32
});

//
export default Icon;