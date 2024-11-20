import React, { useState } from "react";
import * as S from "./CakeDesign.style.js"; // 스타일 파일
import CategoryTabs from "../../components/mypage/CategoryTabs"; // 카테고리 탭
import CakeCard, { cakeData } from "../../components/mypage/CakeCard"; // 케이크 카드 데이터 및 컴포넌트
import Pagination from "../../components/mypage/Pagination"; // 페이지네이션

const CakeCategory = () => {
  // 페이지네이션 상태 관리
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12; // 한 페이지에 표시할 아이템 개수

  // 현재 페이지의 데이터를 가져오는 함수
  const getCurrentPageItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return cakeData.slice(startIndex, endIndex);
  };

  return (
    <S.Container_>
      <S.Title_>카테고리 별 케이크 디자인</S.Title_>
      {/* 카테고리 탭 */}
      <CategoryTabs />
      {/* 케이크 카드 그리드 */}
      <S.CardGrid>
        {getCurrentPageItems().map((cake, index) => (
          <CakeCard key={index} src={cake.src} title={cake.title} time={cake.time} />
        ))}
      </S.CardGrid>
      {/* 페이지네이션 */}
      <Pagination
        activePage={currentPage}
        totalPages={Math.ceil(cakeData.length / itemsPerPage)}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </S.Container_>
  );
};

export default CakeCategory;
