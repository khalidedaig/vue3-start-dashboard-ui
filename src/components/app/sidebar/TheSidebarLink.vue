<template>
  <router-link
    :to="link"
    class="flex items-center transition-colors rounded-md group text-light-text-contrast-high hover:bg-primary hover:text-white dark:text-dark-text-contrast-high"
  >
    <span
      aria-hidden="true"
      class="p-2 text-gray-500 transition-colors rounded-md group-hover:bg-primary-dark group-hover:text-white dark:text-gray-300"
    >
      <slot name="icon"></slot>
    </span>
    <span class="ml-2 rtl:ml-0 rtl:mr-2">{{ title }}</span>
  </router-link>
</template>

<script>
export default {
  name: "TheSidebarLinkComponent",
  props: {
    title: {
      type: String,
      required: true,
    },
    link: {
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
