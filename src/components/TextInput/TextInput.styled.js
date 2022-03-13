import styled from 'styled-components';

const StyledTextInput = styled.div`
    position: relative;
    width: 100%;
    height: 46px;
    margin-bottom: 2.5rem;
    input {
        width: 100%;
        border: none;
        background: transparent;
        padding: 10px;
        border-radius: 12px;
        outline: 1px solid transparent;
        font-size: 16px;
        font-weight: 300;

        box-shadow: inset 1px 1px 1px rgba(255, 255, 255, 0.4),
            inset -1px -1px 1px rgba(12, 13, 18, 0.04), inset 0 0 0 2px rgba(238, 240, 245, 1),
            inset -2px -2px 2px 2px rgba(255, 255, 255, 0.4),
            inset -4px -4px 4px 2px rgba(255, 255, 255, 0.4),
            -1px -1px 4px 0px rgba(255, 255, 255, 0.4), -2px -2px 8px 0px rgba(255, 255, 255, 0.4),
            inset 2px 2px 2px 2px rgba(12, 13, 18, 0.04),
            inset 4px 4px 4px 2px rgba(12, 13, 18, 0.04), 1px 1px 4px 0px rgba(12, 13, 18, 0.04),
            2px 2px 8px 0px rgba(12, 13, 18, 0.04);
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
