import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getEntityButton(entity: string) {
    return element(by.css(`[ng-reflect-value="${entity}"]`));
  }

  getFooterButton(name: string) {
    return element(by.css(`[name="${name}"]`));
  }
}
