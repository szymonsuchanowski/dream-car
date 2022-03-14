import styled from 'styled-components';

const StyledDateInput = styled.div`
    :not(:first-child) {
        margin-top: 1.5rem;
    }
    font-size: 16px;
    font-weight: 400;
    position: relative;
    label {
        position: absolute;
        top: 1px;
        left: 1px;
        padding: 10px;
        transition: transform 0.5s linear, font-size 0.5s linear;
    }
    input {
        text-align: right;
        box-shadow: inset 0.2rem 0.2rem 0.5rem #c8d0e7, inset -0.2rem -0.2rem 0.5rem #ffffff;
        padding: 10px;
        width: 100%;
        border: none;
        background: transparent;
        outline: 1px solid transparent;
        border-radius: 8px;
        height: 40px;
        :focus,
        :valid {
            box-shadow: 0.3rem 0.3rem 0.6rem #c8d0e7, -0.2rem -0.2rem 0.5rem #ffffff;
        }
        :focus ~ label,
        :valid ~ label {
            transform: translateY(-32px);
        }
    }
    input[type='time']::-webkit-calendar-picker-indicator,
    input[type='date']::-webkit-calendar-picker-indicator {
        opacity: 0;
        position: absolute;
        right: 0;
        width: 100%;
        cursor: pointer;
    }
`;

export default StyledDateInput;
