import type { LaunchOptions } from "@playwright/test";
const browserOptions: LaunchOptions = {
  slowMo: 10,
  devtools: true,
  headless: false,
  args: ["--use-fake-ui-for-media-stream", "--use-fake-device-for-media-stream", "--disable-web-security"],
};

export const config = {
  browser: process.env.BROWSER || "chromium",
  browserOptions,
  BASE_URL: process.env.TARGET_ENV || "http://localhost:3000",
  mainWindowSize: { width: 1920, height: 1080 },
  artifactsFolder: "tests/e2e/artifacts/",
  headless: true,
  slowMo: 10,
};
