import React from 'react';
import { expect } from 'chai';
import { spies } from 'chai-spies';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';
import DateComponent from '../../src/components/date';

describe('<DateComponent />', () => {
  const today = new Date(Date.now());
  const aWeekAgo = new Date(new Date(Date.now()).getTime() - 7 * 24 * 60 * 60 * 1000);
  const wrapper = mount(<DateComponent defaultStart={aWeekAgo} defaultEnd={today} onDateChange={spy}/>);
  const spy = sinon.spy();
  const spyWrapper = sinon.spy(wrapper.instance().dateChange);

  it('should have an initial state with dates from props', function () {
    expect(wrapper.props().defaultStart).to.be.equal(aWeekAgo);
    expect(wrapper.props().defaultEnd).to.be.equal(today);
    expect(wrapper.state().startDate).to.be.equal(wrapper.props().defaultStart);
    expect(wrapper.state().endDate).to.be.equal(wrapper.props().defaultEnd);
  });

  it('should update state.startDate when onChangeStart is called', () => {
    expect(wrapper.state().startDate).to.be.equal(wrapper.props().defaultStart);
    wrapper.instance().onChangeStart([today]);
    wrapper.update();
    expect(wrapper.state().startDate).to.be.equal(today);
  })

  it('should update state.endDate when onChangeEnd is called', () => {
    expect(wrapper.state().endDate).to.be.equal(wrapper.props().defaultEnd);
    wrapper.instance().onChangeEnd([today]);
    wrapper.update();
    expect(wrapper.state().endDate).to.be.equal(today);
  })

  // it('should call dateChange on click event', () => {
  //   const e = {preventDefault: sinon.spy()};
  //   expect(wrapper.find('[type="submit"]').length).to.equal(1);
  //   wrapper.find('[type="submit"]').simulate('submit', e);
  //   expect(spyWrapper.calledOnce).to.be.true;
  //
  // })

})
