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
          E-Commerce
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
    <div>
      <h1 class="title-1 text-contrast-high">Soon!</h1>
    </div>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import TheBreadcrumb from "@/components/app/global/TheBreadcrumb.vue";
export default {
  name:"EcommercePage",
  components: {
    DefaultLayout,
    TheBreadcrumb,
  },
  data(){
    return {
      breadcrumbItems : [
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
        title: "E-Commerce",
        current: true,
        link: { name: "E-CommerceDashboard" },
      },
    ]
    }
  }
 
};
</script>
