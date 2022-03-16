import styled from 'styled-components';

const StyledThemeSwitcher = styled.div`
    align-items: center;
    display: flex;
    justify-content: flex-end;
    max-width: 600px;
    padding-bottom: 1.5rem;
    padding-right: 25px;
    width: 90%;

    input {
        height: 0;
        visibility: hidden;
        width: 0;
    }

    label {
        align-items: center;
        background: #9baacf;
        border-radius: 100px;
        box-shadow: -4px 4px 15px inset rgba(0, 0, 0, 0.4);
        cursor: pointer;
        display: flex;
        height: 24px;
        justify-content: space-between;
        position: relative;
        transition: background-color 0.3s ease-in-out;
        width: 50px;

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
    }

    span {
        background: #e4ebf5;
        border-radius: 50%;
        box-shadow: -3px 3px 8px rgba(0, 0, 0, 0.4);
        content: '';
        height: 18px;
        left: 4px;
        position: absolute;
        top: 3px;
        transition: 0.3s ease-in-out;
        width: 18px;
    }

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

    input:checked + label span {
        left: calc(100% - 4px);
        transform: translateX(-100%);
    }

    label:active span {
        width: 35px;
    }
`;

export default StyledThemeSwitcher;
