import styled from 'styled-components';

const StyledButton = styled.button`
    background: rgba(238, 240, 245, 1);
    cursor: pointer;
    padding: 1rem 0;
    letter-spacing: 0.1rem;
    border: none;
    border-radius: 16px;
    box-shadow: inset 1px 1px 1px rgba(255, 255, 255, 1), -2px -2px 2px rgba(255, 255, 255, 0.9),
        -4px -4px 6px rgba(255, 255, 255, 0.9), -8px -8px 16px rgba(255, 255, 255, 0.9),
        -12px -12px 24px rgba(255, 255, 255, 0.9), inset -1px -1px 1px rgba(12, 13, 18, 0.06),
        2px 2px 2px rgba(12, 13, 18, 0.08), 4px 4px 6px rgba(12, 13, 18, 0.08),
        8px 8px 16px rgba(12, 13, 18, 0.08), 12px 12px 24px rgba(12, 13, 18, 0.08);
`;

export default StyledButton;
