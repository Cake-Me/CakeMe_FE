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
        center: new kakao.maps.LatLng(37.5665, 126.9780),
        level: 3,
      };
      const map = new kakao.maps.Map(container, options);

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

    loadKakaoMapScript().then((kakao) => initializeMap(kakao));
  }, [stores]);

  return (
    <S.MapContainer id="map" />
  );
};

export default Map;
