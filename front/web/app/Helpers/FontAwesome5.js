import Vue from "vue"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus,faTrash } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPlus);
library.add(faTrash);


Vue.component('font-awesome-icon', FontAwesomeIcon)
export default FontAwesomeIcon