import React from 'react';
import { shallow } from 'enzyme';
import Header from '../components/Header';

describe('Header', () => {
	it('renders without crashing and matches snapshot', () => {
		const wrapper = shallow(<Header />);
		expect(wrapper).toMatchSnapshot();
	});
});
