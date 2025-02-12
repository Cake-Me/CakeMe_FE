import styled from 'styled-components';
import SearchBar from '../components/community/SearchBar';
import StarCard from '../components/community/StarCard';
import DesignCard from '../components/community/DesignCard';
import Pagination from '../components/community/Pagination';
import LeftBar from '../components/community/LeftBar';
import FloatingButton from '../components/community/FloatingButton';
import { getCommunityPosts } from '../api/community';
import { useState, useEffect } from 'react';

const Community = () => {
    const [posts, setPosts] = useState([]); // 게시글 목록 상태

    useEffect(() => {
        // 📌 API 호출하여 게시글 목록 가져오기
        const fetchPosts = async () => {
            try {
                const response = await getCommunityPosts();
                console.log("📌 서버에서 받은 게시글 데이터:", response.data);

                if (response.data?.data && Array.isArray(response.data.data)) {
                    setPosts(response.data.data); // ✅ posts 상태를 `data` 배열로 설정
                } else if (Array.isArray(response.data)) {
                    setPosts(response.data); // ✅ 만약 response.data 자체가 배열이면 직접 사용
                } else {
                    console.warn("⚠️ 데이터 형식이 예상과 다릅니다. 빈 배열을 설정합니다.", response.data);
                    setPosts([]); // 오류 발생 시 빈 배열 설정
                }
            } catch (error) {
                console.error('❌ 게시글 데이터를 불러오는 중 오류 발생:', error);
                setPosts([]); // API 오류 발생 시 빈 배열 설정
            }
        };

        fetchPosts(); // 실행
    }, []);

    useEffect(() => {
        console.log("📌 현재 상태에 저장된 posts:", posts); // 🔥 상태 변화 감지
    }, [posts]);

    return (
        <CommunityContainer>
            <CommunitySection>
                <LeftPanel>
                    <LeftBar />
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
                        {posts.length > 0 ? (
                            posts.map((post, index) => {
                                //console.log("📌 posts에서 전달되는 개별 post 데이터:", post); // ✅ post 개별 데이터 확인
                                return <DesignCard key={post.id || index} post={post} />;
                            })
                        ) : (
                            <p>게시글이 없습니다.</p>
                        )}
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

