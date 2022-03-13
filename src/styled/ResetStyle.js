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
        background: #eef0f5;
        color: #204566;
    }
`;

export default ResetStyle;
