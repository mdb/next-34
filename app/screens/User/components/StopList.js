import React, {Component, PropTypes} from 'react';

export default class StopList extends Component {
  render() {
    const stops = this.props.stops;

    return (
      <ul className="stops">
        <h3>{stops[0].stopName}</h3>
        {stops.map(function(stop, i) {
          return (
            <li key={'stop-' + i}>
              <time>{stop.time}</time>
            </li>
          );
        })}
      </ul>
    );
  }
}

StopList.propTypes = {
  stops: PropTypes.array
};

StopList.defaultProps = {
  stops: [{
    stopName: ''
  }]
};
