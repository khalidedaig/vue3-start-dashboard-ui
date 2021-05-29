<template>
  <ThePanel :show="show" @close="$emit('close')" title="Settings">
    <div class="flex-1 max-h-full p-4 overflow-hidden hover:overflow-y-auto">
      <span class="text-contrast-medium">Settings Content</span>
      <!-- Settings Panel Content ... -->
    </div>
  </ThePanel>
</template>

<script>
import ThePanel from "./ThePanel.vue";
export default {
  name: "TheSettingsPanelComponent",
  components: {
    ThePanel,
  },
  props: {
    show: {
      type: Boolean,
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
