<template>
  <div :class="{ dark: isDark }" :dir="isRTL ? 'rtl' : 'ltr'">
    <div
      class="flex min-h-screen font-sans antialiased bg-light-bg text-contrast-hight dark:bg-dark-bg"
    >
      <TheMobileBottomBar />

      <TheSidebar />

      <!-- Page content -->
      <div
        class="flex flex-col flex-1 pb-20 sm:pb-8 sm:pl-16 sm:rtl:pl-0 sm:rtl:pr-16"
        :class="{
          'xl:pl-80 xl:rtl:pl-0 xl:rtl:pr-80': isSidebarOpen,
        }"
      >
        <TheNavbar />

        <!--  -->
        <div class="flex-1 px-4 pt-4">
          <!-- Breadcrumb -->
          <slot name="breadcrumb"></slot>
          <main class="flex-1 mt-4" aria-labelledby="page-title">
            <!-- Page title -->
            <slot name="pageTitle"></slot>
            <!-- Page content -->
            <div class="mt-6">
              <slot></slot>
            </div>
          </main>
        </div>
      </div>
    </div>

    <TheSearchModal
      :show="isSearchModalOpen"
      @close="isSearchModalOpen = false"
    />
    <TheSettingsPanel
      :show="isSettingsPanelOpen"
      @close="isSettingsPanelOpen = false"
    />
    <TheNotificationsPanel
      :show="isNotificationsPanelOpen"
      @close="isNotificationsPanelOpen = false"
    />
    <TheActivityPanel
      :show="isActivityPanelOpen"
      @close="isActivityPanelOpen = false"
      left
    />
  </div>
</template>
<script>
import { onMounted, onUnmounted } from "vue";
import useState from "@/hooks/useState";
import TheSidebar from "@/components/app/sidebar/TheSidebar.vue";
import TheNavbar from "@/components/app/navigations/TheNavbar.vue";
import TheMobileBottomBar from "@/components/app/navigations/TheMobileBottomBar.vue";
import TheSearchModal from "@/components/app/modals/TheSearchModal.vue";
import TheSettingsPanel from "@/components/app/panels/TheSettingsPanel.vue";
import TheNotificationsPanel from "@/components/app/panels/TheNotificationsPanel.vue";
import TheActivityPanel from "@/components/app/panels/TheActivityPanel.vue";
export default {
  name: "defaultLayoutComponent",
  components: {
    TheMobileBottomBar,
    TheSidebar,
    TheNavbar,
    TheSearchModal,
    TheSettingsPanel,
    TheNotificationsPanel,
    TheActivityPanel,
  },
  setup() {
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
    const checkScreen = () => {
      if (window.innerWidth <= 1280) {
        useState().isSidebarOpen.value = false;
      }
      if (window.innerWidth >= 1280) {
        useState().isSidebarOpen.value = true;
      }
    };

    onMounted(() => {
      window.addEventListener("resize", checkScreen);
    });

    onUnmounted(() => {
      window.removeEventListener("resize", checkScreen);
    });
    return {
      checkScreen,
      isSidebarOpen,
      toggleSidebar,
      isDark,
      isRTL,
      isSearchModalOpen,
      isSettingsPanelOpen,
      isNotificationsPanelOpen,
      isActivityPanelOpen,
    };
  },
};
</script>
