import styled from 'styled-components';

const Main = () => {
    return (
        <StyledContent>Main Page</StyledContent>
    );
};

export default Main;

const StyledContent = styled.h1`
    height: 100%;
    background-color: ghostwhite;
    color: black;
    margin-top: 5px;
`;