import React from "react";
import { shallow } from "enzyme";
import CourseListRow from "./CourseListRow";

describe("<CourseListRow />", () => {
    it('renders one cell with colspan=2 when isHeader=true', () => {
        const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="First" />);
        expect(wrapper.find('th')).toHaveLength(1);
        expect(wrapper.find('th').prop('colSpan')).toEqual('2');
    });

    it('renders two cells when textSecondCell is not null', () => {
        const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="First" textSecondCell="Second" />);
        expect(wrapper.find('td')).toHaveLength(2);
    });

    // When isHeader is false

    it('renders correctly two td elements within a tr element with the textFirstCell and textSecondCell values', () => {
        const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="First" textSecondCell="Second" />);
        expect(wrapper.find('tr').children()).toHaveLength(2);
        expect(wrapper.find('td').at(0).text()).toEqual('First');
        expect(wrapper.find('td').at(1).text()).toEqual('Second');
    });
});