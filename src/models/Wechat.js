import { Model } from '@vuex-orm/core'

export default class Wechat extends Model {
  static entity = 'wechats'

  static fields () {
    return {
      openid: this.attr(null),
      session_key: this.attr(''),
      unionid: this.attr(''),
      phone: this.attr('')
    }
  }

  static decrypt (data) {
    return this.api().post('/wechat/decrypt', data)
  }

  static login (data) {
    return this.api().post('/wechat/login', data)
  }

  static register (data) {
    return this.api().post('/wechat/register', data)
  }
}
