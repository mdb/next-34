import React, {Component, PropTypes} from 'react';

export default class StopList extends Component {
  render() {
    const stops = this.props.stops;

    return (
      <div>
        <h3>{this.props.direction}</h3>
        <ol className="stops">
          {stops.map(function(stop, i) {
            return (
              <li key={'stop-' + i}>
                <time>{stop.time}m</time>
              </li>
            );
          })}
        </ol>
      </div>
    );
  }
}

StopList.propTypes = {
  stops: PropTypes.array,
  direction: PropTypes.string
};

StopList.defaultProps = {
  direction: '',
  stops: [{
    stopName: ''
  }]
};
