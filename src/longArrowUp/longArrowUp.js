import React from 'react';

/* eslint-disable react/prop-types */
const LongArrowUp = {
  graphic: ({ fill = 'currentColor' }) => (
    <React.Fragment>
      <path fill={ fill } d='M9,32V6.8l-6.4,6.3L0,10.7L10.7,0l10.7,10.7l-2.5,2.5l-6.4-6.3V32H9z' />
    </React.Fragment>
  ),
  svg: (
    <svg width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 21.3 32'>
      <path fill='currentColor' d='M9,32V6.8l-6.4,6.3L0,10.7L10.7,0l10.7,10.7l-2.5,2.5l-6.4-6.3V32H9z' />
    </svg>
  ),
  viewBox: '0 0 21.3 32',
  ratio: 21.3 / 32
};

export default LongArrowUp;