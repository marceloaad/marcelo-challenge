import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display ORG Entity button', () => {
    page.navigateTo();
    expect(page.getEntityButton("ORG").getText()).toEqual('ORG 1');
  });

  it('should check ORG Entity button', () => {
    page.navigateTo();
    page.getEntityButton("ORG").click();
    expect(page.getEntityButton("ORG").getAttribute('class')).toMatch('mat-button-toggle-checked');
  });

  it('should display PRODUCT Entity button', () => {
    page.navigateTo();
    expect(page.getEntityButton("PRODUCT").getText()).toEqual('PRODUCT 2');
  });
  it('should check PRODUCT Entity button', () => {
    page.navigateTo();
    page.getEntityButton("PRODUCT").click();
    expect(page.getEntityButton("PRODUCT").getAttribute('class')).toMatch('mat-button-toggle-checked');
  });

  it('should select part of the text, display the entity selected in the higkighted fragment of the main text and post the Annotation', function() {
    page.navigateTo();
    browser.actions()
      .mouseMove({x: -130, y: 155})
      .mouseDown()
      .mouseMove({x: 80, y: 0})
      .mouseUp()
      .perform();
    browser.sleep(1000);
    page.getFooterButton("postAnnotationButton").click();
    browser.sleep(1000);
  });

  it('should change the main text', function() {
    page.navigateTo();
    page.getFooterButton("nextTextIndexButton").click();
    browser.sleep(1000);
    page.getFooterButton("previousTextIndexButton").click();
    browser.sleep(1000);
  });
  
  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
