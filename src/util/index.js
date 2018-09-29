import axios from 'axios'

let node_dev = process.env.NODE_ENV   //开发环境 development --  生产环境 production

let baseURL = node_dev == 'development' ? '/api' : '/'

let instance = axios.create({
  baseURL,
  timeout: 15000
})

const $axios = {
  get (url, data, config) {
    return new Promise((resolve, reject) => {
      instance.get(url,  {
        params: data
      }).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  },

  fetch (url, data, config, method='post') {
    return new Promise((resolve, reject) => {
      instance[method](url, data, config).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  },

  post (url, data, config) {
    return this.fetch(url, data, config)
  },

  put (url, data, config) {
    return this.fetch(url, data, config, 'put')
  }

}

export default $axios
