import BaseModel from './BaseModel'

export default class Banner extends BaseModel {
  static entity = 'banners'

  static fields () {
    return {
      id: this.attr(null),
      image: this.attr(''),
      link: this.attr('')
    }
  }
}
