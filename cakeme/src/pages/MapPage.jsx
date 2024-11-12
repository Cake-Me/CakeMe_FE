import React, { useState } from 'react';
import styled from 'styled-components';
import Map from '../components/map/Map';
import StoreList from '../components/map/StoreList';

const MapPage = () => {
  const [stores, setStores] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState('');

  const handleSearch = () => {
    if (!searchKeyword) return;

    window.kakao.maps.load(() => {
      const places = new window.kakao.maps.services.Places();
      const keyword = `${searchKeyword} 베이커리`;
      
      places.keywordSearch(keyword, (result, status) => {
        if (status === window.kakao.maps.services.Status.OK) {
          const newStores = result.map((place) => ({
            id: place.id,
            name: place.place_name,
            location: place.road_address_name || place.address_name,
            x: place.x,
            y: place.y,
            url: place.place_url,
          }));
          setStores(newStores);
        } else {
          setStores([]);
        }
      });
    });
  };

  return (
    <Background>
      <SearchContainer>
        <SearchInput 
          type="text" 
          value={searchKeyword} 
          onChange={(e) => setSearchKeyword(e.target.value)}
          placeholder="검색어를 입력하세요"
        />
        <SearchButton onClick={handleSearch}>검색</SearchButton>
      </SearchContainer>
      
      <ContentContainer>
        <LeftPanel>
          <StoreList stores={stores} />
        </LeftPanel>
        <RightPanel>
          <Map stores={stores} />
        </RightPanel>
      </ContentContainer>
    </Background>
  );
};

const Background = styled.div`
  width: 98%;
  height: 100%;
  border-radius: 40px;
  background: #F7F2EB;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding-bottom: 12%;
`;

const SearchContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 20px;
  gap: 10px;
`;

const SearchInput = styled.input`
  border: 2px solid #BDAB99;
  width: 350px;
  height: 25px;
  border-radius: 19px;
  background: #FFF;
  padding: 8px 40px 8px 40px;
  background-image: url("/src/assets/search_icon.svg");
  background-repeat: no-repeat;
  background-position: 10px center;
  background-size: 24px;
`;

const SearchButton = styled.button`
  width: 97px;
  height: 40px;
  border-radius: 19px;
  background-color: #BDAB99;
  color: #fff;
  border: none;
  cursor: pointer;
  padding: 8px;
  font-size: 15px;
`;

const ContentContainer = styled.div`
  display: flex;
  height: 100%;
`;

const LeftPanel = styled.div`
  width: 300px;
  height: 700px;
  overflow-y: auto;
  padding: 10px;
  box-sizing: border-box;
`;

const RightPanel = styled.div`
  flex: 1;
  height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default MapPage;
