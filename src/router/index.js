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
import buyback from '../components/buyback'
import newtwowheeler from '../components/newtwowheeler'
import newtwowheeler2 from '../components/newtwowheeler2'
import finance from '../components/finance'
import test from '../components/test'
import loanagainstvehicle from '../components/loanagainstvehicle'
import bannerform from '../components/bannerform'
import calculator from '../components/calculator'
import buyback2 from '../components/buyback2'
import pie from '../components/pie'
import displaytest from '../components/displaytest'
import testnew from '../components/testnew'
import play from '../components/play'
import comparetest from '../components/comparetest'
import carttest from '../components/carttest'


Vue.use(VueRouter)

const routes = [

  { path: '/models', component: models },
  { path: '/pie', component: pie },
  { path: '/calculator', component: calculator},
  { path: '/buy-back', component: buyback2 },
  { path: '/emi', component: calculator },
  { path: '/play', component: play },
  { path: '/bannerform', component: bannerform },
  { path: '/test', component: test },
  { path: '/a', component: testnew },
  { path: '/purchase', component: purchase },
  { path: '/cart/:id/:value', component: cart },
  { path: '/display/:id', component: display },
  { path: '/display2/:id', component: displaytest },
  { path: '/', component: home},
  { path: '/checkout/:id/:value', component: checkout },
  { path: '/landingpage', component: landingpage },
  { path: '/catalogue', component: catalogue },
  { path: '/comparetest', component: comparetest },
  { path: '/carttest', component: carttest },
  { path: '/success/:id', component: success },

  // models breakdown
  { path: '/model-by-make/:id', component: make },
  { path: '/model-by-type/:id', component: type },
  { path: '/model-by-search/:id', component: search },
  { path: '/model-by-budget/:id', component: budget },
  { path: '/model-by-displacement/:id', component: displacement },
  { path: '/compare', component: compare },
  { path: '/termsandcondition', component: termsandcondition },
  { path: '/finance', component: finance },
  { path: '/buyback', component: buyback },
  { path: '/loan-against-vehicle', component: loanagainstvehicle },
  { path: '/new-2-wheelers-loan', component: newtwowheeler},
  { path: '/new-2-wheelers-loan2', component: newtwowheeler2},

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
