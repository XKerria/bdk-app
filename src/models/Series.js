import BaseModel from './BaseModel'

export default class Series extends BaseModel {
  static entity = 'series'

  static fields () {
    return {
      id: this.attr(null),
      name: this.attr(''),
      price: this.attr(''),
      image: this.attr(''),
      brand_id: this.attr(null),
    }
  }

  static fetchByBrandId (brandId) {
    return this.api().get(`/api/client/brands/${brandId}/series`)
  }
}
