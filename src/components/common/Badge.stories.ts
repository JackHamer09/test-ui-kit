import type { Meta } from "@storybook/vue3";

import Badge from "./Badge.vue";

type Args = {
  size: "sm" | "md";
  color: "neutral" | "primary" | "secondary" | "warning" | "error" | "success";
  dot: boolean;
};

const options: {
  size: Args["size"][];
  color: Args["color"][];
  dot: Args["dot"][];
} = {
  size: ["sm", "md"],
  color: ["neutral", "primary", "secondary", "warning", "error", "success"],
  dot: [false, true],
};

export default {
  title: "Common/Badge",
  component: Badge,
  argTypes: {
    size: {
      options: options.size,
      control: "inline-radio",
    },
    color: {
      options: options.color,
      control: "select",
    },
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/A4Mr3t3EgONUXhirouzRIG/Block-Explorer-v2?node-id=5406%3A733",
    },
  },
  args: {
    size: options.size[0],
    color: options.color[0],
    dot: options.dot[0],
  } as Args,
} as Meta;

export const Default = (args: Args) => ({
  components: { Badge },
  setup() {
    return { args };
  },
  template: `
    <Badge v-bind="args">
      Default badge
    </Badge>
  `,
});

export const AllBadges = () => ({
  components: { Badge },
  data() {
    return {
      allVariants: [
        [
          { size: "md", color: "neutral", dot: true, text: "default dot" },
          { size: "md", color: "primary", dot: true, text: "primary dot" },
          { size: "md", color: "secondary", dot: true, text: "secondary dot" },
          { size: "md", color: "warning", dot: true, text: "warning dot" },
          { size: "md", color: "error", dot: true, text: "error dot" },
          { size: "md", color: "success", dot: true, text: "success dot" },
        ],
        [
          { size: "md", color: "neutral", dot: false, text: "default" },
          { size: "md", color: "primary", dot: false, text: "primary" },
          { size: "md", color: "secondary", dot: false, text: "secondary" },
          { size: "md", color: "warning", dot: false, text: "warning" },
          { size: "md", color: "error", dot: false, text: "error" },
          { size: "md", color: "success", dot: false, text: "success" },
        ],
        [
          { size: "sm", color: "neutral", dot: true, text: "sm default dot" },
          { size: "sm", color: "primary", dot: true, text: "sm primary dot" },
          { size: "sm", color: "secondary", dot: true, text: "sm secondary dot" },
          { size: "sm", color: "warning", dot: true, text: "sm warning dot" },
          { size: "sm", color: "error", dot: true, text: "sm error dot" },
          { size: "sm", color: "success", dot: true, text: "sm success dot" },
        ],
        [
          { size: "sm", color: "neutral", dot: false, text: "sm default" },
          { size: "sm", color: "primary", dot: false, text: "sm primary" },
          { size: "sm", color: "secondary", dot: false, text: "sm secondary" },
          { size: "sm", color: "warning", dot: false, text: "sm warning" },
          { size: "sm", color: "error", dot: false, text: "sm error" },
          { size: "sm", color: "success", dot: false, text: "sm success" },
        ],
      ],
    };
  },
  template: `
    <div class="flex gap-1 mb-1" v-for="(row, rowIndex) in allVariants" :key="rowIndex">
      <Badge v-for="(item, index) in row" :key="index" :size="item.size" :color="item.color" :dot="item.dot">
        {{ item.text }}
      </Badge>
    </div>
  `,
});
