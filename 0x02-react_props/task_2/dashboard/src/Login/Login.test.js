import React from "react";
import { shallow } from "enzyme";
import Login from "./Login";

describe("Login", () => {
    it("renders without crashing", () => {
        shallow(<Login />);
    })

    it("renders 2 input and label tags each", () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find('input').length).toBe(2);
        expect(wrapper.find('label').length).toBe(2);
    });
});