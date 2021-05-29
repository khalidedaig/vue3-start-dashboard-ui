<template>
  <div class="relative">
    <Disclosure v-slot="{ open }" :defaultOpen="isCurrent(link.isCurrent)">
      <DisclosureButton
        class="flex items-center w-full rounded-md group hover:bg-primary hover:text-white focus:outline-none"
        :class="
          open
            ? 'text-white bg-primary'
            : 'text-light-text-contrast-high dark:text-dark-text-contrast-high'
        "
      >
        <span
          aria-hidden="true"
          class="p-2 rounded-md group-hover:bg-primary-dark group-hover:text-white"
          :class="open ? 'bg-primary-dark text-white' : 'text-gray-500'"
        >
          <svg
            class="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              :d="link.svgPath"
            />
          </svg>
        </span>
        <span class="ml-2 rtl:ml-0 rtl:mr-2">{{ link.title }}</span>
        <span class="ml-auto mr-4 rtl:ml-4 rtl:mr-auto">
          <ChevronDownIcon
            aria-hidden="true"
            class="w-4 h-4 transition-transform transform"
            :class="open ? '-rotate-180' : ''"
          />
        </span>
      </DisclosureButton>
      <transition
        appear
        @before-enter="beforeEnter"
        @enter="enter"
        @before-leave="beforeLeave"
        @leave="leave"
      >
        <div class="overflow-hidden transition-all max-h-0" v-show="open">
          <DisclosurePanel class="mt-2">
            <ul class="space-y-2">
              <li v-for="(subLink, i) in link.subLinks" :key="i">
                <router-link
                  :to="subLink.link"
                  class="ml-12 transition-colors hover:text-light-text-contrast-high dark:hover:text-dark-text-contrast-high rtl:mr-12 rtl:ml-0"
                  :class="
                    isActive(subLink.isActive)
                      ? 'text-light-text-contrast-high dark:text-dark-text-contrast-high'
                      : 'text-light-text-contrast-low dark:text-dark-text-contrast-medium'
                  "
                >
                  {{ subLink.title }}
                </router-link>
              </li>
            </ul>
          </DisclosurePanel>
        </div>
      </transition>
    </Disclosure>
  </div>
</template>

<script>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/outline";
import { useRouter } from 'vue-router';
export default {
  name: "TheSidebarDropdowComponent",

  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    ChevronDownIcon,
  },
  props: {
    link: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const isCurrent = (path = "") => {
      return useRouter().currentRoute.value.path.startsWith(`/${path}`);
    };

    const isActive = (name = "") => {
      return useRouter().currentRoute.value.name == name;
    };
    
    const beforeEnter = (el) => {
      el.style.maxHeight = 0;
      el.transitionDuration = `${el.scrollHeight}ms`;
    };
    const enter = (el) => {
      el.style.maxHeight = `${el.scrollHeight}px`;
    };
    const beforeLeave = (el) => {
      el.transitionDuration = `${el.scrollHeight}ms`;
      el.style.maxHeight = `${el.scrollHeight}px`;
    };
    const leave = (el) => {
      el.style.maxHeight = 0;
    };
    return {
      props,
      beforeEnter,
      enter,
      beforeLeave,
      leave,
      isCurrent,
      isActive
    };
  },
};
</script>
