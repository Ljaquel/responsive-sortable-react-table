import React from 'react';
import PT from 'prop-types';

const Tr = ({ className = '', children }) => {
  return (
    <tr className={className}>
      {children}
    </tr>
  )
};

Tr.propTypes = {
  className: PT.string,
};

export default Tr;