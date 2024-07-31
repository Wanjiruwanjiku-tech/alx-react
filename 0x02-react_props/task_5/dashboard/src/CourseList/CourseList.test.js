import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';

describe('<CourseList />', () => {
  let wrapper;
  const listCourses = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 },
  ];

  beforeEach(() => {
    wrapper = shallow(<CourseList listCourses={listCourses} />);
  });

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('renders the table and the correct number of rows when listCourses is not empty', () => {
    expect(wrapper.find('table')).toHaveLength(1);
    expect(wrapper.find(CourseListRow)).toHaveLength(5); // 2 header rows + 3 course rows
  });

  it('renders the correct content for the header rows', () => {
    const headerRows = wrapper.find(CourseListRow).slice(0, 2); // Select first two rows (header rows)
    expect(headerRows.at(0).prop('textFirstCell')).toBe('Available courses');
    expect(headerRows.at(1).prop('textFirstCell')).toBe('Course name');
    expect(headerRows.at(1).prop('textSecondCell')).toBe('Credit');
  });

  it('renders the correct content for course rows', () => {
    const courseRows = wrapper.find(CourseListRow).slice(2); // Select rows after the headers (course rows)
    expect(courseRows).toHaveLength(3);
    expect(courseRows.at(0).prop('textFirstCell')).toBe('ES6');
    expect(courseRows.at(0).prop('textSecondCell')).toBe(60);
    expect(courseRows.at(1).prop('textFirstCell')).toBe('Webpack');
    expect(courseRows.at(1).prop('textSecondCell')).toBe(20);
    expect(courseRows.at(2).prop('textFirstCell')).toBe('React');
    expect(courseRows.at(2).prop('textSecondCell')).toBe(40);
  });

  it('renders "No course available yet" when listCourses is empty', () => {
    wrapper = shallow(<CourseList listCourses={[]} />);
    expect(wrapper.find(CourseListRow)).toHaveLength(3); // 2 header rows + 1 row for no courses
    expect(wrapper.find(CourseListRow).at(2).prop('textFirstCell')).toBe('No course available yet');
    expect(wrapper.find(CourseListRow).at(2).prop('textSecondCell')).toBe(null);
  });
});