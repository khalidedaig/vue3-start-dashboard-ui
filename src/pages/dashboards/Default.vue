<template>
  <DefaultLayout>
    <template #breadcrumb>
      <TheBreadcrumb :items="breadcrumbItems" />
    </template>
    <template #pageTitle>
      <div
        class="flex flex-col pb-4 space-y-4 border-b border-light-border dark:border-dark-border sm:flex-row sm:items-center sm:justify-between sm:space-y-0"
      >
        <h1
          id="page-title"
          class="text-2xl font-semibold text-light-text-contrast-high dark:text-dark-text-contrast-high"
        >
          Default
        </h1>
        <a
          href="https://github.com/KhalidEdaig/vue3-start-dashboard-ui"
          target="_blank"
          class="btn btn-md btn-primary"
        >
          View on Github
        </a>
      </div>
    </template>
    <!-- Content -->
    <div class="grid grid-cols-1 gap-6 xl:grid-cols-3">
      <!--  -->
      <div class="grid grid-cols-1 gap-6 xl:col-span-2">
        <!-- Stats Cards -->
        <section class="grid grid-cols-1 gap-6 md:grid-cols-2">
          <h2 class="sr-only">Quick statistics</h2>
          <TheDefaultStatisticsCard
            v-for="(card, i) in quickStatisticsCards"
            :key="i"
            :card="card"
          />
        </section>

        <!-- Map card -->
        <TheCard title="Visitors by Location" :moreItems="cardMoreActions">
          <!-- Map -->
          <div id="worldMap" class="w-full h-64 overflow-hidden md:h-72"></div>

          <!-- Circles -->
          <!-- x-data="{ circumference: 50 * 2 * Math.PI}" -->
          <div class="grid grid-cols-2 gap-4 mt-8 md:grid-cols-4">
            <TheProgressCircle
              v-for="(location, i) in visitorsLocations"
              :key="i"
              :item="location"
            />
          </div>
        </TheCard>
      </div>

      <!--  -->
      <div
        class="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-1 xl:col-span-1"
      >
        <!-- Browsers card -->
        <TheCard title="Visitors by Browser" :moreItems="cardMoreActions">
          <!-- Chart -->
          <div class="relative flex items-center justify-center mt-2 h-72">
            <canvas id="browsersChart"></canvas>
          </div>

          <!-- Legends -->
          <ul class="grid grid-cols-2 gap-3 p-6">
            <li
              class="flex items-center"
              v-for="(browser, i) in visitorsBrowsers"
              :key="i"
            >
              <span
                class="inline-block px-4 py-1 mr-3 rtl:mr-0 rtl:ml-3"
                :style="`background-color: ${browser.color}`"
              ></span>
              <span
                class="text-body-base text-contrast-medium"
                x-text="browser.browser"
              >
                {{ browser.browser }}
              </span>
            </li>
          </ul>
        </TheCard>

        <!-- Social traffic card -->
        <TheCard title="Social Media Traffic" :moreItems="cardMoreActions">
          <ul class="space-y-6">
            <li
              class="flex items-center justify-between text-contrast-high"
              v-for="({ title, count }, i) in socialMediaTraffic"
              :key="i"
            >
              <span class="text-body-strong">{{ title }}</span>
              <span class="text-body-base">{{ count }}</span>
            </li>
          </ul>
        </TheCard>
      </div>
    </div>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import TheBreadcrumb from "@/components/app/global/TheBreadcrumb.vue";
import TheDefaultStatisticsCard from "@/components/app/cards/TheDefaultStatisticsCard.vue";
import TheCard from "@/components/app/cards/TheCard.vue";
import TheProgressCircle from "@/components/app/global/TheProgressCircle.vue";
import {data} from "@/data/defaultPage";
import { onMounted} from "vue";
export default {
  name: "defaultPage",
  components: {
    DefaultLayout,
    TheBreadcrumb,
    TheDefaultStatisticsCard,
    TheCard,
    TheProgressCircle,
  },
  data() {
    return {
      breadcrumbItems: [
        {
          title: "KH-UI",
          current: false,
          link: { name: "Home" },
        },
        {
          title: "Dashboards",
          current: false,
          link: { name: "DefaultDashboard" },
        },
        {
          title: "Default",
          current: true,
          link: { name: "DefaultDashboard" },
        },
      ],
      cardMoreActions: [
        {
          title: "View All",
          action: { name: "DefaultDashboard" },
        },
      ],
    };
  },
  setup() {
    const {
      quickStatisticsCards,
      visitorsLocations,
      mountMap,
      visitorsBrowsers,
      mountBrowsersChart,
      socialMediaTraffic,
    } = data;
    onMounted(() => {
      mountMap;
    });
    onMounted(() => {
      mountBrowsersChart;
    });
    return {
      quickStatisticsCards,
      visitorsLocations,
      mountMap,
      visitorsBrowsers,
      mountBrowsersChart,
      socialMediaTraffic,
    };
  },
};
</script>
