import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import * as S from './CommunityDetail.style';
import { LuPencilLine } from "react-icons/lu";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { GoTag } from "react-icons/go";
import { FaRegStar, FaStar } from 'react-icons/fa';
import { getPostDetail } from "../../api/community"; 
import cake from '../../assets/community/cake.jpeg';
import { deletePost } from "../../api/community"; 



const CommunityDetail = () => {
    const { postId } = useParams(); // 🔥 URL에서 postId 가져오기
    const [post, setPost] = useState(null);
    const [stars, setStars] = useState([false, false, false, false, false]);
    const [isBookmarked, setIsBookmarked] = useState(false);
    const navigate = useNavigate();

//console.log("📌 현재 URL에서 가져온 postId:", postId);



    // 📌 게시글 데이터 불러오기
    useEffect(() => {
        const fetchPostDetail = async () => {
            try {
                const response = await getPostDetail(postId); // postId로 API 호출
                console.log("📌 불러온 게시글 데이터:", response); // 🔥 디버깅용 로그 추가
                setPost(response.data); // ✅ 응답 데이터에서 `data`를 저장
            } catch (error) {
                console.error("❌ 게시글 불러오기 실패:", error);
            }
        };
        

        if (postId) {
            fetchPostDetail();
        }
    }, [postId]);

    // 📌 게시글 삭제 처리
    const handleDelete = async () => {
        try {
            const confirmation = window.confirm("정말로 이 게시글을 삭제하시겠습니까?");
            if (confirmation) {
                await deletePost(postId); // 게시글 삭제 API 호출
                alert("게시글이 삭제되었습니다.");
                navigate("/community/posts"); // 삭제 후 목록 페이지로 이동
            }
        } catch (error) {
            console.error("❌ 게시글 삭제 실패:", error);
            alert("게시글 삭제 실패");
        }
    };


    // 📌 데이터 로딩 중일 때 처리
    if (!post || !post.id) {
        return <p>게시글을 불러오는 중...</p>;
    }

    const toggleStar = (index) => {
        setStars((prevStars) => 
            prevStars.map((star, i) => (i === index ? !star : star))
        );
    };

    const toggleBookmark = () => {
        setIsBookmarked((prevBookmark) => !prevBookmark);
    };

    const handleList = () => {
        navigate("/community");
    };

    return (
        <S.PostContainer>
            <S.PostMenu>
                <S.TagSet>
                    <GoTag style={{color:"rgba(89, 62, 23, 0.70)", fontSize:"20px", paddingTop:"10px"}}/>
                    <S.PostCategory>{post.category || "카테고리 없음"}</S.PostCategory>
                </S.TagSet>
                
                <S.PostTitleSet>
                    <S.PostTitle>{post.title}</S.PostTitle>
                    <S.PostButtonSet>
                        {isBookmarked ? (
                            <FaBookmark 
                                style={{color:"#CFB7A0", fontSize:"20px", paddingRight:"10px"}} 
                                onClick={toggleBookmark} 
                            />
                        ) : (
                            <FaRegBookmark 
                                style={{color:"#CFB7A0", fontSize:"20px", paddingRight:"10px"}} 
                                onClick={toggleBookmark} 
                            />
                        )}
                        <S.PostListButton onClick={handleList}>목록 보기</S.PostListButton>
                        <S.EditButton>게시글 수정</S.EditButton>
                        <S.DeleteButton onClick={handleDelete}>게시글 삭제</S.DeleteButton>
                    </S.PostButtonSet>
                </S.PostTitleSet>
            </S.PostMenu>
            <S.PostLine />

            <S.PostDetailContainer>
                <S.PostImageSection>
                    <S.PostImage 
                        src={post.attachment || cake} 
                        alt="게시글 이미지" 
                    />
                </S.PostImageSection>
                <S.PostText>
                    {post.content}
                </S.PostText>
            </S.PostDetailContainer>

            <S.PostLine />
            <S.InfoSet>
                <S.DateSet>
                    <LuPencilLine style={{color: "#593E17", fontSize: "16px", alignSelf:"center"}}/>
                    <S.Date>{post.date || "날짜 없음"}</S.Date>
                </S.DateSet>
                <S.StarRate>
                    {stars.map((filled, index) => (
                        filled ? (
                            <FaStar 
                                key={index} 
                                className="f_star" 
                                onClick={() => toggleStar(index)} 
                            />
                        ) : (
                            <FaRegStar 
                                key={index} 
                                className="n_star" 
                                onClick={() => toggleStar(index)} 
                            />
                        )
                    ))}
                </S.StarRate>
            </S.InfoSet>
        </S.PostContainer>
    );
};

export default CommunityDetail;
