import React from 'react';
import PT from 'prop-types';

const Pagination = ({rowsPerPage, totalRows, paginate, currentPage, paginationClass}) => {
  const pageNumbers = []
  for(let i = 1; i <= Math.ceil(totalRows/rowsPerPage); i++) {
    pageNumbers.push(i)
  }
  if(pageNumbers.length === 1) return null
  const isFirst = currentPage === 1
  const isLast = currentPage === pageNumbers.length
  return (
    <div className={`responsive-sortable-react-table-pagination ${paginationClass}`}>
      <button className='prev' onClick={() => paginate(isFirst?currentPage:currentPage-1)}>
        {'<'}
      </button>
      {pageNumbers.map(n => (
        <button className={`${currentPage===n?'selected':''}`} key={n} onClick={() => paginate(n)}>
          {n}
        </button>
      ))}
      <button className='next' onClick={() => paginate(isLast?currentPage:currentPage+1)}>
        {'>'}
      </button>
    </div>
  )
}

Pagination.propTypes = {
  rowsPerPage: PT.number.isRequired,
  totalRows: PT.number.isRequired,
  paginate: PT.func.isRequired,
  currentPage: PT.number.isRequired,
  paginationClass: PT.string.isRequired,
};

export default Pagination;