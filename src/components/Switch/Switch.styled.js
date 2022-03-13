import styled from 'styled-components';

const StyledSwitch = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: row;
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
        background: ${(props) => (props.isOn ? 'green' : 'grey')};
        border-radius: 100px;
        position: relative;
        transition: background-color 0.2s linear;
    }
    span {
        content: '';
        position: absolute;
        top: 2px;
        left: 2px;
        width: 20px;
        height: 20px;
        border-radius: 45px;
        transition: 0.2s;
        background: #fff;
        box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
    }
    input:checked + label span {
        left: calc(100% - 2px);
        transform: translateX(-100%);
    }
    label:active span {
        width: 40px;
    }
`;

export default StyledSwitch;
