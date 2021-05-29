<template>
  <header
    class="sticky top-0 z-[5] flex items-center flex-shrink-0 h-full px-2 bg-light-bg border-b border-light-border sm:px-4 max-h-14 dark:bg-dark-elevation-2 dark:border-dark-border"
  >
    <TheLogo class="hidden sm:block" />

    <!-- Mobile nav links -->
    <Menu as="div" class="relative sm:hidden">
      <MenuButton class="icon-btn">
        <span class="sr-only">Open scecondary menu</span>
        <MenuAlt1Icon aria-hidden="true" class="w-6 h-6" />
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
          class="fixed z-10 flex flex-col p-4 space-y-4 origin-top-left border rounded-md shadow-lg rtl:origin-top-right bg-light-bg border-light-border top-2 left-2 right-2 dark:bg-dark-elevation-5 dark:border-dark-border dark:shadow-dark-lg"
        >
          <MenuItem>
            <Menu as="div" v-slot="{ open }">
              <MenuButton
                class="flex items-center text-body-small text-contrast-high"
              >
                <span class="mr-1 rtl:mr-0 rtl:ml-1">Author</span>
                <ChevronUpIcon
                  aria-hidden="true"
                  class="w-4 h-4 transition-transform transform"
                  :class="!open ? 'rotate-180' : ''"
                />
              </MenuButton>
              <MenuItems class="mt-2 ml-4 space-y-2 rtl:ml-0 rtl:mr-4">
                <MenuItem>
                  <a
                    href="https://twitter.com/ak_kamona"
                    target="_blank"
                    class="flex items-center text-sm"
                  >
                    <span>Twitter</span>
                    <svg
                      aria-hidden="true"
                      class="w-4 h-4 ml-3 rtl:ml-0 rtl:mr-3"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="https://github.com/Kamona-WD"
                    target="_blank"
                    class="flex items-center text-sm"
                  >
                    <span>Github</span>
                    <svg
                      aria-hidden="true"
                      class="w-4 h-4 ml-3 rtl:ml-0 rtl:mr-3"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu>
          </MenuItem>
          <MenuItem>
            <Menu as="div" v-slot="{ open }">
              <MenuButton
                class="flex items-center text-body-small text-contrast-high"
              >
                <span class="mr-1 rtl:mr-0 rtl:ml-1">Projects</span>
                <ChevronUpIcon
                  aria-hidden="true"
                  class="w-4 h-4 transition-transform transform"
                  :class="!open ? 'rotate-180' : ''"
                />
              </MenuButton>
              <MenuItems class="mt-2 ml-4 space-y-2 rtl:ml-0 rtl:mr-4">
                <MenuItem>
                  <a
                    href="https://github.com/KhalidEdaig/vue3-start-dashboard-ui"
                    target="_blank"
                    class="flex items-center text-sm"
                  >
                    <span>vue 3 Dashboard ui</span>
                    <svg
                      aria-hidden="true"
                      class="w-4 h-4 ml-3 rtl:ml-0 rtl:mr-3"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="https://github.com/KhalidEdaig/nuxtjs-start-portfolio"
                    target="_blank"
                    class="flex items-center text-sm"
                  >
                    <span>Starter nuxt portfolio</span>
                    <svg
                      aria-hidden="true"
                      class="w-4 h-4 ml-3 rtl:ml-0 rtl:mr-3"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="https://github.com/KhalidEdaig/laravel-solid-architecture"
                    target="_blank"
                    class="flex items-center text-sm"
                  >
                    <span>Starter Clean Architecture laravel</span>
                    <svg
                      aria-hidden="true"
                      class="w-4 h-4 ml-3 rtl:ml-0 rtl:mr-3"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu>
          </MenuItem>
        </MenuItems>
      </transition>
    </Menu>

    <!-- Desktop nav links -->
    <nav
      aria-label="Secondary"
      class="items-center hidden ml-8 sm:flex rtl:ml-0 rtl:mr-8"
    >
      <Menu as="div" class="relative" v-slot="{ open }">
        <MenuButton
          class="flex items-center text-sm font-medium transition-colors text-light-text-contrast-medium hover:text-light-text-contrast-high dark:text-dark-text-contrast-medium dark:hover:text-dark-text-contrast-high"
        >
          <span class="mr-1 rtl:mr-0 rtl:ml-1">Author</span>
          <svg
            aria-hidden="true"
            class="w-4 h-4 text-gray-500 transition-transform transform"
            :class="open ? 'rotate-180' : ''"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
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
            class="absolute left-0 w-56 py-1 mt-2 origin-top-left rounded-md shadow-lg rtl:right-0 rtl:origin-top-right bg-light-bg dark:bg-dark-elevation-5 dark:shadow-dark-lg focus:outline-none"
          >
            <MenuItem v-slot="{ active }">
              <a
                href="https://twitter.com/KhalidEdaig"
                target="_blank"
                class="flex items-center px-4 py-2 text-body-small text-contrast-high"
                :class="active ? 'bg-gray-100  dark:bg-dark-elevation-1' : ''"
              >
                <span>Twitter</span>
                <ExternalLinkIcon
                  aria-hidden="true"
                  class="w-4 h-4 ml-3 rtl:ml-0 rtl:mr-3"
                />
              </a>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <a
                href="https://github.com/KhalidEdaig"
                target="_blank"
                class="flex items-center px-4 py-2 text-body-small text-contrast-high"
                :class="active ? 'bg-gray-100  dark:bg-dark-elevation-1' : ''"
              >
                <span>Github</span>
                <ExternalLinkIcon
                  aria-hidden="true"
                  class="w-4 h-4 ml-3 rtl:ml-0 rtl:mr-3"
                />
              </a>
            </MenuItem>
          </MenuItems>
        </transition>
      </Menu>
      <Menu as="div" class="relative ml-4 rtl:ml-0 rtl:mr-4" v-slot="{ open }">
        <MenuButton
          class="flex items-center text-sm font-medium transition-colors text-light-text-contrast-medium hover:text-light-text-contrast-high dark:text-dark-text-contrast-medium dark:hover:text-dark-text-contrast-high"
        >
          <span class="mr-1 rtl:mr-0 rtl:ml-1">Projects</span>
          <svg
            aria-hidden="true"
            class="w-4 h-4 text-gray-500 transition-transform transform"
            :class="open ? 'rotate-180' : ''"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
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
            class="absolute left-0 w-full py-1 mt-2 origin-top-left rounded-md shadow-lg rtl:right-0 bg-light-bg min-w-max dark:bg-dark-elevation-5 dark:shadow-dark-lg focus:outline-none"
          >
            <MenuItem v-slot="{ active }">
              <a
                href="https://github.com/Kamona-WD/kwd-dashboard"
                target="_blank"
                class="flex items-center px-4 py-2 text-body-small text-contrast-high"
                :class="active ? 'bg-gray-100  dark:bg-dark-elevation-1' : ''"
              >
                <span>K-WD Dashboard</span>
                <ExternalLinkIcon
                  aria-hidden="true"
                  class="w-4 h-4 ml-3 rtl:ml-0 rtl:mr-3"
                />
              </a>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <a
                href="https://github.com/Kamona-WD/starter-dashboard-layout"
                target="_blank"
                class="flex items-center px-4 py-2 text-body-small text-contrast-high"
                :class="active ? 'bg-gray-100  dark:bg-dark-elevation-1' : ''"
              >
                <span>Starter Dashboard Layout</span>
                <ExternalLinkIcon
                  aria-hidden="true"
                  class="w-4 h-4 ml-3 rtl:ml-0 rtl:mr-3"
                />
              </a>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <a
                href="https://github.com/Kamona-WD/starter-dashboard-layout-vue"
                target="_blank"
                class="flex items-center px-4 py-2 text-body-small text-contrast-high"
                :class="active ? 'bg-gray-100  dark:bg-dark-elevation-1' : ''"
              >
                <span>Starter Dashboard Layout (VueJS)</span>
                <ExternalLinkIcon
                  aria-hidden="true"
                  class="w-4 h-4 ml-3 rtl:ml-0 rtl:mr-3"
                />
              </a>
            </MenuItem>
          </MenuItems>
        </transition>
      </Menu>
    </nav>

    <!-- Right buttons -->
    <div class="flex items-center ml-auto rtl:ml-0 rtl:mr-auto">
      <!-- Search button -->
      <button
        @click="isSearchModalOpen = true"
        class="hidden mr-4 sm:block icon-btn rtl:mr-0 rtl:ml-4"
      >
        <span class="sr-only">Open search modal</span>
        <SearchIcon aria-hidden="true" class="w-6 h-6" />
      </button>

      <!-- User dropdown menu -->
      <Menu
        as="div"
        class="relative flex items-center flex-shrink-0 p-2 sm:p-0"
      >
        <MenuButton
          class="flex items-center rounded-lg focus:outline-none focus:ring focus:ring-primary focus:ring-offset-white focus:ring-offset-2 dark:focus:ring-offset-dark-elevation-2"
        >
          <span class="sr-only">User menu</span>
          <img
            class="w-10 h-10 rounded-lg"
            src="@/assets/images/47464383.jpg"
            alt="EDAIG Khalid"
          />
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
            <MenuItem v-slot="{ active }">
              <a
                href="#"
                class="block px-4 py-2 text-sm text-contrast-high"
                :class="active ? 'bg-gray-100 dark:bg-dark-elevation-1' : ''"
              >
                Your Profile
              </a>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <a
                href="#"
                class="block px-4 py-2 text-sm text-contrast-high"
                :class="active ? 'bg-gray-100 dark:bg-dark-elevation-1' : ''"
              >
                Settings
              </a>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <button @click="Logout"
                class="block px-4 py-2 text-sm text-contrast-high"
                :class="active ? 'bg-gray-100 dark:bg-dark-elevation-1' : ''"
              >
                Sign out
              </button>
            </MenuItem>
          </MenuItems>
        </transition>
      </Menu>
    </div>
  </header>
</template>

<script>
import TheLogo from "@/components/app/global/TheLogo.vue";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import useState from "@/hooks/useState";
import router from "@/router"
import {
  SearchIcon,
  MenuAlt1Icon,
  ChevronUpIcon,
  ExternalLinkIcon,
} from "@heroicons/vue/outline";
export default {
  name: "TheNavBarComponent",
  components: {
    SearchIcon,
    MenuAlt1Icon,
    ChevronUpIcon,
    ExternalLinkIcon,
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,
    TheLogo,
  },
setup(){
  const isSearchModalOpen =useState().isSearchModalOpen
  const Logout=()=>{
    localStorage.removeItem("user")
    router.push({name:'Login'});
  }
  return {
    isSearchModalOpen,
    Logout
  }
}
 
};
</script>
