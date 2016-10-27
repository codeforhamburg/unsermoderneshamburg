import { FsFrontendPage } from './app.po';

describe('fs-frontend App', function() {
  let page: FsFrontendPage;

  beforeEach(() => {
    page = new FsFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
