import React from 'react';

// reusable function which returns styled SVG component
import GeneratreIcon from '../helpers';

// paths
const paths = (fill) => <path fill={ fill } d='M16,0c4.4,0,8.2,1.6,11.3,4.7S32,11.6,32,16s-1.6,8.1-4.7,11.3S20.4,32,16,32s-8.2-1.6-11.3-4.7S0,20.4,0,16 S1.6,7.9,4.7,4.7S11.6,0,16,0z M12.8,23.1l9.6-7.1l-9.6-7.1V23.1z' />;

// exported Icon
const Icon = GeneratreIcon({ paths });

//
export default Icon;