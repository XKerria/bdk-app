import axios from '@/utils/axios'
import Vue from 'vue'
import Vuex from 'vuex'
import {baseUrl} from '@/config'

import VuexORM from '@vuex-orm/core'
import VuexORMAxios from '@vuex-orm/plugin-axios'
import Banner from '@/models/Banner'

Vue.use(Vuex)
const database = new VuexORM.Database()

database.register(Banner)

VuexORM.use(VuexORMAxios, {
  axios,
  baseURL: baseUrl
})

export default new Vuex.Store({
  plugins: [VuexORM.install(database)]
})
