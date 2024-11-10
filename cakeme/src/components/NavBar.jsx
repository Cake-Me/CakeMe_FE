import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {

  return (
    <NavbarContainer>
      <Logo to="/">CAKEME</Logo>
      <NavButtonsWrapper>
        <NavButton to="/">HOME</NavButton>
        <NavButton to="/cake">DESIGN</NavButton>
        <NavButton to="/map">MAP</NavButton>
        <NavButton to="/mypage">MY PAGE</NavButton>
        <NavButton to="/login">LOGIN</NavButton>
      </NavButtonsWrapper>
    </NavbarContainer>
  );
};
  
export default Navbar;

export const NavbarContainer = styled.nav`
  background-color: ghostwhite; 
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

const NavButtonsWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

const NavButton = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 16px;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  background-color: ghostwhite; 
`;