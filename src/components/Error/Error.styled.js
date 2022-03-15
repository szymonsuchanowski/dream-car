import styled from 'styled-components';

const StyledError = styled.div`
    align-items: flex-start;
    color: #e71e46;
    display: flex;
    font-size: ${({ isCenter }) => (isCenter ? '0.75rem' : '0.85rem')};
    font-weight: 300;
    height: 2rem;
    justify-content: ${({ isCenter }) => (isCenter ? 'center' : 'flex-start')};
    margin-top: ${({ isCenter }) => (isCenter ? '-1rem' : 0)};
    padding: 5px 10px;
    text-align: center;
`;

export default StyledError;
