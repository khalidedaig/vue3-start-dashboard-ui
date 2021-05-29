<template>
  <nav
    aria-label="Panels buttons"
    class="flex flex-col items-center justify-between flex-shrink-0 w-16 border-r bg-light-bg border-light-border dark:bg-dark-elevation-2 dark:border-dark-border rtl:border-r-0 rtl:border-l"
  >
    <!-- Toggle sidebar button -->
    <div
      class="flex items-center justify-center flex-shrink-0 w-full h-full max-h-14"
    >
      <button
        @click="isSidebarOpen = !isSidebarOpen"
        class="hidden sm:block icon-btn"
      >
        <span class="sr-only">Toggle sidebar</span>
        <ChevronDoubleLeftIcon
          aria-hidden="true"
          class="w-6 h-6 transition-transform transform"
          :class="
            !isSidebarOpen ? '-rotate-180 rtl:rotate-0' : 'rtl:-rotate-180'
          "
        />
      </button>
    </div>

    <!-- Center buttons -->
    <div
      class="flex flex-col items-center space-y-2 rounded-md bg-gray-50 dark:bg-dark-bg"
    >
      <!-- Dark mode button -->
      <button class="icon-btn" @click="toggleTheme()">
        <span class="sr-only">Toggle dark mode</span>
        <MoonIcon aria-hidden="true" class="w-6 h-6" v-show="!isDark" />
        <SunIcon aria-hidden="true" class="w-6 h-6" v-show="isDark" />
      </button>

      <!-- Direction button -->
      <button class="icon-btn" @click="isRTL = !isRTL">
        <span class="sr-only">Change direction</span>
        <SwitchHorizontalIcon aria-hidden="true" class="w-6 h-6" />
      </button>

      <!-- Settings button -->
      <button class="icon-btn" @click="isSettingsPanelOpen = true">
        <span class="sr-only">Open settings panel</span>
        <CogIcon aria-hidden="true" class="w-6 h-6" />
      </button>

      <!-- Notifications button -->
      <button class="icon-btn" @click="isNotificationsPanelOpen = true">
        <span class="sr-only">Open notifications panel</span>
        <BellIcon aria-hidden="true" class="w-6 h-6" />
      </button>

      <!-- Recent activity button -->
      <button class="icon-btn" @click="isActivityPanelOpen = true">
        <span class="sr-only">Open recent activity panel</span>
        <ClockIcon aria-hidden="true" class="w-6 h-6" />
      </button>
    </div>

    <!-- close button -->
    <div class="py-4">
      <button @click="isSidebarOpen = false" class="icon-btn sm:hidden">
        <span class="sr-only">Close mini sidebar</span>
        <XIcon aria-hidden="true" class="w-6 h-6" />
      </button>
    </div>
  </nav>
</template>

<script>
import useState from "@/hooks/useState";
import {
  MoonIcon,
  SunIcon,
  SwitchHorizontalIcon,
  CogIcon,
  BellIcon,
  ClockIcon,
  XIcon,
  ChevronDoubleLeftIcon,
} from "@heroicons/vue/outline";

export default {
  name: "TheMiniBarComponent",
  components: {
    MoonIcon,
    SunIcon,
    SwitchHorizontalIcon,
    CogIcon,
    BellIcon,
    ClockIcon,
    XIcon,
    ChevronDoubleLeftIcon,
  },
  setup(){
     const {
      isSidebarOpen,
      toggleSidebar,
      isDark,
      isRTL,
      isSearchModalOpen,
      isSettingsPanelOpen,
      isNotificationsPanelOpen,
      isActivityPanelOpen,
    } = useState();
    const toggleTheme=useState().toggleTheme;
    return {
      toggleTheme,
       isSidebarOpen,
      toggleSidebar,
      isDark,
      isRTL,
      isSearchModalOpen,
      isSettingsPanelOpen,
      isNotificationsPanelOpen,
      isActivityPanelOpen,
    }
  }
};
</script>
