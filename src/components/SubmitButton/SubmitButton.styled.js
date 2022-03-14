import styled from 'styled-components';

const StyledSubmitButton = styled.input`
    cursor: pointer;
    letter-spacing: 0.1rem;
    border: none;
    border-radius: 8px;
    box-shadow: 0.3rem 0.3rem 0.6rem #c8d0e7, -0.2rem -0.2rem 0.5rem #ffffff;
    background: #e4ebf5;
    :active {
        box-shadow: inset 0.2rem 0.2rem 0.5rem #c8d0e7, inset -0.2rem -0.2rem 0.5rem #ffffff;
    }
`;

export default StyledSubmitButton;
