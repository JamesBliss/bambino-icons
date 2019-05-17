import React from 'react';

// reusable function which returns styled SVG component
import GeneratreIcon from '../helpers';

// paths
const paths = (fill) => <path fill={ fill } d='M8,25.6V6.4h3.2v19.2H8z M14.4,32V0h3.2v32H14.4z M1.6,19.2v-6.5h3.2v6.5H1.6z M20.8,25.6V6.4H24v19.2H20.8z M27.2,12.8h3.2 v6.5h-3.2V12.8z' />;

// exported Icon
const Icon = GeneratreIcon({ paths });

//
export default Icon;