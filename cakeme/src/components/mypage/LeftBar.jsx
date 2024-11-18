import React from 'react';
import * as S from './LeftBar.style';

const LeftBar = ({ onNavigate }) => {
  return (
    <S.LeftBarContainer>
      <S.Section>
        <S.Header onClick={onNavigate.userInfo}>개인 정보 설정</S.Header>
      </S.Section>

      <S.Line />

      <S.Section>
        <S.Header onClick={onNavigate.designSection}>디자인 내역</S.Header>
      </S.Section>

      <S.Line />

      <S.Section>
        <S.Header onClick={onNavigate.community}>커뮤니티 내역</S.Header>
        <S.List>
          <S.ListItem onClick={onNavigate.scrap}>스크랩</S.ListItem>
          <S.ListItem onClick={onNavigate.myPosts}>내가 쓴 글</S.ListItem>
          <S.ListItem onClick={onNavigate.comments}>댓글 단 글</S.ListItem>
        </S.List>
      </S.Section>
    </S.LeftBarContainer>
  );
};

export default LeftBar;
