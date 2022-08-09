<template>
  <div class="alert-container" :class="type">
    <img :src="iconURL" :alt="`${type} Icon`" class="icon" aria-hidden="true" />
    <div class="alert-body ml-3">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import type { PropType } from "vue";

const props = defineProps({
  type: {
    type: String as PropType<"warning" | "error">,
    default: "warning",
  },
});

const iconURL = computed(() => {
  return `/icons/${props.type}.svg`;
});
</script>

<style lang="scss" scoped>
.alert-container {
  @apply flex items-center rounded-lg p-4;

  .icon {
    @apply m-0 h-6 w-6;
  }

  &.warning {
    @apply bg-warning-400 bg-opacity-50;
  }
  &.error {
    @apply bg-error-400 bg-opacity-50;
  }
}
</style>
