import React from 'react';

const LongArrowLeft = {
  graphic: ({ fill = 'currentColor' }) => (
    <React.Fragment>
      <path fill={ fill } d='M32,9v3.5H6.8l6.3,6.4l-2.5,2.5L0,10.7L10.7,0l2.5,2.5L6.8,8.9H32V9z' />
    </React.Fragment>
  ),
  svg: (
    <svg width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 21.3'>
      <path fill='currentColor' d='M32,9v3.5H6.8l6.3,6.4l-2.5,2.5L0,10.7L10.7,0l2.5,2.5L6.8,8.9H32V9z' />
    </svg>
  ),
  viewBox: '0 0 32 21.3',
  ratio: 32 / 21.3
};

export default LongArrowLeft;