import styled, { css } from 'styled-components';

const twoBtnsStyles = css`
    justify-content: space-between;

    button,
    input {
        max-width: 120px;
        width: 40%;
    }
`;

const StyledContentActions = styled.footer`
    display: flex;
    justify-content: center;
    width: 100%;

    button,
    input {
        width: 100%;
    }

    ${({ children }) => (children && children.length === 2 ? twoBtnsStyles : null)}
`;

export default StyledContentActions;
