import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import starships from './components/starships'
import films from './components/films'

Vue.use(VueRouter)

let router = new VueRouter({
    routes: [
        {path: '/starships', name: starships, component: starships},
        {path: '/films', name: films, component: films},
    ]
})

new Vue({
  el: '#app',
    router: router,
  render: h => h(App)
})
