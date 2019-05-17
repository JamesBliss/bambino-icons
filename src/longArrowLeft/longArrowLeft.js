import React from 'react';

// reusable function which returns styled SVG component
import GeneratreIcon from '../helpers';

// paths
const paths = (fill) => <path fill={ fill } d='M32,9v3.5H6.8l6.3,6.4l-2.5,2.5L0,10.7L10.7,0l2.5,2.5L6.8,8.9H32V9z' />;

// exported Icon
const Icon = GeneratreIcon({ paths });

//
export default Icon;