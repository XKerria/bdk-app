import BaseModel from './BaseModel'

export default class Vehicle extends BaseModel {
  static entity = 'vehicles'

  static fields () {
    return {
      id: this.attr(null),
      amount: this.attr(0),
      remain: this.attr(0),
      series: this.attr(null),
      series_id: this.attr(null),
      firm_id: this.attr(null),
      firm: this.attr(null)
    }
  }

  static fetchByFirmId (id) {
    return this.api().get(`/api/client/firms/${id}/vehicles`)
  }

  static fetchBySeriesId (id) {
    return this.api().get(`/api/client/series/${id}/vehicles`)
  }
}
