import React from 'react';

// reusable function which returns styled SVG component
import GeneratreIcon from '../helpers';

// paths
const paths = (fill) => <path fill={ fill } d='M16,32c-0.9,0-1.6-0.3-2.3-0.9s-0.9-1.4-0.9-2.2h6.4c0,0.9-0.3,1.6-0.9,2.2S16.9,32,16,32z M26.4,22.4l3.2,3.2v1.6H2.4v-1.6 l3.2-3.2v-8.8c0-2.5,0.8-4.6,2.3-6.5s3.4-3.1,5.7-3.6V2.4c0-0.7,0.2-1.3,0.7-1.7C14.7,0.2,15.3,0,16,0s1.2,0.2,1.7,0.7 c0.5,0.5,0.7,1,0.7,1.7v1.1c2.4,0.6,4.3,1.8,5.8,3.6c1.5,1.9,2.3,4,2.3,6.5V22.4z' />;

// exported Icon
const Icon = GeneratreIcon({ paths });

//
export default Icon;