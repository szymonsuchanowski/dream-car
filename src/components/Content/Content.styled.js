import styled from 'styled-components';

const StyledContent = styled.form`
    align-items: center;
    border-radius: var(--radius-primary);
    box-shadow: 0.8rem 0.8rem 1.4rem var(--color-shadow-primary),
        -0.2rem -0.2rem 1.8rem var(--color-shadow-secondary);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 600px;
    min-height: 540px;
    padding: 1.5rem;
    width: 90%;

    > div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
    }
`;

export default StyledContent;
