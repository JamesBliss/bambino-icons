import React from 'react';
import PropTypes from 'prop-types';

// helper
import useField from '../useField';

// styles
import { Wrapper, Input, Label, Error } from '../Styles';

// exported component
const InputField = ({
  name,
  label,
  isRequired,
  isInline,
  optionalLabel,
  multiline,
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
    <Wrapper isInline={ isInline }>
      { label && (
        <Label isInline={ isInline } htmlFor={ fieldName }>
          { label }
          { !isRequired && (<span>{ optionalLabel }</span>) }
        </Label>
      ) }

      { multiline ? (
        <textarea { ...props } />
      ) : (
        <Input { ...props } />
      ) }

      { error && <Error>{ error }</Error> }
    </Wrapper>
  );
};

InputField.defaultProps = {
  label: null,
  isRequired: true,
  isInline: false,
  optionalLabel: 'optional',
  multiline: false
};

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  optionalLabel: PropTypes.string,
  isRequired: PropTypes.bool,
  label: PropTypes.string,
  isInline: PropTypes.bool,
  multiline: PropTypes.bool
};

export default InputField;