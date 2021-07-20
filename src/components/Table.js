import React, { useState } from 'react';
import PT from 'prop-types';
import { Header, Body, Mobile, Pagination } from './index';
import useWindowSize from '../utils/resizeEvent';

const Table = (props) => {
  const { headers, className = '', breakpoint = 768, onSort, sortKey, sortDir, content, pageSize=5, paginationClass='' } = props
  const [sort, setSort] = useState({key: sortKey || '', dir: sortDir || -1})
  const isDesktop = useWindowSize() > breakpoint
  const handleSort = (sortKey) => {
    const newSort = {key: sortKey, dir: sort.dir === 1 ? -1 : 1}
    setSort(newSort)
    if(onSort) onSort(newSort)
  }
  const [currentPage, setCurrentPage] = useState(1)
  const [rowsPerPage] = useState(pageSize)
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = content.slice(indexOfFirstRow, indexOfLastRow);
  return (
    <>
      <table className={`responsive-sortable-react-table ${className}`} >
        {headers && isDesktop && <Header {...props} sort={sort} handleSort={handleSort} />}
        {isDesktop ? <Body {...props} content={currentRows}/> : <Mobile {...props}/>}
      </table>
      {isDesktop &&
        <Pagination
          paginationClass={paginationClass}
          rowsPerPage={rowsPerPage}
          totalRows={content.length}
          paginate={(n) => setCurrentPage(n)}
          currentPage={currentPage}
        />
      }
    </>
  );
}

Table.propTypes = {
  content: PT.arrayOf(PT.object).isRequired,
  headers: PT.object,
  className: PT.string,
  breakpoint: PT.number,
  onSort: PT.func,
  sortDir: PT.number,
  sortKey: PT.string,
  headerClass: PT.string,
  bodyClass: PT.string,
  paginationClass: PT.string,
  pageSize: PT.number,
};

export default Table;