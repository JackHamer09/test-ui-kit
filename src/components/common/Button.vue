<template>
  <component class="button" :is="tag" :type="type" :class="[variant, color, size]" v-bind="$attrs">
    <svg
      v-if="loading === true"
      class="button-spinner text-pr mr-3 -ml-1 h-5 w-5 animate-spin text-white"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
    <slot />
  </component>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";

export default defineComponent({
  inheritAttrs: false,
  props: {
    tag: {
      type: String,
      default: "button",
    },
    color: {
      type: String as PropType<"primary" | "secondary">,
      default: "primary",
    },
    size: {
      type: String as PropType<"md" | "lg">,
      default: "md",
    },
    variant: {
      type: String as PropType<"contained" | "outlined">,
      default: "contained",
    },
    type: {
      type: String,
      default: "button",
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style lang="scss" scoped>
.button {
  @apply flex items-center justify-center rounded-md px-4 py-3 text-lg font-light leading-3 shadow-sm;
  @apply focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2;
  @apply appearance-none disabled:cursor-not-allowed disabled:opacity-50;

  &.md {
    @apply px-4 py-2.5 text-sm font-semibold;
  }
  &.lg {
    @apply px-4 py-3 text-xl font-bold;
  }

  &.contained {
    @apply text-neutral-50;
    @apply border border-transparent;

    &.primary {
      @apply bg-primary-300 hover:bg-primary-700 disabled:hover:bg-primary-600;
    }

    &.secondary {
      @apply bg-secondary-600 hover:bg-secondary-700 disabled:hover:bg-secondary-600;
    }
  }
  &.outlined {
    @apply border border-neutral-300;
    @apply bg-white hover:bg-white disabled:hover:bg-white;

    &.primary {
      @apply text-primary-700;
    }

    &.secondary {
      @apply text-secondary-700;
    }

    &.neutral {
      @apply text-neutral-500;
    }
  }
}
</style>
