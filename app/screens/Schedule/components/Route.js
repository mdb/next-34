import React, {Component, PropTypes} from 'react';
import StopList from './StopList';

export default class RouteListItem extends Component {
  render() {
    return (
      <StopList direction={this.props.direction} stops={this.props.stops} />
    );
  }
}

RouteListItem.propTypes = {
  stops: PropTypes.array,
  direction: PropTypes.string
};

RouteListItem.defaultProps = {
  stops: [],
  direction: ''
};
