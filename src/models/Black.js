import BaseModel from './BaseModel'

export default class Black extends BaseModel {
  static entity = 'blacks'

  static fields () {
    return {
      id: this.attr(null),
      name: this.attr(''),
      phone: this.attr(''),
      description: this.attr(''),
    }
  }
}
