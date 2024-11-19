import styled from 'styled-components';
import LeftBar from '../components/community/LeftBar';
import CommunityDetail from '../components/community/CommunityDetail';

const CommunityPostDetail = () => {
    return (
        <Container>
            <LeftPanel>
                <LeftBar />
            </LeftPanel>
            <RightPanel>
                <CommunityDetail />
            </RightPanel>
        </Container>
    );
};

export default CommunityPostDetail;

const Container = styled.div`
    background-color: #F7F2EB;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    gap: 10px;
`;

const LeftPanel = styled.div`
    width: 334px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed; 
    top: 132px;
    left: 92px;
`;

const RightPanel = styled.div`
    margin-left: 354px; /* LeftPanel의 너비 + 여백 */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
`;
