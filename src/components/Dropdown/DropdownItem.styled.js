import styled from 'styled-components';

const StyledDropdownItem = styled.li`
    align-items: center;
    border-radius: var(--radius-secondary);
    box-shadow: inset 0.2rem 0.2rem 0.5rem var(--color-shadow-primary),
        inset -0.2rem -0.2rem 0.5rem var(--color-shadow-secondary);
    cursor: pointer;
    display: flex;
    height: 40px;
    justify-content: flex-end;
    padding-right: 25px;
    transition: color var(--transition-style), box-shadow var(--transition-style);

    @media screen and (min-width: 960px) {
        :hover {
            box-shadow: 0.3rem 0.3rem 0.6rem var(--color-shadow-primary),
                -0.2rem -0.2rem 0.5rem var(--color-shadow-secondary);
            color: var(--text-highlight);
        }
    }
`;

export default StyledDropdownItem;
