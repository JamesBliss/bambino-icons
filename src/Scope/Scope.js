
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import FormContext from '../Context';

const Scope = ({ path, children }) => {
  const { scopePath, ...form } = useContext(FormContext);

  // default to pure path
  let formattedPath = path;
  if (scopePath) {
    // if number it should key differently to align with yup scheme.
    formattedPath = (typeof path === 'number' ? `[${ path }]` : `.${ path }`);
  }

  // return new provider scroped to the new path
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
};

Scope.propTypes = {
  path: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]).isRequired,
  children: PropTypes.any.isRequired
};

export default Scope;