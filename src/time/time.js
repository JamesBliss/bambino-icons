import React from 'react';

// reusable function which returns styled SVG component
import GeneratreIcon from '../helpers';

// paths
const paths = (fill) => <path fill={ fill } d='M16,0c4.4,0,8.2,1.6,11.3,4.7S32,11.6,32,16s-1.6,8.2-4.7,11.3S20.4,32,16,32s-8.2-1.6-11.3-4.7S0,20.4,0,16 S1.6,7.8,4.7,4.7S11.6,0,16,0z M16,28.8c3.5,0,6.5-1.2,9-3.7s3.7-5.5,3.7-9.1S27.5,9.4,25,6.9s-5.5-3.7-9-3.7S9.5,4.4,7,6.9 S3.2,12.5,3.2,16s1.2,6.6,3.7,9.1S12.5,28.8,16,28.8z M16.8,8v8.4l7.2,4.3l-1.2,2l-8.4-5.1V8H16.8z' />;

// exported Icon
const Icon = GeneratreIcon({ paths });

//
export default Icon;