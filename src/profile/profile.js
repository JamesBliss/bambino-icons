import React from 'react';

// reusable function which returns styled SVG component
import GeneratreIcon from '../helpers';

// paths
const paths = (fill) => <path fill={ fill } d='M16,16c-2.2,0-4.1-0.8-5.7-2.3S8,10.2,8,8s0.8-4.1,2.3-5.7S13.8,0,16,0s4.1,0.8,5.7,2.3C23.2,3.9,24,5.8,24,8 s-0.8,4.1-2.3,5.7C20.1,15.2,18.2,16,16,16z M16,20c2,0,4.1,0.3,6.5,0.8s4.5,1.5,6.5,2.8S32,26.4,32,28v4H0v-4c0-1.6,1-3.1,2.9-4.4 s4.1-2.2,6.5-2.8S14,20,16,20z' />;

// exported Icon
const Icon = GeneratreIcon({ paths });

//
export default Icon;