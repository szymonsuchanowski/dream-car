import styled, { css } from 'styled-components';

const StyledProgressBar = styled.footer`
    height: 15vh;
    width: 90%;
    transform: translateX(0);
    opacity: 1;
    transition: opacity 0.4s linear;
    ul {
        display: flex;
        justify-content: space-between;
        list-style: none;
        position: relative;
        width: 90%;
        margin: 2rem auto 1.5rem;

        ::before {
            content: '';
            height: 2px;
            position: absolute;
            top: 50%;
            width: 100%;
            z-index: -1;
            background: #c9c9c9;
        }

        ::after {
            background: blue;
            content: '';
            height: 2px;
            position: absolute;
            top: 50%;
            transition: width 0.4s linear;
            width: ${(props) => props.progress}%;
            z-index: -1;
        }
    }

    ${(props) =>
        props.counter === 0 &&
        css`
            opacity: 0;
        `}
`;

export default StyledProgressBar;
