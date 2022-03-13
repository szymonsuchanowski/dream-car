import styled from 'styled-components';

const StyledProgressBarItem = styled.li`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: none;
    color: rgba(48, 52, 84, 1);
    background: linear-gradient(145deg, #ffffff, #d6d8dd);
    box-shadow: 5px 5px 10px #a7a8ac, -5px -5px 10px #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: ${(props) => (props.isActive ? 'scale(1.1)' : null)};
    transition: transform 0.4s linear;
    font-weight: ${(props) => (props.isActive ? 'bold' : 'normal')};

    :after {
        content: '${(props) => props.txt}';
        letter-spacing: ${(props) => (props.isActive ? '0.1rem' : null)};
        font-weight: ${(props) => (props.isActive ? 'bold' : 'normal')};
        display: block;
        position: absolute;
        text-align: center;
        top: 45px;
        transition: letter-spacing 0.4s linear;
    }
`;

export default StyledProgressBarItem;
