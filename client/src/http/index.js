import axios from 'axios'


const $api = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:5000/',

})

$api.interceptors.request.use(config => {
    // eslint-disable-next-line no-unused-expressions
   
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config
})

export default $api