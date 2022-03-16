import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
        --colorPrimary: ${({ theme }) => theme.color};
    }

    body {
        background: #E4EBF5;
        color: #9baacf;
        font-family: 'Poppins', sans-serif;
    }

    ul {
        list-style: none;
    }
`;

export default GlobalStyle;
