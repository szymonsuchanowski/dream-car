import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const ResetStyle = createGlobalStyle`
    ${normalize}

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        background: #E4EBF5;
        color: #6d5dfc;
    }
`;

export default ResetStyle;
