import React from 'react';
import { storiesOf } from '@storybook/react';

// components //
import Icon from '../src';
import Grid from '../src/grid';

// story //
storiesOf('Icon', module)

  // decorators
  .addParameters({
    options: { showAddonPanel: false },
    // notes: { markdown: README },
    info: { header: false }
  })

  // stories
  .add('Default', () => (
    <React.Fragment>
      <Icon icon={ Grid } fill='lime' size='2em' />
      <p style={{ fontSize: '2em'}}>{ Grid.svg }</p>
      <svg
        width='2em'
        height='2em'
        xmlns='http://www.w3.org/2000/svg'
        viewBox={ Grid.viewBox }
      >
        <g transform='translate(0, 0)'>
          { Grid.graphic({ fill: 'hotpink' }) }
        </g>
      </svg>
    </React.Fragment>
  ));