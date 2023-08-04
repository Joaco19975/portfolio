import './assets/main.css'


import { createApp } from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { 
    faUserSecret, 
    faBars,
    faFire,
    faHomeUser,
    faScrewdriverWrench,
    faLaptopCode,
    faFile
    
} from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faTwitter, faLinkedin, faGithub, faContao } from '@fortawesome/free-brands-svg-icons';

/* add icons to the library */
library.add(faUserSecret);
library.add(faBars);
library.add(faFire);
library.add(faHomeUser);
library.add(faScrewdriverWrench);
library.add(faLaptopCode); 
library.add(faInstagram);
library.add(faTwitter);
library.add(faLinkedin);
library.add(faGithub);
library.add(faContao);
library.add(faFile);





createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
