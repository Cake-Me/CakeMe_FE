import * as S from './FloatingButton.style';
import { FaPencilAlt } from "react-icons/fa";

const FloatingButton = () => {
    return (
        <S.Button>
            <FaPencilAlt style={{ marginRight: '8px'}} /> 글쓰기
        </S.Button>
    );  
};

export default FloatingButton;
