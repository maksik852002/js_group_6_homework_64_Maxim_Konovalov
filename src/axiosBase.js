import axios from 'axios';

const axiosBlog = axios.create({
  baseURL: 'https://base-konovalov.firebaseio.com/'
})

export default axiosBlog;