import styled from 'styled-components';

const StyledTextInput = styled.div`
    :not(:first-child) {
        margin-top: 1.5rem;
    }
    position: relative;
    font-size: 16px;
    font-weight: 400;
    input {
        height: 40px;
        width: 100%;
        border: none;
        background: transparent;
        padding: 10px;
        border-radius: 8px;
        outline: 1px solid transparent;
        box-shadow: inset 0.2rem 0.2rem 0.5rem #c8d0e7, inset -0.2rem -0.2rem 0.5rem #ffffff;
        :focus,
        :valid {
            box-shadow: 0.3rem 0.3rem 0.6rem #c8d0e7, -0.2rem -0.2rem 0.5rem #ffffff;
        }
        :focus ~ label,
        :valid ~ label {
            transform: translateY(-32px);
        }
    }
    label {
        position: absolute;
        top: 1px;
        left: 1px;
        padding: 10px;
        transition: transform 0.5s linear, font-size 0.5s linear;
    }
`;

export default StyledTextInput;
