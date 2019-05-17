import React from 'react';

// reusable function which returns styled SVG component
import GeneratreIcon from '../helpers';

// paths
const paths = (fill) => <path fill={ fill } d='M0,8V0h8v8H0z M12,32v-8h8v8H12z M0,32v-8h8v8H0z M0,20v-8h8v8H0z M12,20v-8h8v8H12z M24,0h8v8h-8V0z M12,8V0h8v8H12zM24,20v-8h8v8H24z M24,32v-8h8v8H24z' />;

// exported Icon
const Icon = GeneratreIcon({ paths });

//
export default Icon;