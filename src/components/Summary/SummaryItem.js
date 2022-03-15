import React from 'react';
import StyledSummaryItem from './SummaryItem.styled';

const SummaryItem = ({ item }) => {
    const { label, value } = item;

    return (
        <StyledSummaryItem isColor={label === 'total price'}>
            <span>{label}</span>
            <span>{value}</span>
        </StyledSummaryItem>
    );
};

export default SummaryItem;
