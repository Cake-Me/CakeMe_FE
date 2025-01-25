import React, { useState } from "react";
import * as S from './Post.style';
import { MdOutlineDriveFolderUpload } from "react-icons/md";
import { GoTag } from "react-icons/go";
import { useNavigate } from "react-router-dom";

const category = { data: ["생일", "연인", "친구", "부모님", "선생님", "X-mas", "졸업", "회사", "결혼", "아이"] };

const Post = () => {
    const [preview, setPreview] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState("카테고리");
    const [showDropdown, setShowDropdown] = useState(false);
    const navigate = useNavigate();

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setPreview(reader.result); // 미리보기 URL 설정
            };
            reader.readAsDataURL(file);
        }
    };

    const handleCategorySelect = (category) => {
        setSelectedCategory(category); 
        setShowDropdown(false); 
    };

    const handleList = () => {
        navigate("/community")
    }

    return (
        <S.PostContainer>
            <S.PostMenu>
                <S.TagSet>
                    <GoTag style={{color:"rgba(89, 62, 23, 0.70)", fontSize:"20px", paddingBottom:"5px"}}/>
                    <S.PostCategory onClick={() => setShowDropdown(!showDropdown)}>
                        {selectedCategory}
                    </S.PostCategory>
                </S.TagSet>
                {showDropdown && (
                    <S.DropdownMenu>
                        {category.data.map((cat, index) => (
                            <S.DropdownItem
                                key={index}
                                onClick={() => handleCategorySelect(cat)}
                            >
                                {cat}
                            </S.DropdownItem>
                        ))}
                    </S.DropdownMenu>
                )}
                <S.PostTitleSet>
                    <S.PostTitleInput 
                        type="text" 
                        name="title"
                        spellCheck="false"
                        placeholder="게시글의 제목을 입력하세요."
                    />
                    <S.PostButtonSet>
                        <S.PostListButton onClick={handleList}>목록 보기</S.PostListButton>
                        <S.CancelButton onClick={handleList}>작성 취소</S.CancelButton>
                        <S.PostButton
                            type="submit"
                            value="게시글 작성"
                            onClick={handleList}
                        />
                    </S.PostButtonSet>
                </S.PostTitleSet>
            </S.PostMenu>
            <S.PostLine />
            {preview && (
                <S.PreviewContainer>
                    <S.PreviewImage src={preview} alt="첨부된 파일 미리보기" />
                </S.PreviewContainer>
            )}
            <S.PostTextInput
                type="text" 
                name="text"
                rows="15"
                placeholder="본문에 태그를 사용해 보세요!"
                spellCheck="false"
            />
            <S.PostLine />
            <S.PicSet>
                <S.TitleSet>
                    <MdOutlineDriveFolderUpload style={{ color: "rgba(89, 62, 23, 0.70)", fontSize: "16px", alignSelf:"center" }} />
                    <S.PicTitle>첨부파일</S.PicTitle>
                </S.TitleSet>
                <S.PostPic
                    type="file"
                    name="file"
                    onChange={handleFileChange}
                />
            </S.PicSet>
        </S.PostContainer>
    );
};

export default Post;
