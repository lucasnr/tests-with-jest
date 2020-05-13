import React from 'react';
import { shallow, mount } from 'enzyme';
import Main from '../components/Main';

import Form from '../components/Main/Form';
import Card from '../components/Main/Card';

describe('Main', () => {
	it('renders without crashing and matches snapshot', () => {
		const wrapper = shallow(<Main />);
		expect(wrapper).toMatchSnapshot();
	});

	it('renders card on form submit', () => {
		const wrapper = mount(<Main />);

		wrapper.find(Form).simulate('submit');
		expect(wrapper.find(Card).length).toBe(1);

		wrapper.find(Form).simulate('submit');
		expect(wrapper.find(Card).length).toBe(2);
	});

	it('renders card with form data', () => {
		const wrapper = mount(<Main />);
		const form = wrapper.find('.form');

		const title = 'Title defined by enzyme';
		const input = form.find('input[name="title"]');
		input.simulate('change', {
			target: { value: title },
		});

		const text = 'Text defined by enzyme';
		const textarea = form.find('textarea[name="text"]');
		textarea.simulate('change', {
			target: { value: text },
		});

		form.simulate('submit');

		const card = wrapper.find(Card);
		expect(card.find('.card__title').text()).toBe(title);
		expect(card.find('.card__text').text()).toBe(text);
	});
});
