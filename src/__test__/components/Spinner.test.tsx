import React from 'react';
import { shallow } from 'enzyme';

import Spinner from '../../components/Spinner';

it('renders the component', () => {
    const component = shallow(<Spinner />);
    expect(component).toMatchSnapshot();
});
