import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';
import App from '../../src/components/app';
import DateComponent from '../../src/components/date';

xdescribe('<App />', () => {
  it('should have an initial startDate state', function () {
    const wrapper = mount(<App/>);
    const dateFromComponent = wrapper.state().startDate;
    const ourDate = new Date(new Date(Date.now()).getTime() - 7 * 24 * 60 * 60 * 1000);
    expect((dateFromComponent - ourDate) < 1000 ).to.equal(true);
  });

  it('should have an initial endDate state', function () {
    const wrapper = mount(<App/>);
    const dateFromComponent = wrapper.state().endDate;
    const ourDate = new Date(Date.now());
    expect((dateFromComponent - ourDate) < 1000 ).to.equal(true);
  });

  it('should have a child Date component', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find(DateComponent)).to.have.length(1);
  })

})
