import axios from 'axios'
import NGProgress from 'nprogress'

import { event } from '@/utils'
import { storage } from '@/services'

export const http = {
  request (method, url, data, success, error) {
    axios.request({
      url,
      data,
      method: method.toLowerCase()
    }).then(success, error)
  },

  get (url, success, error) {
    return this.request('get', url, {}, success, error)
  },

  post (url, data, success, error) {
    return this.request('post', url, data, success, error)
  },

  put (url, data, success, error) {
    return this.request('put', url, data, success, error)
  },

  delete (url, data = {}, success, error) {
    return this.request('delete', url, data, success, error)
  },

  init () {
    axios.defaults.baseURL = '/api'

    // config authorization
    axios.interceptors.request.use(config => {
      config.headers.Authorization = `Bearer ${storage.get('jwt-token')}`

      return config
    })

    // intercept the response
    axios.interceptors.response.use(response => {
      NGProgress.done()

      const token = response.headers['Authorization'] || response.data['token']
      if (token) {
        storage.set('jwt-token', token)
      }

      return response
    }, error => {
      NGProgress.done()

      if (error.response.status === 400 || error.response.status === 401) {
        if (!(error.config.method === 'post' && /\/api\/me\/?$/.test(error.config.url))) {
          // the token must have expired. Log out
          event.emit('logout')
        }
      }
    })
  }
}
