import React from 'react';
import {mount} from 'enzyme';
import {spy} from 'sinon';
import {getMockSchedule} from '../../../utils/septa-api.stub';
import RouteList from './RouteList';

describe('RouteList', () => {
  it('should render with a "loading" class by default', () => {
    const wrapper = mountComponent();

    expect(wrapper.find('div.loading')).to.have.length(1);
  });

  it('should invoke the getSchedule method', () => {
    const getScheduleSpy = getGetScheduleSpy();

    mountComponent(getScheduleSpy);

    expect(getScheduleSpy).to.have.been.calledOnce;
  });

  it('should list the stops for each route', done => {
    const totalRoutes = 2;
    const wrapper = mountComponent();

    setTimeout(() => {
      expect(wrapper.find('ol.stops')).to.have.length(totalRoutes);
      done();
    });
  });
});

function mountComponent(scheduleSpy) {
  const getScheduleSpy = scheduleSpy || getGetScheduleSpy(getMockSchedule());

  return mount(<RouteList getSchedule={getScheduleSpy} />);
}

function getGetScheduleSpy(resolvedValue = getMockSchedule()) {
  return spy(() => Promise.resolve(resolvedValue));
}
