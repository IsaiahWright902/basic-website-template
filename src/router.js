import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";

function loadPage(page) {
  return () => import(`./pages/${page}.vue`);
}

const routes = [
  {
    path: "/",
    name: "Home",
    component: loadPage("HomePage"),
  },
  {
    path: "/test",
    name: "Test",
    component: loadPage("TestPage"),
  },
];

export const router = createRouter({
  //   linkActiveClass: "router-link-active",
  //   linkExactActiveClass: "router-link-exact-active",
  history: createWebHashHistory(),
  routes,
});
