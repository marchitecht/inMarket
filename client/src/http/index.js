import axios from 'axios'
import('dotenv').config()

const $api = axios.create({
    withCredentials: true,
    baseURL: process.env.BACK_URL,
})

$api.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config
})

export default $api