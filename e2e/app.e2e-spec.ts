import { JasmineTestAppPage } from './app.po';

describe('jasmine-test-app App', () => {
  let page: JasmineTestAppPage;

  beforeEach(() => {
    page = new JasmineTestAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
