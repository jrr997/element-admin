import axios from 'axios'

export function request(config) {
  // 新建一个axios实例
  const instance = axios.create({
    baseURL: 'http://127.1.1.0:3001/api',
    timeout: 5000
  })
  return instance(config)
}