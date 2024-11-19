import React, { useState } from "react";
import * as S from './CommunityDetail.style';
import cake from '../../assets/community/parent.png';
import { LuPencilLine } from "react-icons/lu";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { GoTag } from "react-icons/go";
import { FaRegStar, FaStar } from 'react-icons/fa';

const CommunityDetail = () => {
    const [stars, setStars] = useState([false, false, false, false, false]);
    const [isBookmarked, setIsBookmarked] = useState(false);
    
    const toggleStar = (index) => {
        setStars((prevStars) => 
            prevStars.map((star, i) => (i === index ? !star : star))
        );
    };

    const toggleBookmark = () => {
        setIsBookmarked((prevBookmark) => !prevBookmark); // Bookmark 상태 토글
    };

    return (
        <S.PostContainer>
            <S.PostMenu>
                <S.TagSet>
                    <GoTag style={{color:"rgba(89, 62, 23, 0.70)", fontSize:"20px", paddingTop:"10px"}}/>
                    <S.PostCategory>부모님</S.PostCategory>
                </S.TagSet>
                
                <S.PostTitleSet>
                    <S.PostTitle>부모님 꽃 디자인 생신케이크</S.PostTitle>
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
                        <S.PostListButton>목록 보기</S.PostListButton>
                        <S.EditButton>게시글 수정</S.EditButton>
                        <S.DeleteButton>게시글 삭제</S.DeleteButton>
                    </S.PostButtonSet>
                </S.PostTitleSet>
            </S.PostMenu>
            <S.PostLine />


            <S.PostDetailContainer>
                <S.PostImageSection>
                    <S.PostImage src={cake} alt="케이크" />
                </S.PostImageSection>
                <S.PostText>
                어머니 생신을 축하해드리기 위해 만든 케이크 입니다~~어머니 생신을 축하해드리기 위해 만든 케이크 입니다~~어머니 생신을 축하해드리기 위해 만든 케이크 입니다~~어머니 생신을 축하해드리기 위해 만든 케이크 입니다~~어머니 생신을 축하해드리기 위해 만든 케이크 입니다~~어머니 생신을 축하해드리기 위해 만든 케이크 입니다~~어머니 생신을 축하해드리기 위해 만든 케이크 입니다~~어머니 생신을 축하해드리기 위해 만든 케이크 입니다~~
                어머니 생신을 축하해드리기 위해 만든 케이크 입니다~~어머니 생신을 축하해드리기 위해 만든 케이크 입니다~~어머니 생신을 축하해드리기 위해 만든 케이크 입니다~~어머니 생신을 축하해드리기 위해 만든 케이크 입니다~~어머니 생신을 축하해드리기 위해 만든 케이크 입니다~~어머니 생신을 축하해드리기 위해 만든 케이크 입니다~~어머니 생신을 축하해드리기 위해 만든 케이크 입니다~~어머니 생신을 축하해드리기 위해 만든 케이크 입니다~~


                 #부모님 #엄마 #생일 #핑크 #꽃
                </S.PostText>
            </S.PostDetailContainer>

            <S.PostLine />
            <S.InfoSet>
                <S.DateSet>
                    <LuPencilLine style={{color: "#593E17", fontSize: "16px", alignSelf:"center"}}/>
                    <S.Date>2024.11.11 12:00</S.Date>
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