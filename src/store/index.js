import { createStore } from "vuex";
import { users } from "./modules/users.module";
import { auth } from "./modules/auth.module";
export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    users,
    auth
  },
});
