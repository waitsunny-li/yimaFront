import axios, { AxiosRequestConfig, AxiosResponse, AxiosInstance } from 'axios'

const URLs = {
  test: 'http://test.lianaisl.cn/manager/',
  // line: 'https://www.lianaisl.cn/manager/'
}

// 1.创建实例
const $http: AxiosInstance = axios.create({
  baseURL: URLs.test,
  timeout: 5000,
  // withCredentials: true,
  maxRedirects: 0
})

// 2.请求拦截器
$http.interceptors.request.use(config => {
  // 必须返回config、因为要使用config，这个config就是包含着一些配置信息，如url ，请求头等
  // console.log('-------', config);
  // config.headers['cookie'] = 'hhhh'

  return config
}, err => { })

// 3.响应拦截器
$http.interceptors.response.use((res: AxiosResponse) => {
  // console.log(res.headers['Set-Cookie'], res);
  return res.data
}, err => {
  console.log(err)
})

export default $http