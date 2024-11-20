import React from "react";
import styled from "styled-components";
import CakeDesign from "../components/cake/Cake"; 

// 스타일 정의
const CakeContainer = styled.div`
  display: flex;

  align-items: center;
  
`;


const CakeSelect = () => {
  return (
    <CakeContainer>
      {/* CakeDesign 컴포넌트를 렌더링 */}
      <CakeDesign />
    </CakeContainer>
  );
};

export default CakeSelect;