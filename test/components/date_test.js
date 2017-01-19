import React from 'react';
import { expect } from 'chai';
import { spies } from 'chai-spies';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';
import DateComponent from '../../src/components/date';

describe('<DateComponent />', () => {
  const today = new Date(Date.now());
  const aWeekAgo = new Date(new Date(Date.now()).getTime() - 7 * 24 * 60 * 60 * 1000);
  const wrapper = mount(<DateComponent
    defaultStart={aWeekAgo}
    defaultEnd={today}
    onStartDateChange={spyStart}
    onEndDateChange={spyEnd} />);
  const spyStart = sinon.spy(wrapper.props().startDateChange);
  console.log(wrapper.props());
  const spyEnd = sinon.spy();

  it('should have an default values in props', function () {
    expect(wrapper.props().defaultStart).to.be.equal(aWeekAgo);
    expect(wrapper.props().defaultEnd).to.be.equal(today);
  });

  it('should call on date change function with date as argument', () => {
    wrapper.instance().startChange([today]);
    wrapper.update();

    console.log(spyStart.callCount);

  });

})
