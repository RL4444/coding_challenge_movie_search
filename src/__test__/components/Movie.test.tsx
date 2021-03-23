import React from 'react';
import { shallow } from 'enzyme';

import Movie from '../../components/Movie';
import { IMovieApi } from '../../types/movie';

const MOCK_DATA: IMovieApi = {
    Poster: 'A test String',
    Title: 'A test String',
    Type: 'A test String',
    Year: 'A test String',
    imdbID: 'A test String',
};

it('renders without crashing', () => {
    const { Poster, Title, Type, Year, imdbID } = MOCK_DATA;

    const component = shallow(<Movie Poster={Poster} Title={Title} Type={Type} Year={Year} imdbID={imdbID} />);

    expect(component).toMatchSnapshot();
});
