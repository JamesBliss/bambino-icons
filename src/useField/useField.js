import dot from 'dot-object';
import { useContext, useEffect } from 'react';

// context
import FormContext from '../Context';

// exported component
export default function useField(name) {
  const {
    initialData,
    errors,
    scopePath,
    unregisterField,
    registerField,
    handleFieldValidation
  } = useContext(FormContext);

  const fieldName = scopePath ? `${ scopePath }.${ name }` : name;

  useEffect(() => () => unregisterField(fieldName), [fieldName]);

  const defaultValue = dot.pick(fieldName, initialData);
  const error = errors[fieldName];

  return {
    fieldName,
    handleFieldValidation,
    registerField,
    defaultValue,
    error
  };
}