import BaseModel from './BaseModel'
import Vehicle from './Vehicle'

export default class Firm extends BaseModel {
  static entity = 'firms'

  static fields () {
    return {
      id: this.attr(null),
      name: this.attr(''),
      logo: this.attr(''),
      image: this.attr(''),
      phone: this.attr(''),
      address: this.attr(''),
      brands: this.attr([]),
      created_at: this.attr(''),
      updated_at: this.attr(''),
      amount: this.attr(0),
      remain: this.attr(0),
      vehicles: this.hasMany(Vehicle, 'firm_id')
    }
  }
}
