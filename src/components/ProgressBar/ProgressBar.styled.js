import styled, { css } from 'styled-components';

const StyledProgressBar = styled.footer`
    margin-top: 1rem;
    max-width: 700px;
    opacity: 1;
    transform: translateX(0);
    transition: opacity var(--transition-style);
    width: 90%;

    ul {
        display: flex;
        justify-content: space-between;
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
            background: var(--text-primary);
            width: 100%;
        }

        ::after {
            background: var(--text-highlight);
            transition: width var(--transition-style);
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
