import Vue from "vue";
import VueRouter from "vue-router";
import home from "./home";
import bookshelf from "./bookshelf";
import mine from "./mine";

Vue.use(VueRouter);

const routes = [home, bookshelf, mine];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
