import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes'

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
/* router.beforeEach((to, from, next) => {
  let user = JSON.parse(localStorage.getItem("user"));
  if (to.path === "/") {
    if (user) {
        router.push({ name: "DefaultDashboard" });
    } else {
      return next({ name: "Login" });
    }
  }

  if (to.name === "Login") {
    if (user) {
      return next({ name: "DefaultDashboard" });
    } else {
      return next();
    }
  }

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!user) {
      return next({ name: "Login" });
    } else {
      return next();
    }
  } else {
    return next();
  }
}); */
export default router
