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
    width: 100%;
    display: flex;
    justify-content: center;
    button,
    input {
        width: 100%;
    }
    ${({ children }) => (children && children.length === 2 ? twoBtnsStyles : null)}
`;

export default StyledContentActions;
