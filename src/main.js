import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import starships from './components/starships'
import films from './components/films'
import Vuetify from 'vuetify'
 
Vue.use(Vuetify)
Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {path: '/starships', name: 'starships', component: starships},
        {path: '/films', name: 'films', component: films},
    ],
    mode: 'history'
})

new Vue({
  el: '#app',
    router: router,
  render: h => h(App)
})
