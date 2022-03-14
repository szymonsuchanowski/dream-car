import styled from 'styled-components';

const bgColor = 'linear-gradient(330deg, #5b0eeb 0%, #6d5dfc 50%, #8abdff 100%)';

const StyledSwitch = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 40px;
    border-radius: 8px;
    padding: 10px;
    align-items: center;
    border: none;
    background: transparent;
    margin-top: 1.5rem;
    box-shadow: ${({ isOn }) =>
        isOn
            ? '0.3rem 0.3rem 0.6rem #c8d0e7, -0.2rem -0.2rem 0.5rem #ffffff'
            : 'inset 0.2rem 0.2rem 0.5rem #c8d0e7, inset -0.2rem -0.2rem 0.5rem #ffffff'};

    div {
        display: flex;
    }

    input {
        height: 0;
        width: 0;
        visibility: hidden;
    }

    label {
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
        width: 50px;
        height: 24px;
        background: ${(props) => (props.isOn ? bgColor : 'rgba(255, 255, 255, 0)')};
        border-radius: 100px;
        position: relative;
        transition: background-color 0.2s linear;
        box-shadow: 0.3rem 0.3rem 0.6rem #c8d0e7, -0.2rem -0.2rem 0.5rem #ffffff;
    }

    span {
        content: '';
        position: absolute;
        top: 3px;
        left: 4px;
        width: 18px;
        height: 18px;
        border-radius: 45px;
        transition: 0.2s;
        background: ${({ isOn }) => (isOn ? '#e4ebf5' : '#9baacf')};
        box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
    }

    input:checked + label span {
        left: calc(100% - 4px);
        transform: translateX(-100%);
    }

    label:active span {
        width: 35px;
    }
`;

export default StyledSwitch;
