import styled from 'styled-components';

const StyledButton = styled.button`
    background: #e4ebf5;
    border-radius: 12px;
    border: none;
    box-shadow: 0.3rem 0.3rem 0.6rem #c8d0e7, -0.2rem -0.2rem 0.5rem #ffffff;
    color: #9baacf;
    cursor: pointer;
    font-weight: 700;
    letter-spacing: 0.1rem;
    padding: 0.75rem 0;

    :active {
        box-shadow: inset 0.2rem 0.2rem 0.5rem #c8d0e7, inset -0.2rem -0.2rem 0.5rem #ffffff;
    }
`;

export default StyledButton;
