import React, {Component, PropTypes} from 'react';
import RouteList from './components/RouteList';

export default class Schedule extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="container">
        <RouteList />
      </div>
    );
  }
}