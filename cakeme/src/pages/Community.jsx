import styled from 'styled-components';
import SearchBar from '../components/community/SearchBar';
import StarCard from '../components/community/StarCard';
import DesignCard from '../components/community/DesignCard';
import Pagination from '../components/community/Pagination';
import LeftBar from '../components/community/LeftBar';
import FloatingButton from '../components/community/FloatingButton';

const Community = () => {
    return (
        <CommunityContainer>
            <CommunitySection>
            <LeftPanel>
                <LeftBar></LeftBar>
            </LeftPanel>
            <RightPanel>
                <SearchBar />
                <StarCardTitle>현재 사용자들이 가장 만족한 디자인을 구경해 보세요!</StarCardTitle>
                <StarCardContainer>
                    <StarCard />
                    <StarCard />
                    <StarCard />
                </StarCardContainer>
                <DesignCardTitle>현재 사용자들이 공유한 디자인을 구경해 보세요!</DesignCardTitle>
                <DesignCardGrid>
                    {Array.from({ length: 9 }, (_, i) => (
                        <DesignCard key={i} />
                    ))}
                </DesignCardGrid>
            </RightPanel>
            </CommunitySection>
            <Pagination />
            <FloatingButton />
        </CommunityContainer>
    );
};

export default Community;

const CommunityContainer = styled.div`
    background-color: #F7F2EB;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    gap: 10px;
`;

const CommunitySection = styled.div`
    display: flex;
    justify-content: center; /* LeftPanel과 RightPanel 나란히 배치 */
    align-items: flex-start; /* 상단 정렬 */
    width: 100%;
    padding-top: 20px;
`;

const LeftPanel = styled.div`
    width: 334px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed; 
    top: 132px;
    left: 136px;
`;

const RightPanel = styled.div`
    margin-left: 354px; /* LeftPanel의 너비 + 여백 */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
`;

const StarCardTitle = styled.h2`
    color: #593E17;
    font-size: 24px;
    font-weight: 600;
    margin-top: 60px;
`;

const DesignCardTitle = styled.h2`
    color: #593E17;
    font-size: 24px;
    font-weight: 600;
    margin-top: 60px;
`;

/* StarCard를 수평으로 배치 */
const StarCardContainer = styled.div`
    display: flex;
    justify-content: space-between; /* 카드 사이 간격 균등 */
    gap: 50px; /* 카드 간 간격 */
    width: 100%; /* 부모의 가로 크기를 채움 */
    margin-top: 20px;
`;

/* DesignCard를 3x3 그리드로 배치 */
const DesignCardGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 3열 그리드 */
    grid-template-rows: repeat(3, auto); /* 3행 */
    gap: 50px; /* 카드 간 간격 */
    width: 100%; /* 부모의 가로 크기를 채움 */
    margin-top: 20px;
`;

