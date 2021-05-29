import Login from "@/pages/auth/Login.vue";
import Root from "@/pages/Root.vue";
import Home from "@/pages/Home.vue";
import pages from "./pages";
import dashboards from "./dashboards";

export default [
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path:"/",
    name:"Root",
    component:Root,
    meta: { requiresAuth: true },
    children:[
      { 
        path: "home",
        name: "Home",
        component: Home,
      },
      ...dashboards,
      ...pages,
    ]
  }
];
