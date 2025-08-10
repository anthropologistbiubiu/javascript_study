import axios from 'axios'
import { getToken } from '../utils/auth'

const request = axios.create({
  baseURL: '/api',
  timeout: 5000
})

request.interceptors.request.use(config => {
  const token = getToken()
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})

request.interceptors.response.use(
  res => res.data,
  err => {
    alert(err.response?.data?.message || '请求失败')
    return Promise.reject(err)
  }
)

export default request