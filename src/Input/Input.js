import React from 'react';

// helper
import useField from '../useField';

// exported component
const Input = ({
  name,
  label,
  multiline = false,
  ...rest
}) => {
  const ref = React.useRef(null);
  const { fieldName, handleFieldValidation, registerField, defaultValue, error } = useField(name);

  React.useEffect(() => {
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
    defaultValue,
    onChange: ({ target }) => handleFieldValidation({ name: target.name, value: target.value }),
    onBlur: ({ target }) => handleFieldValidation({ name: target.name, value: target.value })
  };

  return (
    <>
      { label && <label htmlFor={ fieldName }>{ label }</label> }

      { multiline ? (
        <textarea { ...props } />
      ) : (
        <input { ...props } />
      ) }

      { error && <span>{ error }</span> }
    </>
  );
};

export default Input;