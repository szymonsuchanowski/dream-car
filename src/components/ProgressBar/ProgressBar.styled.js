import styled, { css } from 'styled-components';

const StyledProgressBar = styled.footer`
    margin-top: 1rem;
    max-width: 700px;
    opacity: 1;
    transform: translateX(0);
    transition: opacity 0.3s ease-in-out;
    width: 90%;

    ul {
        display: flex;
        justify-content: space-between;
        list-style: none;
        margin: 2rem auto 1.5rem;
        position: relative;
        width: 90%;

        ::before,
        ::after {
            content: '';
            height: 2px;
            position: absolute;
            top: 50%;
            z-index: -1;
        }

        ::before {
            background: #9baacf;
            width: 100%;
        }

        ::after {
            background: #5b0eeb;
            transition: width 0.3s ease-in-out;
            width: ${({ progress }) => progress}%;
        }
    }

    ${(props) =>
        props.counter === 0 &&
        css`
            opacity: 0;
        `}
`;

export default StyledProgressBar;
