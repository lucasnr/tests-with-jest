import React from 'react';
import { shallow, mount } from 'enzyme';
import Form from '../components/Main/Form';

describe('Form', () => {
	it('renders without crashing and matches snapshot', () => {
		const wrapper = shallow(<Form />);
		expect(wrapper).toMatchSnapshot();
	});

	it('calls function on submit', () => {
		const mockFn = jest.fn();
		const wrapper = mount(<Form onSubmit={mockFn} />);

		wrapper.simulate('submit');
		expect(mockFn).toHaveBeenCalled();

		wrapper.simulate('submit');
		expect(mockFn).toHaveBeenCalledTimes(2);
	});
});
