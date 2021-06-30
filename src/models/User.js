import { Model } from '@vuex-orm/core'

export default class User extends Model {
  static entity = 'users'

  static fields () {
    return {
      id: this.attr(null),
      name: this.attr(''),
      phone: this.attr(''),
      token: this.attr(''),
      firm_id: this.attr(null)
    }
  }

  static login (data) {
    return this.api().post('/api/client/auth/login', data)
  }

  static current() {
    return this.query().first()
  }
}
