import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('<CourseListRow />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<CourseListRow textFirstCell="Test" />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders a header row with one cell when textSecondCell is not provided', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Test" />);
    expect(wrapper.find('th')).toHaveLength(1);
    expect(wrapper.find('th').prop('colSpan')).toBe("2");
    expect(wrapper.find('th').text()).toBe('Test');
  });

  it('renders a header row with two cells when textSecondCell is provided', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Test" textSecondCell="Second Test" />);
    expect(wrapper.find('th')).toHaveLength(2);
    expect(wrapper.find('th').at(0).text()).toBe('Test');
    expect(wrapper.find('th').at(1).text()).toBe('Second Test');
  });

  it('renders a regular row with two td elements', () => {
    const wrapper = shallow(<CourseListRow textFirstCell="Test" textSecondCell="Second Test" />);
    expect(wrapper.find('td')).toHaveLength(2);
    expect(wrapper.find('td').at(0).text()).toBe('Test');
    expect(wrapper.find('td').at(1).text()).toBe('Second Test');
  });

  it('renders correctly when textSecondCell is null', () => {
    const wrapper = shallow(<CourseListRow textFirstCell="Test" textSecondCell={null} />);
    expect(wrapper.find('td')).toHaveLength(2);
    expect(wrapper.find('td').at(0).text()).toBe('Test');
    expect(wrapper.find('td').at(1).text()).toBe('');
  });

  it('renders correctly when textSecondCell is a number', () => {
    const wrapper = shallow(<CourseListRow textFirstCell="Test" textSecondCell={123} />);
    expect(wrapper.find('td')).toHaveLength(2);
    expect(wrapper.find('td').at(0).text()).toBe('Test');
    expect(wrapper.find('td').at(1).text()).toBe('123');
  });
});
