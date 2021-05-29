import { ref } from "vue";
const links = ref([
  {
    title: "Dashboards",
    isCurrent: "dashboards",
    subLinks: [
      {
        title: "Default",
        isActive: "DefaultDashboard",
        link: { name: "DefaultDashboard" },
      },
      {
        title: "Project Management",
        isActive: "ProjectManagementDashboard",
        link: { name: "ProjectManagementDashboard" },
      },
      {
        title: "E-Commerce",
        isActive: "E-CommerceDashboard",
        link: { name: "E-CommerceDashboard" },
      },
    ],
    svgPath:
      "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
  },

  {
    title: "Pages",
    isCurrent: "pages",
    subLinks: [
      {
        title: "blank",
        isActive: "Blank",
        link: { name: "Blank" },
      },
    ],
    svgPath:
      "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z",
  },
]);

export { links };
