
import Vue from 'vue'
import Router from 'vue-router'
import routes from './routers'
import store from '@/store'
import iView from 'iview'
import { setToken, getToken, canTurnTo, setTitle } from '@/libs/util'
import config from '@/config'
import {recursion}from '../libs/util'
import Qs from 'qs'
const { homeName } = config
Vue.use(Router)

const router = new Router({
  routes,
  mode: 'hash'
})

const LOGIN_PAGE_NAME = 'login'

const turnTo = (to,from, access, next) => {
  if (canTurnTo(to.name, access, routes)) 
  next() // 有权限，可访问
  else next({ replace: true, name: homeName }) // 无权限，重定向到首页
}

router.beforeEach((to, from, next) => {
  if(!store.state.app.routerList.length){
    if(localStorage.routerList){
      var newRouterList = [];
      let routeList = JSON.parse(localStorage.routerList) 
      recursion(routeList,newRouterList)
      newRouterList.push( {
        path: '*',
        name: 'error_404',
        meta: {
          hideInMenu: true
        },
        component: () => import('@/view/error-page/404.vue')
      })
      store.commit('setRouterList', newRouterList)
      router.addRoutes(store.state.app.routerList)
    }
  }
 
  iView.LoadingBar.start()
  const token = getToken()
  if (!token && to.name !== LOGIN_PAGE_NAME) {
    // 未登录且要跳转的页面不是登录页
    next({
      name: LOGIN_PAGE_NAME // 跳转到登录页
    })
  } else if (!token && to.name === LOGIN_PAGE_NAME) {
    // 未登陆且要跳转的页面是登录页
    next() // 跳转
  } else if (token && to.name === LOGIN_PAGE_NAME) {
    // 已登录且要跳转的页面是登录页
    next({
      name: homeName // 跳转到homeName页
    })
  } else {
    if (store.state.user.hasGetInfo) {
      turnTo(to, from,store.state.user.access, next)
    } else {
      // store.dispatch('getUserInfo').then(user => {
      //   // 拉取用户信息，通过用户权限和跳转的页面的name来判断是否有权限访问;access必须是一个数组，如：['super_admin'] ['super_admin', 'admin']
      //   turnTo(to, user.access, next)
      // }).catch(() => {
      //   setToken('')
      //   next({
      //     name: 'login'
      //   })
      // })
      if(token){
        store.commit('setHasGetInfo', true)
        store.commit('setAvator', 'https://file.iviewui.com/dist/a0e88e83800f138b94d2414621bd9704.png')
          if(to.name){
            next({
              name: to.name
            })
          }else{
            next({
              name: homeName
            })
          }
        
      }else{
        next({
          name: 'login'
        })
      }
    }
  }
})

router.afterEach(to => {
  setTitle(to, router.app)
  iView.LoadingBar.finish()
  window.scrollTo(0, 0)
})

export default router
