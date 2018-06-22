import {} from '../mutation-types.js'
import { GETHISTORY, EDITHISTORY } from '../action-types.js'
import { GETHISTORY_AJAX, EDITHISTORY_AJAX } from '@/ajax'
import category from "@/ajax/config/category"
import { ObjForEach } from "@/modules/objectProcessing"
export default {
  namespaced: true,
  state: {
    units: {},
    links: []
  },
  getters: {
    doneUnits(state) {
      let dataArr = [];
      ObjForEach(state.units, (v, k) => {
        dataArr.push({
          "name": v.name,
          "symbolSize": 32,
          "category": category[v.category],
          "draggable": true
        })
      })
      return dataArr
    },
    doneLinks(state) {
      let linksArr = [];
      ObjForEach(state.links, (v, k) => {
        let formatObj = v.close ? Object.assign(v, { value:1 }) : v
        linksArr.push(formatObj)
      })
      console.log(linksArr)
      return linksArr
    }
  },
  mutations: {

  },
  actions: {
    [GETHISTORY]({ commit, state }, payload) {
      return GETHISTORY_AJAX(payload).then((res) => {
        state.units = res.data;
        state.links = res.links
        return res
      })
    },
    [EDITHISTORY]({ commit, state }, payload) {
      return EDITHISTORY_AJAX(payload)
    }
  }
}
