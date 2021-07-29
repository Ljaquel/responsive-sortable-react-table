import React from 'react';
import PT from 'prop-types';
import sortD from '../icons/sortDown.svg';
import sortU from '../icons/sortUp.svg';

const Th = ({ children, sortKey, sort, handleSort, sortable }) => {
  return (
    <th className={`${sortKey} ${sortKey === sort.key ? 'sorted or current or selected' : ''}`} onClick={() => handleSort(sortKey)}>
      {children}
      {sortable && 
        <img src={sort.dir===1?sortU:sortD} width="9" alt="sort" style={{filter:"invert(1)"}} />
      }
    </th>
  )
};

Th.propTypes = {
  sort: PT.object,
  sortKey: PT.string,
  handleSort: PT.func,
  sortable: PT.bool
};

export default Th;