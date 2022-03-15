import styled from 'styled-components';

const StyledDropdownItem = styled.li`
    align-items: center;
    border-radius: 8px;
    box-shadow: inset 0.2rem 0.2rem 0.5rem #c8d0e7, inset -0.2rem -0.2rem 0.5rem #ffffff;
    cursor: pointer;
    display: flex;
    height: 40px;
    justify-content: flex-end;
    padding-right: 25px;
    transition: color 0.3s ease-in-out;

    @media screen and (min-width: 960px) {
        :hover {
            box-shadow: 0.3rem 0.3rem 0.6rem #c8d0e7, -0.2rem -0.2rem 0.5rem #ffffff;
            color: #5b0eeb;
        }
    }
`;

export default StyledDropdownItem;
