import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'

import Home from "../components/Home";

import Stocks from "../components/stocks/Stocks";
import Portfolio from "../components/portfolio/Portfolio";

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/helloword',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {path: '/stocks', component: Stocks},
    {path: '/portfolio', component: Portfolio},
    {path: '/', component: Home}
  ]
})
