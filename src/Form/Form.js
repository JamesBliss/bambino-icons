import React from 'react';
import dot from 'dot-object';
import { reach } from 'yup';
import FormContext from '../Context';

// context


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

  async function handleFieldValidation({ name, value }) {
    try {
      if (schema) {
        await reach(await reach(schema, name).validate(value));
      }
      const { [name]: remove, ...remaining } = errors;
      setErrors(remaining);
    } catch (err) {
      const validationErrors = { ...errors };

      if (err.message) {
        validationErrors[name] = err.message;
      }

      setErrors(validationErrors);
    }
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

      console.log('no error', data);

      setErrors({});

      if (typeof callback === 'function') {
        callback(data);
      }
    } catch (err) {
      console.log('error', err);
      const validationErrors = {};

      if (!err.inner) {
        throw err;
      }

      err.inner.forEach((error) => {
        validationErrors[error.path] = error.message;
      });

      console.log(validationErrors);

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
        scopePath: '',
        schema,
        handleFieldValidation,
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