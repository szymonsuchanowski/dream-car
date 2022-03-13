import styled, { css } from 'styled-components';

const twoBtnsStyles = css`
    justify-content: space-between;
    button {
        max-width: 120px;
        width: 100%;
    }
`;

const StyledContentActions = styled.footer`
    width: 100%;
    display: flex;
    justify-content: center;
    button {
        width: 100%;
    }
    ${({ children }) => (children && children.length === 2 ? twoBtnsStyles : null)}
`;

export default StyledContentActions;
