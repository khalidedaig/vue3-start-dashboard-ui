<template>
  <div
    class="fixed inset-x-0 bottom-0 z-10 flex items-center justify-between px-4 py-2 border-t border-light-border bg-light-bg sm:hidden dark:bg-dark-elevation-2 dark:border-dark-border"
  >
    <!-- Search button -->
    <button @click="isSearchModalOpen = true" class="icon-btn">
      <span class="sr-only">Open search modal</span>
      <SearchIcon aria-hidden="true" class="w-6 h-6" />
    </button>

    <!-- Logo -->
    <TheLogo />

    <!-- Sidebar button -->
    <button class="icon-btn" @click="isSidebarOpen = !isSidebarOpen">
      <span class="sr-only">Open sidebar</span>
      <MenuIcon aria-hidden="true" class="w-6 h-6" />
    </button>
  </div>
</template>

<script>
import useState from "@/hooks/useState";
import TheLogo from "@/components/app/global/TheLogo.vue";
import { SearchIcon, MenuIcon } from "@heroicons/vue/outline";
export default {
  name: "TheMobileBottomBarComponent",
  components: {
    TheLogo,
    SearchIcon,
    MenuIcon,
  },
  setup() {
    const isSidebarOpen = useState().isSidebarOpen;
    const isSearchModalOpen = useState().isSearchModalOpen;
    return {
      isSidebarOpen,
      isSearchModalOpen,
    };
  },
};
</script>
