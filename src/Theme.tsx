import { createGlobalStyle } from 'styled-components';

const theme = {
    colors: {
        main: '#212121',
        secondary: '#7676ff',
        pageBackground: '#171717',
        orange: '#ff6a00',
        lightBlue: '#bdceff',
        green: '#4ab051',
        red: '#f24646',
        white: '#e0e0e0',
    },
    fonts: { main: "'Roboto', sans-serif;", title: "'Comfortaa', cursive; " },
};

export const GlobalStyle = createGlobalStyle`
    p, a, li, strong {
        font-family: ${theme.fonts.main};
        text-decoration: none;
        color: ${theme.colors.white}
    }
    
    h1, h2 {
        font-family: ${theme.fonts.title};
        color: ${theme.colors.white}
    }
    
    button, h3, h4, h5, h6 {
        font-family: ${theme.fonts.title};
        color: ${theme.colors.white}
    }

    a {
        font-family: ${theme.fonts.main};
        font-weight: 700;
    }
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        text-rendering: optimizeLegibility;
    }

    .c-red {
        color: ${theme.colors.red}
    }
    .c-green {
        color: ${theme.colors.green}
    }
    .c-orange {
        color: ${theme.colors.orange}
    }
    
    body {
        margin: 0;
        scrollbar-width: thin;
        text-align: center;
        min-height: 100vh;
        background-color: ${theme.colors.pageBackground};
    }
    #root {
        min-height: 100vh;
        width: 100%;
    }
     /* shorthand classes */
     .hide-sm {
        @media (max-width: 800px) {
            display: none;
        }
     }

    .br-8 {
        border-radius: 8px;
    }
    .ff-main {
        font-family: 'Quicksand', sans-serif;
    }
    .ff-title {
        font-family: 'Quicksand', sans-serif;
    }
    .bs-bb {
        box-sizing: border-box;
    }
    .bs-cb {
        box-sizing: content-box;
    }
    .w-100 {
        width: 100%
    }
    .w-50 {
        width: 50%
    }
    .h-100 {
        height: 100%
    }
    .h-50 {
        height: 50%
    }
    .p-rel {
        position: relative;
    }
    .p-abs {
        position: absolute;
    }
    .p-fix {
        position: fixed;
    }
    .p-1 {
        padding: 1em;
    }
    .p-2 {
        padding: 2em;
    }
    .p-3 {
        padding: 3em;
    }
    .p-4 {
        padding: 4em;
    }
    .pl-1 {
        padding-left: 1em;
    }
    .pl-2 {
        padding-left: 2em;
    }
    .pl-3 {
        padding-left: 3em;
    }
    .pl-4 {
        padding-left: 4em;
    }
    .pt-1 {
        padding-top: 1em;
    }
    .pt-2 {
        padding-top: 2em;
    }
    .pt-3 {
        padding-top: 3em;
    }
    .pt-4 {
        padding-top: 4em;
    }
    .pr-1 {
        padding-right: 1em;
    }
    .pr-2 {
        padding-right: 2em;
    }
    .pr-3 {
        padding-right: 3em;
    }
    .pr-4 {
        padding-right: 4em;
    }
    .pb-1 {
        padding-bottom: 1em;
    }
    .pb-2 {
        padding-bottom: 2em;
    }
    .pb-3 {
        padding-bottom: 3em;
    }
    .pb-4 {
        padding-bottom: 4em;
    }
    .m-auto {
        margin: auto;
    }
    .ml-auto {
        margin-left: auto;
    }
    .mt-auto {
        margin-top: auto;
    }
    .mr-auto {
        margin-right: auto;
    }
    .mb-auto {
        margin-bottom: auto;
    }
    .m-1 {
        margin: 1em;
    }
    .m-2 {
        margin: 2em;
    }
    .m-3 {
        margin: 3em;
    }
    .m-4 {
        margin: 4em;
    }
    
    .m-1 {
        margin: 1em;
    }
    .m-2 {
        margin: 2em;
    }
    .m-3 {
        margin: 3em;
    }
    .m-4 {
        margin: 4em;
    }
    .ml-1 {
        margin-left: 1em;
    }
    .ml-2 {
        margin-left: 2em;
    }
    .ml-3 {
        margin-left: 3em;
    }
    .ml-4 {
        margin-left: 4em;
    }
    .ml-5 {
        margin-left: 5em;
    }
    .ml-6 {
        margin-left: 6em;
    }
    .mt-1 {
        margin-top: 1em;
    }
    .mt-2 {
        margin-top: 2em;
    }
    .mt-3 {
        margin-top: 3em;
    }
    .mt-4 {
        margin-top: 4em;
    }
    .mr-1 {
        margin-right: 1em;
    }
    .mr-2 {
        margin-right: 2em;
    }
    .mr-3 {
        margin-right: 3em;
    }
    .mr-4 {
        margin-right: 4em;
    }
    .mb-1 {
        margin-bottom: 1em;
    }
    .mb-2 {
        margin-bottom: 2em;
    }
    .mb-3 {
        margin-bottom: 3em;
    }
    .mb-4 {
        margin-bottom: 4em;
    }
    .d-flex {
        display:flex;
    }
    .fd-col {
        flex-direction: column;
    }
    .fd-row {
        flex-direction: row;
    }
    .ai-c {
        align-items: center;
    }
    .ai-b {
        align-items: baseline;
    }
    .jc-c {
        justify-content: center;
    }
    .jc-sb {
        justify-content: space-between;
    }
    .jc-sa {
        justify-content: space-around;
    }
    .jc-fe {
        justify-content: flex-end;
    }
    .jc-fs {
        justify-content: flex-start;
    }
    .fs-60 {
        font-size: 60px;
    }
    .fs-50 {
        font-size: 50px;
    }
    .fs-45 {
        font-size: 45px;
    }
    .fs-40 {
        font-size: 40px;
    }
    .fs-35 {
        font-size: 35px;
    }
    .fs-32 {
        font-size: 32px;
    }
    .fs-30 {
        font-size: 30px;
    }
    .fs-25 {
        font-size: 25px;
    }
    .fs-24 {
        font-size: 20px;
    }
    .fs-20 {
        font-size: 20px;
    }
    .fs-18 {
        font-size: 18px;
    }
    .fs-16 {
        font-size: 16px;
    }
    .fs-14 {
        font-size: 14px;
    }
    .fs-12 {
        font-size: 12px;
    }
    .mt-1 {
        margin-top: 1em;
    }
    .mt-2 {
        margin-top: 2em;
    }
    .mt-3 {
        margin-top: 3em;
    }
    .fw-300 {
        font-weight: 300;
    }
    .fw-500 {
        font-weight: 500;
    }
    .fw-700 {
        font-weight: 700;
    }
    .ta-l {
        text-align: left;
    }
    .ta-r {
        text-align: right;
    }
    .ta-c {
        text-align: center;
    }
    .td-n {
        text-decoration: none;
    }
    .c-hover {
        &:hover {
            cursor: pointer;
        }
    }
`;

export default theme;
