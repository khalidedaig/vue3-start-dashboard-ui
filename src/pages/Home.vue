<template>
  <div :class="{ dark: isDark }">
    <div
      class="min-h-screen p-10 bg-light-bg dark:bg-dark-bg text-contrast-high"
    >
      <div class="mx-auto max-w-7xl">
        <div class="space-y-3">
          <h1 class="text-6xl font-bold">
            Start Dashboard UI <span class="title-1">(Vue 3)</span>
          </h1>
          <p class="text-body-strong text-contrast-medium">
            Free tailwindcss admin dashboard template (In progress)
          </p>
        </div>
        <!--  -->
        <div class="grid gap-4 mt-6 grid-col-1">
          <router-link
            :to="{ name: 'DefaultDashboard' }"
            class="inline-flex items-center justify-center space-x-2 btn btn-md btn-primary w-72"
          >
            <EyeIcon class="w-6 h-6" />
            <span>Live Preview</span>
          </router-link>

          <a
            href="https://github.com/KhalidEdaig/vue3-start-dashboard-ui"
            target="_blank"
            class="inline-flex items-center justify-center space-x-2 btn btn-md btn-black w-72 dark:btn-white"
          >
            <svg
              class="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.026,2c-5.509,0-9.974,4.465-9.974,9.974c0,4.406,2.857,8.145,6.821,9.465 c0.499,0.09,0.679-0.217,0.679-0.481c0-0.237-0.008-0.865-0.011-1.696c-2.775,0.602-3.361-1.338-3.361-1.338 c-0.452-1.152-1.107-1.459-1.107-1.459c-0.905-0.619,0.069-0.605,0.069-0.605c1.002,0.07,1.527,1.028,1.527,1.028 c0.89,1.524,2.336,1.084,2.902,0.829c0.091-0.645,0.351-1.085,0.635-1.334c-2.214-0.251-4.542-1.107-4.542-4.93 c0-1.087,0.389-1.979,1.024-2.675c-0.101-0.253-0.446-1.268,0.099-2.64c0,0,0.837-0.269,2.742,1.021 c0.798-0.221,1.649-0.332,2.496-0.336c0.849,0.004,1.701,0.115,2.496,0.336c1.906-1.291,2.742-1.021,2.742-1.021 c0.545,1.372,0.203,2.387,0.099,2.64c0.64,0.696,1.024,1.587,1.024,2.675c0,3.833-2.33,4.675-4.552,4.922 c0.355,0.308,0.675,0.916,0.675,1.846c0,1.334-0.012,2.41-0.012,2.737c0,0.267,0.178,0.577,0.687,0.479 C19.146,20.115,22,16.379,22,11.974C22,6.465,17.535,2,12.026,2z"
              ></path>
            </svg>
            <span>Github</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import useState from "@/hooks/useState";
import { EyeIcon } from "@heroicons/vue/outline";
export default {
  name: "HomePage",
  components: {
    EyeIcon,
  },
  setup() {
    const isDark = useState();
    return {
      isDark,
    };
  },
};
</script>
