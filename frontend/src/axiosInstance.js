import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://redboost-7d8t.onrender.com/',
  withCredentials: true, // Important for sessions
})

export default axiosInstance
