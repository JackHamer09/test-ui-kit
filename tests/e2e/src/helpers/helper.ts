/* eslint-disable @typescript-eslint/no-explicit-any */
import { Status } from "@cucumber/cucumber";

import { config } from "../support/config";
import type { ICustomWorld } from "../support/custom-world";

const tracesDir = config.artifactsFolder;
let element: any;
let result: any;

export class Helper {
  world: ICustomWorld;

  constructor(world: ICustomWorld) {
    this.world = world;
  }

  async checkElementVisible(selector: string, waitTime = 3000): Promise<boolean> {
    let result = true;
    try {
      await this.world.page?.locator(selector).first().waitFor({
        state: "visible",
        timeout: waitTime,
      });
    } catch (e) {
      console.error(e);
      result = false;
    }
    return result;
  }

  async checkElementClickable(selector: any, waitTime = 3000): Promise<boolean> {
    let result = true;
    try {
      if (selector == "string") {
        await this.world.page?.locator(selector).click({ trial: true, timeout: waitTime });
      } else {
        await selector.click({ trial: true, timeout: waitTime });
      }
    } catch (e) {
      console.error(e);
      result = false;
    }
    return result;
  }

  async getScreenshotOnFail(result: any): Promise<void> {
    console.log("======== " + result.status + ": " + this.world.testName);
    if (result.status !== Status.PASSED) {
      const image: any = await this.world.page?.screenshot({ path: tracesDir + this.world.testName + ".png" });
      return image;
    }
  }

  async getColorOfSelector(selector: string) {
    element = await this.world.page?.locator(selector);
    const color: any = await element.evaluate((el: any) => {
      return window.getComputedStyle(el).getPropertyValue("background-color");
    });
    return await color;
  }

  async extractTextFromElement(selector: string) {
    element = await this.world.page?.locator(selector).first();
    result = await element.textContent();

    return result;
  }

  async extractHrefFromElement(selector: string) {
    element = await this.world.page?.locator(selector).first();
    result = await element.getAttribute("href");

    return result;
  }

  async extractIdFromElementHref(selector: string) {
    element = await this.world.page?.locator(selector).first();
    await this.extractHrefFromElement(selector);
    result = result.match(/[^s/]*$/g)[0];

    return result;
  }
}
