import axios from '@/utils/axios'
import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
import {baseUrl} from '@/config'

import current from './current'

import VuexORM from '@vuex-orm/core'
import VuexORMAxios from '@vuex-orm/plugin-axios'
import Wechat from '@/models/Wechat'
import Banner from '@/models/Banner'
import Brand from '@/models/Brand'
import Series from '@/models/Series'
import User from '@/models/User'
import Firm from '@/models/Firm'
import Vehicle from '@/models/Vehicle'

Vue.use(Vuex)
const database = new VuexORM.Database()

database.register(User, 'user')
database.register(Wechat)
database.register(Brand)
database.register(Series)
database.register(Banner)
database.register(Firm)
database.register(Vehicle)

VuexORM.use(VuexORMAxios, {
  axios,
  baseURL: baseUrl
})

const vuexPersisted = new createPersistedState({
  storage: {
    getItem: key => uni.getStorageSync(key),
    setItem: (key, value) => uni.setStorageSync(key, value),
    removeItem: key => uni.removeStorageSync(key)
  },
  paths: ['current.user', 'current.firm']
})

export default new Vuex.Store({
  modules: {
    current,
  },
  plugins: [
    VuexORM.install(database),
    vuexPersisted
  ]
})
