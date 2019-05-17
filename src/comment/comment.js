import React from 'react';

// reusable function which returns styled SVG component
import GeneratreIcon from '../helpers';

// paths
const paths = (fill) => <path fill={ fill } d='M28.8,0c0.9,0,1.7,0.3,2.3,0.9C31.7,1.6,32,2.3,32,3.2v19.2c0,0.9-0.3,1.7-0.9,2.3c-0.6,0.6-1.4,0.9-2.3,0.9H6.4L0,32V3.2 C0,2.3,0.3,1.6,0.9,1S2.3,0,3.2,0H28.8z' />;

// exported Icon
const Icon = GeneratreIcon({ paths });

//
export default Icon;