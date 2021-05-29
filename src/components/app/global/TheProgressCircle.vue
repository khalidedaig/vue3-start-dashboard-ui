<template>
  <div class="flex flex-col items-center space-y-4">
    <div class="flex items-center justify-center overflow-hidden rounded-full">
      <svg
        class="w-32 h-32 transform translate-x-1 translate-y-1"
        aria-hidden="true"
      >
        <circle
          class="text-gray-300 dark:text-gray-600"
          stroke-width="10"
          stroke="currentColor"
          fill="transparent"
          r="50"
          cx="60"
          cy="60"
        />
        <circle
          class="text-primary"
          stroke-width="10"
          :stroke-dasharray="circumference"
          :stroke-dashoffset="
            circumference - (item.percent / 100) * circumference
          "
          stroke-linecap="round"
          stroke="currentColor"
          fill="transparent"
          r="50"
          cx="60"
          cy="60"
        />
      </svg>
      <span class="absolute text-2xl text-highlight">
        {{ `${item.percent}%` }}
      </span>
    </div>
    <h4 class="title-3 text-contrast-high">{{ item.title || item.country }}</h4>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "TheProgressCircleComponent",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const circumference = ref(50 * 2 * Math.PI);
    return {
      circumference,
      props
    };
  },
};
</script>
