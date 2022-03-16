import styled, { css } from 'styled-components';

const bgColor = 'linear-gradient(330deg, #5b0eeb 0%, #6d5dfc 50%, #8abdff 100%)';

const themeSwitcherStyles = css`
    align-items: center;
    justify-content: flex-end;
    max-width: 600px;
    padding-bottom: 1.5rem;
    padding-right: 25px;
    width: 90%;
`;

const themeSwitcherLabelStyles = css`
    background: #9baacf;
    box-shadow: -4px 4px 15px inset rgba(0, 0, 0, 0.4);

    ::before,
    ::after {
        font-size: 1.6rem;
        position: absolute;
        top: 50%;
        transition: transform 0.3s ease-in-out;
    }

    ::before {
        color: orange;
        content: '\u263C';
        margin-right: 0.3rem;
        right: 100%;
        transform: translate3d(0, -50%, 0) scale(1.2);
    }

    ::after {
        color: #9baacf;
        content: '\u263E';
        left: 100%;
        margin-left: 0.3rem;
        transform: translate3d(0, -50%, 0);
    }
`;

const themeSwitcherSpanStyles = css`
    background: #e4ebf5;
    box-shadow: -3px 3px 8px rgba(0, 0, 0, 0.4);
`;

const themeSwitcherCheckedStyles = css`
    input:checked + label {
        ::before {
            color: #9baacf;
            transform: translate3d(0, -50%, 0) scale(1);
        }

        ::after {
            color: turquoise;
            transform: translate3d(0, -50%, 0) scale(1.2);
        }
    }
`;

const StyledSwitcher = styled.div`
    display: flex;
    ${({ name }) => name === 'themeSwitcher' && themeSwitcherStyles}

    input {
        height: 0;
        visibility: hidden;
        width: 0;
    }

    label {
        align-items: center;
        background: ${({ isOn }) => (isOn ? bgColor : 'rgba(255, 255, 255, 0)')};
        border-radius: 100px;
        box-shadow: 0.3rem 0.3rem 0.6rem #c8d0e7, -0.2rem -0.2rem 0.5rem #ffffff;
        cursor: pointer;
        display: flex;
        height: 24px;
        justify-content: space-between;
        position: relative;
        transition: background-color 0.3s ease-in-out;
        width: 50px;
        ${({ name }) => name === 'themeSwitcher' && themeSwitcherLabelStyles}
    }

    span {
        background: ${({ isOn }) => (isOn ? '#e4ebf5' : '#9baacf')};
        border-radius: 50%;
        box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
        height: 18px;
        left: 4px;
        position: absolute;
        top: 3px;
        transition: 0.3s ease-in-out;
        width: 18px;
        ${({ name }) => name === 'themeSwitcher' && themeSwitcherSpanStyles}
    }

    input:checked + label span {
        left: calc(100% - 4px);
        transform: translateX(-100%);
    }

    ${({ name }) => name === 'themeSwitcher' && themeSwitcherCheckedStyles}

    label:active span {
        width: 35px;
    }
`;

export default StyledSwitcher;
