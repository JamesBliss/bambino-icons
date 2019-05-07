import React from 'react';

const LongArrowDown = {
  graphic: ({ fill = 'currentColor' }) => (
    <React.Fragment>
      <path fill={ fill } d='M12.4,0v25.2l6.4-6.3l2.6,2.5L10.7,32L0,21.3l2.5-2.5l6.4,6.3V0H12.4z' />
    </React.Fragment>
  ),
  svg: (
    <svg width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 21.3 32'>
      <path fill='currentColor' d='M12.4,0v25.2l6.4-6.3l2.6,2.5L10.7,32L0,21.3l2.5-2.5l6.4,6.3V0H12.4z' />
    </svg>
  ),
  viewBox: '0 0 21.3 32',
  ratio: 21.3 / 32
};

export default LongArrowDown;