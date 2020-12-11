import Vue from 'vue'
import Router from 'vue-router'
import Left from "../pages/Left"
import Center from "../pages/Center"
import Right from "../pages/Right"


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/left",
      component: Left
    },
    {
      path: "/left",
      redirect: "/"
    },
    {
      path: "/center",
      component: Center
    },
    {
      path: "/right",
      component: Right
    }
  ],
  mode: "history"
})
