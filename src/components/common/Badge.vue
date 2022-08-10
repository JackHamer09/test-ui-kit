<template>
  <div class="badge-container" :class="[`color-${color}`, `size-${size}`]">
    <div v-if="dot" class="badge-dot"></div>
    <span class="badge-content">
      <!-- @slot Default slot to show content inside the badge -->
      <slot></slot>
    </span>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from "vue";

defineProps({
  size: {
    type: String as PropType<"sm" | "md">,
    default: "sm",
  },
  dot: {
    type: Boolean,
    default: false,
  },
  color: {
    type: String as PropType<"neutral" | "primary" | "secondary" | "success" | "warning" | "error">,
    default: "neutral",
  },
});
</script>

<style lang="scss" scoped>
.badge-container {
  @apply flex w-max items-center rounded font-bold;

  &.size-sm {
    @apply py-1 px-2 pr-2.5 text-xs;

    .badge-dot {
      @apply mr-1;
    }
  }
  &.size-md {
    @apply py-1 px-2.5 pr-3 text-sm;

    .badge-dot {
      @apply mr-1.5;
    }
  }

  &.color-primary {
    @apply bg-primary-50 text-primary-600;
    .badge-dot {
      @apply bg-primary-600;
    }
  }
  &.color-secondary {
    @apply bg-secondary-200 text-secondary-600;

    .badge-dot {
      @apply bg-secondary-600;
    }
  }
  &.color-neutral {
    @apply bg-neutral-300 text-neutral-600;

    .badge-dot {
      @apply bg-neutral-600;
    }
  }
  &.color-success {
    @apply bg-success-200 text-success-600;
    .badge-dot {
      @apply bg-success-600;
    }
  }
  &.color-warning {
    @apply bg-warning-200 text-warning-600;
    .badge-dot {
      @apply bg-warning-600;
    }
  }
  &.color-error {
    @apply bg-error-200 text-error-600;
    .badge-dot {
      @apply bg-error-600;
    }
  }

  .badge-dot {
    @apply h-1.5 w-1.5 rounded-full;
  }
}
</style>
