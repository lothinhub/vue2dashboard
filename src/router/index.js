import Vue from "vue";
import VueRouter from "vue-router";
import DashboardView from "../views/DashboardView.vue";
import ContactView from "../views/ContactView.vue";
import PeopleView from "../views/PeopleView.vue";
import ServiceView from "../views/ServiceView.vue";
import ReportView from "../views/ReportView.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "dashboard",
    component: DashboardView,
    // children:[
    //   {
    //     path: "/dashboard",
    //     name: "dashboard",
    //     component: DashboardView,
    //   },
    // ]
  },
  {
    path: "/people",
    name: "people",
    component: PeopleView,
  },
  {
    path: '/report',
    name: 'report',
    component:ReportView
  },
  {
    path: "/service",
    name: "service",
    component: ServiceView,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
