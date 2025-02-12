import { Link } from 'react-router-dom';
import * as S from './NavBar.style.js';

const Navbar = () => {

  return (
    <S.NavbarContainer>
      <S.Logo to="/">CAKEME</S.Logo>
      <S.NavButtonsWrapper>
        <S.NavButton to="/">HOME</S.NavButton>
        <S.NavButton to="/cake">DESIGN</S.NavButton>
        <S.NavButton to="/map">MAP</S.NavButton>
        <S.NavButton to="/community/posts">COMMUNITY</S.NavButton>
        <S.NavButton to="/mypage">MY PAGE</S.NavButton>
        <S.NavButton to="/login">LOGIN</S.NavButton>
      </S.NavButtonsWrapper>
    </S.NavbarContainer>
  );
};
  
export default Navbar;

