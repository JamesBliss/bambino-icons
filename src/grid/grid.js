import React from 'react';


/* eslint-disable react/prop-types */
const Grid = {
  graphic: ({ fill = 'currentColor' }) => (
    <React.Fragment>
      <path fill={ fill } d='M0,8V0h8v8H0z M12,32v-8h8v8H12z M0,32v-8h8v8H0z M0,20v-8h8v8H0z M12,20v-8h8v8H12z M24,0h8v8h-8V0z M12,8V0h8v8H12zM24,20v-8h8v8H24z M24,32v-8h8v8H24z' />
    </React.Fragment>
  ),
  svg: (
    <svg width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'>
      <path fill='currentColor' d='M0,8V0h8v8H0z M12,32v-8h8v8H12z M0,32v-8h8v8H0z M0,20v-8h8v8H0z M12,20v-8h8v8H12z M24,0h8v8h-8V0z M12,8V0h8v8H12zM24,20v-8h8v8H24z M24,32v-8h8v8H24z' />
    </svg>
  ),
  viewBox: '0 0 32 32',
  ratio: 32 / 32
};

export default Grid;