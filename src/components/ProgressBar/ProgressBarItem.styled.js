import styled from 'styled-components';

const setColor = ({ isActive, isComplete }) => (isActive || isComplete ? '#5b0eeb' : '#5e5e5e');

const StyledProgressBarItem = styled.li`
    align-items: center;
    background: #e4ebf5;
    border-radius: 50%;
    border: none;
    box-shadow: ${({ isComplete }) =>
        isComplete
            ? 'inset 0.2rem 0.2rem 0.5rem #c8d0e7, inset -0.2rem -0.2rem 0.5rem #ffffff'
            : '0.3rem 0.3rem 0.6rem #c8d0e7, -0.2rem -0.2rem 0.5rem #ffffff'};
    color: ${setColor};
    display: flex;
    font-size: ${({ isComplete }) => (isComplete ? '1.4rem' : '1rem')};
    font-weight: ${({ isActive }) => (isActive ? '700' : '400')};
    height: 40px;
    justify-content: center;
    transform: ${({ isActive }) => (isActive ? 'scale(1.1)' : null)};
    transition: transform 0.4s linear, box-shadow 0.4s linear;
    width: 40px;

    :after {
        color: ${({ isActive }) => (isActive ? '#5b0eeb' : '#5e5e5e')};
        content: '${({ txt }) => txt}';
        filter: ${({ isComplete }) => (isComplete ? 'blur(1.5px)' : 'none')};
        font-size: 1rem;
        font-weight: ${({ isActive }) => (isActive ? 'bold' : 'normal')};
        position: absolute;
        text-align: center;
        top: 45px;
        transition: filter 0.4s linear;
    }
`;

export default StyledProgressBarItem;
