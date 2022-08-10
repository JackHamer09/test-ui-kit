<template>
  <div class="alert-container" :class="type">
    <img :src="iconURL" :alt="`${type} Icon`" class="icon" aria-hidden="true" />
    <div class="alert-body ml-3">
      <!-- @slot Default slot to show content inside the alert -->
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import type { PropType } from "vue";

const props = defineProps({
  /**
   * This is jsdoc description
   */
  type: {
    type: String as PropType<"warning" | "error">,
    default: "warning",
  },
});

const iconURL = computed(() => {
  return `/icons/${props.type}.svg`;
});

defineEmits<{
  /**
   * Solves equations of the form a * x = b
   * @returns {Number} Returns the value of x for the equation.
   * @type {Number, String}
   * @values string, asd
   */
  (eventName: "update:modelValue", value: string | number | null): void;
}>();
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
