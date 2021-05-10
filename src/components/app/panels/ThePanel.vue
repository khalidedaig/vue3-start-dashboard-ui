<template>
  <!-- Backdrop -->
  <TheBackdrop :show="show" @close="$emit('close')" />

  <!-- Panel -->
  <transition
    enter-active-class="transition duration-300 ease-in-out transform"
    :enter-from-class="
      left
        ? '-translate-x-full rtl:translate-x-full'
        : 'translate-x-full rtl:-translate-x-full'
    "
    :enter-to-class="left ? '-translate-x-0' : 'translate-x-0'"
    leave-active-class="transition duration-300 ease-in-out transform"
    :leave-from-class="left ? '-translate-x-0' : 'translate-x-0'"
    :leave-to-class="
      left
        ? '-translate-x-full rtl:translate-x-full'
        : 'translate-x-full rtl:-translate-x-full'
    "
  >
    <section
      v-if="show"
      :aria-labelledby="title"
      class="fixed inset-y-0 z-20 w-full max-w-xs bg-light-bg dark:bg-dark-elevation-5 sm:max-w-md"
      :class="{
        'right-0 rtl:left-0 rtl:right-auto': !left,
        'left-0 rtl:right-0 rtl:left-auto': left,
      }"
    >
      <div class="flex items-center justify-between flex-shrink-0 p-2">
        <h6 class="p-2 text-lg text-contrast-high">{{ title }}</h6>
        <!-- Close button -->
        <button @click="$emit('close')" class="icon-btn">
          <XIcon class="w-6 h-6 text-gray-600" />
        </button>
      </div>
      <!-- Panel content -->
      <slot></slot>
    </section>
  </transition>
</template>

<script>
import { XIcon } from "@heroicons/vue/outline";
import TheBackdrop from "@/components/app/global/TheBackdrop.vue";
export default {
  name: "ThePanelComponent",
  components: {
    TheBackdrop,
    XIcon,
  },
  props: {
    show: {
      type: Boolean,
      required: true,
    },
    left: {
      type: Boolean,
      required: false,
      default: false,
    },
    title: {
      type: String,
      required: true,
    },
  },
  emits:['close'],
  setup(props) {
    return {
      props
    };
  },
};
</script>
