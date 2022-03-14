import styled from 'styled-components';

const StyledContent = styled.form`
    width: 90%;
    min-height: 70vh;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-radius: 16px;
    box-shadow: 0.3rem 0.3rem 0.6rem #c8d0e7, -0.2rem -0.2rem 0.5rem #ffffff;
    > div {
        display: flex;
        flex-direction: column;
        width: 100%;
    }
`;

export default StyledContent;
