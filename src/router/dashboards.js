import Default from '@/pages/dashboard/dashboards/Default.vue'
import ProjectManagement from '@/pages/dashboard/dashboards/ProjectManagement.vue'
import ECommerce from '@/pages/dashboard/dashboards/ECommerce.vue'

export default [
  {
    path: '/dashboard/dashboards/default',
    name: 'DefaultDashboard',
    component: Default,
    meta: { layout: 'DefaultLayout' },
  },
  {
    path: '/dashboard/dashboards/project-management',
    name: 'ProjectManagementDashboard',
    component: ProjectManagement,
    meta: { layout: 'DefaultLayout' },
  },
  {
    path: '/dashboard/dashboards/e-commerce',
    name: 'E-CommerceDashboard',
    component: ECommerce,
    meta: { layout: 'DefaultLayout' },
  },
]
