import React from 'react';
import dot from 'dot-object';
import { ObjectSchema, ValidationError } from 'yup';

// context
import FormContext from '../Context';

// exported
const Form = ({
  initialData = {},
  children,
  schema,
  context = {},
  onSubmit,
  ...rest
}) => {
  const [fields, setFields] = React.useState([]);
  const [touched, setTouched] = React.useState([]);
  const [errors, setErrors] = React.useState({});

  function parseFormData() {
    const data = {};

    fields.forEach(({ name, ref, path, parseValue }) => {
      const value = dot.pick(path, ref);
      data[name] = parseValue ? parseValue(value) : value;
    });

    dot.object(data);
    return data;
  }

  function resetForm() {
    fields.forEach(({ ref, path, clearValue }) => {
      if (clearValue) {
        return clearValue(ref);
      }

      return dot.set(path, '', ref);
    });
  }

  async function handleValidation(callback = null) {
    let data = parseFormData();

    try {
      if (schema) {
        await schema.validate(data, {
          abortEarly: false,
          stripUnknown: true,
          context
        });

        data = schema.cast(data, {
          stripUnknown: true,
          context
        });
      }

      setErrors({});

      if (typeof callback === 'function') {
        callback(data);
      }
    } catch (err) {
      const validationErrors = {};

      if (!err.inner) {
        throw err;
      }

      err.inner.forEach((error) => {
        validationErrors[error.path] = error.message;
      });

      setErrors(validationErrors);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    handleValidation((data) => onSubmit(data, { resetForm }));
  }

  function registerField(field) {
    setFields(state => [...state, field]);
  }

  function unregisterField(name) {
    setFields(state => state.filter(field => field.name !== name));
  }

  return (
    <FormContext.Provider
      value={ {
        initialData,
        errors,
        touched,
        scopePath: '',
        handleValidation,
        registerField,
        unregisterField
      } }
    >
      <form { ...rest } data-testid='form' onSubmit={ handleSubmit }>
        { children }
      </form>
    </FormContext.Provider>
  );
};

export default Form;