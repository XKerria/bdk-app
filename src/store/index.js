import axios from '@/utils/axios'
import Vue from 'vue'
import Vuex from 'vuex'
import {baseUrl} from '@/config'

import VuexORM from '@vuex-orm/core'
import VuexORMAxios from '@vuex-orm/plugin-axios'
import Wechat from '@/models/Wechat'
import Brand from '@/models/Brand'
import Banner from '@/models/Banner'
import User from '@/models/User'
import Firm from '@/models/Firm'

Vue.use(Vuex)
const database = new VuexORM.Database()

database.register(Wechat)
database.register(Brand)
database.register(Banner)
database.register(User)
database.register(Firm)

VuexORM.use(VuexORMAxios, {
  axios,
  baseURL: baseUrl
})

export default new Vuex.Store({
  plugins: [VuexORM.install(database)]
})
