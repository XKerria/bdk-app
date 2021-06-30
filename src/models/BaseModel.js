import { Model } from '@vuex-orm/core'

export default class BaseModel extends Model {
  static fetch (params) {
    return this.api().get(`/api/client/${this.entity}`, { params })
  }

  static show (id, params) {
    return this.api().get(`/api/client/${this.entity}/${id}`, { params })
  }

  static create (data) {
    return this.api().post(`/api/client/${this.entity}`, data)
  }

  static update (id, data) {
    return this.api().put(`/api/client/${this.entity}/${id}`, data)
  }

  static remove (id) {
    return this.api().delete(`/api/client/${this.entity}/${id}`, { delete: id })
  }
}
