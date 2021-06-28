import axios from '@/utils/axios'

export default {
  decrypt (data) {
    return axios.post('/weixin/decrypt', data)
  }
}
