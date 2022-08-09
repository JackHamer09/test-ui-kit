/* eslint-disable @typescript-eslint/no-explicit-any */
import { After, AfterAll, Before, BeforeAll, setDefaultTimeout } from "@cucumber/cucumber";
import type { ITestCaseHookParameter } from "@cucumber/cucumber/lib/support_code_library_builder/types";
import { chromium } from "@playwright/test";

import { Helper } from "../helpers/helper";
import { config } from "../support/config";
import type { ICustomWorld } from "./custom-world";

let browser: any;
setDefaultTimeout(process.env.PWDEBUG ? -1 : 60 * 1000);

BeforeAll(async function (this: ICustomWorld) {
  browser = await chromium.launch({
    slowMo: config.slowMo,
    headless: config.headless,
  });
  console.log("-------- Base Url: ", config.BASE_URL);
  await browser;
});

Before({ tags: "@ignore" }, async function () {
  return "skipped" as any;
});

Before(async function (this: ICustomWorld, { pickle }: ITestCaseHookParameter) {
  this.testName = pickle.name.replace(/\W/g, "-");
  this.context = await browser.newContext({
    viewport: config.mainWindowSize,
    recordVideo: { dir: config.artifactsFolder },
  });
  this.page = await this.context?.newPage();
  this.feature = pickle;

  await this.page?.goto(config.BASE_URL);
});

After(async function (this: ICustomWorld, { result }: ITestCaseHookParameter) {
  await new Helper(this).getScreenshotOnFail(result);
  await this.page?.close();
});

AfterAll(async function (this: ICustomWorld) {
  await browser.close();
});
