import axiosInstance from "./axiosInstance";


export const createPost = async (postData) => {
    try {
        const response = await axiosInstance.post("/community/post", postData, {
            headers: {
                "Content-Type": "multipart/form-data", // 파일 업로드 시 필수
            },
        });
        return response.data;
    } catch (error) {
        console.error("❌ 게시글 작성 중 오류 발생:", error.response?.data || error.message);
        throw error;
    }
};

// 게시글 목록 조회 API
export const getCommunityPosts = async () => {
    try {
        const response = await axiosInstance.get('/community/posts'); // 백엔드 API 요청
        return response.data; // 응답 데이터 반환
    } catch (error) {
        console.error('❌ 게시글 목록 조회 중 오류 발생:', error.response?.data || error.message);
        throw error;
    }
};

export const getPostDetail = async (postId) => {
    try {
        const response = await axiosInstance.get(`/community/post/${postId}`);
        console.log("📌 게시글 상세 데이터 응답:", response.data); // 🔥 응답 데이터 확인
        return response.data;
    } catch (error) {
        console.error("❌ 게시글 데이터를 불러오는 중 오류 발생:", error);
        throw error;
    }
};


// 게시글 삭제 API
export const deletePost = async (postId) => {
    try {
        const response = await axiosInstance.delete(`/community/post/${postId}`);
        return response.data;
    } catch (error) {
        console.error("❌ 게시글 삭제 중 오류 발생:", error.response?.data || error.message);
        throw error;
    }
};

