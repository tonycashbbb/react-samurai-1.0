import React from 'react';
import s from "../../pages/Users/Users.module.css";
import {connect} from "react-redux";
import {setPortionNumber} from "../../redux/pagination-reducer";

const Paginator = ({
                     totalItemsCount,
                     pageSize,
                     currentPage,
                     setCurrentPage,
                     portionNumber,
                     setPortionNumber,
                     portionSize = 10
                   }) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize)

  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  const portionCount = Math.ceil(pagesCount / portionSize)
  const leftPageNumber = (portionNumber - 1) * portionSize + 1
  const rightPageNumber = portionNumber * portionSize

  return (
    <div className={s.pagination}>
      {portionNumber > 1 && <span className={s.go} onClick={() => setPortionNumber(portionNumber - 1)}>Prev</span>}
      {pages
        .filter(p => p >= leftPageNumber && p <= rightPageNumber)
        .map(pageNum => <span className={pageNum === currentPage ? s.selected__page : ''}
                              key={pageNum}
                              onClick={() => setCurrentPage(pageNum)}>{pageNum}</span>)}
      {portionCount > portionNumber && <span className={s.go} onClick={() => setPortionNumber(portionNumber + 1)}>Next</span>}
    </div>
  );
};

const mapStateToProps = (state) => ({
  portionNumber: state.pagination.portionNumber
})

export default connect(mapStateToProps, {setPortionNumber})(Paginator);
