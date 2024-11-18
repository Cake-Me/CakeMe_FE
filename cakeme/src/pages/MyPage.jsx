import React, { useRef, useState } from 'react';
import UserInfo from '../components/mypage/UserInfo';
import CategoryTabs from '../components/mypage/CategoryTabs';
import styled from 'styled-components';
import { SectionTitle } from '../components/mypage/MyPage.style';
import CakeCard, { cakeData } from '../components/mypage/CakeCard';
import LeftBar from '../components/mypage/LeftBar';
import Pagination from '../components/mypage/Pagination';

const MyPage = () => {
  // 각 섹션에 대한 ref 생성
  const userInfoRef = useRef(null);
  const designSectionRef = useRef(null);
  const communityRef = useRef(null);
  const scrapRef = useRef(null);
  const myPostsRef = useRef(null);
  const commentsRef = useRef(null);

  // 페이지네이션 상태
  const [designPage, setDesignPage] = useState(1);
  const [scrapPage, setScrapPage] = useState(1);
  const [myPostsPage, setMyPostsPage] = useState(1);
  const [commentsPage, setCommentsPage] = useState(1);

  const itemsPerPage = 9; // 한 페이지당 카드 개수

  // 현재 페이지의 데이터 추출 함수
  const getCurrentPageItems = (page) => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return cakeData.slice(startIndex, endIndex);
  };

  return (
    <MyPageContainer>
      <MyPageSection>
        {/* LeftBar에 스크롤 이동 함수 전달 */}
        <LeftPanel>
          <LeftBar
            onNavigate={{
              userInfo: () => userInfoRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }),
              designSection: () => designSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }),
              community: () => communityRef.current?.scrollIntoView({behavior: 'smooth', block:'start'}),
              scrap: () => scrapRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }),
              myPosts: () => myPostsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }),
              comments: () => commentsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }),
            }}
          />
        </LeftPanel>
        <RightPanel>
          {/* 유저 정보 섹션 */}
          <div ref={userInfoRef}>
            <UserInfo />
          </div>

          <Divider />

          {/* 디자인 내역 섹션 */}
          <div ref={designSectionRef}>
            <Title>디자인 내역</Title>
            <CategoryTabs />
            <CardGrid>
              {getCurrentPageItems(designPage).map((cake, index) => (
                <CakeCard key={index} src={cake.src} title={cake.title} time={cake.time} />
              ))}
            </CardGrid>
            <Pagination
              activePage={designPage}
              totalPages={Math.ceil(cakeData.length / itemsPerPage)}
              onPageChange={(page) => setDesignPage(page)}
            />
          </div>

          <Divider />

          {/* 스크랩 섹션 */}
          <div ref={communityRef}>
            <Title>커뮤니티 내역</Title>
          </div>
          <div ref={scrapRef}>
            <SectionTitle>스크랩</SectionTitle>
            <CategoryTabs />
            <CardGrid>
              {getCurrentPageItems(scrapPage).map((cake, index) => (
                <CakeCard key={index} src={cake.src} title={cake.title} time={cake.time} />
              ))}
            </CardGrid>
            <Pagination
              activePage={scrapPage}
              totalPages={Math.ceil(cakeData.length / itemsPerPage)}
              onPageChange={(page) => setScrapPage(page)}
            />
          </div>


          {/* 내가 쓴 글 섹션 */}
          <div ref={myPostsRef}>
            <SectionTitle>내가 쓴 글</SectionTitle>
            <CategoryTabs />
            <CardGrid>
              {getCurrentPageItems(myPostsPage).map((cake, index) => (
                <CakeCard key={index} src={cake.src} title={cake.title} time={cake.time} />
              ))}
            </CardGrid>
            <Pagination
              activePage={myPostsPage}
              totalPages={Math.ceil(cakeData.length / itemsPerPage)}
              onPageChange={(page) => setMyPostsPage(page)}
            />
          </div>


          {/* 댓글 단 글 섹션 */}
          <div ref={commentsRef}>
            <SectionTitle>댓글 단 글</SectionTitle>
            <CategoryTabs />
            <CardGrid>
              {getCurrentPageItems(commentsPage).map((cake, index) => (
                <CakeCard key={index} src={cake.src} title={cake.title} time={cake.time} />
              ))}
            </CardGrid>
            <Pagination
              activePage={commentsPage}
              totalPages={Math.ceil(cakeData.length / itemsPerPage)}
              onPageChange={(page) => setCommentsPage(page)}
            />
          </div>
        </RightPanel>
      </MyPageSection>
    </MyPageContainer>
  );
};

const MyPageContainer = styled.div`
  background-color: #f7f2eb;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 10px;
`;

const MyPageSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
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
  margin-left: 354px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  // padding: 20px;
`;

const Divider = styled.hr`
  width: 100%;
  height: 2px;
  background-color: #bdab99;
  border: none;
  margin: 10px 0;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 한 행에 2개의 카드 */
  // gap: 40px;
  width: 100%;
  // margin-bottom: 30px;
  justify-items: center;
`;

const Title = styled.h2`
  margin-left: 15px;
  color : #593E17;
`;

export default MyPage;
