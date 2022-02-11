import styled, { css } from 'styled-components';

const StyledProgressBar = styled.ul`
    position: relative;
    display: flex;
    list-style: none;
    justify-content: space-between;
    width: 90%;
    margin: 10px auto 0;

    ::before {
        content: '';
        width: 100%;
        height: 2px;
        background: lightblue;
        position: absolute;
        z-index: -1;
        top: 50%;
    }

    ::after {
        content: '';
        width: ${(props) => props.progress}%;
        height: 2px;
        background: blue;
        position: absolute;
        z-index: -1;
        top: 50%;
        transition: width 0.4s linear;
    }

    ${(props) =>
        props.step === 0 &&
        css`
            visibility: hidden;
        `}
`;

export default StyledProgressBar;
