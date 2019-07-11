
import React, { useContext } from 'react';

import FormContext from '../Context';

export default function Scope({ path, children }) {
  const { scopePath, ...form } = useContext(FormContext);

  const int = (typeof path === 'number');

  let formattedPath = path;
  if (scopePath) {
    formattedPath = (int ? `[${ path }]` : `.${ path }`);
  }

  return (
    <FormContext.Provider
      value={ {
        ...form,
        scopePath: scopePath.concat(formattedPath)
      } }
    >
      { children }
    </FormContext.Provider>
  );
}