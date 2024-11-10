import Navbar from '../components/NavBar.jsx';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
    return (
      <>
        <Navbar />
        <MainContent>
          <ContentWrapper>
            <Outlet />
          </ContentWrapper>
        </MainContent>
      </>
    );
  };
  
export default RootLayout;
  
export const MainContent = styled.div`
    display: flex;
    background-color: ghostwhite;
`;
  
export const ContentWrapper = styled.div`
    height: 110%;
    width: 100%;
    overflow-y: auto;
    background-color: ghostwhite;
`;

