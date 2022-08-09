/* eslint-disable @typescript-eslint/no-explicit-any */
import { Helper } from "../helpers/helper";
import type { ICustomWorld } from "../support/custom-world";

let selector: any;
let element: any;
let helper: any;
let result: any;

export class BasePage {
  world: ICustomWorld;

  constructor(world: ICustomWorld) {
    this.world = world;
  }

  get paginationForm() {
    return "//*[@aria-label='Pagination']";
  }

  async getColumnByText(text: string) {
    element = `//th[text()="${text}"]`;
    result = await this.world.page?.locator(element).first();

    return result;
  }

  get byTestId() {
    return "data-testid=";
  }

  async click(element: any, testId?: boolean) {
    helper = new Helper(this.world);
    selector = element;
    if (testId) {
      selector = this.byTestId + element;
    }
    await helper.checkElementVisible(selector);
    await this.world.page?.locator(selector).first().click({ force: true, timeout: 5000 });
  }

  async dblClick(element: any) {
    await this.world.page?.locator(element).first().dblclick({ force: true, timeout: 5000 });
  }

  async fill(element: any, text: string, testId?: boolean) {
    helper = new Helper(this.world);
    selector = element;
    if (testId) {
      selector = this.byTestId + element;
    }
    await helper.checkElementVisible(selector);
    await this.world.page?.fill(selector, text);
  }

  async clickByText(text: string) {
    selector = `//*[contains(text(),'${text}')]`;
    await this.world.page?.locator(selector).first().click();
  }

  async clickByExactText(text: string) {
    selector = `text=${text}`;
    await this.world.page?.locator(selector).first().click();
  }

  async getElementByText(text: string) {
    element = await this.world.page?.locator(`//*[text()='${text}'][1]`).first();
    return await element;
  }

  async getElementByPartialText(text: string) {
    element = await this.world.page?.locator(`//*[contains(text(),'${text}')][1]`).first();
    return await element;
  }

  async getElementByPartialHref(partialHref: string) {
    element = await this.world.page?.locator(`//*[contains(@href,'${partialHref}')]`);
    await element.scrollIntoViewIfNeeded();
    return await element;
  }

  async getElementByHrefAndText(partialHref: string, text: string) {
    element = await this.world.page?.locator(`//*[text()='${text}' and contains(@href,'${partialHref}')]`);
    await element.scrollIntoViewIfNeeded();
    return await element;
  }

  async getElementById(id: string) {
    element = await this.world.page?.locator(`#${id}`);
    await element.scrollIntoViewIfNeeded();
    return await element;
  }

  async getElementByTestId(testid: string) {
    element = await this.world.page?.locator(`${this.byTestId}${testid}`);
    await element.scrollIntoViewIfNeeded();
    return await element;
  }

  async getElementByTitle(title: string) {
    element = await this.world.page?.locator(`//*[@title='${title}']`);
    await element.scrollIntoViewIfNeeded();
    return await element;
  }

  async getElementByTestIdAndText(testid: string, text: string) {
    element = await this.world.page?.locator(`//*[@${this.byTestId}'${testid}' and contains(text(), '${text}')]`);
    await element.scrollIntoViewIfNeeded();
    return await element;
  }

  async getElement(selector: string) {
    element = await this.world.page?.locator(selector);
    await element.scrollIntoViewIfNeeded();
    return await element;
  }

  async returnElementByType(elementType: string, value: string) {
    if (elementType === "text") {
      element = await this.getElementByText(value);
    } else if (elementType === "partial text") {
      element = await this.getElementByPartialText(value);
    } else if (elementType === "partial href") {
      element = await this.getElementByPartialHref(value);
    } else if (elementType === "id") {
      element = await this.getElementById(value);
    } else if (elementType === "testId") {
      element = await this.getElementByTestId(value);
    } else if (elementType === "title") {
      element = await this.getElementByTitle(value);
    }
    return element;
  }

  public async goTo(address: string) {
    await this.world.page?.goto(address);
  }
}
