// Notifications.test.js
import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('<Notifications />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders three NotificationItem items', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('NotificationItem').length).toBe(3);
  });

  it('renders the text Here is the list of notifications', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('p').text()).toBe('Here is the list of notifications');
  });
  it('first NotificationItem element renders correct html', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    const firstItem = wrapper.find(NotificationItem).at(0);
    expect(firstItem.html()).toContain('New course available');
});
});
