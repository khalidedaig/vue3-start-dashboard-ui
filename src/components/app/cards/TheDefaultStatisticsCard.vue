<template>
  <div
    class="flex items-start p-6 border rounded-md bg-light-bg border-light-border dark:bg-dark-elevation-2 dark:border-dark-border"
  >
    <div
      class="flex-shrink-0 p-4 mr-6 bg-gray-100 rounded-md rtl:mr-0 rtl:ml-6 dark:bg-dark-bg"
    >
      <svg
        class="w-10 h-10 text-light-text-contrast-medium dark:text-dark-text-contrast-medium"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          :d="card.svgPath"
        />
      </svg>
    </div>
    <div class="flex flex-col flex-1 space-y-4">
      <h2
        class="text-xl font-medium text-light-text-contrast-low dark:text-dark-text-contrast-medium"
      >
        {{ card.title }}
      </h2>
      <div class="flex items-center justify-between">
        <h3
          class="text-2xl font-medium text-light-text-contrast-high dark:text-dark-text-contrast-high"
        >
          {{ card.value }}
        </h3>
        <div
          class="px-2 py-1 text-xs text-green-900 bg-green-200 rounded-md dark:bg-green-300"
        >
          {{ card.increaseAmount }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheDefaultStatisticsCardComponet",
  props: {
    card: {
      type: Object,
      required: true,
    },
  },
  setup(props){
   return{
     props
   }
 }
};
</script>
