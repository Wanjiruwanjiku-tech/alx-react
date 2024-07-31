import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('<NotificationItem />', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<NotificationItem type="default" value="test" />);
        expect(wrapper.exists()).toBe(true);
    });

    it('renders correct html when value is provided', () => {
        const wrapper = shallow(<NotificationItem type="default" value="test" />);
        expect(wrapper.html()).toContain('test');
    });

    it('renders correct html when html is provided', () => {
        const wrapper = shallow(<NotificationItem type="default" html={{ __html: '<span>test</span>' }} />);
        expect(wrapper.html()).toContain('<span>test</span>');
    });

    it('renders with default props', () => {
        const wrapper = shallow(<NotificationItem type="default" />);
        expect(wrapper.prop('data-notification-type')).toEqual('default');
        expect(wrapper.text()).toEqual('');
    });
});