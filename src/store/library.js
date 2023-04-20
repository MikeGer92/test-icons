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

dom.watch();

export const libModule = {
  state: () => ({
    listIcons: {},
    curPrefix: 'fab',
    curIconName: 'adn',
    choosenList: [],
    iconsCounter: 0
  }),
  getters: {},
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
    },
    setCounter(state, num) {
      state.iconsCounter = num
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
      commit,
      dispatch
    }) {
      const iconsKeys = Object.keys(state.listIcons)
      let idx = Math.floor(Math.random() * iconsKeys.length)
      const iconKey = iconsKeys[idx]
      const iconObj = state.listIcons[iconKey]
      state.choosenList.push(Object.values(iconObj))
      commit('setChoosenList', state.choosenList)
      commit('setCounter', state.choosenList.length)
      if (state.choosenList.length > 1) {
        dispatch('getIcon')
      } else {
        setTimeout(() => {
          dispatch('setIcon')
        }, 0)
      }


    },
    setIcon({
      state,
      commit,
      dispatch
    }) {
      setTimeout(() => {
        if (state.choosenList.length >= 1) {
          setTimeout(() => {
            const next = state.choosenList.shift()
            commit('setCounter', state.choosenList.length)
            commit('setCurrPrefix', Object.values(next)[0])
            commit('setIconName', Object.values(next)[1])
          }, 3000)
        } else {
          commit('setCounter', state.choosenList.length)
        }
      }, 0)
    },
    getIcon({
      state,
      commit,
      dispatch
    }) {
      setTimeout(() => {
        if (state.choosenList.length > 1) {
          dispatch('setIcon')
        } else {
          setTimeout(() => {
            const next = state.choosenList.shift()
            commit('setCounter', state.choosenList.length)
            commit('setCurrPrefix', Object.values(next)[0])
            commit('setIconName', Object.values(next)[1])
          }, 3000)

        }
      }, 3000)
    }
  },
  namespaced: true
}