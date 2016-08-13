import React, {Component, PropTypes} from 'react';
import Profile from './components/Profile'

export default class User extends Component {
  constructor() {
    super()
  }

  render() {
    const {username} = this.props.params
    return (
      <div className="container">
        <Profile username={username} />
      </div>
    );
  }
}

User.propTypes = {
  params: PropTypes.shape({
    username: PropTypes.string,
  }),
}
