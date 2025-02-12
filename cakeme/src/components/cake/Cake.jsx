
import { useNavigate } from "react-router-dom";
import * as S from "./CakeDesign.style.js";

const CakeDesign = () => {
  const navigate = useNavigate();

  const handleCreateDesign = () => {
    navigate("/cake/1");
  };

  const handleViewCategories = () => {
    navigate("/category");
  };

  return (
    <S.Container>
      <S.Header>
        <S.Title>Cake Design</S.Title>
        <S.StepIndicator>
          <S.StepBar $active={false} />
          <S.StepBar $active={false} />
          <S.StepBar $active={false} />
          <S.StepBar $active={false} />
          <S.StepBar $active={false} />
          <S.StepBar $active={false} />
        </S.StepIndicator>
      </S.Header>
      <S.ActionSection>
        <S.ActionCard>
          <S.ActionText>케이크 디자인 만들러 가기</S.ActionText>
          <S.ActionButton onClick={handleCreateDesign}>바로가기</S.ActionButton>
        </S.ActionCard>
        <S.ActionCard>
          <S.ActionText>카테고리별 케이크 보러가기</S.ActionText>
          <S.ActionButton onClick={handleViewCategories}>바로가기</S.ActionButton>
        </S.ActionCard>
      </S.ActionSection>
    </S.Container>
  );
};

export default CakeDesign;


