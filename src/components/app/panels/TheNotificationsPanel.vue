<template>
  <ThePanel :show="show" @close="$emit('close')" title="Notifications">
    <div class="flex-1 max-h-full p-4 overflow-hidden hover:overflow-y-auto">
      <span class="text-contrast-medium">Notifications Content</span>
      <!-- Notifications Panel Content ... -->
    </div>
  </ThePanel>
</template>

<script>
import ThePanel from "./ThePanel.vue";
export default {
  name: "TheNotificationComponent",
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
