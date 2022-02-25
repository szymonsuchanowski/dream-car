import styled from 'styled-components';

const StyledTextInput = styled.div`
    position: relative;
    width: 100%;
    height: 46px;
    margin-bottom: 3rem;
    input {
        width: 100%;
        border: 1px solid #111;
        background: transparent;
        padding: 10px;
        border-radius: 4px;
        outline: 1px solid transparent;
        font-size: 16px;
        color: #111;
        font-weight: 300;
    }
    label {
        position: absolute;
        top: 1px;
        left: 1px;
        padding: 10px;
        display: inline-block;
        font-size: 16px;
        color: #111;
        font-weight: 300;
        transition: transform 0.5s linear, font-size 0.5s linear;
        pointer-events: none;
    }
    input:focus ~ label,
    input:valid ~ label {
        transform: translateX(-10px) translateY(-32px);
        font-size: 14px;
    }
`;

export default StyledTextInput;
