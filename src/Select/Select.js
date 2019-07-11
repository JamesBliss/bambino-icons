import React, { SelectHTMLAttributes, useEffect, useRef } from 'react';

import useField from '../useField';


function Select({
  name,
  label,
  placeholder,
  defaultValue,
  options = [],
  ...rest
}) {
  const ref = useRef(null);

  const {
    fieldName,
    registerField,
    handleFieldValidation,
    defaultValue: initialData,
    error
  } = useField(name);

  useEffect(() => {
    if (ref.current) {
      registerField({ name: fieldName, ref: ref.current, path: 'value' });
    }
  }, [ref.current, fieldName]);

  const props = {
    ...rest,
    ref,
    id: fieldName,
    name: fieldName,
    'aria-label': fieldName,
    defaultValue: initialData || defaultValue,
    multiple: false,
    onChange: ({ target }) => handleFieldValidation({ name: target.name, value: target.value }),
    onBlur: ({ target }) => handleFieldValidation({ name: target.name, value: target.value })
  };

  return (
    <>
      { label && <label htmlFor={ fieldName }>{ label }</label> }

      <select
        { ...props }
      >
        <option value={ defaultValue } disabled hidden>
          { placeholder }
        </option>
        { options.map(({ id, title }) => (
          <option key={ id } value={ id }>
            { title }
          </option>
        )) }
      </select>

      { error && <span>{ error }</span> }
    </>
  );
}

export default Select;