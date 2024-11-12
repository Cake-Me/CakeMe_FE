import React, { useEffect } from 'react';
import * as S from './Map.style';

const Map = ({ stores }) => {
  useEffect(() => {
    const loadKakaoMapScript = () => {
      return new Promise((resolve) => {
        if (window.kakao && window.kakao.maps) {
          resolve(window.kakao);
          return;
        }

        const script = document.createElement('script');
        script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=9c2af289bd3d820189c361fae2dafc02&libraries=services`;
        script.async = true;
        script.onload = () => {
          window.kakao.maps.load(() => resolve(window.kakao));
        };
        document.head.appendChild(script);
      });
    };

    const initializeMap = (kakao) => {
      const container = document.getElementById('map');
      const options = {
        center: new kakao.maps.LatLng(37.5665, 126.9780), // 초기 중심 좌표
        level: 3, // 지도 확대 레벨
      };
      const map = new kakao.maps.Map(container, options);

      // 마커 추가 함수
      const addMarkers = () => {
        stores.forEach((store) => {
          const markerPosition = new kakao.maps.LatLng(store.y, store.x);
          const marker = new kakao.maps.Marker({ position: markerPosition, map });

          const infoWindow = new kakao.maps.InfoWindow({
            content: `<div style="padding:5px;">${store.name}</div>`,
          });

          kakao.maps.event.addListener(marker, 'click', () => {
            infoWindow.open(map, marker);
          });
        });
      };

      // 지도 중심 이동
      if (stores.length > 0) {
        const firstStore = stores[0]; // 검색 결과의 첫 번째 가게를 기준으로 중심 이동
        const newCenter = new kakao.maps.LatLng(firstStore.y, firstStore.x);
        map.setCenter(newCenter);
      }

      addMarkers(); // 마커 추가
    };

    loadKakaoMapScript().then((kakao) => initializeMap(kakao));
  }, [stores]); // stores가 변경될 때마다 실행

  return <S.MapContainer id="map" />;
};

export default Map;
