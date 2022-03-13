import styled from 'styled-components';

const StyledDateInput = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    font-size: 16px;
    font-weight: 300;
    box-shadow: inset 1px 1px 1px rgba(255, 255, 255, 0.4),
        inset -1px -1px 1px rgba(12, 13, 18, 0.04), inset 0 0 0 2px rgba(238, 240, 245, 1),
        inset -2px -2px 2px 2px rgba(255, 255, 255, 0.4),
        inset -4px -4px 4px 2px rgba(255, 255, 255, 0.4), -1px -1px 4px 0px rgba(255, 255, 255, 0.4),
        -2px -2px 8px 0px rgba(255, 255, 255, 0.4), inset 2px 2px 2px 2px rgba(12, 13, 18, 0.04),
        inset 4px 4px 4px 2px rgba(12, 13, 18, 0.04), 1px 1px 4px 0px rgba(12, 13, 18, 0.04),
        2px 2px 8px 0px rgba(12, 13, 18, 0.04);
    padding: 10px;
    align-items: center;
    border-radius: 12px;
    border: none;
    background: transparent;
    margin-bottom: 2.5rem;
    label {
        display: block;
        width: 50%;
    }
    input {
        width: 50%;
        border: none;
        background: transparent;
        outline: 1px solid transparent;
    }
`;

export default StyledDateInput;
