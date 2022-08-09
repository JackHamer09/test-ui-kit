import { describe, expect, it } from "vitest";

import { render } from "@testing-library/vue";

import Badge from "@/components/common/Badge.vue";

describe("Badge", () => {
  it("renders default slot", () => {
    const { container } = render(Badge, {
      slots: {
        default: {
          template: "Badge",
        },
      },
    });
    expect(container.textContent).toBe("Badge");
  });
  it("properly uses size props", async () => {
    const { container, rerender } = render(Badge);
    expect(container.innerHTML).includes("size-sm");
    await rerender({
      size: "sm",
    });
    expect(container.innerHTML).includes("size-sm");
    await rerender({
      size: "md",
    });
    expect(container.innerHTML).includes("size-md");
  });
  it("properly uses color props", async () => {
    const { container, rerender } = render(Badge);
    expect(container.innerHTML).includes("color-neutral");
    const colors = ["secondary", "warning", "error", "success", "neutral"];
    for (const color of colors) {
      await rerender({ color: color });
      expect(container.innerHTML).includes(`color-${color}`);
    }
  });
  it("shows a dot when 'dot' is true", async () => {
    const { container } = render(Badge, {
      slots: {
        default: {
          template: "Badge",
        },
      },
      props: {
        dot: true,
      },
    });
    expect(container.querySelector(".badge-dot")).not.toBe(null);
  });
});
