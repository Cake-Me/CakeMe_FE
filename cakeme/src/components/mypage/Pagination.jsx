import React from 'react';
import * as S from './Pagination.style';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Pagination = ({ activePage, totalPages, onPageChange }) => {
  const handlePageClick = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <S.PaginationContainer>
      {/* 왼쪽 화살표와 Previous */}
      <S.LeftGroup>
        <FaArrowLeft />
        <S.LeftButton
          onClick={() => handlePageClick(activePage - 1)}
          disabled={activePage === 1}
        >
          Previous
        </S.LeftButton>
      </S.LeftGroup>

      {/* 숫자 버튼 */}
      <S.NumberButtons>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
          <S.Button
            key={number}
            $active={activePage === number} // `$active`로 전달
            onClick={() => handlePageClick(number)}
          >
            {number}
          </S.Button>
        ))}
      </S.NumberButtons>

      {/* 오른쪽 화살표와 Next */}
      <S.RightGroup>
        <S.RightButton
          onClick={() => handlePageClick(activePage + 1)}
          disabled={activePage === totalPages}
        >
          Next
        </S.RightButton>
        <FaArrowRight />
      </S.RightGroup>
    </S.PaginationContainer>
  );
};

export default Pagination;
