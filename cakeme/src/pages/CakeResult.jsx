import React from "react";
import styled from "styled-components";
import CakeDesign from "../components/cake/CakeDesign07"; 

const CakeContainer = styled.div`
  display: flex;
  align-items: center;
  
`;

const CakeREsult = () => {
  return (
    <CakeContainer>
      <CakeDesign />
    </CakeContainer>
  );
};

export default CakeREsult;
