import React from 'react';
import * as S from './StoreItem.style';

const StoreItem = ({ store }) => {
  return (
    <S.StoreItemContainer>
      <S.Title>{store.name}</S.Title>
      <S.Paragraph>{store.location}</S.Paragraph>
      <S.Button onClick={() => alert(`상세보기: ${store.name}`)}>상세 보기</S.Button>
    </S.StoreItemContainer>
  );
};


export default StoreItem;
