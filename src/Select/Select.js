import React from 'react';
import PropTypes from 'prop-types';

// hook
import useField from '../useField';

// styles
import { Wrapper, Select, Label, Error } from '../Styles';

// exported component
function SelectField({
  name,
  label,
  placeholder,
  defaultValue,
  options,
  isRequired,
  optionalLabel,
  isInline,
  size,
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
    <Wrapper size={ size } isInline={ isInline }>
      { label && (
        <Label isInline={ isInline } htmlFor={ fieldName }>
          { label }
          { !isRequired && (<span> — { optionalLabel }</span>) }
        </Label>
      ) }

      <Select { ...props }>
        <option value={ defaultValue } disabled>
          { placeholder }
        </option>
        { options.map(({ id, title }) => (
          <option key={ id } value={ id }>
            { title }
          </option>
        )) }
      </Select>

      { error && <Error>{ error }</Error> }
    </Wrapper>
  );
}


SelectField.defaultProps = {
  label: null,
  defaultValue: '',
  placeholder: 'Please select',
  options: [],
  isRequired: true,
  optionalLabel: 'optional',
  size: '14px',
  isInline: false
};

SelectField.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.string,
  label: PropTypes.string,
  options: PropTypes.array,
  optionalLabel: PropTypes.string,
  isRequired: PropTypes.bool,
  size: PropTypes.string,
  isInline: PropTypes.bool
};

export default SelectField;