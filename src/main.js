import {
    createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import {
    library,
    dom
} from "@fortawesome/fontawesome-svg-core";
import {
    FontAwesomeIcon
} from "@fortawesome/vue-fontawesome";
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

export default allIcons

dom.watch();

createApp(App)
    .use(store)
    .use(router)
    .component("font-awesome-icon", FontAwesomeIcon)
    .mount('#app')