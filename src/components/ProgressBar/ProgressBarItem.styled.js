import styled from 'styled-components';

const StyledProgressBarItem = styled.li`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 2px solid lightblue;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: ${(props) => (props.isActive ? 'scale(1.5)' : null)};
    transition: transform 0.4s linear;

    :after {
        content: '${(props) => props.txt}';
        display: block;
        position: absolute;
        text-align: center;
        top: 45px;
    }
`;

export default StyledProgressBarItem;
