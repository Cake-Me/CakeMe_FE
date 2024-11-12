import React from 'react';
import * as S from './Main.style.js'
import cake from '../../assets/image/maincake.png';

const MainHeader = () => {
  return (
    <S.HeaderContainer>
      <S.TitleContainer>
        <S.Title>나만의 케이크 디자인</S.Title>
        <S.Title>만들어보기</S.Title>
        <S.Button to="/cake">바로가기</S.Button>
      </S.TitleContainer>
      <S.Image src={cake} alt="케이크" />
    </S.HeaderContainer>
  );
};

export default MainHeader;