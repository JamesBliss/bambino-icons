import { configure, addDecorator, addParameters } from '@storybook/react';

addParameters({
  options: {
    theme: {
      brandTitle: 'bambino-icons',
      brandUrl: 'https://jamesbliss.github.io/bambino-icons'
    },
    hierarchyRootSeparator: /\|/,
  }
})

// automatically import all files ending in *.stories.js
const req = require.context('../.stories', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
