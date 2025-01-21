import axios from 'axios';

// 환경 변수에서 baseURL 가져오기
const baseURL = import.meta.env.VITE_API_BASE_URL;

const axiosInstance = axios.create({
  baseURL: baseURL, // 환경 변수에서 가져온 API URL
  timeout: 5000, // 요청 타임아웃 설정
  headers: {
    'Content-Type': 'application/json', // 기본 Content-Type 헤더
  },
});

// 요청 인터셉터
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); // 로컬 스토리지에서 토큰 가져오기
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error) // 요청 에러 처리
);

// 응답 인터셉터
axiosInstance.interceptors.response.use(
  (response) => response, // 성공적인 응답 처리
  (error) => {
    // 응답 에러 처리
    if (error.response && error.response.status === 401) {
      console.error('인증 오류 발생!');
      // 필요시 리다이렉트나 로그아웃 로직 추가
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
