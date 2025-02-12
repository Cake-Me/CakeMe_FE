import axiosInstance from './axiosInstance';

export const signup = async (userData) => {
    try {
        const response = await axiosInstance.post('/signup', userData);
        return response.data; // 성공 시 응답 데이터 반환
    } catch (error) {
        console.error("📌 회원가입 오류:", error.response?.data || error.message);
        throw error.response?.data || new Error("회원가입 중 오류가 발생했습니다.");
    }
};

export const login = async (loginData) => {
    try {
        const response = await axiosInstance.post('/login', loginData);
        return response.data; // 성공 시 응답 데이터 반환
    } catch (error) {
        console.error("📌 로그인 오류:", error.response?.data || error.message);
        throw error.response?.data || new Error("로그인 중 오류가 발생했습니다.");
    }
};
