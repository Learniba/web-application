import Vue from "vue"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus,faTrash,faCheckCircle,faTimesCircle } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPlus);
library.add(faTrash);
library.add(faCheckCircle);
library.add(faTimesCircle);


Vue.component('font-awesome-icon', FontAwesomeIcon)
export default FontAwesomeIcon