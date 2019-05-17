import React from 'react';

// reusable function which returns styled SVG component
import GeneratreIcon from '../helpers';

// paths
const paths = (fill) => <path fill={ fill } d='M20,26V30H0V26H20z M32,10v4H0v-4H32z M0,22v-4h32v4H0z M0,2h32V6H0V2z' />;

// exported Icon
const Icon = GeneratreIcon({ paths });

//
export default Icon;