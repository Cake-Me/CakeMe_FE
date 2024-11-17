import React from "react";
import styled from "styled-components";
import CakeDesign from "../components/cake/CakeDesign05"; 

const Cake5 = () => {
  return (
    <CakeContainer>
      {/* CakeDesign 컴포넌트를 렌더링 */}
      <CakeDesign />
    </CakeContainer>
  );
};

export default Cake5;

const CakeContainer = styled.div`
  display: flex;
  align-items: center;
  
`;
