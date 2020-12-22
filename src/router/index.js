import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../components/home'
import models from '../components/models'
import cart from '../components/cart'
import display from '../components/display'
import landingpage from '../components/landingpage'
import checkout from '../components/checkout'
import make from '../components/modelsbreakdown/make'
import type from '../components/modelsbreakdown/type'
import search from '../components/modelsbreakdown/search'
import budget from '../components/modelsbreakdown/budget'
import displacement from '../components/modelsbreakdown/displacement'
import catalogue from '../components/catalogue/catalogue'
import compare from '../components/compare'
import termsandcondition from '../components/termsandcondition'
import success from '../components/success'
import purchase from '../components/purchase'

Vue.use(VueRouter)

const routes = [

  { path: '/models', component: models },
  { path: '/purchase', component: purchase },
  { path: '/cart/:id/:value', component: cart },
  { path: '/display/:id', component: display },
  { path: '/', component: home,  },
  { path: '/checkout/:id/:value', component: checkout },
  { path: '/landingpage', component: landingpage },
  { path: '/catalogue', component: catalogue },
  { path: '/success/:id', component: success },

  // models breakdown
  { path: '/model-by-make/:id', component: make },
  { path: '/model-by-type/:id', component: type },
  { path: '/model-by-search/:id', component: search },
  { path: '/model-by-budget/:id', component: budget },
  { path: '/model-by-displacement/:id', component: displacement },
  { path: '/compare', component: compare },
  { path: '/termsandcondition', component: termsandcondition },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
