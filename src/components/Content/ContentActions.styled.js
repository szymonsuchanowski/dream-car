import styled, { css } from 'styled-components';

const twoBtnsStyles = css`
    justify-content: space-between;
`;

const StyledContentActions = styled.footer`
    width: 100%;
    display: flex;
    justify-content: center;
    ${({ children }) => (children && children.length === 2 ? twoBtnsStyles : null)}
`;

export default StyledContentActions;
