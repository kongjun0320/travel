import Vue from 'vue'
import Vuex from 'vuex'
import {state} from './state'

Vue.use(Vuex)

export default new Vuex.Store({
    state,
    actions:{
        changeCity({commit},cityname){
            commit('changeCityName',cityname)
        }
    },
    mutations:{
        changeCityName(state,cityname){
            state.city = cityname
            localStorage.city = cityname
        }
    }
})
