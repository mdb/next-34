import React, {Component, PropTypes} from 'react'
import {getSchedule} from '../../../utils/septa-api'
import Route from './Route'

export default class RouteList extends Component {
  constructor() {
    super()

    this.state = {
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
      <ul className={'routes ' + this.getClass()}>
        <Route direction="inbound" stops={this.state.inbound} />
        <Route direction="outbound" stops={this.state.outbound} />
      </ul>
    );
  }
}

RouteList.propTypes = {
  inbound: PropTypes.array,
  outbound: PropTypes.array
};
