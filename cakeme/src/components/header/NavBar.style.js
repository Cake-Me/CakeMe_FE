import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavbarContainer = styled.nav`
  background-color: white; 
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled(Link)`
  color: black;
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    color: gray;
  }
`;

export const NavButtonsWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

export const NavButton = styled(Link).attrs((props) => ({
  as: props.as || Link, // 기본적으로 Link, 버튼일 경우 <button>으로 변경 가능
}))`
  color: black;
  text-decoration: none;
  font-size: 16px;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  background-color: white;
  border: none; // 버튼일 경우 테두리 없애기
  cursor: pointer; // 버튼일 경우 마우스 커서 변경


`;
