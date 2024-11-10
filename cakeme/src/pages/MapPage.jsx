import React, { useState } from 'react';
import Map from '../components/Map';
import StoreList from '../components/StoreList';

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
    <div style={styles.background}>
      <div style={styles.searchContainer}>
        <input 
          type="text" 
          value={searchKeyword} 
          onChange={(e) => setSearchKeyword(e.target.value)}
          placeholder="검색어를 입력하세요"
          style={styles.searchInput}
        />
        <button onClick={handleSearch} style={styles.searchButton}>검색</button>
      </div>
      
      <div style={styles.contentContainer}>
        <div style={styles.leftPanel}>
          <StoreList stores={stores} />
        </div>
        <div style={styles.rightPanel}>
          <Map stores={stores} />
        </div>
      </div>
    </div>
  );
};

const styles = {
  background: {
    width: '98%',
    height: '772px',
    borderRadius: '40px',
    background: '#F7F2EB',
    margin: '20px auto',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  },
  searchContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: '20px',
    gap: '10px',
  },
  searchInput: {
    border: '2px solid #BDAB99',
    width: '350px',
    height: '25px',
    borderRadius: '19px',
    background: '#FFF',
    padding: '8px',
    padding: '8px 40px 8px 40px', // 텍스트 입력 패딩 (아이콘 공간 확보)
    backgroundImage: 'url("/src/assets/search_icon.svg")', // 이미지 경로 설정
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '10px center', // 이미지 위치
    backgroundSize: '24px', // 이미지 크기
  },
  searchButton: {
    width: '97px',
    height: '40px',
    borderRadius: '19px',
    backgroundColor: '#BDAB99',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    padding: '8px',
    fontSize: '15px',
    fontColor: '#F7F2EB',
  },
  contentContainer: {
    display: 'flex',
    height: 'calc(100% - 80px)',
  },
  leftPanel: {
    width: '300px',
    height: '100%',
    overflowY: 'auto',
    padding: '10px',
    boxSizing: 'border-box',
  },
  rightPanel: {
    flex: 1,
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default MapPage;
