import axios from 'axios'

axios.defaults.withCredentials = true
axios.interceptors.request.use((config) => {
  return config
}, (err) => {
  return Promise.reject(err)
})

axios.interceptors.response.use((response) => {
  return response
}, (err) => {
  console.log(err)
  return Promise.reject(err)
})

export default axios
