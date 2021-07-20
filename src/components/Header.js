import React from 'react';
import PT from 'prop-types';
import { Tr, Th } from './index';

const Header = ({ headers, headerClass = '', sort, handleSort }) => {
  const headerContent = Object.keys(headers).map((key, index) =>
    <Th key={index} sortKey={key} sort={sort} handleSort={handleSort}>
      {headers[key]}
    </Th>
  )

  return (
    <thead className={headerClass}>
      <Tr>   
        {headerContent}
      </Tr>
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