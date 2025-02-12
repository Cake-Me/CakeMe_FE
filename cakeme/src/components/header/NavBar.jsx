import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as S from './NavBar.style.js';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token')); // 로그인 상태 확인
  const navigate = useNavigate();

  useEffect(() => {
    const checkLoginStatus = () => {
      setIsLoggedIn(!!localStorage.getItem('token')); // 토큰이 있으면 로그인 상태
    };
    
    window.addEventListener('storage', checkLoginStatus); // localStorage 변경 감지
    return () => window.removeEventListener('storage', checkLoginStatus);
  }, []);

  // 🔹 로그아웃 함수
  const handleLogout = () => {
    localStorage.removeItem('token'); // 토큰 삭제
    setIsLoggedIn(false); // 상태 업데이트
    navigate('/'); // 홈으로 이동
  };

  return (
    <S.NavbarContainer>
      <S.Logo to="/">CAKEME</S.Logo>
      <S.NavButtonsWrapper>
        <S.NavButton to="/">HOME</S.NavButton>
        <S.NavButton to="/cake">DESIGN</S.NavButton>
        <S.NavButton to="/map">MAP</S.NavButton>
        <S.NavButton to="/community">COMMUNITY</S.NavButton>
        <S.NavButton to="/mypage">MY PAGE</S.NavButton>

        {isLoggedIn ? (
          <S.NavButton as="button" onClick={handleLogout}>LOGOUT</S.NavButton>
        ) : (
          <S.NavButton to="/login">LOGIN</S.NavButton>
        )}
      </S.NavButtonsWrapper>
    </S.NavbarContainer>
  );
};

export default Navbar;