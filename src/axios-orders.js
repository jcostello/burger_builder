import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-90e26.firebaseio.com/'
});

export default instance;