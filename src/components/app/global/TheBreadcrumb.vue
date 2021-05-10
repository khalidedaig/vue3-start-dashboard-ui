<template>
  <nav aria-label="breadcrumb">
    <ol class="flex">
      <li
        class="flex items-center mr-2 text-sm rtl:mr-0 rtl:ml-2"
        v-for="(item, i) in items"
        :key="i"
      >
        <router-link
          v-if="!item.current"
          :to="item.link"
          class="text-highlight hover:underline"
        >
          {{ item.title }}
        </router-link>
        <ChevronRightIcon
          v-if="!item.current"
          aria-hidden="true"
          class="w-4 h-4 ml-2 text-contrast-high rtl:ml-0 rtl:mr-2 rtl:transform rtl:rotate-180"
        />
        <span v-if="item.current" class="text-contrast-high">
          {{ item.title }}
        </span>
      </li>
    </ol>
  </nav>
</template>

<script>
import { ChevronRightIcon } from "@heroicons/vue/solid";

export default {
  name: "TheBreadcrumb",
  components: {
    ChevronRightIcon,
  },
  props: {
    items: {
      type: Array,
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
