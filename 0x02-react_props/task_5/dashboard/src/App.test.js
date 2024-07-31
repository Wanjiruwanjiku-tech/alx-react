import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Notifications from './Notifications/Notifications';
import Header from './Header/Header';
import Login from './Login/Login';
import Footer from './Footer/Footer';
import CourseList from './CourseList/CourseList';

describe('<App />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('contains the Notifications component', () => {
    expect(wrapper.find(Notifications)).toHaveLength(1);
  });

  it('contains the Header component', () => {
    expect(wrapper.find(Header)).toHaveLength(1);
  });

  it('contains the Footer component', () => {
    expect(wrapper.find(Footer)).toHaveLength(1);
  });

  it('contains the Login component when IsLoggedIn is false', () => {
    expect(wrapper.find(Login)).toHaveLength(1);
    expect(wrapper.find(CourseList)).toHaveLength(0);
  });

  it('contains the CourseList component when IsLoggedIn is true', () => {
    wrapper.find('button').simulate('click');
    expect(wrapper.find(Login)).toHaveLength(0);
    expect(wrapper.find(CourseList)).toHaveLength(1);
  });
  
  it('passes listNotifications prop to Notifications component', () => {
    const notificationsComponent = wrapper.find(Notifications);
    expect(notificationsComponent.prop('listNotifications')).toEqual([
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: expect.any(String) } },
    ]);
  });
});