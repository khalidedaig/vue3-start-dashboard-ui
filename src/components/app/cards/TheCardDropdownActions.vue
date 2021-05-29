<template>
  <Menu as="div">
    <MenuButton class="icon-btn">
      <span class="sr-only">More actions</span>
      <DotsHorizontalIcon class="w-6 h-6" aria-hidden="true" />
    </MenuButton>
    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <MenuItems
        class="absolute top-0 right-0 w-48 py-1 origin-top-right rounded-md shadow-lg bg-light-bg mt-14 focus:outline-none dark:bg-dark-elevation-5 dark:shadow-dark-lg"
      >
        <MenuItem v-slot="{ active }" v-for="(item, i) in items" :key="i">
          <router-link
            :to="item.action"
            class="block px-4 py-2 text-sm text-contrast-high"
            :class="active ? 'bg-gray-100 dark:bg-dark-elevation-1' : ''"
          >
            {{ item.title }}
          </router-link>
        </MenuItem>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import { DotsHorizontalIcon } from "@heroicons/vue/outline";
export default {
  name: "TheCardDropdownActionsComponent",
  components: {
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,
    DotsHorizontalIcon,
  },
  props:{
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
