import styled from 'styled-components';

const StyledSummaryItem = styled.li`
    align-items: center;
    border-radius: 12px;
    box-shadow: 0.3rem 0.3rem 0.6rem #c8d0e7, -0.2rem -0.2rem 0.5rem #ffffff;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem;

    span:first-child {
        color: ${({ isColor }) => (isColor ? '#5b0eeb' : '#9baacf')};
    }

    span:last-child {
        color: ${({ isColor }) => (isColor ? '#5b0eeb' : '#5e5e5e')};
        font-weight: 700;
    }
`;

export default StyledSummaryItem;
