import React, {Component, PropTypes} from 'react';
import {getSchedule} from '../../../utils/septa-api'

export default class Profile extends Component {
  constructor() {
    super()
    this.state = {schedule: {
      inbound: [{
        day: ''
      }]
    }}
  }

  getUser() {
    const {username} = this.props
    getSchedule({
      lat: '39.947714',
      lng: '-75.223356',
      route: '34'
    }).then((schedule) => {
      this.setState({schedule});
    });
  }

  componentWillMount() {
    this.getUser();
  }

  render() {
    const {schedule} = this.state;
    return (
      <div>
        <section className="user">
          <h2>{schedule.inbound[0].day}</h2>
        </section>
      </div>
    );
  }
}

Profile.propTypes = {
  username: PropTypes.string.isRequired
}
