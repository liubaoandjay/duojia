import Vue from 'vue'
import Router from 'vue-router'
import home from '../views/home';
import myHome from '../views/home/myHome'
import my from '../views/home/my';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: "/home/myHome"
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      children:[
        {
          path: '/home/myHome',
          name: 'myHome',
          component: myHome
        },
        {
          path: '/home/my',
          name: 'my',
          component: my
        }
      ]
    },

  ]
})
