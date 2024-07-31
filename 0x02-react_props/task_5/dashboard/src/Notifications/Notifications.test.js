import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Notifications tests', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders correct number of notifications', () => {
    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
    ];
    const wrapper = shallow(<Notifications listNotifications={listNotifications} />);
    expect(wrapper.find('NotificationItem')).toHaveLength(2);
  });

  it('renders "No new notification for now" when listNotifications is empty', () => {
    const wrapper = shallow(<Notifications listNotifications={[]} />);
    expect(wrapper.text()).toContain('No new notification for now');
  });
});