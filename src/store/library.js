import {
  library,
  dom
} from "@fortawesome/fontawesome-svg-core";

import {
  fas
} from '@fortawesome/free-solid-svg-icons'
import {
  fab
} from '@fortawesome/free-brands-svg-icons';
import {
  far
} from '@fortawesome/free-regular-svg-icons';
library.add(fas, far, fab)

const allIcons = Object.assign(fas, far, fab)
console.log(allIcons)

dom.watch();
export const libModule = {
  state: () => ({
    listIcons: {},
    curPrefix: 'fab',
    curIconName: 'adn',
    choosenList: []
  }),
  getters: {
    randomIcon(state, getters) {
      if (state.choosenList.length > 1) {
        setTimeout(() => {
          this.getIcon()
        }, 3000)
      } else {
        this.getIcon()
      }
    },
  },
  mutations: {
    setListIcons(state, obj) {
      state.listIcons = obj
    },
    setCurrPrefix(state, prefix) {
      state.curPrefix = prefix
    },
    setIconName(state, name) {
      state.curIconName = name
    },
    setChoosenList(state, list) {
      state.choosenList = list
    }
  },
  actions: {
    setIcons({
      state,
      commit
    }) {
      commit('setListIcons', allIcons)
    },
    addIcon({
      state,
      commit
    }) {
      const iconsKeys = Object.keys(state.listIcons)
      let idx = Math.floor(Math.random() * iconsKeys.length)
      const iconKey = iconsKeys[idx]
      const iconObj = state.listIcons[iconKey]
      state.choosenList.push(Object.values(iconObj))
      commit('setChoosenList', state.choosenList)
    },
    getIcon({
      state,
      commit
    }) {
      if (state.choosenList.length > 1) {
        // setTimeout(() => {
        const p = state.choosenList.shift()
        console.log(p)
        commit('setCurrPrefix', Object.values(p)[0])
        commit('setIconName', Object.values(p)[1])
        // if (state.choosenList.length > 1) {
        // }
        // }, 3000)
      } else {
        commit('setCurrPrefix', Object.values(state.choosenList[0])[0])
        commit('setIconName', Object.values(state.choosenList[0])[1])
      }
    },
  },
  namespaced: true
}