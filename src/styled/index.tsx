import styled from 'styled-components';

export const Layout = styled.section`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 0px 5px 30px 5px;
    height: 100%;
    @media (min-width: 800px) {
        height: auto;
        margin-top: 12em;
        transition-duration: 0.3s;
        max-width: 800px;
        &.top {
            transition-duration: 0.4s;
            margin-top: 1em;
        }
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
export const SubTitle = styled.h2`
    color: ${(p) => p.theme.colors.white};
    font-size: 20px;
    margin-top: 12px;
    margin-top: 1em;
    @media (min-width: 800px) {
        max-width: 800px;
    }
`;
