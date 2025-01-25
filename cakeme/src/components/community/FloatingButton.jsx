import * as S from './FloatingButton.style';
import { FaPencilAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const FloatingButton = () => {
    const navigate = useNavigate();

    const handlePost = () => {
        navigate("/community/post");
    };

    return (
        <S.Button onClick={handlePost}>
            <FaPencilAlt style={{ marginRight: '8px'}} /> 글쓰기
        </S.Button>
    );  
};

export default FloatingButton;
