
import React, { useContext } from 'react';

import FormContext from '../Context';

export default function Scope({ path, children }) {
  const { scopePath, ...form } = useContext(FormContext);

  return (
    <FormContext.Provider
      value={ {
        ...form,
        scopePath: scopePath.concat(scopePath ? `.${ path }` : path)
      } }
    >
      { children }
    </FormContext.Provider>
  );
}