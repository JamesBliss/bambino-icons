import { createContext } from 'react';

export default createContext({
  initialData: {},
  errors: {},
  scopePath: '',
  registerField: () => {},
  unregisterField: () => {}
});