import {
  createStore
} from 'vuex'


import {
  libModule
} from './library';


export default createStore({

  modules: {
    lib: libModule
  }
})