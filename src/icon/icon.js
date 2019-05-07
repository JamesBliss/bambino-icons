import React from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';

const SVG = ({ icon, styles, title, className, fill, size, xSize, ySize, srHidden }) => {
  if (typeof icon === 'object') {
    const { graphic, viewBox, ratio } = icon;

    const id = title !== null ? title.replace(/[^\w\s]/gi, '').replace(/\s/g, '-') : null;
    let width = xSize || size;
    let height = ySize || size;

    if (ySize && !xSize) {
      width = parseInt(height, 10) * ratio;
    }

    if (xSize && !ySize) {
      height = parseInt(width, 10) / ratio;
    }

    return (
      <svg
        style={ styles }
        className={ className }
        width={ width }
        height={ height }
        xmlns='http://www.w3.org/2000/svg'
        viewBox={ viewBox }
        { ...id !== null ? { 'aria-labelledby': id } : { 'aria-hidden': srHidden } }
      >
        { id !== null && <title id={ id }>{ title }</title> }
        <g transform='translate(0, 0)'>
          { graphic({ fill }) }
        </g>
      </svg>
    );
  }
  return null;
};

SVG.defaultProps = {
  fill: 'currentColor',
  size: '16px',
  className: '',
  ySize: null,
  xSize: null,
  styles: {},
  title: null,
  srHidden: true
};

SVG.propTypes = {
  icon: PropTypes.object.isRequired,
  fill: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  className: PropTypes.string,
  size: PropTypes.string,
  ySize: PropTypes.string,
  xSize: PropTypes.string,
  styles: PropTypes.object,
  title: PropTypes.string,
  srHidden: PropTypes.bool
};

const Icon = styled(SVG)`
  pointer-events: none;
`;

export default Icon;