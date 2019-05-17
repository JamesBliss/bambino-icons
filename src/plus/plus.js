import React from 'react';

// reusable function which returns styled SVG component
import GeneratreIcon from '../helpers';

// paths
const paths = (fill) => <path fill={ fill } d='M32,18.2H18.3v13.7h-4.6V18.2H0v-4.5h13.7V0.1h4.6v13.7H32V18.2z' />;

// exported Icon
const Icon = GeneratreIcon({ paths });

//
export default Icon;