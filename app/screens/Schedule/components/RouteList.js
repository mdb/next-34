import React, {Component, PropTypes} from 'react'
import {getSchedule} from '../../../utils/septa-api'
import Route from './Route'

export default class RouteList extends Component {
  constructor() {
    super()

    this.state = {
      stopName: '',
      inbound: [{}],
      outbound: [{}]
    };
  }

  componentWillMount() {
    this.getData();
  }

  getData() {
    getSchedule({
      lat: '39.947714',
      lng: '-75.223356',
      route: '34'
    }).then((schedule) => this.setState(schedule));
  }

  getClass() {
    return this.state.inbound.length > 1 ? 'loaded' : 'loading';
  }

  render() {
    return (
      <div className={'routes ' + this.getClass()}>
        <h2>{this.state.stopName}</h2>
        <Route direction="East to City Hall" stops={this.state.inbound} />
        <Route direction="West to 69th/Baltimore" stops={this.state.outbound} />
      </div>
    );
  }
}

RouteList.propTypes = {
  stopName: PropTypes.string,
  inbound: PropTypes.array,
  outbound: PropTypes.array
};
