import React from 'react';
import PT from 'prop-types';
import { Th } from './index';

const Header = ({ headers, headerClass = '', sort, handleSort, onSort:sortable }) => {
  const headerContent = Object.keys(headers).map((key, index) =>
    <Th key={index} sortKey={key} sort={sort} handleSort={handleSort} sortable={sortable?true:false}>
      {headers[key]}
    </Th>
  )

  return (
    <thead className={headerClass}>
      <tr>   
        {headerContent}
      </tr>
    </thead>
  );
}

Header.propTypes = {
  headers: PT.object.isRequired,
  headerClass: PT.string,
  sort: PT.object,
  handleSort: PT.func,
};

export default Header;