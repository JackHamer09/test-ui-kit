import Badge from "./Badge.vue";

export default {
  title: "Common/Badge",
  component: Badge,
  argTypes: {
    size: {
      options: ["sm", "md"],
      control: { type: "radio" },
    },
    color: {
      options: ["secondary", "warning", "error", "success", "neutral"],
      control: { type: "select" },
    },
  },
};

type Args = {
  size?: "sm" | "md";
  color?: "primary" | "secondary" | "warning" | "error" | "success" | "neutral";
  content: string;
  dot: boolean;
}[][];

const Template = (args: Args) => ({
  components: { Badge },
  setup() {
    return { variants: args };
  },
  template: `
    <div class="flex gap-1 mb-1" v-for="(row, rowIndex) in variants" :key="rowIndex">
      <Badge v-for="(item, index) in row" :key="index" :size="item.size" :color="item.color" :dot="item.dot">
        {{ item.content }}
      </Badge>
    </div>
  `,
});

export const Default = Template.bind({}) as unknown as { args: Args };
Default.args = [
  [
    {
      content: "Badge",
      color: "primary",
      size: "md",
      dot: false,
    },
    {
      content: "Badge",
      color: "primary",
      size: "md",
      dot: true,
    },
    {
      content: "Badge",
      color: "secondary",
      size: "md",
      dot: false,
    },
    {
      content: "Badge",
      color: "neutral",
      size: "md",
      dot: false,
    },
    {
      content: "Badge",
      color: "success",
      size: "md",
      dot: false,
    },
    {
      content: "Badge",
      color: "warning",
      size: "md",
      dot: false,
    },
    {
      content: "Badge",
      color: "error",
      size: "md",
      dot: false,
    },
  ],
  [
    {
      content: "Badge",
      color: "primary",
      size: "sm",
      dot: false,
    },
    {
      content: "Badge",
      color: "primary",
      size: "sm",
      dot: true,
    },
    {
      content: "Badge",
      color: "secondary",
      size: "sm",
      dot: false,
    },
    {
      content: "Badge",
      color: "neutral",
      size: "sm",
      dot: false,
    },
    {
      content: "Badge",
      color: "success",
      size: "sm",
      dot: false,
    },
    {
      content: "Badge",
      color: "warning",
      size: "sm",
      dot: false,
    },
    {
      content: "Badge",
      color: "error",
      size: "sm",
      dot: false,
    },
  ]
];
