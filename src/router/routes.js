import Login from '@/pages/auth/Login.vue'
import Home from '@/pages/Home.vue'
import pages from './pages'
import dashboards from './dashboards'

export default [
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    name: 'Home',
    path: '/',
    component: Home,
  },
  ...dashboards,
  ...pages,
]
