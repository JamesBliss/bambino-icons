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
  first_name: string().required('First name is required'),
  last_name: string(),
  details: object().shape({
    language: string().required('Language is required')
  }),
  translations: array().of(object().shape({
    id: string().required('Translation ID is required'),
    label: string()
  }))
});

// story //
storiesOf('Form', module)

  // decorators
  .addParameters({
    options: { showAddonPanel: false },
    // notes: { markdown: README },
    info: { header: false }
  })

  // stories
  .add('Default', () => {
    const FormWrapper = () => {
      const [fields, setFields] = React.useState({});

      return (
        <Form.Form
          schema={schema}
          onSubmit={(data) => setFields(data)}
        >
          <Form.Input
            label='First Name'
            placeholder='Enter first name'
            type='input'
            name='first_name'
          />
          <hr />
          <Form.Input
            isRequired={ false }
            label='Last Name'
            placeholder='Enter last name'
            type='input'
            name='last_name'
          />
          <hr />
          <Form.Scope path='details'>
            <Form.Select
              label='language'
              name="language"
              placeholder="Please select..."
              options={[
                { id: "en", title: "English" },
                { id: "it", title: "Italian" }
              ]}
            />
          </Form.Scope>
          <hr />
          <Form.Scope path='translations'>
            <Form.Scope path={ 0 }>
              <Form.Input
                label='Translation ID'
                placeholder='Enter translataion ID'
                type='input'
                name='id'
              />
              <Form.Input
                isRequired={ false }
                label='Translation Label'
                placeholder='Enter translataion label'
                type='input'
                name='label'
              />
            </Form.Scope>
          </Form.Scope>
          <hr />
          <button type="submit">Save</button>
          <pre>{ JSON.stringify(fields, null, 2) }</pre>
        </Form.Form>
      )
    }
    return <FormWrapper />;
  })
  .add('No validation', () => {
    const FormWrapper = () => {
      const [fields, setFields] = React.useState({});

      return (
        <Form.Form
          onSubmit={(data) => setFields(data)}
        >
          <Form.Input
            label='First Name'
            placeholder='Enter first name'
            type='input'
            name='first_name'
          />
          <hr />
          <Form.Input
            isRequired={ false }
            label='Last Name'
            placeholder='Enter last name'
            type='input'
            name='last_name'
          />
          <hr />
          <Form.Scope path='details'>
            <Form.Select
              label='language'
              name="language"
              placeholder="Please select..."
              options={[
                { id: "en", title: "English" },
                { id: "it", title: "Italian" }
              ]}
            />
          </Form.Scope>
          <hr />
          <Form.Scope path='translations'>
            <Form.Scope path={ 0 }>
              <Form.Input
                label='Translation ID'
                placeholder='Enter translataion ID'
                type='input'
                name='id'
              />
              <Form.Input
                isRequired={ false }
                label='Translation Label'
                placeholder='Enter translataion label'
                type='input'
                name='label'
              />
            </Form.Scope>
          </Form.Scope>
          <hr />
          <button type="submit">Save</button>
          <pre>{ JSON.stringify(fields, null, 2) }</pre>
        </Form.Form>
      )
    }
    return <FormWrapper />;
  })
  .add('Disabled submit', () => {
    const FormWrapper = () => {
      const [fields, setFields] = React.useState({});

      return (
        <Form.Form
          schema={schema}
          onSubmit={(data) => setFields(data)}
        >
          <Form.Input
            label='First Name'
            placeholder='Enter first name'
            type='input'
            name='first_name'
          />
          <hr />
          <Form.Input
            isRequired={ false }
            label='Last Name'
            placeholder='Enter last name'
            type='input'
            name='last_name'
          />
          <hr />
          <Form.Scope path='details'>
            <Form.Select
              label='language'
              name="language"
              placeholder="Please select..."
              options={[
                { id: "en", title: "English" },
                { id: "it", title: "Italian" }
              ]}
            />
          </Form.Scope>
          <hr />
          <Form.Scope path='translations'>
            <Form.Scope path={ 0 }>
              <Form.Input
                label='Translation ID'
                placeholder='Enter translataion ID'
                type='input'
                name='id'
              />
              <Form.Input
                isRequired={ false }
                label='Translation Label'
                placeholder='Enter translataion label'
                type='input'
                name='label'
              />
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
          <pre>{ JSON.stringify(fields, null, 2) }</pre>
        </Form.Form>
      )
    }
    return <FormWrapper />;
  })
  .add('Inline elements', () => {
    const FormWrapper = () => {
      const [fields, setFields] = React.useState({});

      return (
        <Form.Form
          schema={schema}
          onSubmit={(data) => setFields(data)}
        >
          <Form.Input
            isInline
            label='First Name'
            placeholder='Enter first name'
            type='input'
            name='first_name'
          />
          <hr />
          <Form.Input
            isInline
            isRequired={ false }
            label='Last Name'
            placeholder='Enter last name'
            type='input'
            name='last_name'
          />
          <hr />
          <Form.Scope path='details'>
            <Form.Select
              isInline
              label='Language'
              name="language"
              placeholder="Please select..."
              options={[
                { id: "en", title: "English" },
                { id: "it", title: "Italian" }
              ]}
            />
          </Form.Scope>
          <hr />
          <Form.Scope path='translations'>
            <Form.Scope path={ 0 }>
              <Form.Input
                isInline
                label='Translation ID'
                placeholder='Enter translataion ID'
                type='input'
                name='id'
              />
              <Form.Input
                isInline
                isRequired={ false }
                label='Translation Label'
                placeholder='Enter translataion label'
                type='input'
                name='label'
              />
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
          <pre>{ JSON.stringify(fields, null, 2) }</pre>
        </Form.Form>
      )
    }
    return <FormWrapper />;
  });