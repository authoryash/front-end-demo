import axios from 'axios';
import CONSTANTS from '@constants';

const Axios = axios.create({
  baseURL: CONSTANTS.backendURL,
  headers: {
    'Content-Type': 'application/json'
  }
});
export default Axios;
