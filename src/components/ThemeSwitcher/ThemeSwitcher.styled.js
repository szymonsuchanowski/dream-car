import styled from 'styled-components';

const bgColor = 'linear-gradient(330deg, #5b0eeb 0%, #6d5dfc 50%, #8abdff 100%)';

const StyledThemeSwitcher = styled.div`
    display: flex;

    input {
        height: 0;
        visibility: hidden;
        width: 0;
    }

    label {
        align-items: center;
        background: ${(props) => (props.isOn ? bgColor : 'rgba(255, 255, 255, 0)')};
        border-radius: 100px;
        box-shadow: 0.3rem 0.3rem 0.6rem #c8d0e7, -0.2rem -0.2rem 0.5rem #ffffff;
        cursor: pointer;
        display: flex;
        height: 24px;
        justify-content: space-between;
        position: relative;
        transition: background-color 0.3s ease-in-out;
        width: 50px;
        ::before,
        ::after {
            font-size: 2rem;
            position: absolute;
            transform: translate3d(0, -50%, 0);
            top: 50%;
        }

        ::before {
            content: '\u263C';
            right: 100%;
            margin-right: 10px;
            color: orange;
        }

        ::after {
            content: '\u263E';
            left: 100%;
            margin-left: 10px;
            color: red;
        }
    }

    span {
        background: ${({ isOn }) => (isOn ? '#e4ebf5' : '#9baacf')};
        border-radius: 45px;
        box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
        content: '';
        height: 18px;
        left: 4px;
        position: absolute;
        top: 3px;
        transition: 0.2s ease-in-out;
        width: 18px;
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
