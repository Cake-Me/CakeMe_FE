import React from 'react';
import * as S from './StoreList.style';
import { Link } from 'react-router-dom';

const StoreList = ({ stores }) => {
  return (
    <S.StoreListContainer>
      {stores.length > 0 ? (
        stores.map((store) => (
          <S.StoreListWrapper key={store.id}>
            <S.Title>{store.name}</S.Title>
            <S.Paragraph>{store.location}</S.Paragraph>
            <S.Link href={store.url} target="_blank" rel="noopener noreferrer">
              <S.StoreListButton>상세 보기</S.StoreListButton>
            </S.Link>
          </S.StoreListWrapper>
        ))
      ) : (
        <p>검색 결과가 없습니다.</p>
      )}
    </S.StoreListContainer>
  );
};

export default StoreList;
