import styled from 'styled-components';

const StyledCheckboxBox = styled.div`
    align-items: center;
    border-radius: 12px;
    border: none;
    box-shadow: ${({ isOn }) =>
        isOn
            ? '0.3rem 0.3rem 0.6rem #c8d0e7, -0.2rem -0.2rem 0.5rem #ffffff'
            : 'inset 0.2rem 0.2rem 0.5rem #c8d0e7, inset -0.2rem -0.2rem 0.5rem #ffffff'};
    display: flex;
    height: 40px;
    justify-content: space-between;
    margin-top: 1.5rem;
    padding: 10px;
    width: 100%;

    p {
        font-size: 0.95rem;
    }
`;

export default StyledCheckboxBox;
