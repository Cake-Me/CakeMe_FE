import React from "react";
import styled from "styled-components";
import CakeDesign from "../components/cake/CakeDesign04"; 

const Cake4 = () => {
  return (
    <CakeContainer>
      {/* CakeDesign 컴포넌트를 렌더링 */}
      <CakeDesign />
    </CakeContainer>
  );
};

export default Cake4;

const CakeContainer = styled.div`
  display: flex;
  align-items: center;
  
`;
