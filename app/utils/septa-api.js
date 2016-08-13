import axios from 'axios';

const BASE_URL = 'https://septascheduler.herokuapp.com';

export {getSchedule};

function getSchedule(options = {}) {
  const url = `${BASE_URL}/point?route=${options.route}&lat=${options.lat}&lng=${options.lng}`;

  return axios.get(url).then(response => response.data);
}
