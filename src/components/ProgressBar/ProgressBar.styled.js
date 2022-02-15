import styled, { css } from 'styled-components';

const StyledProgressBar = styled.footer`
    ul {
        display: flex;
        justify-content: space-between;
        list-style: none;
        margin: 10px auto 0;
        position: relative;
        width: 90%;

        ::before {
            background: lightblue;
            content: '';
            height: 2px;
            position: absolute;
            top: 50%;
            width: 100%;
            z-index: -1;
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
            visibility: hidden;
        `}
`;

export default StyledProgressBar;
