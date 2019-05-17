import React from 'react';

// reusable function which returns styled SVG component
import GeneratreIcon from '../helpers';

// paths
const paths = (fill) => <path fill={ fill } d='M0,9h25.2l-6.3-6.4L21.3,0L32,10.7L21.3,21.3l-2.5-2.5l6.3-6.4H0V9z' />;

// exported Icon
const Icon = GeneratreIcon({ paths });

//
export default Icon;