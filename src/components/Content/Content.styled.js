import styled from 'styled-components';

const StyledContent = styled.form`
    width: 90%;
    height: 65vh;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-radius: 30px;
    box-shadow: 5px 5px 10px #a7a8ac, -5px -5px 10px #ffffff;
    > div {
        display: flex;
        flex-direction: column;
        width: 100%;
    }
`;

export default StyledContent;
