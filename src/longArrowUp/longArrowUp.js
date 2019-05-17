import React from 'react';

// reusable function which returns styled SVG component
import GeneratreIcon from '../helpers';

// paths
const paths = (fill) => <path fill={ fill } d='M9,32V6.8l-6.4,6.3L0,10.7L10.7,0l10.7,10.7l-2.5,2.5l-6.4-6.3V32H9z' />;

// exported Icon
const Icon = GeneratreIcon({ paths });

//
export default Icon;