import { createRouter, createWebHistory } from 'vue-router'
import inscription from '@/views/inscription'
import home from '@/views/home'
import notfound from '@/views/notfound'
import layout  from '@/views/layout'
import login from '@/views/auth/login'
import { authGuard } from '@/helpers/auth-guard'


const routes = [
  {
    path: '/',
    name: 'layout', 
    component: layout,
    children: [
      { path: '/', name: 'home', component: home },
      { path: '/inscription/:id(\\d+)', name: 'inscription', component: inscription, props: true, },
      { path: '/:pathMatch(.*)*', name: 'notfound', component: notfound },
      { path: '/login', name: 'login',  component: login },
    ],
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  console.log(to.matched[0].name)
  if(to.matched[0].name == 'login') {
    authGuard()
  }

  next()
})

export default router
