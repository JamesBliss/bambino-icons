import React from 'react';

// reusable function which returns styled SVG component
import GeneratreIcon from '../helpers';

// paths
const paths = (fill) => <path fill={ fill } d='M0,25.3L19.7,5.7l6.7,6.7L6.7,32H0V25.3z M31.5,7.2l-3.2,3.3l-6.7-6.7l3.2-3.2C25.2,0.2,25.6,0,26.1,0s0.9,0.2,1.2,0.5 l4.2,4.2C31.8,5,32,5.4,32,5.9S31.8,6.8,31.5,7.2z' />;

// exported Icon
const Icon = GeneratreIcon({ paths });

//
export default Icon;