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
        let symbolSize = 32;
        let symbol = "circle";
        switch (v.category) {
          case "0":
            //symbol = "circle"
            symbolSize = 15;
            break;
          case "1":
            //symbol = "rect"
            symbolSize = 15;
            break;
          case "2":
            //symbol = "diamond"
            symbolSize = 25;
            break;
          case "3":
            //symbol = "diamond"
            symbolSize = 25;
            break;
          case "4":
            //symbol = "roundRect"
            symbolSize = 5
            break;
          case "5":
            //symbol = "roundRect"
            symbolSize = 10
            break;
        }
        dataArr.push({
          "name": v.name,
          "symbol": symbol,
          "symbolSize": symbolSize,
          "category": category[v.category],
          "draggable": true,
        })
      })
      return dataArr
    },
    doneLinks(state) {
      let linksArr = [];
      ObjForEach(state.links, (v, k) => {
        let formatObj = Object.assign(v, { value: 1 });
        switch (k) {
          case "0":
            formatObj.value = 50
            break;
          case "1":
            formatObj.value = 100
            break;
          case "2":
            formatObj.value = 70
            break;
          case "3":
            formatObj.value = 70
            break;
          case "4":
            formatObj.value = 0
            break;
        }
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
