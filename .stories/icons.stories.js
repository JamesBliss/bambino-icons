import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components'

// components //
import Grid from '../src/grid';
import * as icon from '../src'

const FancyGrid = styled(Grid)`
  border: 1px solid red;
`;

const Container = styled('div')`
  display: grid;
  grid-gap: 40px;
  padding: 20px;

  @media(min-width: 640px) {
    grid-template-columns: 1fr 1fr;
  }

  @media(min-width: 880px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const Box = styled.div`
  padding: 40px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  justify-items: center;

  font-family: sans-serif;
  border: 5px solid #eff0f1;

  span {
    display: block;
    padding-top: 15px;
  }

  strong {
    display: block;
    background-color: #eff0f1;
    padding: 5px 10px 7px;
  }
`;

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
      <h1>Standard implementation</h1>
      <Grid fill='lime' size='2em' />

      <h1>Standard implementation with styled components extending</h1>
      <FancyGrid fill='lime' size='2em' />

      <h1>Using static .svg property from icon</h1>
      <p style={{ fontSize: '2em' }}>{ Grid.svg }</p>

      <h1>Using static .viewBox and graphic function properties from icon</h1>
      <svg width='2em' height='2em' viewBox={ Grid.viewBox }>
        { Grid.graphic({ fill: 'hotpink' }) }
      </svg>
    </React.Fragment>
  ))
  .add('All', () => {
    return (
      <Container>
        { Object.keys(icon).map((key) => {
          const Item = icon[key];
          console.log(key)
          return (
            <Box>
              <Item />
              <span><strong>{ key }</strong></span>
            </Box>
          )
        }) }
      </Container>
    )
  });