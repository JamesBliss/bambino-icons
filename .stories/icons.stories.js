import React from 'react';
import { storiesOf } from '@storybook/react';

// components //
import Icon from '../src';

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
      <Icon />
    </React.Fragment>
  ));