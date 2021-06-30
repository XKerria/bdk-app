import BaseModel from './BaseModel'
import Series from './Series'

export default class Brand extends BaseModel {
  static entity = 'brands'

  static fields () {
    return {
      id: this.attr(null),
      name: this.attr(''),
      logo: this.attr(''),
      letter: this.attr(''),
      brand: this.hasMany(Series, 'brand_id')
    }
  }
}
