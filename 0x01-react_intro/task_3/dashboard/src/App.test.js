import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("App", () => {
   it('renders App components without crashing', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.exists()).toBe(true); 
   });

   it('renders a div with the class App-header', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('.App-header').length).toBe(1);
   });

   it('renders a div with the class App-footer', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App-footer').length).toBe(1);
  });
  
});