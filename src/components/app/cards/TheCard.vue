<template>
  <div
    class="border rounded-md border-light-border bg-light-bg dark:border-dark-border dark:bg-dark-elevation-2"
  >
    <!-- Card header -->
    <div
      v-if="title"
      class="relative flex items-center justify-between px-4 py-2 border-b dark:border-dark-border"
    >
      <h2 class="text-body-strong text-contrast-high">
        {{ title }}
      </h2>
      <TheCardDropdownActions v-if="moreItems" :items="moreItems" />
    </div>
    <!-- Card body -->
    <div class="p-6">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import TheCardDropdownActions from "./TheCardDropdownActions.vue";
export default {
  name: "TheCardXomponent",
  components: {
    TheCardDropdownActions,
  },
  props: {
    title: {
      type: String,
      required: false,
    },
    moreItems: {
      type: Array,
      required: false,
    },
  },
  setup(props){
   return{
     props
   }
 }
};
</script>
