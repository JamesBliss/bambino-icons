import React from 'react';

const LongArrowRight = {
  graphic: ({ fill = 'currentColor' }) => (
    <React.Fragment>
      <path fill={ fill } d='M0,9h25.2l-6.3-6.4L21.3,0L32,10.7L21.3,21.3l-2.5-2.5l6.3-6.4H0V9z' />
    </React.Fragment>
  ),
  svg: (
    <svg width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 21.3'>
      <path fill='currentColor' d='M0,9h25.2l-6.3-6.4L21.3,0L32,10.7L21.3,21.3l-2.5-2.5l6.3-6.4H0V9z' />
    </svg>
  ),
  viewBox: '0 0 32 21.3',
  ratio: 32 / 21.3
};

export default LongArrowRight;