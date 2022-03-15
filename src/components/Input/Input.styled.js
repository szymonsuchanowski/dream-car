import styled from 'styled-components';

const StyledInput = styled.div`
    font-size: 1rem;
    position: relative;

    :not(:first-child) {
        margin-top: 1.5rem;
    }

    input {
        background: transparent;
        border-radius: 12px;
        border: none;
        box-shadow: inset 0.2rem 0.2rem 0.5rem #c8d0e7, inset -0.2rem -0.2rem 0.5rem #ffffff;
        color: #5e5e5e;
        height: 40px;
        letter-spacing: 0.1rem;
        outline: 1px solid transparent;
        padding: 10px;
        width: 100%;

        :focus,
        :valid {
            box-shadow: 0.3rem 0.3rem 0.6rem #c8d0e7, -0.2rem -0.2rem 0.5rem #ffffff;
        }

        :focus ~ label,
        :valid ~ label {
            font-size: 0.9rem;
            transform: translateY(-32px);
        }
    }

    input[type='time'],
    input[type='date'] {
        text-align: right;
    }

    input[type='time']::-webkit-calendar-picker-indicator,
    input[type='date']::-webkit-calendar-picker-indicator {
        cursor: pointer;
        opacity: 0;
        position: absolute;
        right: 0;
        width: 100%;
    }

    label {
        font-size: 0.95rem;
        left: 1px;
        letter-spacing: 1px;
        padding: 10px;
        position: absolute;
        top: 1px;
        transition: transform 0.3s linear, font-size 0.3s linear;
    }

    p {
        align-items: center;
        border-radius: 12px;
        box-shadow: inset 0.2rem 0.2rem 0.5rem #c8d0e7, inset -0.2rem -0.2rem 0.5rem #ffffff;
        display: flex;
        font-size: 0.95rem;
        height: 40px;
        justify-content: center;
        letter-spacing: 1px;
        text-align: center;
    }
`;

export default StyledInput;