import Default from "@/pages/dashboards/Default.vue";
import ProjectManagement from "@/pages/dashboards/ProjectManagement.vue";
import ECommerce from "@/pages/dashboards/ECommerce.vue";

export default [
  {
    path: "/dashboards/default",
    name: "DefaultDashboard",
    component: Default,
    meta: { layout: "DefaultLayout" },
  },
  {
    path: "/dashboards/project-management",
    name: "ProjectManagementDashboard",
    component: ProjectManagement,
    meta: { layout: "DefaultLayout" },
  },
  {
    path: "/dashboards/e-commerce",
    name: "E-CommerceDashboard",
    component: ECommerce,
    meta: { layout: "DefaultLayout" },
  },
];
