import React, {Component, PropTypes} from 'react';
import Profile from './components/Profile'
import RepoFilter from './components/RepoFilter'
import RepoList from './components/RepoList'

export default class User extends Component {
  constructor() {
    super()
    this.state = {filter: ''}
  }

  handleFilterUpdate = (filter) => {
    this.setState({filter})
  }

  render() {
    const {username} = this.props.params
    const {filter} = this.state
    return (
      <div className="container">
        <Profile username={username} />
        <h3>Repositories</h3>
        <RepoFilter onUpdate={this.handleFilterUpdate} />
        <RepoList filter={filter} username={username} />
      </div>
    );
  }
}

User.propTypes = {
  params: PropTypes.shape({
    username: PropTypes.string,
  }),
}
