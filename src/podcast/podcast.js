import React from 'react';

// reusable function which returns styled SVG component
import GeneratreIcon from '../helpers';

// paths
const paths = (fill) => <path fill={ fill } d='M12,20.2c-1.4,0-2.6-0.5-3.6-1.5s-1.5-2.2-1.5-3.6v-10c0-1.4,0.5-2.6,1.5-3.6S10.6,0,12,0s2.6,0.5,3.6,1.5S17,3.6,17,5.1 v10.1c0,1.4-0.5,2.6-1.5,3.6S13.4,20.2,12,20.2z M20.9,15.2h2.9c0,2.8-1,5.3-3,7.5s-4.4,3.4-7.2,3.8V32h-3.4v-5.5 C7.4,26.1,5,24.8,3,22.6S0,18,0,15.2h3c0,2.4,0.9,4.5,2.7,6.1s3.9,2.4,6.3,2.4s4.5-0.8,6.2-2.4C20,19.6,20.9,17.6,20.9,15.2z' />;

// exported Icon
const Icon = GeneratreIcon({
  paths,
  viewBox: '0 0 23.8 32',
  ratio: 23.8 / 32
});

//
export default Icon;