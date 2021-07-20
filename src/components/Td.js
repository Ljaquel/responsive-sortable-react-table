import React from 'react';
import PT from 'prop-types';

const Td = ({ className = '', children }) => {
  return (
    <td className={className}>
      {children}
    </td>
  )
};

Td.propTypes = {
  className: PT.string,
};

export default Td;