import React from 'react';
import { shallow } from 'enzyme';

import MovieList from '../../components/MovieList';

it('renders without crashing with an empty string', () => {
    const component = shallow(<MovieList searchTerm={''} />);
    expect(component).toMatchSnapshot();
});
