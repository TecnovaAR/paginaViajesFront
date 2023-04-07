import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/css/index.css'

// Font Awesome Imports
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

// Icons to be imported
import { faFacebook, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faMobile, faLocationDot } from '@fortawesome/free-solid-svg-icons'

library.add(faFacebook, faInstagram, faLinkedin, faYoutube, faEnvelope, faMobile, faLocationDot)

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
