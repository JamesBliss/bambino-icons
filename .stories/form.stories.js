import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components'
import { array, of, object, string } from 'yup';

// components //
import * as Form from '../src'

const handleSubmit = (fields) => {
  console.log({fields})
}

const schema = object().shape({
  first_name: string().required('First name required'),
  last_name: string().required('Last name required'),
  translations: array().of(object().shape({
    id: string().required('Translation ID required'),
    label: string()
  }))
});

// story //
storiesOf('From', module)

  // decorators
  .addParameters({
    options: { showAddonPanel: false },
    // notes: { markdown: README },
    info: { header: false }
  })

  // stories
  .add('Default', () => (
    <Form.Form schema={schema} onSubmit={ handleSubmit }>
      <Form.Input type='input' name='first_name' />
      <hr />
      <Form.Input type='input' name='last_name' />
      <hr />
      <Form.Scope path='translations'>
        <Form.Scope path='0'>
          <Form.Input type='input' name='id' />
          <Form.Input type='input' name='label' />
        </Form.Scope>
      </Form.Scope>
      <hr />
      <button type="submit">Save</button>
    </Form.Form>
  ))
  .add('No validation', () => (
    <Form.Form onSubmit={ handleSubmit }>
      <Form.Input type='input' name='first_name' />
      <hr />
      <Form.Input type='input' name='last_name' />
      <hr />
      <Form.Scope path='translations'>
        <Form.Scope path='0'>
          <Form.Input type='input' name='id' />
          <Form.Input type='input' name='label' />
        </Form.Scope>
      </Form.Scope>
      <hr />
      <button type="submit">Save</button>
    </Form.Form>
  ))
  .add('Disabled submit', () => (
    <Form.Form schema={schema} onSubmit={ handleSubmit }>
      <Form.Input type='input' name='first_name' />
      <hr />
      <Form.Input type='input' name='last_name' />
      <hr />
      <Form.Scope path='translations'>
        <Form.Scope path='0'>
          <Form.Input type='input' name='id' />
          <Form.Input type='input' name='label' />
        </Form.Scope>
      </Form.Scope>
      <hr />
      <Form.Context.Consumer>
        {({errors}) => {
          return (
            <button disabled={ Object.keys(errors).length } type="submit">Save</button>
          )
        }}
      </Form.Context.Consumer>
    </Form.Form>
  ));