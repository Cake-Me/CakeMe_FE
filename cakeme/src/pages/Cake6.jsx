import React from "react";
import styled from "styled-components";
import CakeDesign from "../components/cake/CakeDesign06"; 

const CakeContainer = styled.div`
  display: flex;
  align-items: center;
  
`;

const Cake6 = () => {
  return (
    <CakeContainer>
      <CakeDesign />
    </CakeContainer>
  );
};

export default Cake6;
