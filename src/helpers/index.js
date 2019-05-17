import React from 'react';

// reusable function which returns styled SVG component
import Icon from '../icon';

const GeneratreIcon = ({ paths, defaultFill = 'currentColor ', viewBox = '0 0 32 32', ratio = 32 / 32 }) => {
  // svg document with prop access
  const graphic = ({ fill = defaultFill }) => (
    <React.Fragment>
      { paths(fill) }
    </React.Fragment>
  );

  // raw svg
  const svg = (
    <svg width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' viewBox={ viewBox }>
      { paths(defaultFill) }
    </svg>
  );

  const IconObject = (props) => {
    return (
      <Icon
        { ...props }
        icon={ {
          graphic,
          svg,
          viewBox,
          ratio
        } }
      />
    );
  };

  IconObject.graphic = graphic;
  IconObject.svg = svg;
  IconObject.viewBox = viewBox;
  IconObject.ratio = ratio;

  return IconObject;
};

export default GeneratreIcon;