import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import Card from 'primevue/card'
import Button from 'primevue/button'
import Image from 'primevue/image'
import Aura from '@primevue/themes/aura'

const app = createApp(App);
app.use(PrimeVue,{ripple:true,
    theme:{preset:Aura, options:
            {prefix:'p', darkModeSelector:'system', cssLayer:false}
        }
    }
);

app.component('pv-card',Card);
app.component('pv-buttton',Button)
app.component('pv-image',Image)
app.mount('#app');
