import React, {Component, PropTypes} from 'react';
import StopList from './StopList';

export default class RouteListItem extends Component {
  cardinalDirection() {
    this.props.stops.length && this.props.direction === 'inbound' ? 'East' : 'West';
  }

  render() {
    return (
      <div>
        <h3>{this.cardinalDirection()}</h3>
        <StopList stops={this.props.stops} />
      </div>
    );
  }
}

RouteListItem.propTypes = {
  stops: PropTypes.array
};

RouteListItem.defaultProps = {
  stops: []
};
