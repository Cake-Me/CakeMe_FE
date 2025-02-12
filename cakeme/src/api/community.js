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
