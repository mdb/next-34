import moxios from 'moxios';
import {spy} from 'sinon';
import {getSchedule} from './septa-api';
import {getMockSchedule} from './septa-api.stub';

describe('Septa API', () => {

  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  describe('getSchedule', () => {
    it('should make a request to the proper url for the given route, lat, and long', done => {
      const schedule = getMockSchedule();
      const successHandler = spy();

      moxios.stubRequest('https://septascheduler.herokuapp.com/point?route=34&lat=39.947714&lng=-75.223356', {
        status: 200,
        response: schedule,
      });

      getSchedule({
        route: '34',
        lat: '39.947714',
        lng: '-75.223356'
      }).then(successHandler);

      moxios.wait(() => {
        expect(successHandler).to.have.been.calledOnce;
        expect(successHandler).to.have.been.calledWith(schedule);
        done();
      });
    });
  });
});
