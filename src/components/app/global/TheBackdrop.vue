<template>
  <transition
    enter-active-class="transition-opacity"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition-opacity"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-show="show"
      @click="$emit('close')"
      aria-hidden="true"
      class="fixed inset-0 z-10 bg-black bg-opacity-50 dark:bg-opacity-75"
    ></div>
  </transition>
</template>

<script>
import {} from "vue";
export default {
  name: "TheBackDropComponent",
  props: {
    show: {
      type: Boolean,
      required: true,
    },
  },
  emits: ["close"],
  setup(props) {
    return {
      props,
    };
  },
};
</script>
