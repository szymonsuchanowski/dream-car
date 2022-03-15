import React from 'react';
import StyledSummaryItem from './SummaryItem.styled';

const SummaryItem = ({ item }) => {
    const { label, value } = item;

    return (
        <StyledSummaryItem color={label === 'total price'}>
            <span>{label}</span>
            <span>{value}</span>
        </StyledSummaryItem>
    );
};

export default SummaryItem;
