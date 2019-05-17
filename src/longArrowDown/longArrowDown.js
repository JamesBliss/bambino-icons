import React from 'react';

// reusable function which returns styled SVG component
import GeneratreIcon from '../helpers';

// paths
const paths = (fill) => <path fill={ fill } d='M12.4,0v25.2l6.4-6.3l2.6,2.5L10.7,32L0,21.3l2.5-2.5l6.4,6.3V0H12.4z' />;

// exported Icon
const Icon = GeneratreIcon({ paths });

//
export default Icon;