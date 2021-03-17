import React, { FC } from 'react';
import styled from 'styled-components';

import { IMovieApi } from '../types/movie';

const Container = styled.a`
    width: 100%;
    margin-top: 1em;
    display: flex;
    background: #262626;
    -webkit-box-shadow: 5px 5px 15px -6px rgba(0, 0, 0, 0.41);
    box-shadow: 5px 5px 15px -6px rgba(0, 0, 0, 0.41);
    padding: 10px 20px;
    @media (min-width: 800px) {
        border-radius: 6px;
        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px;
        border-left: 3px solid ${(p) => p.theme.colors.white};
        transition-duration: 0.2;
        &:hover {
            border-left: 3px solid ${(p) => p.theme.colors.secondary};
            transition-duration: 0.3;
            -webkit-box-shadow: 5px 5px 15px -6px rgba(0, 0, 0, 0.81);
            box-shadow: 5px 5px 15px -6px rgba(0, 0, 0, 0.81);
        }
    }
`;

const PosterImgWrapper = styled.div`
    max-width: 50px;
    min-width: 50px;
    height: auto;
    border-radius: 2px;
    overflow: hidden;
`;

const PosterImg = styled.img`
    width: 100%;
`;
const MovieDetails = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 12px;
    text-align: left;
    & p {
        color: ${(p) => p.theme.colors.white};
    }
`;

const MovieTitle = styled.p`
    color: ${(p) => p.theme.colors.main};
    font-weight: 600;
    @media (min-width: 800px) {
        font-size: 18px;
    }
`;
const Year = styled.p`
    color: ${(p) => p.theme.colors.main};
    font-weight: 600;
    margin-top: 8px;
    @media (min-width: 800px) {
        font-size: 18px;
    }
`;

const Movie: FC<IMovieApi> = ({ Poster: poster, Title: title, Type: type, Year: year, imdbID: id }) => {
    return (
        <Container href={`https://www.imdb.com/title/${id}`} rel='noopener' target='__blank'>
            <PosterImgWrapper>
                <PosterImg src={poster} />
            </PosterImgWrapper>
            <MovieDetails>
                <MovieTitle>{title}</MovieTitle>
                <Year>{year}</Year>
            </MovieDetails>
        </Container>
    );
};

export default Movie;
