import CategoryList from '../components/main/CategoryList.jsx';
import MainHeader from '../components/main/MainHeader.jsx';
import * as S from '../components/main/Main.style.js'

const Main = () => {
  return (
    <S.Container>
      <MainHeader />
      <S.CategorySection>
        <CategoryList />
      </S.CategorySection>
    </S.Container>
  );
};

export default Main;