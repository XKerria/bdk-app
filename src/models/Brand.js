import BaseModel from './BaseModel'

export default class Brand extends BaseModel {
  static entity = 'brands'

  static fields () {
    return {
      id: this.attr(null),
      name: this.attr(''),
      logo: this.attr(''),
      letter: this.attr('')
    }
  }
}
