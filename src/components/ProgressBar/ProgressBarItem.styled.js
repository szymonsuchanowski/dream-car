import styled from 'styled-components';

const StyledProgressBarItem = styled.li`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: none;
    color: rgba(48, 52, 84, 1);
    background: #e4ebf5;
    box-shadow: ${(props) =>
        props.isComplete
            ? 'inset 0.2rem 0.2rem 0.5rem #c8d0e7, inset -0.2rem -0.2rem 0.5rem #ffffff'
            : '0.3rem 0.3rem 0.6rem #c8d0e7, -0.2rem -0.2rem 0.5rem #ffffff'};
    display: flex;
    justify-content: center;
    align-items: center;
    transform: ${(props) => (props.isActive ? 'scale(1.1)' : null)};
    transition: transform 0.4s linear, box-shadow 0.4s linear;
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
