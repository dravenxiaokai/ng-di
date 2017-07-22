import { NgDiPage } from './app.po';

describe('ng-di App', () => {
  let page: NgDiPage;

  beforeEach(() => {
    page = new NgDiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
