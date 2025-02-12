import  { useState } from 'react';
import * as S from './Pagination.style';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Pagination = () => {
  const [activePage, setActivePage] = useState(1); // 현재 활성화된 페이지

  const handlePageClick = (pageNumber) => {
    setActivePage(pageNumber); // 클릭한 페이지를 활성화
  };

  return (
    <S.PaginationContainer>
        {/* 왼쪽 화살표와 Previous */}
        <S.LeftGroup>
            <FaArrowLeft />
            <S.LeftButton
                onClick={() => setActivePage((prev) => Math.max(prev - 1, 1))}
            >
                Previous
            </S.LeftButton>
        </S.LeftGroup>

        {/* 숫자 버튼 */}
        <S.NumberButtons>
            {[1, 2, 3].map((number) => (
                <S.Button
                    key={number}
                    $isActive={activePage === number} // 현재 페이지 확인
                    onClick={() => handlePageClick(number)}
                >
                    {number}
                </S.Button>
            ))}
        </S.NumberButtons>

        {/* 오른쪽 화살표와 Next */}
        <S.RightGroup>
            <S.RightButton
                onClick={() => setActivePage((prev) => Math.min(prev + 1, 3))}
            >
                Next
            </S.RightButton>
            <FaArrowRight />
        </S.RightGroup>
    </S.PaginationContainer>
  );
};

export default Pagination;
