import React from 'react';
import { shallow } from 'enzyme';

import Searchbar from '../../components/Searchbar';

it('renders the component', () => {
    const component = shallow(<Searchbar searchTerm={''} clear={() => null} change={() => null} />);
    expect(component).toMatchSnapshot();
});
