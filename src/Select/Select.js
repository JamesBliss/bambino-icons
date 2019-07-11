import React from 'react';
import PropTypes from 'prop-types';

// hook
import useField from '../useField';

// exported component
function Select({
  name,
  label,
  placeholder,
  defaultValue,
  options,
  ...rest
}) {
  const ref = React.useRef(null);

  const {
    fieldName,
    registerField,
    handleFieldValidation,
    defaultValue: initialData,
    error
  } = useField(name);

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
    defaultValue: initialData || defaultValue,
    multiple: false,
    onChange: ({ target }) => handleFieldValidation({ name: target.name, value: target.value }),
    onBlur: ({ target }) => handleFieldValidation({ name: target.name, value: target.value })
  };

  return (
    <>
      { label && <label htmlFor={ fieldName }>{ label }</label> }

      <select { ...props }>
        <option value={ defaultValue } disabled>
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


Select.defaultProps = {
  label: null,
  defaultValue: '',
  placeholder: 'Please select',
  options: []
};

Select.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.string,
  label: PropTypes.string,
  options: PropTypes.array
};

export default Select;