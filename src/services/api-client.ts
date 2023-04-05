import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '77253cf5e4b7415b88ec958e6365e43c',
  },
});
