import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import VueApexCharts from "vue3-apexcharts";

// SCSS
import './plugins/themeStyle';

loadFonts()

createApp(App)
    .use(store)
    .use(router)
    .use(vuetify)
    .use(VueApexCharts)
    .mount('#app')
