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
      <div class="flex-shrink-0 p-4">
        <button class="w-full btn btn-md btn-primary">Upgrade to pro</button>
      </div>
    </nav>
  </div>
</template>

<script>
import useState from "@/hooks/useState";
import TheMiniBar from "./TheMiniBar.vue";
import TheLogo from "@/components/app/global/TheLogo.vue";
import TheBackdrop from "@/components/app/global/TheBackdrop.vue";
//import TheSidebarLink from './TheSidebarLink.vue'
import TheSidebarDropdown from "./TheSidebarDropdown.vue";
import { links } from "@/mixins/navigations";
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
    const isSidebarOpen = useState().isSidebarOpen;
    return {
      links,
      isSidebarOpen,
    };
  },
};
</script>
