<template>
  <!-- Sidebar overlay -->
  <TheBackdrop
    :show="isSidebarOpen"
    @close="isSidebarOpen = false"
    class="xl:hidden"
  />
  <!-- Sidebar -->
  <div
    class="fixed inset-y-0 z-10 flex flex-row-reverse flex-shrink-0 h-screen transition-transform transform"
    :class="{
      '-translate-x-full sm:-translate-x-64 rtl:translate-x-full sm:rtl:translate-x-64': !isSidebarOpen,
      'translate-x-0 shadow-lg xl:shadow-none dark:shadow-dark-lg dark:xl:shadow-none': isSidebarOpen,
    }"
  >
    <!-- Mini bar -->
    <TheMiniBar />

    <!-- Sidebar -->
    <nav
      aria-label="Main"
      class="flex flex-col flex-shrink-0 w-64 h-full transition-transform transform border-r bg-light-bg border-light-border dark:bg-dark-elevation-2 dark:border-dark-border rtl:border-r-0 rtl:border-l"
    >
      <!-- Logo -->
      <div class="flex items-center justify-center flex-shrink-0 pt-4">
        <TheLogo />
      </div>

      <!-- Links -->
      <div class="flex-1 px-4 mt-6 overflow-hidden hover:overflow-auto">
        <!--  -->
        <div class="pb-4 space-y-2">
          <div class="relative" v-for="(link, i) in links" :key="i">
            <TheSidebarDropdown :link="link" />
          </div>
        </div>
      </div>

      <!-- Footer -->
     <!--  <div class="flex-shrink-0 p-4">
        <button class="w-full btn btn-md btn-primary">Upgrade to pro</button>
      </div> -->
    </nav>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import useState from "@/hooks/useState";
import TheMiniBar from "./TheMiniBar.vue";
import TheLogo from "@/components/app/global/TheLogo.vue";
import TheBackdrop from "@/components/app/global/TheBackdrop.vue";
//import TheSidebarLink from './TheSidebarLink.vue'
import TheSidebarDropdown from "./TheSidebarDropdown.vue";
export default {
  name: "TheSidebarComponent",
  components: {
    TheMiniBar,
    TheLogo,
    TheBackdrop,
    //TheSidebarLink,
    TheSidebarDropdown,
  },
 
  setup() {
    const isSidebarOpen =useState().isSidebarOpen
    const isCurrent = (path = "") => {
      return useRouter().currentRoute.value.path.startsWith(`/${path}`);
    };

    const isActive = (name = "") => {
      return useRouter().currentRoute.value.name == name;
    };

    const links = [
      {
        title: "Dashboards",
        isCurrent: isCurrent("dashboard/dashboards"),
        subLinks: [
          {
            title: "Default",
            isActive: isActive("DefaultDashboard"),
            link: { name: "DefaultDashboard" },
          },
          {
            title: "Project Management",
            isActive: isActive("ProjectManagementDashboard"),
            link: { name: "ProjectManagementDashboard" },
          },
          {
            title: "E-Commerce",
            isActive: isActive("E-CommerceDashboard"),
            link: { name: "E-CommerceDashboard" },
          },
        ],
        svgPath:
          "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
      },

      {
        title: "Pages",
        isCurrent: isCurrent("dashboard/pages"),
        subLinks: [
          {
            title: "Blank",
            isActive: isActive("Blank"),
            link: { name: "Blank" },
          },
        ],
        svgPath:
          "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z",
      },
    ];
    return {
      links,
      isActive,
      isCurrent,
      isSidebarOpen
    };
  },
};
</script>
