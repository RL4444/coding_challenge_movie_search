import styled from 'styled-components';

export const Layout = styled.section`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 0px 5px 30px 5px;
    @media (min-width: 800px) {
        max-width: 800px;
    }
`;

export const Title = styled.h1`
    color: ${(p) => p.theme.colors.secondary};
    font-size: 30px;
    margin-top: 12px;
    margin-top: 1em;
    @media (min-width: 800px) {
        max-width: 800px;
    }
`;
